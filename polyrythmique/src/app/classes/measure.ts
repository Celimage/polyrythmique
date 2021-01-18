import { Note } from "./note";

/**
* This class represents a measure
*/
export class Measure {
  /**
   * The auto-increment value for the tracks' ids
   * {
    trackId: curId,

    }
   */

   /**
   *  Static indicator : position the next measure will take in the track
   */
  private static curMaxPos: number[] = new Array<number>();


  /**
  * Position of the measure in the track
  */
  private position: number;

  /**
  * The notes in the measure
  */
  private notes: Note[];

  /**
  * @ignore
  */
  constructor(trackId: number, notes: Note[] = new Array<Note>()) {
    /*console.log("ENter");
    console.log(trackId);
    console.log(trackId.toString(10));
    console.log(Measure.curMaxPos);*/
    if(Measure.curMaxPos.hasOwnProperty(trackId.toString(10))) {
      //console.log("if");
      ++(Measure.curMaxPos[trackId]);
    } else {
      //console.log("if");
      Measure.curMaxPos[trackId] = 1;
    }
    this.position = Measure.curMaxPos[trackId];
    this.notes = notes;
    //console.log(Measure.curMaxPos);
    //console.log(this.position);
    //console.log(this.toString());
  }

  /**
  * Get the list of notes in the measure
  * @returns {Note[]} A list of list of the notes in the measure
  */
  getNotes(): Note[] {
    return this.notes;
  }

  /**
   * Return the current measure in string form
   * @returns {String} a stringified version of this measure
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
