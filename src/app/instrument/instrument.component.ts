import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Instrument } from '../instrument';
import * as instruments from '../sampleData.json';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

const ELEMENT_DATA: Instrument[] = (instruments as any).default;

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements AfterViewInit {
  displayedColumns: string[] = ['ticker', 'price', 'assetClass'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

}
