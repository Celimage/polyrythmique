import { BasicNote } from "../enums/basic-note";

/**
 * This class represent a signature
 */
export class Signature {
  /**
   * The number of times of each measure
   */
  private top: number = 4;

  /**
   * The note used as time base
   */
  private bottom: BasicNote = BasicNote.QUARTER_NOTE;

  /**
   * Create a signature object. If {@link SignatureComponent#top|top} and {@link SignatureComponent#bottom|bottom} are not compatible, both are set to default value.
   *
   * @param {number} top (optional) The top of the signature
   * @param {BasicNote} top (optional) The bottom of the signature
   */
  constructor(top: number = 4, bottom: BasicNote = BasicNote.QUARTER_NOTE) {
    if(!this.isCompatible(top, bottom)) {
      this.top = 4;
      this.bottom = BasicNote.QUARTER_NOTE;
    }
    this.top = top;
    this.bottom = bottom;
  }

  /**
   * Get the {@link SignatureComponent#top|top}'s value
   *
   * @returns The top of the signature
   */
  getTop(): number {
    return this.top;
  }
  /**
   * Set the {@link SignatureComponent#top|top}'s value
   *
   * @param {number} top The new top of the signature
   */
  setTop(top: number): void {
    if(this.isCompatible(top, this.bottom)) {
      this.top = top;
    }
  }

  /**
   * Get the {@link SignatureComponent#bottom|bottom}'s value
   *
   * @returns The bottom of the signature
   */
  getBottom(): BasicNote {
    return this.bottom;
  }

  /**
   * Set the {@link SignatureComponent#bottom|bottom}'s value
   *
   * @param {BasicNote} bottom The new bottom of the signature
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
   * Check if the {@link SignatureComponent#top|top} and {@link SignatureComponent#bottom|bottom}
   *   number of the signature are compatible<br />
   * NOT FINISHED
   */
  private isCompatible(top: number, bottom: BasicNote): boolean {
    if(top >= 1 && top % 1 == 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Get the {@link BasicNote#getNumber|number} associated to the {@link BasicNote|note} of the {@link SignatureComponent#bottom|bottom} of the signature
   *
   * @returns The number of the signature's bottom
   */
  getBottomNumber(): number {
    return BasicNote.getNumber(this.bottom);
  }

  /**
   * Get the {@link BasicNote#name|name} associated to the {@link BasicNote|note} of the {@link SignatureComponent#bottom|bottom} of the signature
   *
   * @returns The name of the signature's bottom
   */
  getBottomName(): string {
    return BasicNote.getName(this.bottom);
  }

  /**
   * Get the {@link BasicNote#imgPath|image path} associated to the {@link BasicNote|note} of the {@link SignatureComponent#bottom|bottom} of the signature
   *
   * @returns The image path of the signature's bottom
   */
  getBottomImgPath(): string {
    return BasicNote.getImgPath(this.bottom);
  }
}
