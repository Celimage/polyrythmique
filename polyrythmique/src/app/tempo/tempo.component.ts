import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Tempo } from "../classes/tempo";
import { BasicNote } from "../enums/basic-note";


/**
 * This component allow the user to modify the tempo
 */
@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.sass']
})
export class TempoComponent implements OnInit {
  /**
   * The current tempo
   */
  tempo: Tempo = new Tempo();

  /**
   * The BPM that can be directly modified by the user
   */
  modifiableBPM: string = "0";

  /**
   * Whether or note the user is modigying the {@link Tempo#note|note} of the {@link Tempo|tempo}
   */
  isModifyingNote: boolean = false;
  /**
   * Whether or note the user is modigying the {@link Tempo#bpm|BPM} of the {@link Tempo|tempo}
   */
  isModifyingBPM: boolean = false;

  /**
   * The attribute that notify the parent component of the new tempo when it is changed
   */
  @Output() tempoOutput: EventEmitter<Tempo> = new EventEmitter<Tempo>();

  /**
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.modifiableBPM = this.tempo.getBPM().toString();
    this.tempoOutput.emit(this.tempo);
  }

  /**
   * Set the {@link Tempo#note|note} of the {@link Tempo|tempo}
   *
   * @param {BasicNote} note The new tempo's note
   */
  setNote(note: BasicNote): void {
    this.tempo.setNote(note);
    if(this.isModifyingNote) {
      this.isModifyingNote = false;
    }
    this.tempoOutput.emit(this.tempo);
  }

  /**
   * Set the {@link Tempo#bpm|BPM} of the {@link Tempo|tempo}
   *
   * @param {number} bpm The new tempo's BPM
   */
  setBPM(bpm: number): void {
    this.tempo.setBPM(bpm);
    this.tempoOutput.emit(this.tempo);
  }

  /**
   * Toggle if the tempo's note is being modified
   */
  toggleModifyNote(): void {
    if(!this.isModifyingBPM) {
      this.isModifyingNote = !this.isModifyingNote;
    }
  }
  /**
   * Toggle if the tempo's BPM is being modified, and modify it if it's the end of the modification
   */
  toggleModifyBPM(): void {
    if(!this.isModifyingNote) {
      this.isModifyingBPM = !this.isModifyingBPM;
      //if(!this.isModifyingBPM) {
        this.tempo.setBPM(parseInt(this.modifiableBPM, 10));
      //}
      this.tempoOutput.emit(this.tempo);
    }
  }

  /**
   * Get all the notes that the user can chose as the {@link Tempo|tempo}'s {@link Tempo#note|note}
   *
   * @returns The notes that the user can chose
   */
  getBasicNoteList(): BasicNote[] {
    return BasicNote.values();
  }

  /**
   * Get the path to the image of a {@link BasicNote|note}
   *
   * @param {BasicNote} note The note we want the path to its image
   * @returns The path to the image of the note
   */
  getImgPath(note: BasicNote): string {
    return BasicNote.getImgPath(note);
  }
  /**
   * Get the name of a {@link BasicNote|note}
   *
   * @param {BasicNote} note The note we want the name
   * @returns The name of the note
   */
  getName(note: BasicNote): string {
    return BasicNote.getName(note);
  }
}
