import { Component, OnInit, Input } from '@angular/core';

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
export class MeasureComponent implements OnInit {

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

}
