import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  isGameFinished: boolean;
  gameService: any;

  constructor() {
    this.isGameFinished = false;
  }

  ngOnInit(): void {
  }

  reset(): void {
    this.gameService.startGame();
  }

  finish(gameService: GameService): void {
    this.gameService = gameService;
    this.isGameFinished = true;
  }
}
