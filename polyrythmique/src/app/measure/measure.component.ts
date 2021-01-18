import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';

import { Signature } from "../classes/signature";
import { Tempo } from "../classes/tempo";
import { Measure } from "../classes/measure";


/**
 * TODO<br/>
 * The measures to insert inside the TrackComponent (this last one should have changes afterward, such as moving attributes)
 */
@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.sass']
})
export class MeasureComponent implements OnInit, OnChanges {

  /**
  * The signature of the measure {@link Signature}
  */
  @Input() signature: Signature = new Signature();

  /**
  * The tempo on the measure {@link Measure}
  */
  @Input() tempo: Tempo = new Tempo();

  /**
  * The measure
  */
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

  /**
  * @ignore
  */
  ngOnChanges(changes: SimpleChanges): void {}

  /**
  * Get the width of the measure <br/> TODO
  * @returns {number} The width of the measure
  */
  getWidth(): number {
    let numberOfWholeNote: number = this.signature.getTop() * this.signature.getBottomNumber();
    //console.log(numberOfWholeNote);

    // TO DO : get the
    return numberOfWholeNote * 153;
    //1N w = 113.2 * 4
    //N h = 77
  }
}
