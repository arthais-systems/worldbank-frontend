import { CountryComponent } from './country/country.component';
import { Country } from './country';
import { Component, Inject, Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { __param } from 'tslib';

function submit(){
  console.log('Form is submitting automatically.');
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'frontAPI';
}

