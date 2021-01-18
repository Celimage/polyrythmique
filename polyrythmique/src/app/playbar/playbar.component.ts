import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-playbar',
  templateUrl: './playbar.component.html',
  styleUrls: ['./playbar.component.sass']
})
/**
 * TODO
 */
export class PlaybarComponent implements OnInit, OnChanges {

  @Output() private playTracks: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isPlaying: boolean = false;

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

  toggleIsPlaying(): void {
    this.isPlaying = !this.isPlaying;
    this.playTracks.emit(this.isPlaying);
  }
}
