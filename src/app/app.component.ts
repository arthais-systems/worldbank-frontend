import { Routes, ActivatedRoute } from '@angular/router';
import { RestService } from './rest.service';
import { CountryComponent } from './country/country.component';
import { Country } from './country';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { __param } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countryPrevious: Country[] | undefined;
  
  constructor(
    public restService: RestService,
    private route: ActivatedRoute
  ) {}

  onSubmit(id: string): void {
    this.getCountries(id);
  }

  ngOnInit(): void {
    
  }
  
  getCountries(id: string){
    this.restService.getCountry(id).subscribe(data => {
      this.countryPrevious = data.content;
    })
  }
}

