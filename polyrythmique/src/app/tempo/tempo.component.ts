import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Tempo } from "../classes/tempo";
import { BasicNote } from "../enums/basic-note";

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.sass']
})
export class TempoComponent implements OnInit {

  tempo: Tempo = new Tempo();

  modifiableBPM: number = 0;

  isModifyingNote: boolean = false;
  isModifyingBPM: boolean = false;

  @Output() tempoOutput: EventEmitter<Tempo> = new EventEmitter<Tempo>();

  /**
   * @ignore
   */
  constructor() { }

  ngOnInit(): void {
    this.modifiableBPM = this.tempo.getBPM();
  }

  setNote(note: BasicNote): void {
    this.tempo.setNote(note);
    if(this.isModifyingNote) {
      this.isModifyingNote = false;
    }
    this.tempoOutput.emit(this.tempo);
  }

  setBPM(bpm: number): void {
    this.tempo.setBPM(bpm);
    this.tempoOutput.emit(this.tempo);
  }

  toggleModifyNote(): void {
    if(!this.isModifyingBPM) {
      this.isModifyingNote = !this.isModifyingNote;
    }
  }
  toggleModifyBPM(): void {
    if(!this.isModifyingNote) {
      this.isModifyingBPM = !this.isModifyingBPM;
      if(!this.isModifyingBPM) {
        this.tempo.setBPM(this.modifiableBPM);
      }
      this.tempoOutput.emit(this.tempo);
    }
  }

  getBasicNoteList(): BasicNote[] {
    return BasicNote.values();
  }

  getImgPath(note: BasicNote): string {
    return BasicNote.getImgPath(note);
  }
  getName(note: BasicNote): string {
    return BasicNote.getName(note);
  }
}
