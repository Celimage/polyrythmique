import { Component, OnInit , Output, EventEmitter} from '@angular/core';

import { BasicNote } from "../enums/basic-note";
import { Signature } from "../classes/signature";

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.sass']
})
/**
 * TODO. Kind of similar to {@link TempoComponent|TempoComponent}<br/>
 * Used to define the signature of a project or measure
 */
export class SignatureComponent implements OnInit {

  /**
   * The  {@link Signature|signature} associated to the component
   */
  signature: Signature = new Signature(4, BasicNote.QUARTER_NOTE);

  modifiableTop: number = this.signature.getTop();
  modifiableBottom: BasicNote = this.signature.getBottom();

  isModifyingTopSignature: boolean = false;
  isModifyingBottomSignature: boolean = false;
  @Output() signatureOut: EventEmitter<Signature> = new EventEmitter<Signature>();
  /**
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

  toggleModifyTopSignature(): void {
    if(!this.isModifyingBottomSignature){
      this.isModifyingTopSignature = !this.isModifyingTopSignature;
      if(!this.isModifyingTopSignature) {
        this.signature.setTop(this.modifiableTop);
      }
      this.signatureOut.emit(this.signature);
    }
  }

  toggleModifyBottomSignature(): void {
    if(!this.isModifyingTopSignature){
      this.isModifyingBottomSignature = !this.isModifyingBottomSignature;
      if(!this.isModifyingBottomSignature) {
        this.signature.setBottom(this.modifiableBottom);
      }
      this.signatureOut.emit(this.signature);
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

  setNoteToBottom(note: BasicNote){
    this.toggleModifyBottomSignature();
    this.signature.setBottom(note);
  }
}
