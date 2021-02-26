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
    let find = comment.querySelector('.li-review')
    let data = find.innerHTML
    console.log(find)
    let newReviews = []
    let temp = ''
    for (let i = 0; i < data.length; i++) {
        temp += data[i]
        // console.log(data[i])
        if (data[i] === ':') {
          break;
        }
      }
    for (let i = 0; i < reviews.length; i++) {
        if (temp !== reviews[i].nama) {
            newReviews.push(reviews[i])
        }
    }
    reviews = newReviews
    console.log(reviews)
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
        // create div
        let comment = document.createElement('div')
        comment.classList.add('comment')
        // create li
        let data = arr[i];
        let listElement = document.createElement('li');
        listElement.classList.add('li-review');
        listElement.innerText = `${data.nama}: ${data.review}`;
        comment.appendChild(listElement)
        // console.log(listElement);
        //adding edit button
        let editIcon = document.createElement('button');
        let deleteIcon = document.createElement('button');

        editIcon.innerHTML = ' edit ';
        deleteIcon.innerHTML = ' delete ';

        editIcon.className = 'edit';
        deleteIcon.className = 'delete';
        deleteIcon.setAttribute('type', 'submit')
        editIcon.setAttribute('type', 'submit')

        comment.appendChild(editIcon);
        comment.appendChild(deleteIcon);

        document.getElementById('reviewsList').appendChild(comment);
    }
}