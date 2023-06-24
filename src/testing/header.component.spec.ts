import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MatChipsModule } from '@angular/material/chips';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from 'src/app/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ MatChipsModule, NoopAnimationsModule, MatIconModule, MatFormFieldModule, MatInputModule ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display app title ViewTube', () => {
    expect((fixture.debugElement.query(By.css("#header"))
      .nativeElement as HTMLElement).textContent)
      .toContain("ViewTube");
  });

  it('should contain search box with one input and one button element', () => {
    const searchElement = fixture.debugElement.query(By.css("#search"));

    const inputElements = searchElement.queryAll(By.css("mat-form-field [matinput]"));
    expect(inputElements.length).toEqual(1);
    const buttonElements = searchElement.queryAll(By.css("button mat-icon"));
    expect(buttonElements.length).toEqual(1);
  });

  it('should contain navbar with `notifications` icon button', () => {
    const navBarElement = fixture.debugElement.query(By.css("#navbar"));
    const iconButtonElements = navBarElement.queryAll(By.css("button mat-icon"));
    expect((iconButtonElements[0].nativeElement as HTMLElement).textContent).toEqual("notifications");
  });

  it('should contain navbar with `video_call` icon button', () => {
    const navBarElement = fixture.debugElement.query(By.css("#navbar"));
    const iconButtonElements = navBarElement.queryAll(By.css("button mat-icon"));
    expect((iconButtonElements[1].nativeElement as HTMLElement).textContent).toEqual("video_call");
  });

  it('should contain navbar with `apps` icon button', () => {
    const navBarElement = fixture.debugElement.query(By.css("#navbar"));
    const iconButtonElements = navBarElement.queryAll(By.css("button mat-icon"));
    expect((iconButtonElements[2].nativeElement as HTMLElement).textContent).toEqual("apps");
  });
});