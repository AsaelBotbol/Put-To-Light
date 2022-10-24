fetch('http://localhost/prueba.js',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        usuario: "pepon",
        contrasenia: "1234"
    })
})
    .then(response => response.json())
    .then(data => console.log(data));