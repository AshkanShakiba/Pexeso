export class Card {
  id: number;
  img: string;
  place: number;
  isFound: boolean;
  isFlipped: boolean;

  constructor(id:number, img:string, place:number) {
    this.id=id;
    this.img=img;
    this.place=place;
    this.isFound=false;
    this.isFlipped=false;
  }
}
