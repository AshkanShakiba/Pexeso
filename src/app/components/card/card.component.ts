import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Card} from "../../Card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card = new Card(0, "");
  @ViewChild('flip_card_inner') flipCardInner: ElementRef = new ElementRef<any>("");
  @Output() checkCards: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.card.addComponent(this);

  }

  update(): void {
    this.checkCards.emit();
    this.flipCardInner.nativeElement.style.transform = `rotateY(${this.card.angle}deg)`
  }
}
