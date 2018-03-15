import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

     book: Book = {
        name: 'Game of Thrones',
        author: 'George RR Martin',
        id: 1
     };
     books = BOOKS;
     selectedBook: = Book;
     constructor() { }

     ngOnInit() {
     }
}
