import { NoteRepresentation } from "../classes/note-representation";

/**
 * This enum list every note type that can be visually created.
 *
 * VALUES NOTATION :<br />
 *   All values start by _ due to the fact that a value cannot start by a number.
 *
 *   R -> rest
 *   D -> dotted
 *
 *   TR -> triplet
 *
 *   1N -> whole note
 *   2N -> half note
 *   4N -> quarter note
 *   8N -> eight note
 *   16N -> sixteenth note
 *
 *   A number not followed by a N but by an _ specify the number of linked notes after it
 *   following themselves. ex : _2_8N = two eight note or eight note eight note.
 */
export enum BinaryNote {
  _4N         = 1,
  _4N_TR      = 2,
  _4_8N       = 3,
  _2_8N       = 4,
  _2_16N      = 5,
  _16N_8N_16N = 6,
  _8N_2_16N   = 7,
  _2_16N_8N   = 8,
  _4_16N      = 9,

  _1N_R       = 10,
  _2N_R       = 11,
  _4N_R       = 12,
  _8N_R       = 13,
  _16N_R      = 14
}

/*namespace BinaryNote {
  export function getRepresentation(note: BinaryNote): NoteRepresentation | null {
    if(note == 1) {
      return new NoteRepresentation(["4N"], null);
    } else if(note == 2) {

    } else if(note == 3) {

    } else if(note == 4) {

    } else if(note == 5) {

    } else if(note == 6) {

    } else if(note == 7) {

    } else if(note == 8) {

    } else if(note == 9) {

    } else if(note == 10) {

    } else if(note == 11) {

    } else if(note == 12) {

    } else if(note == 13) {

    } else if(note == 14) {

    }
    return null;
  }
}*/


/*
--------------- FR -------------- | -------------- ENG ----------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~ BINARY NOTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

triolet de noires                 | quarter note triplet
quatre croches                    | four eight notes
noire                             | quarter note
deux croches                      | two eight notes
croche pointée double             | dotted eight note sixteenth note
double croche double              | sixteenth note eight note sixteenth note
croche deux doubles               | eight note two sixteenth notes
deux doubles croche               | two sixteenth notes eight note
quatre doubles                    | four sixteenth notes
triolet de croches                | eight note triolet
deux doubles                      | two sixteenth notes
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
soupir                            | quarter note rest
demi soupir                       | height note rest
quart de soupir                   | sixteenth note rest
demi pause                        | half note rest
pause                             | whole note rest
*/
