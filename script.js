

let form = document.querySelector("#parking-form")

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    validateName();
    validateDate();
    validateDays();
    validateCard();
    validateCvv();
    validateExp();
    validateCar();
    

})

    function validateName() {
    let nameInput = document.querySelector("#name")
    let nameInfo = nameInput.value 
    let parentEl = nameInput.parentElement

    document.getElementsByTagName("label")[0].setAttribute("id", "name-label");
    let nameLabel = document.querySelector("#name-label")

    if (nameInfo) {
        console.log("Name field valid")
        parentEl.classList.remove("input-invalid")
        nameLabel.textContent = "Name"
        parentEl.classList.add("input-valid")
    } else { 
        console.log("Name field invalid")
        parentEl.classList.remove("input-valid")
        nameLabel.textContent = "Name is required"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function validateCar() {
    let yearInput = document.querySelector("#car-year")
    let yearInfo = yearInput.value 
    let parentEl = document.querySelector("#car-field")
    let makeInput = document.querySelector("#car-make")
    let makeInfo = makeInput.value
    let modelInput = document.querySelector("#car-model")
    let modelInfo = modelInput.value

    document.getElementsByTagName("label")[1].setAttribute("id", "car-label");
    let carLabel = document.querySelector("#car-label")

    y = document.getElementById("car-year").value

   
    if (isNaN(y) || y < 1900 || y > 2020 || makeInfo === "" || modelInfo === "") {
        console.log("Car field invalid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        carLabel.textContent = "Car information not valid"
        formIsValid = false
    } else if (yearInfo !== "" && makeInfo !== "" && modelInfo !== "") {
        
        console.log("Car field valid")
        parentEl.classList.remove("input-invalid")
        carLabel.textContent = "Car"
        parentEl.classList.add("input-valid")
    }
}

function validateDate() {
    let dateInput = document.querySelector("#start-date")
    let dateInfo = dateInput.value 
    let parentEl = dateInput.parentElement
    let currentDate = new Date();
    dateInfo = new Date(dateInfo);

    document.getElementsByTagName("label")[2].setAttribute("id", "date-label");
    let dateLabel = document.querySelector("#date-label")

    if (dateInfo > currentDate) {
        console.log("Date field valid")
        parentEl.classList.remove("input-invalid")
        dateLabel.textContent = "Date parking"
        parentEl.classList.add("input-valid")
    } else {
        console.log("Date field invalid")
        parentEl.classList.remove("input-valid")
        dateLabel.textContent = "Enter a date in the future"
        parentEl.classList.add("input-invalid")
        formIsValid = false 
    }
}

function validateDays() {
    let daysInput = document.querySelector("#days")
    let daysInfo = daysInput.value 
    let parentEl = daysInput.parentElement

    document.getElementsByTagName("label")[3].setAttribute("id", "days-label");
    let daysLabel = document.querySelector("#days-label")

    if (daysInfo > 0 && daysInfo < 31) {
        console.log("Days field valid")
        parentEl.classList.remove("input-invalid")
        daysLabel.textContent = "Number of days"
        parentEl.classList.add("input-valid")
    } else {
         console.log("Days field invalid")
         parentEl.classList.remove("input-valid")
         daysLabel.textContent = "Must be a number between 1 and 30"
         parentEl.classList.add("input-invalid")
         formIsValid = false 
    }
}

function validateCard() {
    let cardInput = document.querySelector("#credit-card")
    let cardInfo = cardInput.value 
    let parentEl = cardInput.parentElement

    document.getElementsByTagName("label")[4].setAttribute("id", "card-label");
    let cardLabel = document.querySelector("#card-label")

    if (cardInfo.length === 16) {
        console.log("Card field valid")
        parentEl.classList.remove("input-invalid")
        cardLabel.textContent = "Credit Card"
        parentEl.classList.add("input-valid")
    } else {
        console.log("Card field invalid")
        parentEl.classList.remove("input-valid")
        cardLabel.textContent = "Credit card must be 16 digits long"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function validateCvv() {
    let cvvInput = document.querySelector("#cvv")
    let cvvInfo = cvvInput.value 
    let parentEl = cvvInput.parentElement

    document.getElementsByTagName("label")[5].setAttribute("id", "cvv-label");
    let cvvLabel = document.querySelector("#cvv-label")

    if (cvvInfo.length === 3) {
        console.log("Name field valid")
        parentEl.classList.remove("input-invalid")
        cvvLabel.textContent = "CVV"
        parentEl.classList.add("input-valid")
    } else {
        console.log("Name field invalid")
        parentEl.classList.remove("input-valid")
        cvvLabel.textContent = "CVV must be 3 digits"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}

function validateExp() {
    let expInput = document.querySelector("#expiration")
    let expInfo = expInput.value 
    let parentEl = expInput.parentElement

    let today = new Date();
    let todayMonth = today.getMonth();
    let todayYear = today.getFullYear();


    document.getElementsByTagName("label")[6].setAttribute("id", "exp-label");
    let expLabel = document.querySelector("#exp-label")

    let monthValidate = expInfo.substring(0, 2);
    let yearValidate = expInfo.substring(3);

    if (yearValidate >= todayYear && monthValidate >= todayMonth) {
        console.log("Name field valid")
        parentEl.classList.remove("input-invalid")
        expLabel.textContent = "Expiration"
        parentEl.classList.add("input-valid")
    } else {
        console.log("Name field invalid")
        parentEl.classList.remove("input-valid")
        expLabel.textContent = "Exp date must be in the future"
        parentEl.classList.add("input-invalid")
        formIsValid = false
    }
}