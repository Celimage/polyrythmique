import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetronomeSoundComponent } from './metronome-sound.component';

describe('MetronomeSoundComponent', () => {
  let component: MetronomeSoundComponent;
  let fixture: ComponentFixture<MetronomeSoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetronomeSoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetronomeSoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
