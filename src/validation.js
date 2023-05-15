export default function () {
    const cont = document.querySelector(".action-shortener");
    const input = document.querySelector(".action-shortener--input");

    if(input.value == "") {
        if(document.querySelector(".errMsg")) {
            cont.removeChild(cont.lastChild)
            input.classList.remove("invalid")
        }
        if(!document.querySelector(".errMsg")) {
            cont.style.position = "relative";
            input.classList.add("invalid");
            const errMsg = document.createElement('p')
            errMsg.classList.add("errMsg");
            errMsg.innerHTML = "Please add a link";
            cont.appendChild(errMsg);
        }
    } else {
        if(document.querySelector(".errMsg")) {
            cont.removeChild(cont.lastChild)
            input.classList.remove("invalid")
        }
        return input.value;
    };
};