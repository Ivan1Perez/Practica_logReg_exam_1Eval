/*let contenedor = document.getElementById("contenedor");
let registro = document.getElementById("register");
let login = document.getElementById("login");

let userList = JSON.parse(localStorage.getItem("listaUsuarios"));

const crearUsuario = (usuario, password) => ({
    usuario: usuario,
    password: password
});

const borrarFormulario = e => {
    let formulario = e.target.parentNode.parentNode;
    formulario.remove();
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarInformacion);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function mostrarInformacion(position) {

    let lon = document.getElementById("lon");
    let lat = document.getElementById("lat");

    let longitud = position.coords.longitude;
    let latitud = position.coords.latitude;

    lon.innerHTML = "Longitud: " + longitud;
    lat.innerHTML = "Latitud: " + latitud;

    rellenarInfo(lon, lat);

}

function rellenarInfo(lon, lat) {

    $url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=648327c420f7fc9ef0d13b668f4c59b2";
    fetch($url, {
        method: "GET",
    }).then(res => {
        return res.json();
    })
        .then(data => {
            pasarDatos(data);
        })
        .catch(error => {
            console.error(error);
        });

}

function pasarDatos(data) {

    let time = document.getElementById("time");
    let max = document.getElementById("max");
    let min = document.getElementById("min");

    time.innerHTML = data['weather'][0]['main'];
    max.innerHTML = "Temp. Max: " + data['main']['temp_max'];
    min.innerHTML = "Temp. Min: " + data['main']['temp_min'];

}

const generarApp = () => {


    let mitad = document.createElement("div");
    mitad.classList.add('mitad');
    contenedor.appendChild(mitad);

    let mitad2 = document.createElement("div");
    mitad2.classList.add('mitad');
    contenedor.appendChild(mitad2);

    let box1 = document.createElement("div");
    box1.classList.add('box1');
    mitad.appendChild(box1);

    let box2 = document.createElement("div");
    box2.classList.add('box2');
    mitad.appendChild(box2);

    let forecast = document.createElement("div");
    forecast.classList.add('forecast');
    mitad2.appendChild(forecast);

    let geolocation = document.createElement("div");
    geolocation.classList.add("geolocation");
    box1.appendChild(geolocation);

    let dias = document.createElement("div");
    dias.classList.add("dias");
    box1.appendChild(dias);

    let condition = document.createElement("div");
    condition.classList.add("condition");
    box2.appendChild(condition);

    let lon = document.createElement("p");
    lon.classList.add("lon");
    lon.setAttribute("id", "lon");
    geolocation.appendChild(lon);

    let lat = document.createElement("p");
    lat.classList.add("lat");
    lat.setAttribute("id", "lat");
    geolocation.appendChild(lat);

    let time = document.createElement("p");
    time.classList.add("time");
    time.setAttribute("id", "time");
    condition.appendChild(time);

    let max = document.createElement("p");
    max.classList.add("max");
    max.setAttribute("id", "max");
    condition.appendChild(max);

    let min = document.createElement("p");
    min.classList.add("max");
    min.setAttribute("id", "min");
    condition.appendChild(min);

    let select = document.createElement("select");

    let option1 = document.createElement("option");
    option1.setAttribute("value", "2");
    let option1Texto = document.createTextNode("2");
    option1.appendChild(option1Texto);

    let option2 = document.createElement("option");
    option2.setAttribute("value", "4");
    let option2Texto = document.createTextNode("4");
    option2.appendChild(option2Texto);

    let option3 = document.createElement("option");
    option3.setAttribute("value", "5");
    let option3Texto = document.createTextNode("5");
    option3.appendChild(option3Texto);

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);

    dias.appendChild(select);

    getLocation();

}


login.addEventListener("click", e => {

    let user = document.getElementById("usuario").value;
    let pwd = document.getElementById("password").value;

    if (!userList) {
        alert("No existen usuarios registrados");
    } else {
        let usuario = userList.filter(
            (Usuario) => Usuario.usuario == user
        );

        if (usuario[0] == undefined) {
            alert("No existen usuarios con ese nombre");
        } else {
            if (usuario[0].password == pwd) {
                console.log("Sesión correcta");
                borrarFormulario(e);
                generarApp();
            } else {
                alert("La contraseña introducida no es correcta");
            }
        }
    }


});

registro.addEventListener("click", e => {

    if (!userList) {
        userList = [];
    }

    let user = document.getElementById("usuario").value;
    let pwd = document.getElementById("password").value;

    let existeUsuario = userList.some(o => o.usuario === user);
    if (existeUsuario) {
        alert("Nombre de usuario no disponible.");
    } else {
        userList.push(crearUsuario(user, pwd));
        localStorage.setItem("listaUsuarios", JSON.stringify(userList));
        borrarFormulario(e);
        generarApp();
    }

});*/



let userList = JSON.parse(localStorage.getItem("userList"));

const signupBtn = document.getElementById('signupBtn')

signupBtn.addEventListener('click', e => {
    e.preventDefault();

    if (!userList) {
        userList = [];
    } else {
        console.log(userList);
    }

    let username = document.getElementById('username').value;
    let pwd = document.getElementById('password').value;

    let existeUsuario = userList.some(user => user.username === username)
    if (existeUsuario) {
        alert("Nombre de usuario no disponible.");
    } else {
        let newUser = {
            username: username,
            password: pwd
        }
        userList.push(newUser)
        localStorage.setItem("userList", JSON.stringify(userList))
    }

    console.log(JSON.parse(localStorage.getItem("userList")));

})