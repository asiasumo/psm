

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



// const docRef = firestore.collection("Cars")
firestore.collection('Cars').get().then(function (doc) {
    // if (doc.exists) {
    doc.forEach(car => {
        car = car.data();
        let table = document.getElementById('table');
        let row = document.createElement("tr");

        let cellID = document.createElement("td");
        let id = document.createTextNode(car.id);
        cellID.appendChild(id);

        let cellBrand = document.createElement("td");
        let brand = document.createTextNode(car.brand);
        cellBrand.appendChild(brand);

        let cellModel = document.createElement("td");
        let model = document.createTextNode(car.model);
        cellModel.appendChild(model);

        let cellCapacity = document.createElement("td");
        let capacity = document.createTextNode(car.engine_capacity);
        cellCapacity.appendChild(capacity);

        let cellColor = document.createElement("td");
        let color = document.createTextNode(car.color);
        cellColor.appendChild(color);

        row.appendChild(cellID);
        row.appendChild(cellBrand);
        row.appendChild(cellModel);
        row.appendChild(cellCapacity);
        row.appendChild(cellColor);

        table.appendChild(row);
    })
    // const myData = doc.data()
    // console.log(myData)
    // for (key in myData) {
    //     let tag = document.createElement("p")
    //     let text = document.createTextNode(`${key}: ${myData[key]}`)
    //     tag.appendChild(text)
    //     console.log(tag)
    //     let element = document.getElementById("bookInfo")
    //     element.appendChild(tag)
    // }
    // } else {
    //     console.log("No such document!");
    // }
}).catch(function (error) {
    console.log("Error getting document:", error);
});

