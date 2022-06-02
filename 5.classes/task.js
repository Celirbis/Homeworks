class PrintEditionItem {
   constructor (name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
   }

   fix() {
      this.state = this.state * 1.5;
   }

   set state(newState) {
      if (newState < 0) {
         this._state = 0;
      }
      else if (newState > 100) {
         this._state = 100;
      }
      else {
         this._state = newState;
      }
   }

   get state() {
      return this._state;
   }
}

class Magazine extends PrintEditionItem {
   constructor (name, releaseDate, pagesCount) {
      super (name, releaseDate, pagesCount);
      this.type = "magazine";
   }
}

class Book extends PrintEditionItem {
   constructor (author, name, releaseDate, pagesCount) {
      super (name, releaseDate, pagesCount);
      this.type = "book";
      this.author = author;
   }
}

class NovelBook extends Book {
   constructor (author, name, releaseDate, pagesCount) {
      super (author, name, releaseDate, pagesCount);
      this.type = "novel";
   }
}

class FantasticBook extends Book {
   constructor (author, name, releaseDate, pagesCount) {
      super (author, name, releaseDate, pagesCount);
      this.type = "fantastic";
   }
}

class DetectiveBook extends Book {
   constructor (author, name, releaseDate, pagesCount) {
      super (author, name, releaseDate, pagesCount);
      this.type = "detective";
   }
}

class Library {
   constructor(name) {
      this.name = name;
      this.books = [];
   }

   addBook(book) {
      if (book.state > 30) {
         this.books.push(book);
      }
   }

   findBookBy(type, value) {
      for (let book of this.books) {
         if (book[type] === value) {
            return book;
         }      
      }  
      return null;
   }

   giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
         if (this.books[i].name === bookName) {
            return this.books.splice(i,1)[0];
         }
      }
      return null;
   }
}

class Student {
   constructor (name) {
      this.name = name;
      this.subjects = [];
   }

   addMark(mark, subject) {
      if (mark > 5 || mark < 1) {
         return "Ошибка, оценка должна быть числом от 1 до 5";
      }
      for (const subj of this.subjects) {
         if (subj.name === subject) {
            subj.marks.push(mark);
            return;
         }
      }
      let newSubject = new Subject(subject);
      newSubject.marks.push(mark);
      this.subjects.push(newSubject);
   }

   getAverageBySubject(name) {
      for (const subject of this.subjects) {
         if (subject.name === name) {
            return subject.getAverage();
         }
      }
      return "Несуществующий предмет";
   }

   getAverage() {
      return this.subjects.reduce((acc, item) => acc + item.getAverage(), 0) / this.subjects.length;
   }

   exclude(reason) {
      this.excluded = reason;
      delete this.subjects;
   }
}

class Subject {
   constructor (name) {
      this.name = name;
      this.marks = [];
   }
   getAverage() {
      return this.marks.reduce((acc, item) => acc + item) / this.marks.length;
   }
}

