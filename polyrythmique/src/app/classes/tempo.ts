import { BasicNote } from "../enums/basic-note";

/**
 * This class represent a tempo
 */
export class Tempo {
  /**
   * The note that is beat. See {@link BasicNote|BasicNote} for more details
   */
  private note: BasicNote;
  /**
   * The BPM or Beat Per Minute
   */
  private bpm: number;

  /**
   * Create a tempo object
   *
   * @param {BasicNote|null} note The {@link Tempo#note|note} of the new tempo
   * @param {number|null} bpm The {@link Tempo#bpm|BPM} of the new tempo
   */
  constructor(note: BasicNote = BasicNote.QUARTER_NOTE, bpm: number = 60) {
    this.note = note;
    this.bpm = bpm;
  }

  /**
   * Get the {@link Tempo#note|note} of the tempo
   *
   * @returns The {@link Tempo#note|note} of the tempo
   */
  getNote(): BasicNote {
    return this.note;
  }
  /**
   * Set the {@link Tempo#note|note} of the tempo
   *
   * @param {BasicNote} note The new tempo's {@link Tempo#note|note}
   */
  setNote(note: BasicNote): void {
    this.note = note;
  }

  /**
   * Get the {@link Tempo#bpm|BPM} of the tempo
   *
   * @returns The {@link Tempo#bpm|BPM} of the tempo
   */
  getBPM(): number {
    return this.bpm;
  }
  /**
   * Set the {@link Tempo#bpm|BPM} of the tempo
   *
   * @param {number} bpm The new tempo's {@link Tempo#bpm|BPM}
   */
  setBPM(bpm: number): boolean {
    if(bpm >= 1 && bpm % 1 == 0) {
      this.bpm = bpm;
      return true;
    }
    return false;
  }

  /**
   * Get the {@link BasicNote#number|number} of the {@link Tempo#note|note} associated to the tempo
   *
   * @returns The {@link BasicNote#number|number} associated to the tempo's {@link Tempo#note|note}
   */
  getNoteNumber(): number {
    return BasicNote.getNumber(this.note);
  }
  /**
   * Get the {@link BasicNote#imgPath|image path} of the {@link Tempo#note|note} associated to the tempo
   *
   * @returns The {@link BasicNote#imgPath|image path} associated to the tempo's {@link Tempo#note|note}
   */
  getNoteImgPath(): string {
    return BasicNote.getImgPath(this.note);
  }
  /**
   * Get the {@link BasicNote#name|name} of the {@link Tempo#note|note} associated to the tempo
   *
   * @returns The {@link BasicNote#name|name} associated to the tempo's {@link Tempo#note|note}
   */
  getNoteName(): string {
    return BasicNote.getName(this.note);
  }
}
