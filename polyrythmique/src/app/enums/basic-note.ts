import { environment } from "./../../environments/environment";


export enum BasicNote {
  WHOLE_NOTE = "{\"number\": 1, \"name\": \"Whole note\", \"img\": \"whole-note.svg\"}",
  HALF_NOTE = "{\"number\": 2, \"name\": \"Half note\", \"img\": \"half-note.svg\"}",
  QUARTER_NOTE = "{\"number\": 4, \"name\": \"Quarter note\", \"img\": \"quarter-note.svg\"}",
  HEIGHT_NOTE = "{\"number\": 8, \"name\": \"Height note\", \"img\": \"height-note.svg\"}",
  SIXTEEN_NOTE = "{\"number\": 16, \"name\": \"Sixteen note\", \"img\": \"sixteen-note.svg\"}"
}

export namespace BasicNote {
  export function getJSON(note: BasicNote) {
    return JSON.parse(note);
  }

  export function getNumber(note: BasicNote) {
    let json = JSON.parse(note);
    return json.number;
  }

  export function getName(note: BasicNote) {
    let json = JSON.parse(note);
    return json.name;
  }

  export function getImgPath(note: BasicNote) {
    let json = JSON.parse(note);
    return environment.pathsFromApp.notesImg + json.img;
  }
}
