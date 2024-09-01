let show = true;
function showBar() {
    if (show) {
        document.getElementById('page').style.display = 'none';
    }


    if (show) {
        document.getElementById('pro').style.display = 'block';
        show = false;
    }
    else{
        document.getElementById('pro').style.display = 'none';
        show = true;
    }
}
let shows = true;
function showBarPage() {
    if (shows) {
        document.getElementById('pro').style.display = 'none';
    }

    if (shows) {
        document.getElementById('page').style.display = 'block';
        shows = false;
    }
    else{
        document.getElementById('page').style.display = 'none';
        shows = true;
    }
}
let search = true;
function searchBar() {

    if (search) {
        document.getElementById('search').style.display = 'block';
        search = false;
    }
    else{
        document.getElementById('search').style.display = 'none';
        search = true;
    }
}
let menu = true;
function menuBar() {
    if (search) {
        document.getElementById('menu').style.display = 'block';
        search = false;
    }
    else{
        document.getElementById('menu').style.display = 'none';
        search = true;
    }
}

function htmlChange(e) {

 

    let name = e.id;
  
    if(name == "products"){
      document.getElementById("product").style.display = "flex";
      document.getElementById("products").style.backgroundColor = "#437C8A";
      document.getElementById("products").style.color = "white";

       document.getElementById('list').style.display = "none";
       document.getElementById('lists').style.backgroundColor = "#EEEEEE";
       document.getElementById("lists").style.color = "black";


    }
  
    if (name == "lists"){
      document.getElementById("list").style.display = "flex";
      document.getElementById("lists").style.backgroundColor = "#437C8A";
      document.getElementById("lists").style.color = "white";

      document.getElementById('product').style.display = "none";
      document.getElementById('products').style.backgroundColor = "#EEEEEE";
      document.getElementById('products').style.color = "black";
    }
}