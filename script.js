let myLibrary = [];

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

function addBookToLibrary(title, author, pages, status) {
    let book = new Book(title, author, pages, status);

    return book;
}

const addBook = document.querySelector(".addBook");
const toggleForm = document.querySelector("#formID");
const cancelForm = document.querySelector(".cancel");
const form = document.querySelector("form");
const articles = document.querySelector(".cards");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#read");

let readButtonList = document.querySelectorAll(".test")

addBook.addEventListener("click", () => {
    if(toggleForm.className == "showAddBookWrapper") {
        toggleForm.className = "hideAddBookWrapper";
    } else {
        toggleForm.className = "showAddBookWrapper";
    }
});

cancelForm.addEventListener("click", e => {
    toggleForm.className = "hideAddBookWrapper";
});

form.addEventListener("submit", e => {
    e.preventDefault();
    myLibrary.push(addBookToLibrary(title.value, author.value, pages.value, isRead.value,));

    let titleElem = document.createElement("p");
    let authorElem = document.createElement("p");
    let pagesElem = document.createElement("p");
    let statusElem = document.createElement("button");
    let removeElem = document.createElement("button");

    statusElem.classList.add("test");
    
    titleElem.innerHTML = `"${title.value}"`;
    authorElem.innerHTML = `${author.value}`;
    pagesElem.innerHTML = `${pages.value}`;
    statusElem.innerHTML = `${isRead.value}`;

    removeElem.innerHTML = `Remove`;

    if (isRead.value == "Read") {
        statusElem.style.backgroundColor = "#8cb369";
    } else {
        statusElem.style.backgroundColor = "#bc4b51";
    }

    let card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(titleElem);
    card.appendChild(authorElem);
    card.appendChild(pagesElem);
    card.appendChild(statusElem);
    card.appendChild(removeElem);

    articles.appendChild(card);

    statusElem.addEventListener("click", e => {
        if (statusElem.outerText == "Read") {
            statusElem.style.backgroundColor = "#bc4b51"
            statusElem.innerHTML = "Not read";
        } else {
            statusElem.innerHTML = "Read";
            statusElem.style.backgroundColor = "#8cb369";
        }
    })

    removeElem.addEventListener("click", e => {
        card.style.display = "none";
    })

    toggleForm.className = "hideAddBookWrapper";

    title.value = "";
    author.value = "";
    pages.value = "";
    isRead.value = "Read";
});
