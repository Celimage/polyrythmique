import { Measure } from "./measure";
import { Note } from "./note";

/**
* A class that represents a Track
*/
export class Track {
  /**
   * The auto-increment value for the tracks' ids
   */
  private static nextId: number = 1;

  /**
   * The id of the track
   */
  private id: number;
  /**
   * The instrument used for the sound of the track
   */
  private instrument: string;
  /**
   * The sound plan of the track<br/>
   * 0 -> "Normal" (not solo nor mute)
   * 1 -> Solo
   * 2 -> Mute
   */
  private plan: number;

  /**
   * A list of the measures in this track
   */
 private measures: Measure[];

  /**
   * The notes inside the track
   */
  private notes: Note[];

  /**
   * The constructor : Create a new track whose attributes corresponds to the parameters. Its id is auto-incremented
   *
   * @param {string} instrument (optional) The {@link Track#instrument|instrument} of the track
   * @param {number} plan (optional) The {@link Track#plan|plan sound} of the track. Must be 0, 1 or 2. If incorrect set to 0
   * @param {Note[]} notes (optional) The {@link Track#notes|notes} of the track.
   */
  constructor(instrument: string = "", plan: number = 0, measures: Measure[] = new Array<Measure>(), notes: Note[] = new Array<Note>()) {
    this.id = Track.nextId;
    this.measures = measures;
    ++Track.nextId;

    this.instrument = instrument;
    if(plan < 0 || plan > 2 || plan % 1 != 0) {
      plan = 0;
    }
    this.plan = plan;
    //this.measures = measures;
    this.notes = notes;
  }

  /**
  * Get the id of the track {@link Track#id}
  * @returns {number} the id of the track
  */
  getId(): number {
    return this.id;
  }

  /**
  * Get the instrument playing on this track {@link Track#instrument}
  * @returns {String} The instrument playing
  */
  getInstrument(): string {
    return this.instrument;
  }

  /**
  * Set the instrument that plays on this track {@link Track#instrument}
  * @param {String} instrument The instrument to set
  */
  setInstrument(instrument: string): void {
    this.instrument = instrument;
  }

  /**
  * Get the plan on this track
  * @returns {number} The plan {@link Track#plan}
  */
  getPlan(): number {
    return this.plan;
  }

  /**
  * Set the plan of this track {@link Track#plan}
  * @param {number} plan The plan to set
  */
  setPlan(plan: number): void {
    if(plan >= 0 && plan <= 2 && plan % 1 == 0) {
      this.plan = plan;
    }
  }

  /**
  * Get the name of the plan of this track {@link Track#plan}
  * @returns {String} The name of the plan
  */
  planToString(): string {
    if(this.plan == 0) {
      return "normal";
    } else if(this.plan == 1) {
      return "solo";
    } else {
      return "mute";
    }
  }

  /**
  * Get a list of all the measures of this track {@link Track#measures}
  * @returns {Measure[]} A lsit of the measures
  */
  getMeasures(): Measure[] {
    return this.measures;
  }

  /**
  * Get a list of the notes in the track {@link Track#notes}
  * @returns {Note[]} A list of the notes
  */
  getNotes(): Note[] {
    return this.notes;
  }

  /**
  * Get a note based on the index
  * @param {number} i the index of the note
  * @returns {Note} the note
  */
  getNoteAtIndex(i: number): Note {
    return this.notes[i];
  }

  /**
  * Get the note based on its timecode
  * @param {number} timecode the timecode of the note
  * @returns {Note|null} the note
  */
  getNoteAtTimecode(timecode: number): Note | null {
    for(let i = 0 ; i < this.notes.length ; ++i) {
      if(this.notes[i].getTimecode() == timecode) {
        return this.notes[i];
      }
    }
    return null;
  }

  /**
  * Set the list of notes of the track {@link Track#notes}
  * @param {Note[]} notes the list of notes to set
  */
  setNotes(notes: Note[]): void {
    this.notes = notes;
  }

  /**
  * Add a note on the track
  * @param {Note} note the note to add
  */
  addNote(note: Note): void {
    this.notes.push(note);
  }

  /**
  * Clear the list of notes of the track
  */
  clearNotes(): void {
    this.notes = new Array<Note>();
  }

  /**
  * Delete all notes that begins in an interval of timecodes
  * @param {number} from the start of the interval
  * @param {number} to the end of the interval
  */
  deleteNotesBetweenTimecodes(from: number, to: number): void {
    for(let i = 0 ; i < this.notes.length ; ++i) {
      let timecode: number = this.notes[i].getTimecode();
      if(timecode >= from && timecode <= to) {
        this.notes.splice(i, 1);
      }
    }
  }

  /**
  * Return the track in string form
  * @returns {String} a stringified version of the track
  */
  toString(): string {
    let notesStr: string = "";
    for(let aNote of this.notes) { // this.measures.getNotes()
      notesStr = notesStr + aNote.toString() + ",";
    }
    notesStr = notesStr.slice(0, -1);
    return "{\"id\": " + this.id.toString() +
              ", \"plan\": {\"solo\": " + (this.plan == 1) +
                          ", \"muet\": " + (this.plan == 2) +
              "}, \"instrument\": " + this.instrument +
              ", \"notes\": [" + notesStr + "]}";
  }
  /*toString(): string {
    let measuresStr: string = "";
    for(let aMeasure of this.measures) {
      measuresStr = measuresStr + aMeasure.toString() + ",";
    }
    measuresStr = measuresStr.slice(0, -1);
    return "{\"id\": " + this.id.toString() +
              ", \"plan\": {\"solo\": " + (this.plan == 1) +
                          ", \"muet\": " + (this.plan == 2) +
              "}, \"instrument\": " + this.instrument +
              ", \"measures\": [" + measuresStr + "]}";
  }*/
}
