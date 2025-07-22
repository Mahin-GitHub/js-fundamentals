const addToLocalStorage = () => {

    const idInput = document.getElementById("storage-id");
    const id = idInput.value;
    const valueInput = document.getElementById("storage-value");
    const value = valueInput.value;

    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = "";
    valueInput.value = "";

    // const pen = {price:10,color:'black'};
    // localStorage.setItem ('pen',JSON.stringify(pen));
    // localStorage.setItem('numbers', JSON.stringify([1, 2, 3, 4, 5, 6]));

    // const getPen = JSON.parse(localStorage.getItem('pen'));
    // const getNumber = JSON.parse(localStorage.getItem('numbers'));

}