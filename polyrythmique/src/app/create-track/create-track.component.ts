import { Component, OnInit, EventEmitter, Output } from '@angular/core';
/**
 * This compoenent is used to show and receive events for creating a new track
 */
@Component({
  selector: 'app-create-track',
  templateUrl: './create-track.component.html',
  styleUrls: ['./create-track.component.sass']
})

export class CreateTrackComponent implements OnInit {
  /**
   * The attribute used to emit the signal to create a track to its parent element
   */
  @Output() create: EventEmitter<boolean> = new EventEmitter<boolean>();

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
   * Send to its parent element create = true
   */
  createTrack(): void {
    this.create.emit(true);
  }

}
