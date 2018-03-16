# Angular Tutorial
Welcome to this Angular tutorial! Today we're going to go over some of the basics of this front end framework. Angular is typically used for web-apps that are a little more interactive than a blog but less heavy than a social media application. A happy medium for Angular would be a single page application with some neat functionality which is exactly what we'll be doing today.
I'm expecting people who follow this tutorial to be comfortable using the command line in tandem with a text editor. I'm also expecting you to have a basic understanding of HTML  as the skeleton of a website, CSS as the way you style it, and Javascript as programming for web based applications.

### In a broad sense, we are going to be learning how to program for the web by starting with simple conditional (if statements) and iterative (for loops) programming
## Prerequisites
* Prior to this tutorial please install a text editor such as [Atom](https://atom.io/) or [Sublime](https://www.sublimetext.com/). I recommend Sublime because it's very lightweight and easy to use but I recommend Atom because it has a nice integration with Github and you can download packages to make it feel like an IDE (Integrated Development Environment).

* Download this repository

* Download [Node JS](https://nodejs.org/en/download/)

* Install the Angular CLI (Command Line Interface) by using the following command

```
npm install -g @angular/cli
```
## Let's take a look at the final product...



## Let's begin!
Protip, stay consistent with naming conventions, I myself got very confused so I tried my best to use distinct, descriptive names.


```
ng new mybookshelf
```
NG is a very abbreviated way of saying Angular. Here we're just telling the Angular CLI to build us a new project where we'll be adding on our project.

Once that's done you should notice there's a new folder under angular-tutorial. CD into that folder and type the following
```
ng serve --open
```
Now you should see the Angular landing page. This command launches the server and it will keep the project open and updated as you make changes so you might not have to write this command again.

If you look at the HTML code you'll see these double curly braces -> {{}}

This is an example of Angular's interpolation binding syntax which is just a really fancy way of calling it a placeholder. Here is where we place the value of a property we define.

Navigate to mybookshelf/src/app/app.component.ts to access the typescript file. Here we can change what title says.

I don't want to spend a lot of time on CSS so to make this look nicer let's bootstrapify our project.
Navigate to mybookshelf/src/app/app.component.html and merge the following code with the code that already exists there.

``` HTML
<!doctype html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

</head>
<body>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</body>
```

## Checkpoint!


### Components in Angular
"Components are the fundamental building blocks of Angular applications. They display data on the screen, listen for user input, and take action based on that input."

We're going to continue by creating our first component

```
ng generate component book
```
You should see a new folder called 'book' with a similar file structure to that of 'app'.

Open book.component.ts and you'll see that we've imported the Component metadata from Angular core library.
There are three properties to mention:

'selector' defines the css selector for the component, 'templateUrl' defines the html file, and 'templateUrl'

Add a 'mybook' property to the BookComponent class in book.component.ts
```
mybook = 'Game of Thrones';

```
Open book.component.html and add {{mybook}}, similar to how we saw it done with {{title}}

In order to actually display this though we have to nest this within the AppComponent
Recall that our selector is called app-book
Navigate to app.component.html and append a tag like such:
```
<app-book></app-book>
```

Since we want to display more information about our books than just a name, we're going to create a book class to make creating books and displaying their information more organized.

Create a bookClass.ts file within the app folder.

``` typescript
    export class bookClass {
        name: string;
        author: string;
        id: number;
    }

```
Navigate to book.component.ts and include the following

 ```
import { bookClass } from '../bookClass';


mybook: bookClass = {
    name: 'Game of Thrones',
    author: 'George RR Martin',
    id: 1
};

```

You can no longer see the title we had put earlier and it is replaced with [object Object]. This is because we can't just show an object. We need to specify what characteristics of the object we want to show.
Navigate to the book.component.html page to do this.
```
<h3>Title: {{mybook.name}}</h3>
<h4>Author: {{mybook.author}}</h4>
<h4>Id: {{mybook.id}}</h4>

```

## Checkpoint!

### Editing Components in browser

Now that we're able to display information, we're going to try editing that information from the webpage. Two way binding is the means by which we can type in browser and have that information replace the already existing values.

#### [(ngModel)] is Angular's two-way data binding syntax.


Navigate to book.component.html and add the following
```

<input [(ngModel)]="mybook.name" placeholder="name">

```

It stopped working! ngModel is a directive that is not included by default. We have to include the FormsModule in order to use this directives and others related to forms.
Navigate to app.module.ts and import the following
```
import { FormsModule } from '@angular/forms';



and add the following to imports

imports: [
  BrowserModule,
  FormsModule
],
```

Now that we can add input boxes just finish the rest by adding one for author and the id number

### Listing Components

Create a file called bookshelf.ts under app
```
import { bookClass } from './bookClass';

export const BOOKS: bookClass[] = [

    { name: 'GAME OF THRONES',
     author: 'GEORGE RR MARTIN',
     id: 1 },
     { name: 'CLASH OF KINGS',
      author: 'GEORGE RR MARTIN',
      id: 2 },
      { name: 'STORM OF SWORDS',
       author: 'GEORGE RR MARTIN',
       id: 3 },
       { name: 'FEAST FOR CROWS',
        author: 'GEORGE RR MARTIN',
        id: 4 },
        { name: 'DANCE OF DRAGONS',
         author: 'GEORGE RR MARTIN',
         id: 5 },
         { name: 'WINDS OF WINTER',
          author: 'GEORGE RR MARTIN',
          id: 6 }
];

```

This creates a constant array called BOOKS of type bookClass

We then need to import this array file to book.component.ts

```
import { BOOKS } from '../bookshelf';

```

add a property to book.component.ts so that you can actually display the array

```
displayBook = BOOKS;
```
Now navigate to book.component.html to change the following

``` html

<ul class = "list-books">
    <li *ngFor = "let i of displayBook">
        <h4>Title: {{i.name}}</h4>
        <h5>Author: {{i.author}}</h5>
        <h5>Id: {{i.id}}</h5>
    </li>
</ul>

```

*ngFor is a repeater directive. This allows us to repeat an element in a list. 'i' describes an iterator variable. displayBook is the property we use to equate the BOOK array.

## Checkpoint!

Notice that editing the textbook doesn't edit any of the elements in the list. We want it to edit each value so now we're going to learn how to click on items and generate responses from that


### Clicking Components and Editing them
Add the following to where *ngFor is
```
(click)="onSelect(i)"
```

Then navigate to book.component.ts and add the following
```
selectedBook: bookClass;

onSelect(book: bookClass): void {
    this.selectedBook = book;
}
```
Upon reloading the page we have broken the content. The problem we have now is that selectedBook is equated to bookClass upon loading the page. We're going to need a conditional so that editing information only shows up when we click on a title.

To do this we add *ngIf to the div encapsulating the input boxes

```
<div *ngIf = "selectedBook">
<input [(ngModel)]="selectedBook.name" placeholder="name">
<input [(ngModel)]="selectedBook.author" placeholder="author">
<input [(ngModel)]="selectedBook.id" placeholder="id">
</div>
```

# That's it folks!
Thank you for coming out, if you have any questions at all feel free to facebook message me, email me at dtravie@gmail.com, or join the ACE [slack](https://uf-ace.slack.com) and you can DM me @dani.

This was adapted from the Tour of Heroes tutorial over at [Angular.io](https://angular.io/tutorial) so thanks to them for coming up with a great way to introduce these concepts!
