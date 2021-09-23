import { CountryComponent } from './country/country.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

const routes: Routes = [
  {
    path: 'country',
    component: CountryComponent,
    data: { title: 'Country List' }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


