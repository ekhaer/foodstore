let reviews = []

// const konten = document.getElementById('listReview');
const addButton = document.getElementById('form-button');
addButton.addEventListener('click', addReview);
// const review = document.getElementById("review").value;

const delButton = document.getElementById('reviewsList');
delButton.addEventListener('click', hapus);

function hapus(event) {
  const item = event.target;
  if (item.classList[0] === 'delete') {
    const comment = item.parentElement;
    comment.remove()
  }
}

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
        listElement.innerText = `${data.nama}: ${data.review}`;
        console.log(listElement);
        //adding edit button
        let editIcon = document.createElement('button');
        let deleteIcon = document.createElement('button');

        editIcon.innerHTML = ' edit ';
        deleteIcon.innerHTML = ' delete ';

        editIcon.className = 'edit';
        deleteIcon.className = 'delete';
        deleteIcon.setAttribute('type', 'submit')
        editIcon.setAttribute('type', 'submit')

        listElement.appendChild(editIcon);
        listElement.appendChild(deleteIcon);

        document.getElementById('reviewsList').appendChild(listElement);
    }
}