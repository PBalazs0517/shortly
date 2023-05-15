import validation from "./validation";

export default async function() {
    const url = validation();

    if(url == undefined) {
        return;
    };

    const cont = document.querySelector(".action-shortener");
    const input = document.querySelector(".action-shortener--input");

    const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    const jsonData = await data.json();

    if(jsonData.ok) {
        console.log(jsonData);
        return {ol: jsonData.result.original_link, sl: jsonData.result.short_link2};
    } else {
        cont.style.position = "relative";
        input.classList.add("invalid");
        const errMsg = document.createElement('p')
        errMsg.classList.add("errMsg");
        errMsg.innerHTML = jsonData.error;
        cont.appendChild(errMsg);

        return;
    };
};