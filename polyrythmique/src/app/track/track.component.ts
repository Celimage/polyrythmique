import { Component, OnInit, OnChanges, SimpleChanges, Input, EventEmitter, Output, ViewChild//, ElementRef
 } from "@angular/core";

import { Track } from "../classes/track";
import { Note } from "../classes/note";
import { NoteRepresentation } from "../classes/note-representation";
//import { SoundPlayer } from "../classes/sound-player";
import { SoundPlayerComponent } from "../sound-player/sound-player.component";


import { Signature } from "../classes/signature";
import { Tempo } from "../classes/tempo";

/**
* A component that represents a single track. Added together, they are to form the rhythm
*/
@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.sass"]
})
export class TrackComponent implements OnInit, OnChanges {

  /**
  * The track
  */
  @Input() track: Track = new Track();

  /**
  * The instrument played for the track
  */
  modifiableInstrument: string = "";

  /**
  * Is {@link TrackComponent#modifiableInstrument} being modified
  */
  modifyInstrument = false;

//  soundPlayer: SoundPlayer = new SoundPlayer("exampleout.mid.wav");

  /**
  * Is the track playing
  */
  @Input() isPlaying: boolean = false;

  /**
  * @ignore
  */
  @Output() isPlayingOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

    // Must be between 0 (mute) and 1 (max)
  /**
  * The volume of the track
  */
  volume: number = 1;

  /**
  * Is the track to be played as solo
  */
  @Input() soloMuted: boolean = false;

  /**
  * @ignore
  */
  @Output() isSolo: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
  * Is the track selected
  */
  isSelected: boolean = false;

  /**
  * @ignore
  */
  @Output() selectedTrack: EventEmitter<number | null> = new EventEmitter<number | null>();

  //@ViewChild('instruInput', { static: true }) intrumentInput: ElementRef;

  /**
  * The general signature of the track
  */
  @Input() signature: Signature = new Signature();

  /**
  * The general tempo of the track
  */
  @Input() tempo: Tempo = new Tempo();


  //test: NoteRepresentation = new NoteRepresentation(["8N"], null);

  /**
  * @ignore
  */
  constructor() { }

  /**
  * @ignore
  */
  ngOnInit(): void {
    this.modifiableInstrument = this.track.getInstrument();
  }
  /**
  * @ignore
  */
  ngOnChanges(changes: SimpleChanges): void { }


  /**
  * Change the track's {@link Track#plan}
  */
  changeSoundPlan(): void {
      // Change the number of the selected sound plan
    this.track.setPlan((this.track.getPlan() + 1) % 3);

      // TODO: change the sound track behaviour
    if(this.track.getPlan() == 2) {
      this.mute();
      this.isSolo.emit(false);
    } else if(this.track.getPlan() == 0) {
      this.volume = 1;
    } else {
      this.isSolo.emit(true);
    }
  }

  /**
  * Toggle {@link TrackComponent#soloMuted} condition
  */
  toggleSoloMuted(): void {
    this.soloMuted = !this.soloMuted;
  }

  /**
  * Set {@link TrackComponent#soloMuted} condition
  * @param {boolean} bool The new value of the condition
  */
  setSoloMuted(bool: boolean): void {
    this.soloMuted = bool;
  }

  /**
  * Set the {@link TrackComponent#volume} to 0
  */
  mute(): void {
    this.volume = 0;
  }

  /**
  * Set the {@link TrackComponent#volume} to a specific amount
  * @param {number} volume The new volume to apply to the track. Note that this should be set between [0;1]
  */
  setVolume(volume: number): void {
    if(volume >= 0 && volume <= 1) {
      this.volume = volume;
    } else {
        // Debug purpose only
      console.log("Cannot set volume of track " + this.track.getId() + ", volume must be between 0 and 1, is " + volume);
    }
  }

  /**
  * Toggle {@link TrackComponent#modifyInstrument} condition
  */
  toggleModifyInstrument(): void {
      // Change the instrument's name
    this.modifyInstrument = !this.modifyInstrument;
      // If modification ended
    if(!this.modifyInstrument) {
      this.track.setInstrument(this.modifiableInstrument);
    } else {
        // The timeout allow the input to load before putting it focus
      /*setTimeout(()=>{
        this.intrumentInput.nativeElement.focus();
      }, 0);*/
    }

      // TODO: change the sound track's behaviour (with the musical librairy part)
  }

  /**
  * Toggle the {@link TrackComponent#isSelected} condition
  */
  selectTrack(): void {
    this.isSelected = !this.isSelected;
    if(this.isSelected) {
      this.selectedTrack.emit(this.track.getId());
    } else {
      this.selectedTrack.emit(null);
    }
  }

  /**
  * Get the id of the Track
  */
  getId(): number {
    return this.track.getId();
  }

  /**
  * Event triggered when the track stops playing
  * @param {Event} evt The end of track event
  */
  endOfTrack(event: any){
    this.isPlaying = false;
    this.isPlayingOutput.emit(false);
  }

}
