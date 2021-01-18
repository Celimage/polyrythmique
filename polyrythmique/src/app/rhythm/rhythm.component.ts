import { Component, OnInit } from '@angular/core';

import { Track } from "../classes/track";
import { Note } from "../classes/note";
import { Tempo } from "../classes/tempo";
import { Signature } from "../classes/signature";
import {EventEmitter, Output, Input} from '@angular/core';


@Component({
  selector: 'app-rhythm',
  templateUrl: './rhythm.component.html',
  styleUrls: ['./rhythm.component.sass']
})
export class RhythmComponent implements OnInit {
  tracks: Track[] = new Array<Track>();

  signature: Signature = new Signature();
  tempo: Tempo = new Tempo();


  selectedTrackId: number | null = null;
  selectedTrackIndex: number = -1;

  waitingRecord: boolean = false;
  recording: boolean = false

  nbOfSoloTracks: number = 0;

  startRecord: Date = new Date();
  startTapVar: Date = new Date();
  endTapVar: Date = new Date();

  isPlayingTracks: boolean = false;

  /**
   * In seconds
   */
  measureDuration: number = 0;

  /**
   * @ignore
   */
  constructor() { }

  ngOnInit(): void {
    this.updateMeasureDuration();
  }

  addTrack(bool: boolean): void {
    if(bool) {
      this.tracks.push(new Track());
    }
  }

  async toggleRecording(): Promise<any> {
    if(this.selectedTrackId) {
      this.recording = !this.recording;
      if(!this.recording) {
        this.waitingRecord = false;
      } else {
        console.log("new")
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
   * @ignore
   */
  addNote(evt: Event): void {

  }

  updateMeasureDuration(): void {
    this.measureDuration = (((this.signature.getTop() * (this.tempo.getNoteNumber() / this.signature.getBottomNumber())) / this.tempo.getBPM()) * 60);
  }

  atMeasure(): number {
    let result = Math.floor(( (Date.now() - this.startRecord.getTime()) / 1000) / this.measureDuration) + 1;
    console.log(result);
    if(this.waitingRecord) {
      if(result == 1) {
        return -2;
      }
      return -1;
    }
    return result;
  }

  startTap(evt: Event): void {
    this.startTapVar = new Date();
  }

  endTap(evt: Event): void {
    this.endTapVar = new Date();

      // In seconds
    let timecode: number = (this.startTapVar.getTime() - this.startRecord.getTime()) / 1000;
    let duration: number = (this.endTapVar.getTime() - this.startTapVar.getTime()) / 1000;

    this.tracks[this.selectedTrackIndex].addNote(new Note(timecode, duration));
  }

  setTempo(tempo: Tempo):void {
      // Must be set this way for being send to the child components after modification
    this.tempo = new Tempo(tempo.getNote(), tempo.getBPM());
    this.updateMeasureDuration();
  }

  setSignture(signature: Signature): void {
    this.signature = new Signature(signature.getTop(), signature.getBottom());
    this.updateMeasureDuration();
  }


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


  setIsPlayingTracks(bool: boolean){
    this.isPlayingTracks = bool;
  }

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
