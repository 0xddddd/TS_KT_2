abstract class Publisher{
    protected title : string;
    protected author : string;
    protected pubYear : number;
    protected copies : number;

    protected constructor(title : string, author : string, pubYear : number, copies : number) {
        this.title = title;
        this.author = author;
        this.pubYear = pubYear;
        this.copies = copies;
    }

    getTitle() : string {
        return this.title;
    }

    setTitle(title : string): void {
        this.title = title;
    }

    getAuthor() : string {
        return this.author;
    }

    setAuthor(author : string): void {
        this.author = author;
    }

    getPubYear() : number {
        return this.pubYear;
    }

    setPubYear(pubYear : number): void {
        this.pubYear = pubYear;
    }

    getCopies() : number {
        return this.copies;
    }

    setCopies(copies : number): void {
        this.copies = copies;
    }
}

interface Reception {
    delivery() : void;
    receive() : void;
}

class Book extends Publisher implements Reception {
    private pages : number;

    constructor(title : string, author : string, pubYear : number, copies : number, pages : number) {
        super(title, author, pubYear, copies);
        this.pages = pages;
    }

    getPages() : number {
        return this.pages;
    }

    setPages(pages : number): void {
        this.pages = pages;
    }

    delivery() : void {
        if (this.copies > 0) {
            this.copies--;
            console.log(`Выдана книга "${this.title}"`);
        } else {
            console.log(`Книга "${this.title}" временно отсутствует`);
        }
    }

    receive() : void {
        this.copies++;
        console.log(`Книга "${this.title}" возвращена`);
    }
}

class Magazine extends Publisher implements Reception {
    private issue : number;

    constructor(title : string, author : string, pubYear : number, copies : number, issue : number) {
        super(title, author, pubYear, copies);
        this.issue = issue;
    }

    getIssue(): number {
        return this.issue;
    }

    setIssue(issue : number): void {
        this.issue = issue;
    }

    delivery(): void {
        if (this.copies > 0) {
            this.copies--;
            console.log(`Выдан журнал "${this.title}", номер ${this.issue}`);
        } else {
            console.log(`Журнал "${this.title}", номер ${this.issue} временно отсутствует`);
        }
    }

    receive(): void {
        this.copies++;
        console.log(`Журнал "${this.title}", номер ${this.issue} возвращен`);
    }
}

class Reader {
    private firstName : string;
    private lastName : string;
    private items : Publisher[];

    constructor(firstName : string, lastName : string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.items = [];
    }

    getFirstName() : string {
        return this.firstName;
    }

    setFirstName(firstName : string): void {
        this.firstName = firstName;
    }

    getLastName() : string {
        return this.lastName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    getItems() : Publisher[] {
        return this.items;
    }

    addItem(item : Publisher) : void {
        if (this.items.length < 3) {
            this.items.push(item);
            console.log(`Издание "${item.getTitle()}" добавлено в список читателя ${this.firstName} ${this.lastName}`);
        } else {
            console.log(`Читатель ${this.firstName} ${this.lastName} уже имеет максимальное количество изданий`);
        }
    }

    removeItem(item : Publisher) : void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(`Издание "${item.getTitle()}" удалено из списка читателя ${this.firstName} ${this.lastName}`);
        }
    }
}

class Library{
    private publications = [];

    constructor() {
        this.publications = [];
    }

    addPublication(publication : Publisher) : void{
        this.publications.push(publication);
        console.log(`Добавлено в библиотеку: "${publication.getTitle()}"`)
    }

    removePublication(publication : Publisher): void {
        const index = this.publications.indexOf(publication);
        if (index !== -1) {
            this.publications.splice(index, 1);
            console.log(`Удалено из библиотеки: "${publication.getTitle()}"`);
        }
    }
}

const library = new Library();

const book1 = new Book("Охота на овец", "Харуки Мураками", 1982, 5, 448);
const magazine1 = new Magazine("Техника – молодежи", "ЦК ВЛКСМ", 1940, 3, 12);

library.addPublication(book1);
library.addPublication(magazine1);

const reader1 = new Reader("Семён", "Миненко");

book1.delivery();
magazine1.delivery();

reader1.addItem(book1);
reader1.addItem(magazine1);

console.log(reader1.getItems());

reader1.removeItem(book1);

console.log(reader1.getItems());

book1.receive();
magazine1.receive();