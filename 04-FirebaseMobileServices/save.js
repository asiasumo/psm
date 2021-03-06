

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

let element = document.getElementById("CarInfo")

fetch("./MOCK_DATA.json")
    .then(function (resp) {
        return resp.json();
    }).then(function (data) {
        for (car of data) {
            let tag = document.createElement("li");
            element.appendChild(tag);
            let text = document.createTextNode(`${car.id}: ${car.brand} ${car.model} - ${car.engine_capacity} - ${car.color}`)
            tag.appendChild(text)
        }
    })





function saveCars() {
    fetch("./MOCK_DATA.json")
        .then(function (resp) {
            return resp.json();
        }).then(function (data) {
            for (car of data) {
                firestore.collection("Cars").add(car);
                console.log(car);
            }
        })
}


