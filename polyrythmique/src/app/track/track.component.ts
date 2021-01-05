import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

import { Track } from "../track"

@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.sass"]
})
export class TrackComponent implements OnInit {
  @Input() track: Track = new Track();

  modifiableInstrument: string = "";

  modifyInstrument = false;

  isSelected: boolean = false;
  @Output() selectedTrack: EventEmitter<number | null> = new EventEmitter<number | null>();

  constructor() { }

  ngOnInit(): void {
    this.modifiableInstrument = this.track.getInstrument();
  }

  changeSoundPlan(): void {
      // Change the number of the selected sound plan
    this.track.setPlan((this.track.getPlan() + 1) % 3);

      // TODO: change the sound track behaviour
  }

  toggleModifyInstrument(): void {
      // Change the instrument's name
    if(this.modifyInstrument) {
      this.track.setInstrument(this.modifiableInstrument);
    }
    this.modifyInstrument = !this.modifyInstrument;

      // TODO: change the sound track's behaviour
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

}
