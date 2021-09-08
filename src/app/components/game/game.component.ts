import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {timer} from "rxjs";

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
    this.gameService.flipAll();
    this.isGameFinished = false;
    timer(650).subscribe(() => {
      this.gameService.startGame();
    });
  }

  finish(gameService: GameService): void {
    this.gameService = gameService;
    this.isGameFinished = true;
  }
}
