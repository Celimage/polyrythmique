import { BinaryNote } from "../enums/binary-note";
import { TernaryNote } from "../enums/ternary-note";

/**
 * This class is used to store notes
 */
export class Note {
  /**
  * The time in the track where the note starts
  */
  private timecode: number;

  /**
  * The duration of the note
  */
  private duration: number;

  /**
  * The type of the note : binary or ternary
  */
  private type: BinaryNote | TernaryNote;

  /**
  * If the note is binary
  */
  private isBinary: boolean = true;

  /**
  * @ignore
  */
  constructor(timecode: number, duration: number) {
    this.timecode = timecode;
    this.duration = duration;

    // TODO: FOLLOWING LINE TO REPLACE WITH POLYRYTHM LIBRAIRY INTEGRATION
    this.type = this.retrieveNoteType()
  }

  /**
  * Get the timecode of this note
  * @returns {@link note#timecode}
  */
  getTimecode(): number {
    return this.timecode;
  }

  /**
  * Set the timecode of this note
  * @param {number} {@link note#timecode}
  */
  setTimecode(timecode: number): void {
    this.timecode = timecode;
  }

  /**
  * Get the duration of this note
  * @returns {@link note#duration}
  */
  getDuration(): number {
    return this.duration;
  }

  /**
  * Set the duration of this note
  * @param {number} {@link note#duration}
  */
  setDuration(duration: number): void {
    this.duration = duration;
  }

  /**
  * Get the type of the note
  * @returns {Binary|Ternary} the type of the note
  */
  retrieveNoteType(): BinaryNote | TernaryNote {
    if(this.isBinary) {
      return BinaryNote._4N;
    } else {
      return TernaryNote._4N;
    }
  }

  /**
  * Returns the note in string form
  * @returns {String} A stringified version of this note
  */
  toString(): String {
    return "{\"timecode\":"+this.timecode+",\"duration\":"+this.duration+"}";
  }

}
