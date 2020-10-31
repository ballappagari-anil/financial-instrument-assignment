import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatTableModule, BrowserModule, BrowserAnimationsModule],
  exports: [RouterModule],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ]
})
export class AppRoutingModule { }
