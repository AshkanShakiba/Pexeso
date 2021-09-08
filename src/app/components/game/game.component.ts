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
    timer(650).subscribe(() => {
      this.gameService.startGame();
      this.isGameFinished = false;
    });
  }

  finish(gameService: GameService): void {
    this.gameService = gameService;
    this.isGameFinished = true;
  }
}
