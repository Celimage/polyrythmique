import { Component, OnInit } from '@angular/core';
import { Tempo } from '../classes/tempo';
import { Metronome } from '../classes/metronome';
import { BasicNote } from '../enums/basic-note';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.sass']
})

/**
 * Used to define the Metronome
 */
export class MetronomeComponent implements OnInit {
  /**
   * The BPM (Beat Per Minute) of the metronome
   */
  tempo: Tempo = new Tempo(BasicNote.QUARTER_NOTE, 60);

  /**
   * The sound of the metronome. See the {@link Metronome#sound|metronome's sound attribute} for more
   */
  sound: Metronome.Sound = Metronome.Sound.TOC;

  isRunning: boolean = false;

  /**
   * The metronome
   */
  runningMetronome: Metronome;

  /**
  * @ignore
  */
  constructor() {
    this.runningMetronome = new Metronome(this.tempo.getBPM());
  }

  /**
  * @ignore
  */
  ngOnInit(): void {
  }

  /**
  * Set the bpm at which the metronome beats
  *
  *@param {number} bpm The beat per minute ratio the metronome will beat at
  */
  setBPM(bpm: number): void {
    if(this.isRunning) {
      this.stop();
    }
    this.tempo.setBPM(bpm);
    this.runningMetronome.setBPM(bpm);
  }

  setTempo(tempo: Tempo): void {
    if(this.isRunning) {
      this.stop();
    }
    this.tempo = tempo;
    this.runningMetronome.setBPM(this.tempo.getBPM());
  }

  /**
  * Get the bpm at which the metronome beats
  *
  * @returns {number} The time it takes for the metronome to tick twice (in sec)
  */
  getMetronomeMovementLengthInSec(): number {
    return 1 / (this.tempo.getBPM() / 120);
  }

  /**
  * Starts the metronome
  */
  start(): void{
    this.isRunning = true;
    this.runningMetronome.start();
  }

  /**
  * Stops the metronome
  */
  stop(): void{
    this.isRunning = false;
    this.runningMetronome.stop();
  }

}
