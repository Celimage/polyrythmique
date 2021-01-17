import { environment } from "./../../environments/environment";

/**
 * The enum that stores the primal notes from the whole note to sixteen note
 */
export enum BasicNote {
  WHOLE_NOTE = "{\"number\": 1, \"name\": \"Whole note\", \"img\": \"whole-note.svg\"}",
  HALF_NOTE = "{\"number\": 2, \"name\": \"Half note\", \"img\": \"half-note.svg\"}",
  QUARTER_NOTE = "{\"number\": 4, \"name\": \"Quarter note\", \"img\": \"quarter-note.svg\"}",
  HEIGHT_NOTE = "{\"number\": 8, \"name\": \"Height note\", \"img\": \"height-note.svg\"}",
  SIXTEEN_NOTE = "{\"number\": 16, \"name\": \"Sixteen note\", \"img\": \"sixteen-note.svg\"}"
}

/**
 * The namespace associated to the BasicNote enum, used to store its functions
 */
export namespace BasicNote {
  /**
   * Get the value of the BasicNote on its JSON form
   *
   * @param {BasicNote} note The note that we want the JSON value of
   * @returns The JSON associated to the note. It's form is {number: {number}, name: {string}, img: {string}}, were img is the name of the image with it's extension, that doesn't include the path to the image
   */
  export function getJSON(note: BasicNote): any {
    return JSON.parse(note);
  }

  /**
   * Get the number associated to the note
   *
   * @param {BasicNote} note The note that we want the number of
   * @returns The number of the note, as the denominator of it's time duration. Whole note is 1, half note 2...
   */
  export function getNumber(note: BasicNote): number {
    let json = JSON.parse(note);
    return json.number;
  }

  /**
   * Get the name of the note
   *
   * @param {BasicNote} note The note that we want the name of
   * @returns The name of the note, in english, starting with a capital..
   */
  export function getName(note: BasicNote): string {
    let json = JSON.parse(note);
    return json.name;
  }

  /**
   * Get the path to the image of the note
   *
   * @param {BasicNote} note The note that we want the image path to
   * @returns The complete path to the image of the note, from the app repertory
   */
  export function getImgPath(note: BasicNote): string {
    let json = JSON.parse(note);
    return environment.pathsFromApp.notesImg + json.img;
  }

  /*export function length(): number {

  }*/

  /**
   * Get all the BasicNote values
   *
   * @returns All the possible BasicNote's values
   */
  export function values(): BasicNote[] {
    /*let result = new Array<BasicNote>();

      console.log(BasicNote);
    for (var note in BasicNote) {
      console.log(note);
      result.push(BasicNote.note);
   }
   console.log(result);
   return result;*/
   return [
     BasicNote.WHOLE_NOTE,
     BasicNote.HALF_NOTE,
     BasicNote.QUARTER_NOTE,
     BasicNote.HEIGHT_NOTE,
     BasicNote.SIXTEEN_NOTE
   ]

   /*let all = Object.values(BasicNote);
   all.splice(5, 5);
   return all;*/
  }
}
