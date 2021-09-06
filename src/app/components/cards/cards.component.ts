import {Component, OnInit} from '@angular/core';
import {Card} from "../../Card";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: Card[] = [];
  isAvailable: boolean[] = [true, true, true, true, true, true, true, true, true, true, true, true];

  constructor() {
  }

  ngOnInit(): void {
    let images = [
      "chandler",
      "joey",
      "monica",
      "phoebe",
      "rachel",
      "ross"
    ]
    for (let i = 0; i < 6; i++) {
      this.cards.push(new Card(i, images[i], this.getPlace()));
      this.cards.push(new Card(i, images[i], this.getPlace()));
    }
    console.log(this.cards);
  }

  getPlace(): number {
    let place;
    do {
      place = Math.floor(Math.random() * 13);
    } while (!this.isAvailable[place]);
    this.isAvailable[place] = false;
    return place;
  }
}
