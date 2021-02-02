/**
 * Javascript OOP Crush Course By Traversy Media
 *
 * Topics
 *
 * Constractor
 * Polymorphism
 * Class
 * Object
 *
 */

//Create Class for perform Others Operations

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `This ${this.title} Is Writen by ${this.author} in ${this.year}`;
  }
}

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

let mag1 = new Magazine("Super  PHP","Hasan","2020","Januaray");

console.log(mag1.getSummary());