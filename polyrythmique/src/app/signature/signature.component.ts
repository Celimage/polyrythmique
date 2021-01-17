import { Component, OnInit } from '@angular/core';

import { BasicNote } from "../enums/basic-note";
import { Signature } from "../classes/signature";

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.sass']
})
/**
 * TODO. Kind of similar to {@link TempoComponent|TempoComponent}<br/>
 * Used to define the signature of a project or measure
 */
export class SignatureComponent implements OnInit {

  /**
   * The  {@link Signature|signature} associated to the component
   */
  signature: Signature = new Signature(4, BasicNote.QUARTER_NOTE);

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
