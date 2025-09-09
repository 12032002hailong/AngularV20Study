/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SignalExComponent } from './signal-ex.component';

describe('SignalExComponent', () => {
  let component: SignalExComponent;
  let fixture: ComponentFixture<SignalExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
