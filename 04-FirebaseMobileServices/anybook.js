

var firebaseConfig = {
    apiKey: "AIzaSyCDl1OOLy082x1Jb1UY7G8fs2VePfqHFCQ",
    authDomain: "psm-homework.firebaseapp.com",
    databaseURL: "https://psm-homework.firebaseio.com",
    projectId: "psm-homework",
    storageBucket: "psm-homework.appspot.com",
    messagingSenderId: "61597945405",
    appId: "1:61597945405:web:3c6dc0e0e50b32d57ca454",
    measurementId: "G-ZQRR6SE2S6"
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const docRef = firestore.collection("Books")
let element = document.getElementById("books")

button.addEventListener("click", function () {
    docRef.add({
        ISBN: document.getElementById("isbn").value,
        author: document.getElementById("autor").value,
        genre: document.getElementById("gatunek").value,
        release: document.getElementById("rok").value,
        title: document.getElementById("tytul").value,
    })


        .then(function (newDoc) {
            docRef2 = firestore.doc(`Books/${newDoc.id}`);
            docRef2.get().then(function (doc) {
                console.log(doc.data())
                let book = doc.data();
                let tag = document.createElement("li");
                element.appendChild(tag);
                let text = document.createTextNode(`Autor: ${book.author} - Tytuł: ${book.title} - Wydanie: 
                                                    - ${book.release} - ISBN: ${book.ISBN} - Rodzaj: ${book.genre} `)
                tag.appendChild(text)
            })
        })


})