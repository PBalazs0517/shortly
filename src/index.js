import nav from "./nav";
import validation from "./validation";
import shortener from "./shortener";
import {createLinks, loadLinks} from "./manageLinks";

nav();
loadLinks();

const btn = document.querySelector(".action-shortener--btn");
btn.addEventListener("click", () => {
    createLinks(shortener(validation()));
});
