document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    //si el login existe, se le asigna su evento al botón
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que la info se mande de inmediato al server, nos da tiempo de desarrollar alguna lógica
        window.location.href = "pages/home.html";
    });
    }

    //declaración de algunos elementos necesarios
    const btnModalOcultarTitulo = document.getElementById("btnModalOcultarTitulo");
    const btnModalWatchTitle = document.getElementById("btnModalWatchTitle");
    const btnModalRegresar = document.getElementById("btnModalRegresar");
    const btnModalCancelar = document.getElementById("btnModalCancelar");
    const modalShowMoreText = document.getElementById("modalShowMoreText");
    const modalHideTitleText = document.getElementById("modalHideTitleText");
    let selectedCard = null;
    const hideTitleModal = new bootstrap.Modal(document.getElementById("hideTitleModal"));
    const showMoreModal = new bootstrap.Modal(document.getElementById("showMoreModal"));
    
    //traemos todos los botones de "no mostrar" y se le asigna el evento
    document.querySelectorAll(".hide-title, .show-more").forEach((btn) => {
        btn.addEventListener("click", (evt) => {
            const selectedCardID = evt.target.getAttribute("card-id");//traemos el atributo especial que contiene el id de la card
            selectedCard = document.getElementById(selectedCardID);
            
            if (evt.target.classList.contains("btn-danger")) {
                hideTitleModal.show();
            }
            else if (evt.target.classList.contains("btn-primary")) {
                getReview(selectedCardID);
                showMoreModal.show();
            }
            
        })
    });

    function getReview(cardId) {

        fetch("../assets/json/reviews.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`No se pudo abrir el archivo json ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            data.forEach((obj) => {
                if (obj.titleID == cardId) {
                    modalShowMoreText.innerText = obj.review;
                }
            });


        })
        .catch((err) => console.error("No se pudo abrir el json " + err));
    }



    //Se le asigan su evento al boton de "regresar" del modal
    btnModalRegresar.addEventListener("click", () => hideTitleModal.hide());
    btnModalCancelar.addEventListener("click", () => showMoreModal.hide());

    btnModalWatchTitle.addEventListener("click", () => alert("Proximamente!"));

    //Si se seleccionó alguna carta con anterioridad, dicha carta desaparece
    btnModalOcultarTitulo.addEventListener("click", (evt) => {
        if(selectedCard) {
            selectedCard.remove();
            selectedCard = null;
        }
        hideTitleModal.hide();
    });
});
