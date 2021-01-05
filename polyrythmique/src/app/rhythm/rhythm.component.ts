import { Component, OnInit } from '@angular/core';

import { Track } from "../track";

@Component({
  selector: 'app-rhythm',
  templateUrl: './rhythm.component.html',
  styleUrls: ['./rhythm.component.sass']
})
export class RhythmComponent implements OnInit {
  tracks: Track[] = new Array<Track>();

  selectedTrackIndex: number | null = null;
  recording: boolean = false


  constructor() { }

  ngOnInit(): void {
  }

  addTrack(bool: boolean): void {
    if(bool) {
      this.tracks.push(new Track());
    }
  }

  toggleRecording(): void {
    if(this.selectedTrackIndex) {
      this.recording = !this.recording;
    }
  }

  addNote(evt: Event): void {

  }

  setSelectedTrackIndex(index: number | null): void {
    this.selectedTrackIndex = index;
  }
}
