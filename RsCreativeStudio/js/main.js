window.onload = function () {
    pageSetup();
    slideshow();
};


baseDiv = document.getElementsByClassName("baseDiv");
slide = document.getElementsByClassName("slide");
thumb = document.getElementsByClassName("thumb");


function pageSetup() {

    for (let index = 0; index < baseDiv.length; index++) {
        baseDiv[index].style.zIndex = `${index + 1}`;
        baseDiv[index].setAttribute("id", `baseDiv${index + 1}`);

    }

    /*for (let index = 0; index < slide.length; index++) {
        slide[index].style.zIndex = `${index + 1}`;
       
    }*/

}

function slideshow() {

        for (let i = 0; i < thumb.length; i++) {

            thumb[i].addEventListener("click", function () {

                
                var selected = document.getElementsByClassName("selected");
                selected[0].className = selected[0].className.replace(" selected", "");
                slide[i].className += " selected";

                var thumbA = document.getElementsByClassName("thumbActive");
                thumbA[0].className = thumbA[0].className.replace(" thumbActive", "");
                thumb[i].className += " thumbActive";
        
            });

        }
    
}


