import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootprintPageComponent } from './footprint-page.component';

describe('FootprintPageComponent', () => {
  let component: FootprintPageComponent;
  let fixture: ComponentFixture<FootprintPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootprintPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootprintPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
