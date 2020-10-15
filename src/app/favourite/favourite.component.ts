import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input() isFavourite:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  clicked()
  {
    this.isFavourite = ! this.isFavourite
    console.log('fav component')
  }

}
