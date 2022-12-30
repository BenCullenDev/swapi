const button = document.querySelector('button'); //asign the button to a varible
button.addEventListener('click', fetchData); //add event listner to the button that calls the fetchData function

const clearButton = document.querySelector('.clear-button'); //asing variable to clear button
clearButton.addEventListener('click', clearData); //add event listner to clear button that calls the clearData function

async function fetchData() {
    try {
        const response = await fetch('https://swapi.py4e.com/api/'); //fetch from the API URL
        const data = await response.json(); //parse into JSON
        const container = document.querySelector('.container'); //asign variable to the container we want to change
        container.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`; //change inner html of the container to the response

    } catch (error) {
        console.error(error);
    }
}

function clearData() {
    const container = document.querySelector('.container'); //asign variable to the container we want to change
    container.innerHTML = ''; //set the inner html to nothing to clear it's contents.
}
