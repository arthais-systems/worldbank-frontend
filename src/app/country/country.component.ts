import { HttpHeaders } from '@angular/common/http';
import { Country } from './../country';
import { Component, OnInit } from '@angular/core';
import { RestService} from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: 'country.component.html',
  styleUrls: ['country.component.css']
})
export class CountryComponent implements OnInit {

  cont: Country[] | undefined;

  constructor(
    public rest: RestService,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCountryData();
  }

  getCountryData(){
    this.rest.getCountry("BRA").subscribe(data => {
        this.cont = data.content;
    });
  }
}
