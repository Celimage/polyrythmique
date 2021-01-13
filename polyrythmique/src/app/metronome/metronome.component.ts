import { Component, OnInit } from '@angular/core';
import { Metronome } from '../classes/metronome';

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
    * The metronome
    */
  runningMetronome: Metronome = new Metronome(60);

  /**
  * @ignore
  */
  constructor() { }

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
  setMetronomeBpm(bpm: number){
    this.runningMetronome.setBpm(bpm);
  }

  /**
  * Get the bpm at which the metronome beats
  *
  *@return {number} The time it takes for the metronome to tick twice (in sec)
  */
  getMetronomeMovementLengthInSec(){
    return this.runningMetronome.getBpm()/30;
  }

  /**
  * Starts the metronome
  */
  start(){

  }

  /**
  * Stops the metronome
  */
  stop(){

  }

}
