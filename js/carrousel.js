(function()
    {
        console.log('début carrousel');
        let carrousel__ouvrir = document.querySelector(".carrousel__ouvrir");
        let carrousel = document.querySelector(".carrousel");
        carrousel__ouvrir.addEventListener('mousedown', function(){
            carrousel.classList.add("carrousel--ouvrir")
        })
    }
)()