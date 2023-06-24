import { TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { By } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { ChipsBarComponent } from 'src/app/chips-bar/chips-bar.component';
import { VideoContentComponent } from 'src/app/video-content/video-content.component';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from 'src/app/navigation/navigation.component';
import { HeaderComponent } from 'src/app/header/header.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, VideoContentComponent, ChipsBarComponent, NavigationComponent, HeaderComponent
      ],
      imports: [
        MatChipsModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        MatListModule,
        NoopAnimationsModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should render header compon bar',() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(fixture.debugElement.query(By.css("app-navigation-bar"))).toBeTruthy();
  // });

});
