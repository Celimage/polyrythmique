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

  ngOnChanges(changes: { [property: string]: SimpleChange }){
     let change: SimpleChange = changes['isPlaying'];
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

  launchAllTracks(){
    console.log("PLAY");
    this.playTracks.emit(true);
    this.isPlaying = true;
  }

}
