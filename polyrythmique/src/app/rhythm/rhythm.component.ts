import { Component, OnInit } from '@angular/core';

import { Track } from "../classes/track";
import { Note } from "../classes/note";
import { Tempo } from "../classes/tempo";
import { Signature } from "../classes/signature";
import {EventEmitter, Output, Input} from '@angular/core';


/**
* The component that holds all the interface for the first tab
*/
@Component({
  selector: 'app-rhythm',
  templateUrl: './rhythm.component.html',
  styleUrls: ['./rhythm.component.sass']
})
export class RhythmComponent implements OnInit {

  /**
  * A list of all the tracks
  */
  tracks: Track[] = new Array<Track>();

  /**
  * The general signature, being used when a measure doesn't have its own
  */
  signature: Signature = new Signature();

  /**
  * The general tempo of the tracks
  */
  tempo: Tempo = new Tempo();

  /**
  * The id of the track that's being selected
  */
  selectedTrackId: number | null = null;

  /**
  * The index of the selected track in the list of all the tracks
  */
  selectedTrackIndex: number = -1;

  /**
  * If we need to wait 2 measure before actually recording the inputs
  */
  waitingRecord: boolean = false;

  /**
  * If we are recording the inputs
  */
  recording: boolean = false

  /**
  * The number of tracks stated as solo
  */
  nbOfSoloTracks: number = 0;

  /**
  * The instant of the beginning of the recording
  */
  startRecord: Date = new Date();

  /**
  * The instant a TAP is held
  */
  startTapVar: Date = new Date();

  /**
  * The instant a TAP is released
  */
  endTapVar: Date = new Date();

  /**
  * If the tracks are playing
  */
  isPlayingTracks: boolean = false;

  /**
   * The duration of the measures (in seconds)
   */
  measureDuration: number = 0;

  /**
   * @ignore
   */
  constructor() { }

  /**
  * @ignore
  */
  ngOnInit(): void {
    this.updateMeasureDuration();
  }

  /**
  * Add a new track to the list of tracks
  * @param {boolean} bool Should the track actually be added
  */
  addTrack(bool: boolean): void {
    if(bool) {
      this.tracks.push(new Track());
    }
  }

  /**
  * Toggle if the inputs are being recorded
  * @returns {Promise<any>} A promise to await for
  */
  async toggleRecording(): Promise<any> {
    if(this.selectedTrackId) {
      this.recording = !this.recording;
      if(!this.recording) {
        this.waitingRecord = false;
      } else {
        //console.log("new")
        this.startRecord = new Date();
        this.waitingRecord = true;
        let time = this.measureDuration * 2 * 1000; // Two measures time in ms
        await new Promise<any>(function(resolve) {
          setTimeout(function () {
            resolve();
          }, time);
        });
        this.waitingRecord = false;
        this.startRecord = new Date();
      }
      //this.startRecord = new Date();

    }
  }

  /**
   * Add a note to the selected track <br/>
   * TODO
   */
  addNote(evt: Event): void {

  }

  /**
  * Update the duration of the measures based on the {@link RythmComponent#signature} and the {@link RythmComponent#tempo}
  */
  updateMeasureDuration(): void {
    this.measureDuration = (((this.signature.getTop() * (this.tempo.getNoteNumber() / this.signature.getBottomNumber())) / this.tempo.getBPM()) * 60);
  }

  /**
  * Get the number of the measure that currently being recorded (based on the start of the recording)
  * @returns {number} the number of the measure
  */
  atMeasure(): number {
    let result = Math.floor(( (Date.now() - this.startRecord.getTime()) / 1000) / this.measureDuration) + 1;
    //console.log(result);
    if(this.waitingRecord) {
      if(result == 1) {
        return -2;
      }
      return -1;
    }
    return result;
  }

  /**
  * State that a TAP has begun
  * @param {Event} evt the TAP button is held
  */
  startTap(evt: Event): void {
    this.startTapVar = new Date();
  }

  /**
  * State that a TAP has ended
  * @param {Event} evt the TAP button is released
  */
  endTap(evt: Event): void {
    this.endTapVar = new Date();

      // In seconds
    let timecode: number = (this.startTapVar.getTime() - this.startRecord.getTime()) / 1000;
    let duration: number = (this.endTapVar.getTime() - this.startTapVar.getTime()) / 1000;

    this.tracks[this.selectedTrackIndex].addNote(new Note(timecode, duration));

    console.log("NOUVELLE NOTE :");
    console.log(timecode+"s du début");
    console.log(duration+"s d'appuie");
    console.log("-");
  }

  /**
  * Set the {@link RhythmComponent#tempo}
  * @param {Tempo} tempo The tempo to set with
  */
  setTempo(tempo: Tempo):void {
      // Must be set this way for being send to the child components after modification
    this.tempo = new Tempo(tempo.getNote(), tempo.getBPM());
    this.updateMeasureDuration();
  }

  /**
  * Set the {@link RhythmComponent#signature}
  * @param {Signature} signature The signature to set with
  */
  setSignature(signature: Signature): void {
    this.signature = new Signature(signature.getTop(), signature.getBottom());
    this.updateMeasureDuration();
  }

  /**
  * Set the {@link RhythmComponent#selectedTrackId}
  * @param {number|null} id The id of the selected track (null if none)
  */
  setSelectedTrackId(id: number | null): void {
    if(!this.recording) {
      // Put the last selected (this.selectedTrackId) track component's inside attribute isSelected as false
      this.selectedTrackId = id;

      if(id) {
        this.selectedTrackIndex = this.getTrackIndex(id);
      } else {
        this.selectedTrackIndex = -1;
      }
    } else {
      // Reput the (id) track component's inside attribute isSelected as false
    }
  }


  /**
   * Get the index of a track inside the componenet's tracks array attribute knowing it's id
   *
   * @example
   * let index: number = getTrackIndex(track.getId());
   *
   * @param {number} id The id of the track to find in the compoenent's tracks array
   * @returns {number} The ondex of the track which id was given in parameter inside the component's tracks array attribute
   */
  getTrackIndex(id: number): number {
    for(let i = 0 ; i < this.tracks.length ; ++i) {
      if(this.tracks[i].getId() == id) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Function called every time a child componenet track's sound plan change to solo or from solo
   *
   * @param {boolean} bool true if a track have been soloed, false if it had been unsoloed
   */
  soloedTrack(bool: boolean): void {
    if(bool) {
      if(this.nbOfSoloTracks == 0) {
        for(let i = 0 ; i < this.tracks.length ; ++i) {
          //this.tracks[i].setSoloMuted(true);
          // Emit to all the children track components the change
        }
      }

      ++this.nbOfSoloTracks;
    } else {
      ++this.nbOfSoloTracks;

      if(this.nbOfSoloTracks == 0) {
        for(let i = 0 ; i < this.tracks.length ; ++i) {
          //this.tracks[i].setSoloMuted(false);
          // Emit to all the children track components the change
        }
      }
    }
  }

  /**
  * Set if the tracks are playing
  * @param {boolean} bool if the tracks are palying or not
  */
  setIsPlayingTracks(bool: boolean){
    this.isPlayingTracks = bool;
  }

  /**
  * Return the current rhythm in string form <br/>
  * (Should be the correct format for conversion)
  * @returns {String} A stringified version of the rhythm
  */
  toString(): String {
    let rythmStr: String = "";
    rythmStr += "{";
    rythmStr += this.tempo.toString()+",";
    //Anacrouse wuold go there
    rythmStr += this.signature.toString()+",";
    //Number of "mesures" would go there
    //A json array of modiified "mesures" would go there
    rythmStr += "\"Tracks\":[";
    for(let aTrack of this.tracks) {
      rythmStr += aTrack.toString() + ",";
    }
    rythmStr = rythmStr.slice(0, -1);
    rythmStr += "]}";

    return rythmStr;
  }

}
