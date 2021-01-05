import { Note } from "./note";

export class Track {
  static nextId: number = 1;

  /**
    0 -> "Normal" (not solo nor mute)
    1 -> Solo
    2 -> Mute
  */
  static PLANS = [0, 1, 2];

  private id: number;
  private instrument: string;
  private plan: number;
  private notes: Note[];

  constructor(instrument: string = "", plan: number = 0, notes: Note[] = new Array<Note>()) {
    this.id = Track.nextId;
    ++Track.nextId;

    this.instrument = instrument;
    this.plan = plan;
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
    this.plan = plan;
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
}
