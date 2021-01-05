import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent implements OnInit {
  /**
    The number of the active tab
  */
  @Input() active: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  setActive(active: number): void {
    this.active = active;
  }
}
