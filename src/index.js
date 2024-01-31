import Wishlist from "./wishlist";

const form = document.querySelector
("#submitForm");

          //Make of car var info:
const make = document.querySelector("#makeInput");
const paraMake= document.querySelector("#car-make");

          //Model of car var info:
const model = document.querySelector("#modelInput");
const paraModel = document.querySelector("#car-model")

          //Year of car var info:
const carYear = document.querySelector("#yearInput");
const paraCaryear = document.querySelector("#car-year");

const removeBtn = document.querySelector(".removeBtn");

const wishlistUl= document.querySelector("#wishListContainer > ul");

const wishlist = new Wishlist();

form.addEventListener("submit", addCar);

removeBtn.addEventListener("click", removeCar);


function showCarDetails(car){
  make.textContent = car.make;
  model.textContent = car.model;
  carYear.textContent = car.year;
  removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList(){
  wishlistUl.innerHTML = "";
  wishlist.list.forEach((car) => {
    const li = document.createElement("li");
    li.textContent = `${car.make} ${car.model}`;
    li.addEventListener("click", () => showCarDetails(car));
    wishlistUl.appendChild(li);
  });
}

function addCar(event){
  event.preventDefault();
  const newMake = make.value;
  const newModel = model.value;
  const newYear = carYear.value;

  wishlist.add(newMake,newModel,newYear);

  updateDOMList();
}

function removeCar(){
  let carId = Number(removeBtn.getAttribute("data-carId"));

  wishlist.remove(carId);

  updateDOMList();

  newMake = "";
  newModel = "";
  newYear = "";
  removeBtn.disabled = true;
}
























