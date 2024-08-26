document.addEventListener('DOMContentLoaded', function() {

    let items = JSON.parse(localStorage.getItem('prayers')) ;

    const tableBody = document.getElementById('here');

    items.forEach(item => {
        const newRow = tableBody.insertRow();

        const cell1 = newRow.insertCell(0);
        cell1.textContent = item; 

        /*const cell2 = newRow.insertCell(1);
        cell2.textContent = '';*/

        /*const cell3 = newRow.insertCell(2);
        cell3.textContent = '';*/
    });
});
