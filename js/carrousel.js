(function()
    {
        console.log('début carrousel');
        let carrousel__ouvrir = document.querySelector(".carrousel__ouvrir");
        let carrousel__x = document.querySelector(".carrousel__x");
        let carrousel = document.querySelector(".carrousel");
        let carrousel__figure = document.querySelector(".carrousel__figure");
        console.log(carrousel__figure.tagName);
        let galerie = document.querySelector(".galerie");
        let galerie__img = galerie.querySelectorAll("img");

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
                // console.log(elm.getAttribute("src"));
                let img = document.createElement("img");
                img.setAttribute("src", elm.getAttribute("src"));
                carrousel__figure.appendChild(img);
                console.log(img.getAttribute("src"));
            }

            // for (let i = 0; i < galerie__img.length; i++) {

            //     let img = document.createElement("img");
            //     img.setAttribute("src", galerie__img[i].src);
            //     carrousel__figure.appendChild(img);
                
            // }
        }
    }
)()