import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSort } from '@angular/material/sort';

import { InstrumentComponent } from './instrument.component';

fdescribe('InstrumentComponent', () => {
  let component: InstrumentComponent;
  let fixture: ComponentFixture<InstrumentComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstrumentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load sample Json', () => {
    expect(component.displayedColumns.length).toEqual(3);
    expect(component.dataSource.data).toBeDefined();
    component.dataSource.data.forEach(dataElement => {
      expect(dataElement).toBeDefined();
    });
  });

});
