import {Component, OnInit} from '@angular/core';
import {Card} from "../../Card";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: Card[] = [];
  availableCount: number[] = [2, 2, 2, 2, 2, 2];

  constructor() {
  }

  ngOnInit(): void {
    let images = [
      "../../../assets/chandler.png",
      "../../../assets/joey.png",
      "../../../assets/monica.png",
      "../../../assets/phoebe.png",
      "../../../assets/rachel.png",
      "../../../assets/ross.png"
    ]
    for (let i = 0; i < 12; i++) {
      let id = this.getId();
      let card: Card = new Card(id, images[id]);
      this.cards.push(card);
    }
    //console.log(this.cards);
  }

  getId(): number {
    let id;
    do {
      id = Math.floor(Math.random() * 6);
    } while (this.availableCount[id] < 1);
    this.availableCount[id]--;
    return id;
  }
}
