import {CardComponent} from "./components/card/card.component";

export class Card {
  id: number;
  img: string;
  isFound: boolean;
  isFlipped: boolean;
  angle: number;

  component: any;

  constructor(id: number, img: string) {
    this.id = id;
    this.img = img;
    this.isFound = false;
    this.isFlipped = false;
    this.angle = 0;
  }

  addComponent(component: CardComponent): void {
    this.component = component;
  }

  flip(force: boolean): void {
    if (!this.isFound || force) {
      console.log("Doing...");
      this.angle += 180;
      this.isFlipped = !this.isFlipped;
      this.component.update();
    }
  }

  find(): void {
    this.isFound = true;
    this.isFlipped = false;
  }
}
