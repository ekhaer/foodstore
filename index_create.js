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
const delet = document.getElementById("listReview")
delet.addEventListener('click', hapus)
const edit = document.getElementById("listReview")
edit.addEventListener('click', EditReview)

render(reviews)

function hapus(event) {
    event.preventDefault();
    const item = event.target;
    if (item.classList[0] === 'delet') {
        const comment = item.parentElement;
        comment.remove()
    }
}

function addReview(event) {
    // clearArr()
    event.preventDefault();
    let obj = {
        name: document.getElementById("name").value,
        review: document.getElementById("review").value
    }
    reviews.push(obj)
    console.log(reviews);
    clearArr();
    render(reviews);
}

function EditReview(event) {
    event.preventDefault()
    const idx = Number(event.srcElement.attributes.value.value)
    //Buat dapetin index dari array yang dimaksud di event(saat klik)
    if (event.srcElement.attributes.class.value == 'edit') {
        //conditional apabila value class merupakan edit
        document.getElementById('spoiler').style.display = 'block';
        //menampilkan edit bar untuk digunakan
        let el = document.getElementById('edit-name');
        let el1 = document.getElementById('edit-text');
        el.value = reviews[idx].name
        el1.value = reviews[idx].review
        //menampilkan value yang mau diubah


        document.getElementById('saveEdit').onsubmit = function (event) {
            // Saat submit diklik data akan disimpan menjalankan fungsi edit
            event.preventDefault()
            //mencegah refresh saat function dijalankan
            let current = {
                name: el.value,
                review: el1.value,
            }
            //membuat objek baru untuk mereplace edit

            reviews.splice(idx, 1, current);
            console.log(reviews)
            //memasukan hasil editan dan menggantikan yang sebelumnya

            clearArr()
            //membersihkan yang sebelumnya
            render(reviews);
            //menampilkan data array yang baru
            CloseInput();
            //menyembunyikan kembali box editor 
        };
    }
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
        editButton.setAttribute('id', 'edit')
        editButton.classList.add("edit")
        cardContainer.appendChild(editButton)

        let deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'
        deleteButton.setAttribute('type', 'submit')
        deleteButton.setAttribute('value', i)
        deleteButton.setAttribute('id', 'delet')
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



