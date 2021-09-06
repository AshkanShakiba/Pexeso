import { Component, OnInit } from '@angular/core';
import {Card} from "../../Card";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: Card[]=[new Card(0,"",0)];

  constructor() { }

  ngOnInit(): void {
    // TODO: set cards here!
  }

}
