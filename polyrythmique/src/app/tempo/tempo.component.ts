import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { BasicNote } from "../enums/basic-note";

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.sass']
})
export class TempoComponent implements OnInit {

  private note: BasicNote = BasicNote.QUARTER_NOTE;
  private bpm: number = 60;

  @Output() noteOutput: EventEmitter<BasicNote> = new EventEmitter<BasicNote>();
  @Output() bpmOutput: EventEmitter<number> = new EventEmitter<number>();

  /**
   * @ignore
   */
  constructor() { }

  ngOnInit(): void {
  }


  getNote(): BasicNote {
    return this.note;
  }

  setNote(note: BasicNote): void {
    this.note = note;
    this.noteOutput.emit(note);
  }
  getBPM(): number {
    return this.bpm;
  }

  setBPM(bpm: number): void {
    if(bpm >= 1 && bpm % 1 == 0) {
      this.bpm = bpm;
      this.bpmOutput.emit(bpm);
    }
  }

  getNoteImgPath(): string {
    return BasicNote.getImgPath(this.note);
  }
  getNoteName(): string {
    return BasicNote.getName(this.note);
  }

}
