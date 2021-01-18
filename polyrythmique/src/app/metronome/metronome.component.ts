import { Component, OnInit } from '@angular/core';
import { Tempo } from '../classes/tempo';
import { Metronome, Sound } from '../classes/metronome';
import { BasicNote } from '../enums/basic-note';

/**
 * Used to define the Metronome
 */
@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.sass']
})

export class MetronomeComponent implements OnInit {
  /**
   * The BPM (Beat Per Minute) of the metronome
   */
  tempo: Tempo = new Tempo(BasicNote.QUARTER_NOTE, 60);

  /**
   * The sound of the metronome. See the {@link Metronome#sound|metronome's sound attribute} for more
   */
  sound: Metronome.Sound = Metronome.Sound.TOC;
  /**
   * Whether or not the metronome is running (is being play)
   */
  isRunning: boolean = false;

  /**
   * The metronome
   */
  runningMetronome: Metronome;

  /**
  * If the instrument is being changed or not
  */
  isModifyingInstrument: boolean = false;

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
  * Set the BPM at which the metronome beats
  *@param {number} bpm The beat per minute ratio the metronome will beat at
  */
  setBPM(bpm: number): void {
    if(this.isRunning) {
      this.stop();
    }
    this.tempo.setBPM(bpm);
    this.runningMetronome.setBPM(bpm);
  }

  /**
    * Set the {@link MetronomeCOmponent#tempo|tempo} of the metronome
    *@param {Tempo} tempo The new tempo of the metronome
    */
  setTempo(tempo: Tempo): void {
    if(this.isRunning) {
      this.stop();
    }
    this.tempo = tempo;
    this.runningMetronome.setBPM(this.tempo.getBPM());
  }

  /**
  * Get the BPM at which the metronome beats
  * @returns {number} The time it takes for the metronome to tick twice (in sec)
  */
  getMetronomeMovementLengthInSec(): number {
    return 1 / (this.tempo.getBPM() / 120);
  }

  /**
  * Starts the metronome
  */
  start(): void{
    if(!this.isModifyingInstrument){
      this.isRunning = true;
      this.runningMetronome.start();
    }
  }

  /**
  * Stops the metronome
  */
  stop(): void{
    this.isRunning = false;
    this.runningMetronome.stop();
  }

  /**
  * Change is the instrument is being modified or not {@link MetronomeComponent#isModifyingInstrument}
  */
  toggleModifyInstrument(): void{
    if(!this.isRunning){
      this.isModifyingInstrument = !this.isModifyingInstrument;
      if(!this.isModifyingInstrument){
        this.runningMetronome.setSound(this.sound);
      }
    }
  }

  /**
  * Get the list of possible instruments
  * @returns {String[]} The list of possible instrument's paths
  */
  getInstrumentList(): String[]{
    return Sound.values();
  }

  /**
  * Set the sound played by the metronome based on its name
  * @param {String} soundName The name of the sound to set
  */
  setInstrument(soundName: String){
    console.log("CLICKED");
    this.toggleModifyInstrument();
    this.sound = Sound.getPath(soundName);
    this.runningMetronome.setSound(this.sound);
  }

}
