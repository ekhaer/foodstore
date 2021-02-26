var reviews = [
    {
        name: 'farhantaufiks',
        review: 'Makananya enak harganya murah',
    },
    {
        name: 'siapaajaboleh',
        review: 'kurang enak aga keaseman',
    },
]


const addButton = document.getElementById('form-button');
addButton.addEventListener('click', addReview);
const konten = document.getElementById("listReview")
konten.addEventListener('click', deletEditReview)


render(reviews)

// const delButton = document.getElementById('reviewsList');
// delButton.addEventListener('click', hapus);

// function hapus(event) {
//   const item = event.target;
//   if (item.classList[0] === 'delet') {
//     const comment = item.parentElement;
//     comment.remove()
//   }

// }

function addReview(event){
    // clearArr()
    event.preventDefault();
    let obj = {
        name : document.getElementById("form-input-name").value,
        review : document.getElementById("form-input-text").value
    }
    reviews.push(obj)
    console.log(reviews);
    clearArr();
    render(reviews);
}


function render(arr) {

    for (let i = 0; i < arr.length; i++) {

        let cardContainer = document.createElement('ul')
        cardContainer.classList.add('card')


        let data = arr[i]
        let listElement = document.createElement('li')
        listElement.innerText = `${data.name}: ${data.review}`;
        cardContainer.appendChild(listElement)

        let editButton = document.createElement('button')
        editButton.innerText = 'Edit'
        editButton.setAttribute('type', 'submit')
        editButton.setAttribute('value', i)
        editButton.classList.add("edit")
        // editButton.onclick = toggleEditor()
        cardContainer.appendChild(editButton)

        let deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'
        deleteButton.setAttribute('type', 'submit')
        deleteButton.setAttribute('value', i)
        deleteButton.classList.add("delet")
        cardContainer.appendChild(deleteButton)

        konten.appendChild(cardContainer)
    }
}

function clearArr() {
    konten.innerHTML = ''
}
function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}

function deletEditReview(event) {
    event.preventDefault()
    const idx = Number(event.srcElement.attributes.value.value)
    if (event.srcElement.attributes.class.value == 'delet') {
        reviews.splice(idx, 1)
        clearArr()

        render(reviews)
    } else if (event.srcElement.attributes.class.value == 'edit') {

        document.getElementById('spoiler').style.display = 'block';
        let el = document.getElementById('edit-name');
        let el1 = document.getElementById('edit-text');

        // Display value in the field
        el.value = reviews[idx].name
        el1.value = reviews[idx].review
        // Display fields


        document.getElementById('saveEdit').onsubmit = function (event) {
            // Get value
            event.preventDefault()

            // var country = el.value;
            let current = {
                name: el.value,
                review: el1.value,
            }

            // Edit value
            reviews.splice(idx, 1, current);
            console.log(reviews)
            // Display the new list

            clearArr()
            render(reviews);
            // Hide fields
            CloseInput();
        };
    }
    // console.log(`${event.srcElement.attributes.value.value}`)
}

