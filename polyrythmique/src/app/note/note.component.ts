import { Component, OnInit, Input } from '@angular/core';

import { Note } from "../classes/note";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
/**
 * TODO<br/>
 * The notes to insert inside the MeasureComponent which is also to do
 */
export class NoteComponent implements OnInit {

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
