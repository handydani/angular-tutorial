import { Component, OnInit } from '@angular/core';
import { bookClass } from '../bookClass';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {


    mybook: bookClass = {
        name: 'Game of Thrones',
        author: 'George RR Martin',
        id: 1
    };
  constructor() { }

  ngOnInit() {
  }

}
