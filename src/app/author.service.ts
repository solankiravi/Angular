import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  getauthor(){
    return ["Ravi","Solanki","Singh"];
  }
}
