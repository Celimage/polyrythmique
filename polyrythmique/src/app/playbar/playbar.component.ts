import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges} from '@angular/core';


/**
 * TODO <br/>
 * The play bar with buttons such as play, pause, fastforward and backward
 */
@Component({
  selector: 'app-playbar',
  templateUrl: './playbar.component.html',
  styleUrls: ['./playbar.component.sass']
})
export class PlaybarComponent implements OnInit, OnChanges {

  /**
  * @ignore
  */
  @Output() private playTracks: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
  * If the track should be playing
  */
  @Input() isPlaying: boolean = false;

  /**
  * @ignore
  */
  ngOnChanges(changes: SimpleChanges){
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

  /**
  * Toggle if the tracks are playing or not {@link PlaybarComponent#isPlaying}
  */
  toggleIsPlaying(): void {
    this.isPlaying = !this.isPlaying;
    this.playTracks.emit(this.isPlaying);
  }
}
