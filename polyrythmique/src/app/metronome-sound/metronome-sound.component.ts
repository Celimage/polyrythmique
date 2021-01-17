import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';

import { Tempo } from "../classes/tempo";
import { Signature } from "../classes/signature";
import { Metronome } from "../classes/metronome";

@Component({
  selector: 'app-metronome-sound',
  templateUrl: './metronome-sound.component.html',
  styleUrls: ['./metronome-sound.component.sass']
})
/**
 * This component is a button that allows to select the type of sound of the metronome,
 *   which starts when its parent component's attribute binded to the isPlaying attribute
 *   pass to true and stop when this attribute pass to false if the mode correspond to 0 : sound all along
 */
export class MetronomeSoundComponent implements OnInit, OnChanges {
  /**
   * The sound mode of the component.
   *
   * 0: sound all along<br/>
   * 1: sound on the two first empty  measures<br/>
   * 2: no sound
   */
  mode: number = 0;

  /**
   * The sound of the metronome. See the {@link Metronome#sound|metronome's sound attribute} for more
   */
  sound: Metronome.Sound = Metronome.Sound.TOC;

  /**
   * The tempo used for the sound. Get from it's parent component and updated with the parent's binded attribute
   */
  @Input("tempo") tempo: Tempo = new Tempo();
  /**
   * The signature used for the sound. Get from it's parent component and updated with the parent's binded attribute
   */
  @Input("signature") signature: Signature = new Signature();
  /**
   * Whether or not the sound is playing. Used to know when to start the sound. Get from it's parent component and updated with the parent's binded attribute
   */
  @Input("isPlaying") isPlaying: boolean = false;

  /**
   * The metronome binded to the component
   */
  metronome: Metronome;

  /**
   * @ignore()
   */
  constructor() {
    this.metronome = new Metronome(this.tempo.getBPM(), this.sound);
  }
  /**
   * @ignore()
   */
  ngOnInit(): void {
  }

  /**
   * Called each time the parent's component update the {@link Input|Input} attributes of the component.<br/>
   * Update the metronome and start it
   *
   * @param {SimpleChanges} changes The changes get from the parent
   */
  ngOnChanges(changes: SimpleChanges): void {
    for(const propName in changes) {
      if(changes.hasOwnProperty(propName)) {
        if(propName === "tempo") {
          this.metronome = new Metronome(this.tempo.getBPM(), this.sound);
        } else if(propName === "isPlaying") {
          if(changes["isPlaying"].currentValue) {
            this.playMetronome();
          } else {
            if(changes["isPlaying"].previousValue) {
              this.stopMetronome();
            }
          }
        }
      }
    }
  }

  /**
   * Toggle the {@link MetronomeSoundComponent#mode|mode} from 0 -> 1 -> 2 -> 0 ...
   */
  toggleMode(): void {
    this.mode = (this.mode + 1) % 3;
  }

  /**
   * Play the metronome for an undetermined time, two measure or not at all according to the {@link MetronomeSoundComponent#mode|mode} of the componenet
   */
  async playMetronome(): Promise<any> {
    if(this.mode == 0) {
      this.metronome.start();
    } else if(this.mode == 1) {
        // The number of tick in two measures
      let nbTick = (this.signature.getTop() * (this.tempo.getNoteNumber() / this.signature.getBottomNumber())) * 2;
      await this.metronome.startFor(nbTick);
      this.isPlaying = false;
    }
    return true;
  }

  /**
   * Stop the metronome
   */
  stopMetronome(): void {
    this.metronome.stop();
  }

}
