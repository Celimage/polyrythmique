import { Measure } from "./measure";
import { Note } from "./note";

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
   *
   */
 private measures: Measure[];

  /**
   * The notes inside the track
   */
  private notes: Note[];

  /**
   * Create a new track whose attributes corresponds to the parameters. Its id is auto-incremented
   *
   * @param {string} instrument (optional) The {@link Track#instrument|instrument} of the track
   * @param {number} plan (optional) The {@link Track#plan|plan sound} of the track. Must be 0, 1 or 2. If incorrect set to 0
   * @param {Note[]} notes (optional) The {@link Track#notes|notes} of the track.
   */
  constructor(instrument: string = "", plan: number = 0, measures: Measure[] = new Array<Measure>(), notes: Note[] = new Array<Note>()) {
    this.id = Track.nextId;
    console.log("YO")
    measures.push(new Measure(this.id));
    measures.push(new Measure(this.id));
    measures.push(new Measure(this.id));
    measures.push(new Measure(this.id));
    ++Track.nextId;

    this.instrument = instrument;
    if(plan < 0 || plan > 2 || plan % 1 != 0) {
      plan = 0;
    }
    this.plan = plan;
    this.measures = measures;
    this.notes = notes;
  }

  getId(): number {
    return this.id;
  }

  getInstrument(): string {
    return this.instrument;
  }
  setInstrument(instrument: string): void {
    this.instrument = instrument;
  }

  getPlan(): number {
    return this.plan;
  }
  setPlan(plan: number): void {
    if(plan >= 0 && plan <= 2 && plan % 1 == 0) {
      this.plan = plan;
    }
  }

  planToString(): string {
    if(this.plan == 0) {
      return "normal";
    } else if(this.plan == 1) {
      return "solo";
    } else {
      return "mute";
    }
  }

  getMeasures(): Measure[] {
    return this.measures;
  }


  getNotes(): Note[] {
    return this.notes;
  }
  getNoteAtIndex(i: number): Note {
    return this.notes[i];
  }

  getNoteAtTimecode(timecode: number): Note | null {
    for(let i = 0 ; i < this.notes.length ; ++i) {
      if(this.notes[i].getTimecode() == timecode) {
        return this.notes[i];
      }
    }
    return null;
  }

  setNotes(notes: Note[]): void {
    this.notes = notes;
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }

  clearNotes(): void {
    this.notes = new Array<Note>();
  }

  deleteNotesBetweenTimecodes(from: number, to: number): void {
    for(let i = 0 ; i < this.notes.length ; ++i) {
      let timecode: number = this.notes[i].getTimecode();
      if(timecode >= from && timecode <= to) {
        this.notes.splice(i, 1);
      }
    }
  }

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
