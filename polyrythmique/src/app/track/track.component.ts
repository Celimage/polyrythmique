import { Component, OnInit, OnChanges, SimpleChange, Input, EventEmitter, Output, ViewChild//, ElementRef
 } from "@angular/core";

import { Track } from "../classes/track";
import { Note } from "../classes/note";
import { NoteRepresentation } from "../classes/note-representation";
//import { SoundPlayer } from "../classes/sound-player";
import { SoundPlayerComponent } from "../sound-player/sound-player.component";

@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.sass"]
})
export class TrackComponent implements OnInit {
  @Input() track: Track = new Track();

  modifiableInstrument: string = "";
  modifyInstrument = false;

//  soundPlayer: SoundPlayer = new SoundPlayer("exampleout.mid.wav");
  @Input() isPlaying: boolean = false;
  @Output() isPlayingOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

    // Must be between 0 (mute) and 1 (max)
  volume: number = 1;
  @Input() soloMuted: boolean = false;
  @Output() isSolo: EventEmitter<boolean> = new EventEmitter<boolean>();

  isSelected: boolean = false;
  @Output() selectedTrack: EventEmitter<number | null> = new EventEmitter<number | null>();

  //@ViewChild('instruInput', { static: true }) intrumentInput: ElementRef;

  test: NoteRepresentation = new NoteRepresentation(["8N"], null);


  constructor() { }

  ngOnInit(): void {
    this.modifiableInstrument = this.track.getInstrument();
  }

  ngOnChanges(changes: SimpleChange): void{
  }

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

  toggleSoloMuted(): void {
    this.soloMuted = !this.soloMuted;
  }
  setSoloMuted(bool: boolean): void {
    this.soloMuted = bool;
  }

  mute(): void {
    this.volume = 0;
  }

  setVolume(volume: number): void {
    if(volume >= 0 && volume <= 1) {
      this.volume = volume;
    } else {
        // Debug purpose only
      console.log("Cannot set volume of track " + this.track.getId() + ", volume must be between 0 and 1, is " + volume);
    }
  }

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

  selectTrack(): void {
    this.isSelected = !this.isSelected;
    if(this.isSelected) {
      this.selectedTrack.emit(this.track.getId());
    } else {
      this.selectedTrack.emit(null);
    }
  }

  getId(): number {
    return this.track.getId();
  }
  endOfTrack(event: any){
    this.isPlaying = false;
    this.isPlayingOutput.emit(false);
  }

}
