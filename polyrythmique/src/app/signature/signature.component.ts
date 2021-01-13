import { Component, OnInit } from '@angular/core';

import { BasicNote } from "../enums/basic-note";

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.sass']
})
/**
 * Used to define the signature of a project or measure
 */
export class SignatureComponent implements OnInit {
  /**
   * The number of times of each measure
   */
  private top: number = 4;
  /**
   * The note used as time base
   */
  private bottom: BasicNote = BasicNote.QUARTER_NOTE;


  /**
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

  /**
   * Get the {@link SignatureComponent#top|top}'s value
   */
  getTop(): number {
    return this.top;
  }
  /**
   * Set the {@link SignatureComponent#top|top}'s value
   */
  setTop(top: number): void {
    if(this.isCompatible(top, this.bottom)) {
      this.top = top;
    }
  }

  /**
   * Get the {@link SignatureComponent#bottom|bottom}'s value
   */
  getBottom(): BasicNote {
    return this.bottom;
  }

  /**
   * Set the {@link SignatureComponent#bottom|bottom}'s value
   */
  setBottom(bottom: BasicNote): void {
    if(this.isCompatible(this.top, bottom)) {
      this.bottom = bottom;
    }
  }

  /**
   * Set both {@link SignatureComponent#top|top} and
   *   {@link SignatureComponent#bottom|bottom} values of the signature
   */
  setTopAndBottom(top: number, bottom: BasicNote) {
    if(this.isCompatible(top, bottom)) {
      this.top = top;
      this.bottom = bottom;
    }
  }

  /**
   * Check if the {@link SignatureComponent#top|top} and {@link SignatureComponent#bottom|bottom} number of the signature are compatible<br />
   * NOT FINISHED
   */
  private isCompatible(top: number, bottom: BasicNote): boolean {
    if(top >= 1 && top % 1 == 1) {
      return true;
    } else {
      return false;
    }
  }

  getBottomNumber(): number {
    return BasicNote.getNumber(this.bottom);
  }

}
