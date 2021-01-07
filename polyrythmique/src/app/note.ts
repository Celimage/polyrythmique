import { NoteType } from "./note-type";

/**
 * This class is used to store notes
 */
export class Note {
  private timecode: number;
  private duration: number;

  private type: NoteType;


  constructor(timecode: number, duration: number) {
    this.timecode = timecode;
    this.duration = duration;

    // TODO: FOLLOWING LINE TO REPLACE WITH POLYRYTHM LIBRAIRY INTEGRATION
    this.type = this.retrieveNoteType()
  }


  getTimecode(): number {
    return this.timecode;
  }
  setTimecode(timecode: number): void {
    this.timecode = timecode;
  }

  getDuration(): number {
    return this.duration;
  }
  setDuration(duration: number): void {
    this.duration = duration;
  }


  retrieveNoteType(): NoteType {
    return NoteType._4N;
  }

}
