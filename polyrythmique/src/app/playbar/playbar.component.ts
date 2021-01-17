import { Component, OnInit } from '@angular/core';
import {EventEmitter, Output, Input, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-playbar',
  templateUrl: './playbar.component.html',
  styleUrls: ['./playbar.component.sass']
})
/**
 * TODO
 */
export class PlaybarComponent implements OnInit {

  @Output() private playTracks: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isPlaying: boolean = false;

  ngOnChanges(changes: SimpleChange){
  }
  /**
   * @ignore
   */
  constructor() {
  }
  /**
   * @ignore
   */
  ngOnInit(): void {
  }

  toggleIsPlaying(): void {
    this.isPlaying = !this.isPlaying;
    this.playTracks.emit(this.isPlaying);
  }
}
