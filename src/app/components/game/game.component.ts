import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  isGameFinishedVariable: boolean;

  constructor() {
    this.isGameFinishedVariable = false;
  }

  ngOnInit(): void {
  }

  reset(): void {

  }

  finish(): void {
    this.isGameFinishedVariable = true;
  }

  isGameFinished(): boolean {
    return this.isGameFinishedVariable;
  }
}
