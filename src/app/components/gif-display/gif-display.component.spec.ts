import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifDisplayComponent } from './gif-display.component';

describe('GifDisplayComponent', () => {
  let component: GifDisplayComponent;
  let fixture: ComponentFixture<GifDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
