fetch('http://localhost/prueba.js')
    .then(response => response.json())
    .then(data => console.log(data));