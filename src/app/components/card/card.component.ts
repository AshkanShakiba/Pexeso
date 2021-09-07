import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Card} from "../../Card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card = new Card(0, "");
  @ViewChild('flip_card_inner') flipCardInner:ElementRef=new ElementRef<any>("");

  constructor() {
  }

  ngOnInit(): void {
  }

  flip(): void {
    this.card.angle += 180;
    this.flipCardInner.nativeElement.style.transform=`rotateY(${this.card.angle}deg)`
  }
}
