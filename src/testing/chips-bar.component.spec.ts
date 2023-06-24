import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MatChipsModule } from '@angular/material/chips';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChipsBarComponent } from 'src/app/chips-bar/chips-bar.component';

describe('ChipsBarComponent', () => {
  let component: ChipsBarComponent;
  let fixture: ComponentFixture<ChipsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsBarComponent ],
      imports: [ MatChipsModule, NoopAnimationsModule ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChipsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 6 material chips components', () => {
    expect(fixture.debugElement
      .queryAll(By.css("mat-chip"))
      .length)
      .toEqual(6);
  });

  it('should render first material chip with the value `All` and it should be selected', () => {
    expect((fixture.debugElement
      .queryAll(By.css("mat-chip.mat-chip-selected"))[0]
      .nativeElement as HTMLElement)
      .textContent)
      .toEqual("All");
  });

  it('should render material chip with the value `Electronics`', () => {
    expect((fixture.debugElement
      .queryAll(By.css("mat-chip"))[1]
      .nativeElement as HTMLElement)
      .textContent)
      .toEqual("Electronics");
  });

});
