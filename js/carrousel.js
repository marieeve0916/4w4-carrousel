(function()
    {
        console.log('début carrousel');
        let carrousel__ouvrir = document.querySelector(".carrousel__ouvrir");
        let carrousel__x = document.querySelector(".carrousel__x");
        let carrousel = document.querySelector(".carrousel");
        let carrousel__figure = document.querySelector(".carrousel__figure");
        console.log(carrousel__figure.tagName);
        let galerie = document.querySelector(".wp-block-gallery");
        let galerie__img = galerie.querySelectorAll("img");
        let carrousel__form = document.querySelector(".carrousel__form");
        let index = 0;
        let ancien_index = -1;
        let position = 0;
        console.log(galerie__img.length);



        carrousel__ouvrir.addEventListener('mousedown', function(){
            carrousel.classList.add("carrousel--ouvrir")
            ajouter_img_dans_carrousel();
        })

        carrousel__x.addEventListener('mousedown', function(){
            carrousel.classList.remove("carrousel--ouvrir")
        })

    /** 
    * ajouter_img_dans_carrousel
    * Ajouter l'ensemble des images de la galerie dans la boîte modale carrousel
    */
    function ajouter_img_dans_carrousel()
    {
   
        for (const elm of galerie__img) {
            elm.dataset.index = position
            elm.addEventListener('mousedown',function(){
            index = this.dataset.index
            afficher_image(index)
            console.log(index)
            })
                creation_img_carrousel(elm)
                creation_radio_carrousel()
        }
    }
 
    function creation_img_carrousel(elm){
        //console.log(elm.getAttribute('src'))
        let img = document.createElement('img')
        // img.setAttribute('src', elm.getAttribute('src'))
        img.src = elm.src
        img.classList.add('carrousel__img')
        //console.log (img.getAttribute('src'))
        carrousel__figure.appendChild(img)
    }

    /**
    * Création d'un radio-bouton
    */
    function  creation_radio_carrousel(){
        let rad = document.createElement('input')
        console.log(rad.tagName)
        rad.setAttribute('type','radio')
        rad.setAttribute('name', 'carrousel__rad')
        rad.classList.add('carrousel__rad')
        rad.dataset.index = position
        position = position + 1 // incrémentation de 1
        // position += 1
        // position++
        carrousel__form.appendChild(rad)
        rad.addEventListener('mousedown', function(){
            console.log(this.dataset.index)
            index = this.dataset.index
            afficher_image(index)
        })
    }
 
 function afficher_image(index){
    if (ancien_index != -1){
            // carrousel__figure.children[ancien_index].style.opacity = 0  
            carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer')
            // Pour exercice
            //carrousel__form.children[ancien_index].checked = false;
        }
        // carrousel__figure.children[index].style.opacity = 1
            carrousel__figure.children[index].classList.add('carrousel__img--activer')
            ancien_index = index
        }
 
    }

    /**
     * permet de vérifier si la classe carrousel--activer se trouve dans la liste des classes
     * carrousel.classList.contain("carrousel--activer")
     * 
     * mdn classlist.contain
     */
)()