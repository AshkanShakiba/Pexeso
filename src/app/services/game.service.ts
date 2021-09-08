import {EventEmitter, Injectable} from '@angular/core';
import {Card} from "../Card";
import {timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  cards: Card[];
  availableCount: number[];
  foundCards: number;
  gameFinishEmitter: any;
  images: string[];

  constructor() {
    this.cards = [];
    this.availableCount = [];
    this.foundCards = 0;
    this.images = [
      "../../../assets/chandler.png",
      "../../../assets/joey.png",
      "../../../assets/monica.png",
      "../../../assets/phoebe.png",
      "../../../assets/rachel.png",
      "../../../assets/ross.png"
    ]
  }

  addEventEmitter(gameFinishEmitter: EventEmitter<any>) {
    this.gameFinishEmitter = gameFinishEmitter;
  }

  getId(): number {
    let id;
    do {
      id = Math.floor(Math.random() * 6);
    } while (this.availableCount[id] < 1);
    this.availableCount[id]--;
    return id;
  }

  startGame(): void {
    this.cards = [];
    this.foundCards = 0;
    this.availableCount = [2, 2, 2, 2, 2, 2];
    for (let i = 0; i < 12; i++) {
      let id = this.getId();
      let card: Card = new Card(id, this.images[id]);
      this.cards.push(card);
    }
  }

  checkCards(): void {
    let selectedCards: Card[] = [];
    for (let card of this.cards) {
      if (card.isFlipped) {
        selectedCards.push(card);
      }
    }
    if (selectedCards.length == 2) {
      if (selectedCards[0].id == selectedCards[1].id) {
        selectedCards[0].find();
        selectedCards[1].find();
        this.foundCards += 2;
      } else {
        timer(500).subscribe(() => {
          selectedCards[0].flip();
          selectedCards[1].flip();
        });
      }
    }
    if (this.foundCards == 12) {
      this.gameFinishEmitter.emit(this);
    }
  }
}
