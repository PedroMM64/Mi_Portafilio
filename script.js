let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    // Función para agregar la clase 'active' al enlace de navegación
    function setActiveNavLink(id) {
        navLinks.forEach(link => {
            link.classList.remove("active");
        });
        const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }

    // Función para manejar el desplazamiento y la clase 'active'
    function handleScroll() {
        const scrollY = window.scrollY;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                setActiveNavLink(sectionId);
            }
        });
    }

    // Escuchar el evento scroll
    window.addEventListener('scroll', handleScroll);

    // Llamar a handleScroll al cargar la página
    handleScroll();
});

function toggleText() {
    var moreText = document.getElementById("ver-mas");
    var btnText = document.getElementById("toggle-button");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btnText.innerHTML = "Ver menos";
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "Ver más";
    }
}


window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .proyects-box, .educacion-box, .skills-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img, .contact a, .progress i', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content, .educacion .ver-cert, .skills-columnas h3', { origin: 'right' });