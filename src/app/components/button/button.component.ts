import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "Text";
  @Input() color: string = "black";
  @Output() buttonClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.buttonClick.emit();
  }
}
