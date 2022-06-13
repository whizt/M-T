// Navbar Dropdown
var dropdownCheck = true;
function rotateShow(){
  if(dropdownCheck){
    document.getElementById("myDropbtn").style.rotate = "90deg";
    document.getElementById("myDropdown").style.display = "block";
    dropdownCheck = false;
  }else{
    document.getElementById("myDropbtn").style.rotate = "0deg";
    document.getElementById("myDropdown").style.display = "none";
    dropdownCheck = true;
  }
  
}

var newCheck = true;
var shopCheck = true;
var collectCheck = true;
var saleCheck = true;
function wNew() {
  if (newCheck) {
    document.getElementById("new-content").style.display = "flex";
    document.getElementById("shop-content").style.display = "none";
    document.getElementById("collection-content").style.display = "none";
    document.getElementById("sale-content").style.display = "none";
    newCheck = false;
  } else {
    document.getElementById("new-content").style.display = "none";
    newCheck = true;
  }
}
function shop() {
  if (shopCheck) {
    document.getElementById("shop-content").style.display = "flex";
    document.getElementById("collection-content").style.display = "none";
    document.getElementById("sale-content").style.display = "none";
    document.getElementById("new-content").style.display = "none";
    shopCheck = false;
  } else {
    document.getElementById("shop-content").style.display = "none";
    shopCheck = true;
  }
}
function collect() {
  if (collectCheck) {
    document.getElementById("collection-content").style.display = "flex";
    document.getElementById("sale-content").style.display = "none";
    document.getElementById("new-content").style.display = "none";
    document.getElementById("shop-content").style.display = "none";
    collectCheck = false;
  } else {
    document.getElementById("collection-content").style.display = "none";
    collectCheck = true;
  }
}
function sale() {
  if (saleCheck) {
    document.getElementById("sale-content").style.display = "flex";
    document.getElementById("new-content").style.display = "none";
    document.getElementById("shop-content").style.display = "none";
    document.getElementById("collection-content").style.display = "none";
    saleCheck = false;
  } else {
    document.getElementById("sale-content").style.display = "none";
    saleCheck = true;
  }
}

// Search Bar
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    icon.onclick = () => {
      webLink = `https://www.google.com/search?q=${userData}`;
      linkTag.setAttribute("href", webLink);
      linkTag.click();
    };
    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = `<li>${data}</li>`);
    });
    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active"); 
  }
};
function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    webLink = `https://www.google.com/search?q=${selectData}`;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
  };
  searchWrapper.classList.remove("active");
}
function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}
