import { Component, OnInit } from '@angular/core';

import { Track } from "../classes/track";
import { Note } from "../classes/note";
import { Tempo } from "../classes/tempo";
import { Signature } from "../classes/signature";


@Component({
  selector: 'app-rhythm',
  templateUrl: './rhythm.component.html',
  styleUrls: ['./rhythm.component.sass']
})
export class RhythmComponent implements OnInit {
  tracks: Track[] = new Array<Track>();

  signature: Signature = new Signature(null, null);
  tempo: Tempo = new Tempo(null, null);


  selectedTrackId: number | null = null;
  selectedTrackIndex: number = -1;
  recording: boolean = false

  nbOfSoloTracks: number = 0;

  startRecord: Date = new Date();
  startTapVar: Date = new Date();
  endTapVar: Date = new Date();

  /**
   * @ignore
   */
  constructor() { }

  ngOnInit(): void {
  }

  addTrack(bool: boolean): void {
    if(bool) {
      this.tracks.push(new Track());
    }
  }

  toggleRecording(): void {
    if(this.selectedTrackId) {
      this.recording = !this.recording;
      this.startRecord = new Date();
    }
  }

  /**
   * @ignore
   */
  addNote(evt: Event): void {

  }

  startTap(evt: Event): void {
    let time = ((this.signature.getTop() * (this.tempo.getNoteNumber() / this.signature.getBottomNumber())) / this.tempo.getBPM()) * 120000;
    let timer = setTimeout(function(startTapVar: Date) {
      startTapVar = new Date();
    }, time, this.startTapVar);

  }

  endTap(evt: Event): void {
    this.endTapVar = new Date();

      // In seconds
    let timecode: number = (this.startTapVar.getTime() - this.startRecord.getTime()) / 1000;
    let duration: number = (this.endTapVar.getTime() - this.startTapVar.getTime()) / 1000;

    this.tracks[this.selectedTrackIndex].addNote(new Note(timecode, duration));
  }

  setTempo(tempo: Tempo):void {
    this.tempo = tempo;
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
}
