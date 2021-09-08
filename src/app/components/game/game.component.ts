import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  isGameFinished: boolean;

  constructor() {
    this.isGameFinished = false;
  }

  ngOnInit(): void {
  }

  reset(): void {
    // TODO: gameService.initialize();
  }

  finish(): void {
    this.isGameFinished = true;
  }
}
