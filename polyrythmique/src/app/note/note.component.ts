import { Component, OnInit, Input } from '@angular/core';

import { Note } from "../classes/note";

/**
 * TODO<br/>
 * The notes to insert inside the MeasureComponent which is also to do
 */
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {

  /**
  * The note
  */
  @Input() note: Note = new Note(0,0);
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
