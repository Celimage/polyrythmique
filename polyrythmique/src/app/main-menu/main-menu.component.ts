import { Component, OnInit, Input } from '@angular/core';

/**
 * The main menu of the application.
 */
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})

export class MainMenuComponent implements OnInit {
  /**
   * The number of the active tab<br/>
   *               1 -> rhythm<br/>
   *               2 -> rhythm-sound<br/>
   *               3 -> metronome
   */
  @Input() active: number = 1;

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
   * Change the active tab
   * @param {number} active The number of the tab to set as active
   */
  setActive(active: number): void {
    this.active = active;
  }
}
