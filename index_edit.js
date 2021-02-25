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

const konten = document.getElementById("listReview")
konten.addEventListener('click', deletEditReview)
//

generateCard(reviews)

const edit = document.getElementsByClassName("edit")
edit.addEventListener("click", editReview)
// if ()


function mulai(event) {
    event.preventDefault()
    generateCard(reviews)
    document.getElementById('mulai').style.display = 'none';
}

function generateCard(reviews) {
    console.log(reviews)
    for (let i = 0; i < reviews.length; i++) {
        // console.log('pokemons')
        let cardContainer = document.createElement('div')
        cardContainer.classList.add('card')
        console.log('cardContainer')
        let namaPokemon = document.createElement('h2')
        namaPokemon.innerText = reviews[i].name
        cardContainer.appendChild(namaPokemon)

        let tipePokemon = document.createElement('p')
        tipePokemon.innerText = reviews[i].review
        cardContainer.appendChild(tipePokemon)

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

function clearCard() {
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
        clearCard()
        console.log(reviews)
        generateCard(reviews)
    } else if (event.srcElement.attributes.class.value == 'edit') {
        // console.log(event.srcElement.attributes.class.value)
        // console.log(reviews[idx].name)
        document.getElementById('spoiler').style.display = 'block';
        let el = document.getElementById('edit-name');
        let el1 = document.getElementById('edit-text');
        // console.log(el)
        // Display value in the field
        el.value = reviews[idx].name
        el1.value = reviews[idx].review
        // Display fields
        // console.log(el.value)
        // self = this;

        document.getElementById('saveEdit').onsubmit = function (event) {
            // Get value
            event.preventDefault()
            console.log("keprint")
            // var country = el.value;
            let current = {
                name: el.value,
                review: el1.value,
            }
            console.log(current)
            // Edit value
            reviews.splice(idx, 1, current);
            console.log(reviews)
            // Display the new list
            // console.log(current)
            clearCard()
            generateCard(reviews);
            // Hide fields
            CloseInput();
        };
    }
    // console.log(`${event.srcElement.attributes.value.value}`)
}

