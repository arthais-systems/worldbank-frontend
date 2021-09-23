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

  countries: Country | undefined;

  constructor(
    public rest: RestService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.rest.getCountry(this.route.snapshot.params.id).subscribe(
      (data: Country) => this.countries = { ...data }
    )
  }
}

function id(id: any) {
  throw new Error('Function not implemented.');
}
