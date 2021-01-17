import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundPlayerComponent } from './sound-player.component';

describe('SoundPlayerComponent', () => {
  let component: SoundPlayerComponent;
  let fixture: ComponentFixture<SoundPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
