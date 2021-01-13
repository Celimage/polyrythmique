import { environment } from "./../../environments/environment";

// B = binaire | T = Ternaire
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
 *   DU -> duplet
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
export enum NoteType {
  _4N, // B, T
  _2_16N, // B, T
  _8N_R, // B, T
  _16N_R, // B, T

  _4N_TR, // B
  _4_8N, // B
  _2_8N, // B
  _16N_8N_16N, // B
  _8N_2_16N, // B
  _2_16N_8N, // B
  _4_16N, // B
  _8N_TR, // B
  _1N_R, // B
  _2N_R, // B
  _4N_R, // B

  _D_4N, // T
  _8N, // T
  _3_8N, // T
  _6_16N, // T
  _8N_4_16N, // T
  _4_16N_8N, // T
  _8N_2_16N_8N, // T
  _8N_16N_8N, // T // SICILLIAN
  _2_8N_2_16N, // T
  _2_16N_2_8N, // T
  _D_8N_3_16N, // T
  _3_16N_D_8N, // T
  _2_16N_8N_2_16N, // T
  _DU, // T
  _D_2N_R, // T
  _D_4N_R, // T
  _D_8N_R // T
}


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
/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TERNARY NOTES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

noire pointée                     | dotted quarter note
noire                             | quarter note
croche                            | height note
trois croche                      | three eight notes
six doubles                       | six sixteenth notes
deux doubles                      | two sixteenth notes
croche quatre doubles             | eight note four sixteenth notes
quatre doubles croche             | four sixteenth notes eight note
croche deux doubles croche        | eight note two sixteenth notes eight note
sicilienne (croche double croche) | sicilian (eight note sixteenth note eight note)
deux croches deux doubles         | two eight notes two sixteenth notes
deux doubles deux croches         | two sixteenth notes two eight notes
croche pointée trois doubles      | dotted eight note three sixteenth notes
trois doubles croche pointée      | three sixteenth notes dotted eight note
deux doubles croche deux doubles  | two sixteenth notes eight note two sixteenth notes
duolet                            | duplet
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
soupir pointé                     | dotted quarter note rest
demi soupir pointé                | dotted eight note rest
demi soupir                       | eight note rest
quart de soupir                   | sixteenth note rest
demi pause pointée                | dotted half note rest
*/
