
        const data= {
            rapido: {
                title: "Rápido",
                text: "Mudanzas que no te harán perder el tiempo. ¡Nosotros nos encargamos de todo!",
                image: "./assets/imagenes/fotos_gal/gal_fto11-rapido.jpg" 
            },
            facil: {
                title: "Fácil",
                text: "Nos ocupamos de todo para que tu mudanza sea sencilla y sin estrés.",
                image: "./assets/imagenes/fotos_gal/gal_fto12-facil.jpg"
            },
            divertido: {
                title: "Divertido",
                text: "Hacemos que la experiencia de mudanza sea positiva y sin preocupaciones.",
                image: "./assets/imagenes/fotos_gal/gal_fto7_divertido.jpg"
            },
            seguro: {
                title: "Seguro",
                text: "Tus pertenencias están protegidas en cada paso del proceso.",
                image: "./assets/imagenes/fotos_gal/gal_fto8-seguro.jpg"
            },
            economico: {
                title: "Económico",
                text: "Precios justos y sin sorpresas, para que mudarte no sea un problema.",
                image: "./assets/imagenes/fotos_gal/gal_fto9_eco.jpg"
            }
        };

        /*Agregar evento a cada botón*/
        const buttons = document.querySelectorAll(".lista_menu button");
    const contentArea = document.getElementById("contenido_din"); 

    // Agregar evento a cada botón
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            contentArea.innerHTML = `
                <div class="txt">
                    <h3>${data[category].title}</h3>
                    <p>${data[category].text}</p>
                </div>
                <div class="fto_menu">
                    <img src="${data[category].image}" alt="Imagen de ${data[category].title}" width="500px">
                </div>
            `;
            // Quitar la clase 'active' de todos los botones
            buttons.forEach(btn => btn.classList.remove("active"));

            // Agregar la clase 'active' al botón seleccionado
            button.classList.add("active");
        });
    });
    /*document.getElementById('menu-toggle').addEventListener('click', function() {
        var menu = document.getElementById('menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });*/
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('menu-icon').addEventListener('click', function() {
            const navList = document.querySelector('.lista_nav');
            navList.classList.toggle('active'); // Agrega o quita la clase 'active' para mostrar/ocultar el menú
        });
    });
