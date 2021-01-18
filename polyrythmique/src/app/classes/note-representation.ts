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
   * Wether or not the number should be shown with an hook
   */
  private useHook: boolean;


  /**
   * The constructor
   * @param {number} number @link AddOn#number
   * @param {boolean} useHook @link AddOn#useHook
   */
  constructor(number: number, useHook: boolean) {
    this.number = number;
    this.useHook = useHook;
  }

  /**
   * Get the number
   * @return {@link AddOn#number}
   */
  getNumber(): number {
    return this.number;
  }

  /**
   * Set the number
   * @param {number} {@link AddOn#number}
   */
  setNumber(number: number): void {
    this.number = number;
  }

  /**
   * Check if using hoot for this representaion is needed
   * @return {boolean} {@link AddOn#useHook}
   */
  getUseHook(): boolean {
    return this.useHook;
  }
  /**
   * Set if using a hook for this represention is needed
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
   * The constructor
   * @param {string[]} imgsNames The names of the images, in order, used to form the note without the extention.
   * @param {AddOnJson|null} addOn Used to add a number on top of the note. If used, must possess the attributes {number} number and {boolean} useHook
   *
   * @example
   * let quarterNoteRep: NoteRepresentation = new NoteRepresentation(["4N"], null);
   * let quarterNoteTripletRep: NoteRepresentation = new NoteRepresentation(["4N"], {"number": 3, "useHook": true});
   */
  constructor(imgsNames: string[], addOn: AddOnJson | null = null) {
    for(let i = 0 ; i < imgsNames.length ; ++i) {
      this.imgsPaths.push(this.convertImgNameToPath(imgsNames[i]));
    }
    this.setAddOn(addOn);
  }

  /**
  * Get the path of the image using its name
  * @param {String} imgName The name of the image
  * @returns {String} The path to the image
  */
  private convertImgNameToPath(imgName: string): string {
    return NoteRepresentation.dirPath + imgName + NoteRepresentation.extension;
  }

  /**
  * Get the paths to all the images
  * @returns {String[]} A list of all the paths
  */
  getImgsPaths(): string[] {
    return this.imgsPaths;
  }

  /**
  * Get the name of the image at a certain position in the list
  * @param {number} i The number of the image in the list
  * @returns {String} The name of the image
  */
  getImgPathAt(i: number): string {
    //if(i >= this.imgsPaths.length) {
    //}
    return this.imgsPaths[i];
  }

  /**
  * Get the number of different paths to images
  * @returns {number} The number of paths
  */
  getImgsPathsLength(): number {
    return this.imgsPaths.length;
  }

  /**
  * Add an image to the list of paths using its name
  * @param {String} imgName The name of the image
  * @param {number|null} index The place in the list where we insert
  */
  addToImgsPaths(imgName: string, index: number | null): void {
    if(index == null || index == this.imgsPaths.length) {
      this.imgsPaths.push(this.convertImgNameToPath(imgName));
    } else {
      this.imgsPaths.splice(index, 0, this.convertImgNameToPath(imgName));
    }
  }

  /**
  * Remove an image from the list of paths using its name
  * @param {String} imgName The name of the image
  */
  removeFromImgsPaths(imgName: string): void {
    let index:number = this.imgsPaths.indexOf(imgName);
    if(index != -1) {
      this.imgsPaths.splice(index, 1);
    }
  }

  /**
  * Remove an image from the list of paths using its palce in the list
  * @param {number} index The place of the image to remove
  */
  removeFromImgsPathsAt(index: number): void {
    this.imgsPaths.splice(index, 1);
  }

  /**
  * Set the addon linked to this representation
  * @param {AddOnJson|null} addon the addon to set
  */
  setAddOn(addOn: AddOnJson | null) {
    if(addOn != null) {
      this.addOn = new AddOn(addOn.number, addOn.useHook);
    } else {
      this.addOn = null;
    }
  }

  /**
  * Get the number of the addon linked to this representation
  * @returns {number|null} The number of the addon
  */
  getAddOnNumber(): number | null {
    if(this.addOn != null) {
      return this.addOn.getNumber();
    }
    return null;
  }

  /**
  * Get if the addon linked to this representation needs to use a hook
  * @returns {boolean|null} The value of the condition
  */
  getAddOnUseHook(): boolean | null {
    if(this.addOn != null) {
      return this.addOn.getUseHook();
    }
    return null;
  }
}
