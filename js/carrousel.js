(function()
    {
        console.log('Début du carrousel');
        // Variables pour le carrousel
        let carrousel__ouvrir = document.querySelector(".carrousel__ouvrir");
        let carrousel__x = document.querySelector(".carrousel__x");
        let carrousel = document.querySelector(".carrousel");
        let carrousel__figure = document.querySelector(".carrousel__figure");
        let carrousel__form = document.querySelector(".carrousel__form");

        // Variables pour les flèches
        let fleche__gauche = document.querySelector(".fleche__gauche");
        let fleche__droite = document.querySelector(".fleche__droite");

        // Variables pour la galerie
        let galerie = document.querySelector(".wp-block-gallery");
        let galerie__img = galerie.querySelectorAll("img");
        // console.log(galerie__img.length);
        
        // Variable pour la position et l'index
        let index = 0;
        let ancien_index = -1;
        let position = 0;


        // Boucle qui permet de construire le carrousel
        for (const elm of galerie__img) {
            elm.dataset.index = position
            elm.addEventListener('mousedown', function(){
                if (carrousel.classList.contains('carrousel--ouvrir') == false) {
                    carrousel.classList.add('carrousel--ouvrir')
                }
                    index = this.dataset.index
                    afficher_image(index)
                    console.log(index)
                })
            creation_img_carrousel(elm)
            creation_radio_carrousel()
        } 

        // Ouvrir la boîte modale
        carrousel__ouvrir.addEventListener('mousedown', function(){
            index = 0;
            carrousel.classList.add("carrousel--ouvrir")
            creation_img_carrousel(elm);
        })

        // Fermer la boîte modale
        carrousel__x.addEventListener('mousedown', function(){
             carrousel.classList.remove("carrousel--ouvrir")
        })


        // Créer les images dans le carrousel
        function creation_img_carrousel(elm){
            //console.log(elm.getAttribute('src'))
            let img = document.createElement('img')
            // img.setAttribute('src', elm.getAttribute('src'))
            img.src = elm.src
            img.classList.add('carrousel__img')
            //console.log (img.getAttribute('src'))
            carrousel__figure.appendChild(img)
        }

        // Créer un bouton radio
        function  creation_radio_carrousel(){
            let rad = document.createElement('input')
            // console.log(rad.tagName)
            rad.setAttribute('type','radio')
            rad.setAttribute('name', 'carrousel__rad')
            rad.classList.add('carrousel__rad')
            rad.dataset.index = position
            position++
            carrousel__form.appendChild(rad)
            rad.addEventListener('mousedown', function(){
                // console.log(this.dataset.index)
                index = this.dataset.index
                afficher_image(index)
            })
        }
    
        // Fonction pour gérer l'affichage des images
        function afficher_image(index){
            if (ancien_index != -1){
                // carrousel__figure.children[ancien_index].style.opacity = 0  
                carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer')
                carrousel__form.children[ancien_index].checked = false;
                fleche__droite.addEventListener('mousedown', function(){
                    console.log("Clic flèche");
                    index = ancien_index;
                    position++;
                })
            }

            // carrousel__figure.children[index].style.opacity = 1
            carrousel__figure.children[index].classList.add('carrousel__img--activer')
            carrousel__form.children[index].checked = true;
            ancien_index = index
        }
    }
)()