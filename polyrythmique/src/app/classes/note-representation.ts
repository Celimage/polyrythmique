import { environment } from "./../../environments/environment";

export type AddOnJson = {number: number, useHook: boolean};


/**
 * The add on on top of a note's representation
 */
class AddOn {
  /**
   * The number to write
   */
  private number: number;
  /**
   * Wether or not the number should be sown with an hook
   */
  private useHook: boolean;


  /**
   * @param {number} number {@link AddOn#number}
   * @param {boolean} useHook {@link AddOn#useHook}
   */
  constructor(number: number, useHook: boolean) {
    this.number = number;
    this.useHook = useHook;
  }

  /**
   * @return {@link AddOn#number}
   */
  getNumber(): number {
    return this.number;
  }
  /**
   * @param {number} {@link AddOn#number}
   */
  setNumber(number: number): void {
    this.number = number;
  }

  /**
   * @return {@link AddOn#useHook}
   */
  getUseHook(): boolean {
    return this.useHook;
  }
  /**
   * @param {boolean} {@link AddOn#useHook}
   */
  setUseHook(useHook: boolean): void {
    this.useHook = useHook;
  }
}

/**
 * This class references the visual representation of any notes.
 *
 * Used in the enums BinaryNote and TernaryNote.
 */
export class NoteRepresentation {
  /**
   * @ignore
  */
  private static dirPath: string = "../" + environment.pathsFromApp.rythmsImg;
  /**
   * @ignore
  */
  private static extension: string = ".svg";

  /**
   * The paths to the different parts of the note's Img, in order
   */
  private imgsPaths: string[] = new Array();
  /**
   * {@link AddOn}
   */
  private addOn: AddOn | null = null;


  /**
   * @param {string[]} imgsNames The names of the images, in order, used to form the note without the extention.
   * @param {AddOnJson|null} addOn Used to add a number on top of the note. If used, must possess the attributes {number} number and {boolean} useHook
   *
   * @example
   * let quarterNoteRep: NoteRepresentation = new NoteRepresentation(["4N"], null);
   * let quarterNoteTripletRep: NoteRepresentation = new NoteRepresentation(["4N"], {"number": 3, "useHook": true});
   */
  constructor(imgsNames: string[], addOn: AddOnJson | null) {
    for(let i = 0 ; i < imgsNames.length ; ++i) {
      this.imgsPaths.push(this.convertImgNameToPath(imgsNames[i]));
    }
    this.setAddOn(addOn);
  }

  private convertImgNameToPath(imgName: string): string {
    return NoteRepresentation.dirPath + imgName + NoteRepresentation.extension;
  }

  getImgsPaths(): string[] {
    return this.imgsPaths;
  }
  getImgPathAt(i: number): string {
    //if(i >= this.imgsPaths.length) {
    //}
    return this.imgsPaths[i];
  }
  getImgsPathsLength(): number {
    return this.imgsPaths.length;
  }
  addToImgsPaths(imgName: string, index: number | null): void {
    if(index == null || index == this.imgsPaths.length) {
      this.imgsPaths.push(this.convertImgNameToPath(imgName));
    } else {
      this.imgsPaths.splice(index, 0, this.convertImgNameToPath(imgName));
    }
  }
  removeFromImgsPaths(imgName: string): void {
    let index:number = this.imgsPaths.indexOf(imgName);
    if(index != -1) {
      this.imgsPaths.splice(index, 1);
    }
  }
  removeFromImgsPathsAt(index: number): void {
    this.imgsPaths.splice(index, 1);
  }

  setAddOn(addOn: AddOnJson | null) {
    if(addOn != null) {
      this.addOn = new AddOn(addOn.number, addOn.useHook);
    } else {
      this.addOn = null;
    }
  }
  getAddOnNumber(): number | null {
    if(this.addOn != null) {
      return this.addOn.getNumber();
    }
    return null;
  }
  getAddOnUseHook(): boolean | null {
    if(this.addOn != null) {
      return this.addOn.getUseHook();
    }
    return null;
  }
}
