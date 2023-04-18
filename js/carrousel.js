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
        let ancien__index = -1;

        console.log(galerie__img.length);



        carrousel__ouvrir.addEventListener('mousedown', function(){
            carrousel.classList.add("carrousel--ouvrir")
            ajouter_img_dans_carrousel();
        })

        carrousel__x.addEventListener('mousedown', function(){
            carrousel.classList.remove("carrousel--ouvrir")
        })

        function ajouter_img_dans_carrousel() {
            for(const elm of galerie__img) {
                creation_img_carrousel(elm);
                creation_radio_carrousel();
            }

            // for (let i = 0; i < galerie__img.length; i++) {

            //     let img = document.createElement("img");
            //     img.setAttribute("src", galerie__img[i].src);
            //     carrousel__figure.appendChild(img);
                
            // }
        }

        function creation_img_carrousel(elm) {
            // console.log(elm.getAttribute("src"));
            let img = document.createElement("img");
            img.setAttribute("src", elm.getAttribute("src"));
            carrousel__figure.appendChild(img);
            console.log(img.getAttribute("src"));
            img.classList.add("carrousel__img");
        }

        let position = 0;

        // Création d'un bouton radio
        function creation_radio_carrousel() {
            let rad = document.createElement("input");
            rad.setAttribute("type", "radio");
            rad.setAttribute("name", "carrousel__rad");
            rad.classList.add("carrousel__rad");
            rad.dataset.index = position;
            position++;
            carrousel__form.appendChild(rad);

            rad.addEventListener("mousedown", function() {
                console.log(this.dataset.index);
                let index = this.dataset.index;
                if (ancien__index != -1) {
                    carrousel__figure.children[ancien__index].classList.remove("carrousel__img--activer");
                }
                carrousel__figure.children[index].classList.add("carrousel__img--activer");
                ancien__index = index;
            })
        }
    }
)()