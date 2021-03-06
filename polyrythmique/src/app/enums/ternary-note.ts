import { environment } from "./../../environments/environment";

/**
 * This enum list every ternary note that can be visually created.
 *
 * VALUES NOTATION :<br />
 *   All values start by _ due to the fact that a value cannot start by a number.
 *
 *   R -> rest
 *   D -> dotted
 *
 *   DU -> duplet
 *
 *   2N -> half note
 *   4N -> quarter note
 *   8N -> eight note
 *   16N -> sixteenth note
 *
 *   A number not followed by a N but by an _ specify the number of linked notes after it
 *   following themselves. ex : _2_8N = two eight note or eight note eight note.
 */
export enum TernaryNote {
  _4N,
  _D_4N,
  _8N,
  _3_8N,
  _2_16N,
  _6_16N,
  _8N_4_16N,
  _4_16N_8N,
  _8N_2_16N_8N,
  _8N_16N_8N, // SICILLIAN
  _2_8N_2_16N,
  _2_16N_2_8N,
  _D_8N_3_16N,
  _3_16N_D_8N,
  _2_16N_8N_2_16N,
  _DU,

  _8N_R,
  _16N_R,
  _D_2N_R,
  _D_4N_R,
  _D_8N_R
}


/*
--------------- FR -------------- | -------------- ENG ----------------

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
