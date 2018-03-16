import { Component, OnInit } from '@angular/core';
import { bookClass } from '../bookClass';
import { BOOKS } from '../bookshelf';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    displayBook = BOOKS;

    selectedBook: bookClass;
    onSelect(book: bookClass): void {
        this.selectedBook = book;
    }
    mybook: bookClass = {
        name: 'Game of Thrones',
        author: 'George RR Martin',
        id: 1
    };


    constructor() { }

    ngOnInit() {
    }


}
