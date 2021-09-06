import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../Card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card=new Card(0,"");

  constructor() { }

  ngOnInit(): void {
  }

}
