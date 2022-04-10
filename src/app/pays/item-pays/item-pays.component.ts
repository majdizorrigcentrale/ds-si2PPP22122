import { Component, OnInit } from '@angular/core';
import {COUNTRIES} from "../../data/countries";

@Component({
  selector: 'app-item-pays',
  templateUrl: './item-pays.component.html',
  styleUrls: ['./item-pays.component.css']
})
export class ItemPaysComponent implements OnInit {
names = COUNTRIES[0].name.official
  flagPath = COUNTRIES[0].flags.svg
  constructor() { }

  ngOnInit(): void {
  }

}
