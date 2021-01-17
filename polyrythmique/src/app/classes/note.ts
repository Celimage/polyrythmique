import { BinaryNote } from "../enums/binary-note";
import { TernaryNote } from "../enums/ternary-note";

/**
 * This class is used to store notes
 */
export class Note {
  private timecode: number;
  private duration: number;

  private type: BinaryNote | TernaryNote;

  private isBinary: boolean = true;


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


  retrieveNoteType(): BinaryNote | TernaryNote {
    if(this.isBinary) {
      return BinaryNote._4N;
    } else {
      return TernaryNote._4N;
    }
  }

  toString(): String {
    return "{\"timecode\":"+this.timecode+",\"duration\":"+this.duration+"}";
  }

}
