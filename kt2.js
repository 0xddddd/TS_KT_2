var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Publisher = /** @class */ (function () {
    function Publisher(title, author, pubYear, copies) {
        this.title = title;
        this.author = author;
        this.pubYear = pubYear;
        this.copies = copies;
    }
    Publisher.prototype.getTitle = function () {
        return this.title;
    };
    Publisher.prototype.setTitle = function (title) {
        this.title = title;
    };
    Publisher.prototype.getAuthor = function () {
        return this.author;
    };
    Publisher.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Publisher.prototype.getPubYear = function () {
        return this.pubYear;
    };
    Publisher.prototype.setPubYear = function (pubYear) {
        this.pubYear = pubYear;
    };
    Publisher.prototype.getCopies = function () {
        return this.copies;
    };
    Publisher.prototype.setCopies = function (copies) {
        this.copies = copies;
    };
    return Publisher;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(title, author, pubYear, copies, pages) {
        var _this = _super.call(this, title, author, pubYear, copies) || this;
        _this.pages = pages;
        return _this;
    }
    Book.prototype.getPages = function () {
        return this.pages;
    };
    Book.prototype.setPages = function (pages) {
        this.pages = pages;
    };
    Book.prototype.delivery = function () {
        if (this.copies > 0) {
            this.copies--;
            console.log("\u0412\u044B\u0434\u0430\u043D\u0430 \u043A\u043D\u0438\u0433\u0430 \"".concat(this.title, "\""));
        }
        else {
            console.log("\u041A\u043D\u0438\u0433\u0430 \"".concat(this.title, "\" \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"));
        }
    };
    Book.prototype.receive = function () {
        this.copies++;
        console.log("\u041A\u043D\u0438\u0433\u0430 \"".concat(this.title, "\" \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0430"));
    };
    return Book;
}(Publisher));
var Magazine = /** @class */ (function (_super) {
    __extends(Magazine, _super);
    function Magazine(title, author, pubYear, copies, issue) {
        var _this = _super.call(this, title, author, pubYear, copies) || this;
        _this.issue = issue;
        return _this;
    }
    Magazine.prototype.getIssue = function () {
        return this.issue;
    };
    Magazine.prototype.setIssue = function (issue) {
        this.issue = issue;
    };
    Magazine.prototype.delivery = function () {
        if (this.copies > 0) {
            this.copies--;
            console.log("\u0412\u044B\u0434\u0430\u043D \u0436\u0443\u0440\u043D\u0430\u043B \"".concat(this.title, "\", \u043D\u043E\u043C\u0435\u0440 ").concat(this.issue));
        }
        else {
            console.log("\u0416\u0443\u0440\u043D\u0430\u043B \"".concat(this.title, "\", \u043D\u043E\u043C\u0435\u0440 ").concat(this.issue, " \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"));
        }
    };
    Magazine.prototype.receive = function () {
        this.copies++;
        console.log("\u0416\u0443\u0440\u043D\u0430\u043B \"".concat(this.title, "\", \u043D\u043E\u043C\u0435\u0440 ").concat(this.issue, " \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D"));
    };
    return Magazine;
}(Publisher));
var Reader = /** @class */ (function () {
    function Reader(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.items = [];
    }
    Reader.prototype.getFirstName = function () {
        return this.firstName;
    };
    Reader.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Reader.prototype.getLastName = function () {
        return this.lastName;
    };
    Reader.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Reader.prototype.getItems = function () {
        return this.items;
    };
    Reader.prototype.addItem = function (item) {
        if (this.items.length < 3) {
            this.items.push(item);
            console.log("\u0418\u0437\u0434\u0430\u043D\u0438\u0435 \"".concat(item.getTitle(), "\" \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432 \u0441\u043F\u0438\u0441\u043E\u043A \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u044F ").concat(this.firstName, " ").concat(this.lastName));
        }
        else {
            console.log("\u0427\u0438\u0442\u0430\u0442\u0435\u043B\u044C ".concat(this.firstName, " ").concat(this.lastName, " \u0443\u0436\u0435 \u0438\u043C\u0435\u0435\u0442 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0438\u0437\u0434\u0430\u043D\u0438\u0439"));
        }
    };
    Reader.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log("\u0418\u0437\u0434\u0430\u043D\u0438\u0435 \"".concat(item.getTitle(), "\" \u0443\u0434\u0430\u043B\u0435\u043D\u043E \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u044F ").concat(this.firstName, " ").concat(this.lastName));
        }
    };
    return Reader;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.publications = [];
        this.publications = [];
    }
    Library.prototype.addPublication = function (publication) {
        this.publications.push(publication);
        console.log("\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0443: \"".concat(publication.getTitle(), "\""));
    };
    Library.prototype.removePublication = function (publication) {
        var index = this.publications.indexOf(publication);
        if (index !== -1) {
            this.publications.splice(index, 1);
            console.log("\u0423\u0434\u0430\u043B\u0435\u043D\u043E \u0438\u0437 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438: \"".concat(publication.getTitle(), "\""));
        }
    };
    return Library;
}());
var library = new Library();
var book1 = new Book("Охота на овец", "Харуки Мураками", 1982, 5, 448);
var magazine1 = new Magazine("Техника – молодежи", "ЦК ВЛКСМ", 1940, 3, 12);
library.addPublication(book1);
library.addPublication(magazine1);
var reader1 = new Reader("Семён", "Миненко");
book1.delivery();
magazine1.delivery();
reader1.addItem(book1);
reader1.addItem(magazine1);
console.log(reader1.getItems());
reader1.removeItem(book1);
console.log(reader1.getItems());
book1.receive();
magazine1.receive();
