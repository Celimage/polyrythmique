import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.sass']
})
export class TrackComponent implements OnInit {
  instrument = '';
  modifyInstrument = false;

  soundPlans = [0, 1, 2];
  selectedSoundPlan = 0;


  constructor() { }

  ngOnInit(): void {
  }

  changeSoundPlan(): void {
    this.selectedSoundPlan = (this.selectedSoundPlan + 1) % 3;
  }
  toggleModifyInstrument(): void {
    this.modifyInstrument = !this.modifyInstrument;
  }

}
