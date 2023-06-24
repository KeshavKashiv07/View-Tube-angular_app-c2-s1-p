import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoContentComponent } from 'src/app/video-content/video-content.component';

import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { By } from '@angular/platform-browser';

describe('VideoContentComponent', () => {
  let component: VideoContentComponent;
  let fixture: ComponentFixture<VideoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoContentComponent ],
      imports: [ MatCardModule, MatRippleModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render material card components',()=>{
    expect(fixture.debugElement.queryAll(By.css("mat-card"))
    .length)
    .toBeGreaterThanOrEqual(49);
  })
});
