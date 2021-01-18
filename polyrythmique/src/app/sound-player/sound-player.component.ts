import { Component, OnInit, SimpleChanges, OnChanges, EventEmitter, Output, Input } from '@angular/core';

import { environment } from "./../../environments/environment";

/**
* This component represent a sound-player, never to be displayed to plays sound
*/
@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.sass']
})
export class SoundPlayerComponent implements OnInit, OnChanges {

  /**
  * The sound played by the player
  */
  private sound: any;

  /**
  * @ignore
  */
  @Output() finishedPlayingTrack: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
  * The name of the sound file played
  */
  @Input() soundName: String = "";

  /**
  * Is the player playing sound
  */
  @Input() isPlaying: boolean = false;

  /**
  * @ignore
  */
  constructor() {
    this.sound = new Audio();
  }

  /**
  * @ignore
  */
  ngOnInit(): void {

      this.sound = new Audio("../"+environment.pathsFromApp.sounds+this.soundName);
      this.sound.onended = (err:any) => {
        this.finishedPlayingTrack.emit(false);
        //this.isPlaying = false;
      }
      //this.sound.play();
  }

  /**
  * @ignore
  */
  ngOnChanges(changes: SimpleChanges){
     for(const propName in changes) {
       if(changes.hasOwnProperty(propName)) {
         if(propName === "isPlaying") {
           if(changes["isPlaying"].currentValue) {
             this.playSound();
           } else {
             if(changes["isPlaying"].previousValue) {
               this.pause();
             }
           }
         }
       }
     }
  }

  /**
  * Play the audio
  */
  playSound() {
    if(this.sound){
      this.sound.play();
    }
  }

  /**
  * Play the sound from a certain point in time
  * @param {number} startTime The time in seconds from which the sound starts playing. If unspecified, the sound starts from the beginning (StartTime = 0s)
  */
  playFromTime(startTime: number = 0) {
    this.sound.currentTime = startTime;
  //  this.isPlaying = true;
    this.sound.play();
  }


  /**
  * Pause the audio if playing
  */
  pause() {
    if(!this.sound.paused){
  //      this.isPlaying = false;
      this.sound.pause();
    }
  }

  /**
  *  Set the volume of the sound
  * @param {float} volume The value of the volume that will be set. Should be included between [0;1]
  */
  setVolume(volume: number) {
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
