import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsWidget7Component } from '../feeds-widget7/feeds-widget7.component';

describe('FeedsWidget7Component', () => {
  let component: FeedsWidget7Component;
  let fixture: ComponentFixture<FeedsWidget7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedsWidget7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsWidget7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
