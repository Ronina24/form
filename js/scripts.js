function addAge() {
  let nameVar = document.getElementsByTagName("select")[0];
  let age = "";
  for (let i = 21; i < 29; i++) {
    age += `<option value="${i}">${i}</option>`;
  }
  nameVar.innerHTML = age;
}

var values = {};

$(function () {
  $("#myform").submit(function (event) {
    event.preventDefault();

    $(this)
      .find(":input")
      .each(function () {
        values[$(this).attr("name")] = $(this).val();
      });
  });
});

function changeView() {
  setTimeout(() => {
    console.log(values);
    $("body").css("background-image", 'url("changeview.svg")');
    $(".container").css("display", "none");
    $(".different-view").css("display", "block");
    var list = document.getElementsByTagName("p");
    let randP = Math.floor(Math.random() * list.length) + 1;

    var value = [];
    $('input[name="interests[]"]:checked').each(function () {
      value[value.length] = this.checked ? $(this).val() : "";
    });
    var len = value.length;
    var number = Math.floor(Math.random() * len);
    let idOfP = list[randP].getAttribute("id");
    let p = document.getElementById(idOfP);
    let text = p.innerText;
    p.innerText = text
      .replaceAll("{a}", values.fullName)
      .replaceAll("{c}", values.age)
      .replaceAll("{b}", values.coffee)
      .replaceAll("{d}", values.address)
      .replaceAll("{e}", value[number]);
    list[randP].removeAttribute("hidden");
    console.log(text);
  }, 2000);
}

$(document).ready(function () {
  $("#submit-button").click(function () {
    validatePhone();
    validateName();
    checked = $("input[type=checkbox]:checked").length;
    if (checked < 2) {
      alert("You must check at least 2 checkboxes");
      return false;
    }
  });
});

function validatePhone() {
  let x = document.forms["myform"]["phone"].value;
  if (/^[0-9]{9,10}$/.test(x) == false) {
    alert("Phone number must have 9 or 10 digits only");
    return false;
  }
}
function validateName() {
  let x = document.forms["myform"]["fullName"].value;
  if (/[א-תa-zA-Z]+ [א-תa-zA-Z]+$/.test(x) == false) {
    alert("Name must be string and at least one space");
    return false;
  }
}
