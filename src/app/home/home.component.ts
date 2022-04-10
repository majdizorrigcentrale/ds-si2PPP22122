import { Component, OnInit } from '@angular/core';

import {COUNTRIES} from "../data/countries";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
continent = COUNTRIES[0].continents
  constructor() { }

  ngOnInit(): void {
    console.log(COUNTRIES[0].continents)
  }

}
