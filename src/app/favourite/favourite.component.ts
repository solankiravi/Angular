import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input('is-favorite') isSelected:boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  clicked()
  {
    this.isSelected = ! this.isSelected
    this.change.emit();
  }

}
