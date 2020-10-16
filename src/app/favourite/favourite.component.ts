import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input('is-favorite') isSelected:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  clicked()
  {
    this.isSelected = ! this.isSelected
    console.log('fav component')
  }

}
