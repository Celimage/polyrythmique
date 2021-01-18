import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';

import { Signature } from "../classes/signature";
import { Tempo } from "../classes/tempo";
import { Measure } from "../classes/measure";

@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.sass']
})
/**
 * TODO<br/>
 * The measures to insert inside the TrackComponent (this last one should have changes afterward, such as moving attributes)
 */
export class MeasureComponent implements OnInit, OnChanges {

  @Input() signature: Signature = new Signature();
  @Input() tempo: Tempo = new Tempo();

  @Input() measure: Measure = new Measure(0);
  /**
   * @ignore
   */
  constructor() { }
  /**
   * @ignore
   */
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  getWidth(): number {
    let numberOfWholeNote: number = this.signature.getTop() * this.signature.getBottomNumber();
    //console.log(numberOfWholeNote);

    // TO DO : get the
    return numberOfWholeNote * 153;
    //1N w = 113.2 * 4
    //N h = 77
  }
}
