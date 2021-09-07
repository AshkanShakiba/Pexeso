export class Card {
  id: number;
  img: string;
  isFound: boolean;
  isFlipped: boolean;
  angle: number;

  constructor(id:number, img:string) {
    this.id=id;
    this.img=img;
    this.isFound=false;
    this.isFlipped=false;
    this.angle=0;
  }
}
