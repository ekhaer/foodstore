let reviews = [
    {
        name : 'Salad Buah',
        review : 'ada'
    }
]

const content = document.getElementById("content");
// let formInputText = document.querySelector(".form-input-name");

// const addButton = document.querySelector(".form-button");
// addButton.addEventListener('click', addReview);


var btnSave = document.getElementById("save_task");
function init(){
    if(!!(window.localStorage.getItem('reviews'))){
        reviews = JSON.parse(window.localStorage.getItem('reviews'));
    } else {
      reviews = [];
    }
    btnSave.addEventListener('click', addReview);
    showList();
}

function addReview(){
    // 'click'.preventDefault();
    console.log('click');
    let name = document.getElementById('name').value;
    let review = document.getElementById('text').value;
    const formInputText = document.querySelector(".form-input-name");
    let obj = {
        name : name,
        review : review
    };
    reviews.push(obj);
    console.log("reviews", reviews);
    // return reviews;
    listReview(reviews);
}

function listReview(reviews){
    let deleteIcon = document.createElement('span');
    let editIcon = document.createElement('span');
    let list = document.createElement('li');

    deleteIcon.innerHTML = 'delete';
    deleteIcon.className = "delete-review";

    editIcon.innerHTML = 'edit';
    editIcon.className= 'edit-review';

    list.appendChild(deleteIcon);
    list.appendChild(editIcon);
    for(let i = 0; i < reviews.length; i++){
        list.innerHTML += reviews[i].name;
    }
    let listReview = document.getElementById("theList");
    listReview.appendChild(list);
}