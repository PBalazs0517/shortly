function getIndexForNext() {
    let key;
    let i = 0;
    key = localStorage.key(i);
    while(key != null) {
        i++;
        key = localStorage.key(i);
    };
    return i;
};

function getAllItemBasedOnIndex() {
    let links = [];
    let key;
    let i = 0;
    key = localStorage.key(i);
    while(key != null) {
        links.unshift(JSON.parse(localStorage.getItem(key))) 
        i++;
        key = localStorage.key(i);
    };
    return links;
};

function createCont() {
    if(document.getElementById("linksCont")) {
        return;
    };
    if(getAllItemBasedOnIndex().length == 0) {
        return;
    };
    const section = document.querySelector(".action");
    const cont = document.createElement("div");
    cont.id = "linksCont";
    cont.classList.add("linksCont");
    cont.classList.add("|");
    cont.classList.add("margin-top-700");
    cont.classList.add("flex-resp");
    section.appendChild(cont);
};

function DOM(arg) {
    const cont = document.getElementById("linksCont");

    const linkCont = document.createElement("div");
    linkCont.id = "linkCont";
    linkCont.classList.add("linkCont");
    linkCont.classList.add("|");
    linkCont.classList.add("flex-resp");
    const ol = document.createElement("a");
    ol.innerHTML = arg.ol;
    const sl = document.createElement("a");
    sl.classList.add("sl")
    sl.innerHTML = arg.sl;
    const btn = document.createElement("button");
    btn.dataset.link = arg.sl;
    btn.innerHTML = "Copy";
    btn.classList.add("button");

    linkCont.appendChild(ol);
    linkCont.appendChild(sl);
    linkCont.appendChild(btn);
    cont.insertBefore(linkCont, cont.firstChild);

    btn.addEventListener("click", e => {
        const copyTxt = btn.dataset.link;
        console.log(copyTxt);
        navigator.clipboard.writeText(copyTxt);

        btn.style.cssText = "background-color: var(--clr-primary-400);";
        btn.innerHTML = "Copied!";

        setTimeout(() => {
            btn.style.cssText = "";
            btn.innerHTML = "Copy";
        }, "400");
    });
};

export async function createLinks(promise) {
    const data = await promise;
    localStorage.setItem(getIndexForNext(), JSON.stringify(data));

    createCont();
    DOM(data)
};

export function loadLinks() {
    createCont();
    const cont = document.getElementById("linksCont");


    const links = getAllItemBasedOnIndex();
    links.forEach(link => {
        DOM(link);
    })
};