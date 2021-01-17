import { environment } from "./../../environments/environment";

import { EventEmitter, Output } from '@angular/core';


export class SoundPlayer {

  /* The audio that plays */
  private sound;

  @Output() isPlaying: boolean = false;
  //this.isPlaying.emlit(value);

  /**
  * @ignore
  *
  */
  constructor(soundName: String) {
    this.sound = new Audio("../"+environment.pathsFromApp.sounds+soundName);
  }

  sound.onended = function(){
    console.log("STOP");
    this.isPlaying = false;

    this.isPlaying.emit(value);
  };

  /**
  * Play the audio
  */
  play() {
    this.isPlaying = true;
    this.sound.play();
  }

  /**
  * Play the sound from a certain point in time
  * @param {number} startTime The time in seconds from which the sound starts playing. If unspecified, the sound starts from the beginning (StartTime = 0s)
  */
  playFromTime(startTime: number = 0) {
    this.sound.currentTime = startTime;
    this.isPlaying = true;
    this.sound.play();
  }


  /**
  * Pause the audio if playing
  */
  pause() {
    if(!this.sound.paused){
      this.isPlaying = false;
      this.sound.pause();
    }
  }

  /**
  *  Set the volume of the sound
  * @param {float} volume The value of the volume that will be set. Should be included between [0;1]
  */
  setVolume(volume: float) {
    if(volume < 0){
      console.log("Tried to set the volume to a negative amount. Volume should be included between [0;1]");
    }else{
      if(volume >1){
        console.log("Tried to set the volume to an amount that exceeds 1. Volume should be included between [0;1]");
      }else{
        this.sound.volume = volume;
        this.sound.load();
      }
    }
  }




}
