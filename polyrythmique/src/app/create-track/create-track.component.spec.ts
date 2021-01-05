import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrackComponent } from './create-track.component';

describe('CreateTrackComponent', () => {
  let component: CreateTrackComponent;
  let fixture: ComponentFixture<CreateTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
