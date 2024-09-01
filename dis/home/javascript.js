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