import { Note } from "./note";

export class Measure {
  /**
   * The auto-increment value for the tracks' ids
   * {
    trackId: curId,

    }
   */
  private static curMaxPos: number[] = new Array<number>();

  private position: number;

  private notes: Note[];

  constructor(trackId: number, notes: Note[] = new Array<Note>()) {
    console.log("ENter");
    console.log(trackId);
    console.log(trackId.toString(10));
    console.log(Measure.curMaxPos);
    if(Measure.curMaxPos.hasOwnProperty(trackId.toString(10))) {
      console.log("if");
      ++(Measure.curMaxPos[trackId]);
    } else {
      console.log("if");
      Measure.curMaxPos[trackId] = 1;
    }
    this.position = Measure.curMaxPos[trackId];

    this.notes = notes;
    console.log(Measure.curMaxPos);
    console.log(this.position);
    //console.log(this.toString());
  }

  getNotes(): Note[] {
    return this.notes;
  }

  /**
   *
   */
  toString(): string {
    let notesStr: string = "";
    for(let aNote of this.notes) {
      notesStr = notesStr + aNote.toString() + ",";
    }
    notesStr = notesStr.slice(0, -1);
    return "{\"position\": " + this.toString() +
              ", \"notes\": [" + notesStr +
            "]}";
  }
}
