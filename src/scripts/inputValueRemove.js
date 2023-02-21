const inputs = document.querySelectorAll('input');

export function inputValueRemove() {
    inputs.forEach(element => {
        element.addEventListener('click', function(){
            element.value = "";
            element.style.color = "black";
        });
    });
}