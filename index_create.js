let reviews = []

// const konten = document.getElementById('listReview');
const addButton = document.getElementById('form-button');
addButton.addEventListener('click', addReview);
// const review = document.getElementById("review").value;


function addReview(event){
    clearArr()
    event.preventDefault();
    let obj = {
        nama : document.getElementById("name").value,
        review : document.getElementById("review").value
    }
    reviews.push(obj)
    console.log(reviews);
    render(reviews);
}

function clearArr(){
    reviews = [];
}

function render(arr){
    // const konten = document.getElementById('reviewsList');
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i]);
        let data = arr[i];
        let listElement = document.createElement('li');
        listElement.classList.add('li-review');
        listElement.innerText = data.nama + ' ' + data.review;
        console.log(listElement);
        //adding edit button
        let editIcon = document.createElement('span');
        let deleteIcon = document.createElement('span');

        editIcon.innerHTML = ' edit ';
        deleteIcon.innerHTML = ' delete ';

        editIcon.className = 'edit';
        deleteIcon.className = 'delete';

        listElement.appendChild(editIcon);
        listElement.appendChild(deleteIcon);

        document.getElementById('reviewsList').appendChild(listElement);
    }
}