// Creamos una funcion para que cuando detecte el scroll, cambie de color
const changeBackground = () => {
    if (window.scrollY >= 80) {
        document.getElementById("Navbar").style.backgroundColor = "#111";
    } else {
        document.getElementById("Navbar").style.backgroundColor = "transparent";
    }
    }

// Creamos un evento para que cuando se haga scroll, se ejecute la funcion
window.addEventListener("scroll", changeBackground);