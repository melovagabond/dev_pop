const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const API_URL = 'http://localhost:5000/pops';

loadingElement.style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const pop = {
        name,
        content
    };
    console.log(pop);
    form.style.display = 'none';
    loadingElement.style.display = '';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(pop),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
    .then(createdPop => {
        console.log(createdPop);
        form.reset();
        form.style.display = '';
        loadingElement.style.display = 'none';
    });
});

function listAllPops(){
    fetch(API_URL)
    .then(response => response.json())
    .then(pops => {
        console.log(pops);
    });
}