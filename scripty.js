const contacts = [];
const nameBtn = document.getElementById("nameBtn");
const contactBtn = document.getElementById("contactBtn");
const filterInput = document.getElementById("filterInput");
const tbody = document.querySelector('#data');
const allcon = document.getElementById("allbtn");
const labe = document.querySelector('#filterInput')


function saveContacts(name, mobile) {
    // Check if mobile number already exists
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].mobile === mobile) {
            alert('Mobile number already exists!');
            return;
        }
    }

    // Add new contact to the array
    contacts.push({
        name: name,
        mobile: mobile
    });

    // Clear input fields
    document.querySelector('#nameInput').value = '';
    document.querySelector('#mobileInput').value = '';

    // Display contacts on screen
    displayContacts();
}

function displayContacts() {

    // Clear existing table rows
    tbody.innerHTML = '';

    // Add new table rows for each contact
    for (let i = 0; i < contacts.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.textContent = contacts[i].name;
        td2.textContent = contacts[i].mobile;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    }
}

const addContactButton = document.querySelector('#addContactButton');
addContactButton.addEventListener('click', function (event) {
    event.preventDefault();
    const nameInput = document.querySelector('#nameInput');
    const mobileInput = document.querySelector('#mobileInput');
    const name = nameInput.value.trim();
    const mobile = mobileInput.value.trim();

    if (name === '' || mobile === '') {
        alert('Name and Mobile fields are required!');
        return;
    }

    saveContacts(name, mobile);
});

function filterByName(arr, name) {
    const filteredArr = arr.filter(obj => obj.name.toLowerCase().includes(name.toLowerCase()));
    return filteredArr;
}
function filterByContact(arr, contactNo) {
    const filteredArr = arr.filter(obj => obj.mobile.includes(contactNo));
    return filteredArr;
}
nameBtn.addEventListener("click", () => {
    const filteredContacts = filterByName(contacts, filterInput.value);
    console.log(filteredContacts)
    // Clear existing table rows
    tbody.innerHTML = '';

    // Add new table rows for each contact
    for (let i = 0; i < filteredContacts.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.textContent = filteredContacts[i].name;
        td2.textContent = filteredContacts[i].mobile;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    }
});


contactBtn.addEventListener("click", () => {
    const filteredContacts = filterByContact(contacts, filterInput.value);
    console.log(filteredContacts)
    // Clear existing table rows
    tbody.innerHTML = '';

    // Add new table rows for each contact
    for (let i = 0; i < filteredContacts.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.textContent = filteredContacts[i].name;
        td2.textContent = filteredContacts[i].mobile;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    }
});
allcon.addEventListener("click", () => {
    console.log(contacts)
    // Clear existing table rows
    tbody.innerHTML = '';

    // Add new table rows for each contact
    for (let i = 0; i < contacts.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.textContent = contacts[i].name;
        td2.textContent = contacts[i].mobile;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    }
});