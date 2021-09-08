import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Card} from "../../Card";
import {timer} from "rxjs";
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  gameService: GameService;
  @Output() gameFinishEmitter: EventEmitter<any>;

  constructor(gameService: GameService) {
    this.gameService=gameService;
    this.gameFinishEmitter = new EventEmitter();
  }

  ngOnInit(): void {
    this.startGame();
  }

  startGame(): void {
    this.gameService.addEventEmitter(this.gameFinishEmitter);
    this.gameService.startGame();
  }
}
