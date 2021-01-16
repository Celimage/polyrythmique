import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Tempo } from "../classes/tempo";
import { BasicNote } from "../enums/basic-note";

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.sass']
})
export class TempoComponent implements OnInit {

  tempo: Tempo = new Tempo(null, null);

  @Output() tempoOutput: EventEmitter<Tempo> = new EventEmitter<Tempo>();

  /**
   * @ignore
   */
  constructor() { }

  ngOnInit(): void {
  }

  setBPM() {
    
  }
}
