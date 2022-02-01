import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Color } from '../color';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.css']
})
export class ColorBoxComponent implements OnInit {

  @Input() color: Color = {id: "", votes: 0};
  @Input() maxVotes = 0;
  @Output() updateColorEvent = new EventEmitter<Color>();

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateColor(color: Color) {
    this.updateColorEvent.emit(color);
  }

}
