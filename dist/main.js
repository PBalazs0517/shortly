(()=>{"use strict";function e(){const e=document.querySelector(".action-shortener"),t=document.querySelector(".action-shortener--input");if(""!=t.value)return document.querySelector(".errMsg")&&(e.removeChild(e.lastChild),t.classList.remove("invalid")),t.value;if(document.querySelector(".errMsg")&&(e.removeChild(e.lastChild),t.classList.remove("invalid")),!document.querySelector(".errMsg")){e.style.position="relative",t.classList.add("invalid");const n=document.createElement("p");n.classList.add("errMsg"),n.innerHTML="Please add a link",e.appendChild(n)}}function t(){let e,t=[],n=0;for(e=localStorage.key(n);null!=e;)t.unshift(JSON.parse(localStorage.getItem(e))),n++,e=localStorage.key(n);return t}function n(){if(document.getElementById("linksCont"))return;if(0==t().length)return;const e=document.querySelector(".action"),n=document.createElement("div");n.id="linksCont",n.classList.add("linksCont"),n.classList.add("|"),n.classList.add("margin-top-700"),n.classList.add("flex-resp"),e.appendChild(n)}function o(e){const t=document.getElementById("linksCont"),n=document.createElement("div");n.id="linkCont",n.classList.add("linkCont"),n.classList.add("|"),n.classList.add("flex-resp");const o=document.createElement("a");o.innerHTML=e.ol;const s=document.createElement("a");s.classList.add("sl"),s.innerHTML=e.sl;const r=document.createElement("button");r.dataset.link=e.sl,r.innerHTML="Copy",r.classList.add("button"),n.appendChild(o),n.appendChild(s),n.appendChild(r),t.insertBefore(n,t.firstChild),r.addEventListener("click",(e=>{const t=r.dataset.link;console.log(t),navigator.clipboard.writeText(t),r.style.cssText="background-color: var(--clr-primary-400);",r.innerHTML="Copied!",setTimeout((()=>{r.style.cssText="",r.innerHTML="Copy"}),"400")}))}!function(){const e=document.querySelector(".hamburger"),t=document.querySelector(".nav-lscont"),n=document.querySelector("header");e.addEventListener("click",(()=>{t.classList.toggle("menu-mobile-open"),t.style.top=n.getBoundingClientRect().height+"px"})),document.addEventListener("click",(n=>{t.contains(n.target)||n.target==e||e.contains(n.target)||t.classList.remove("menu-mobile-open")})),window.addEventListener("resize",(()=>{t.classList.remove("menu-mobile-open")}))}(),n(),document.getElementById("linksCont"),t().forEach((e=>{o(e)})),document.querySelector(".action-shortener--btn").addEventListener("click",(()=>{!async function(e){const t=await e;localStorage.setItem(function(){let e,t=0;for(e=localStorage.key(t);null!=e;)t++,e=localStorage.key(t);return t}(),JSON.stringify(t)),n(),o(t)}(async function(){const t=e();if(null==t)return;const n=document.querySelector(".action-shortener"),o=document.querySelector(".action-shortener--input"),s=await fetch(`https://api.shrtco.de/v2/shorten?url=${t}`),r=await s.json();if(r.ok)return console.log(r),{ol:r.result.original_link,sl:r.result.short_link2};{n.style.position="relative",o.classList.add("invalid");const e=document.createElement("p");return e.classList.add("errMsg"),e.innerHTML=r.error,void n.appendChild(e)}}(e()))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLEtBS3RDLE9BSkFELEVBQU9MLFVBQVVJLElBQUksVUFDckJDLEVBQU9FLFVBQVkyRCxFQUFTTSxXQUM1Qi9FLEVBQUtlLFlBQVlILEVBR3JCLENBQ0osQ0RsQmdCb0UsQ0FBVVYsS0FBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVtLXVybHNob3J0Ly4vc3JjL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vZmVtLXVybHNob3J0Ly4vc3JjL21hbmFnZUxpbmtzLmpzIiwid2VicGFjazovL2ZlbS11cmxzaG9ydC8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vZmVtLXVybHNob3J0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2ZlbS11cmxzaG9ydC8uL3NyYy9zaG9ydGVuZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGlvbi1zaG9ydGVuZXJcIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGlvbi1zaG9ydGVuZXItLWlucHV0XCIpO1xuXG4gICAgaWYoaW5wdXQudmFsdWUgPT0gXCJcIikge1xuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVyck1zZ1wiKSkge1xuICAgICAgICAgICAgY29udC5yZW1vdmVDaGlsZChjb250Lmxhc3RDaGlsZClcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyTXNnXCIpKSB7XG4gICAgICAgICAgICBjb250LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgICAgICAgICBjb25zdCBlcnJNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIGVyck1zZy5jbGFzc0xpc3QuYWRkKFwiZXJyTXNnXCIpO1xuICAgICAgICAgICAgZXJyTXNnLmlubmVySFRNTCA9IFwiUGxlYXNlIGFkZCBhIGxpbmtcIjtcbiAgICAgICAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoZXJyTXNnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyTXNnXCIpKSB7XG4gICAgICAgICAgICBjb250LnJlbW92ZUNoaWxkKGNvbnQubGFzdENoaWxkKVxuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXQudmFsdWU7XG4gICAgfTtcbn07IiwiZnVuY3Rpb24gZ2V0SW5kZXhGb3JOZXh0KCkge1xuICAgIGxldCBrZXk7XG4gICAgbGV0IGkgPSAwO1xuICAgIGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgd2hpbGUoa2V5ICE9IG51bGwpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgIH07XG4gICAgcmV0dXJuIGk7XG59O1xuXG5mdW5jdGlvbiBnZXRBbGxJdGVtQmFzZWRPbkluZGV4KCkge1xuICAgIGxldCBsaW5rcyA9IFtdO1xuICAgIGxldCBrZXk7XG4gICAgbGV0IGkgPSAwO1xuICAgIGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgd2hpbGUoa2V5ICE9IG51bGwpIHtcbiAgICAgICAgbGlua3MudW5zaGlmdChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpKSBcbiAgICAgICAgaSsrO1xuICAgICAgICBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgIH07XG4gICAgcmV0dXJuIGxpbmtzO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlQ29udCgpIHtcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmtzQ29udFwiKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBpZihnZXRBbGxJdGVtQmFzZWRPbkluZGV4KCkubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aW9uXCIpO1xuICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnQuaWQgPSBcImxpbmtzQ29udFwiO1xuICAgIGNvbnQuY2xhc3NMaXN0LmFkZChcImxpbmtzQ29udFwiKTtcbiAgICBjb250LmNsYXNzTGlzdC5hZGQoXCJ8XCIpO1xuICAgIGNvbnQuY2xhc3NMaXN0LmFkZChcIm1hcmdpbi10b3AtNzAwXCIpO1xuICAgIGNvbnQuY2xhc3NMaXN0LmFkZChcImZsZXgtcmVzcFwiKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNvbnQpO1xufTtcblxuZnVuY3Rpb24gRE9NKGFyZykge1xuICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmtzQ29udFwiKTtcblxuICAgIGNvbnN0IGxpbmtDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaW5rQ29udC5pZCA9IFwibGlua0NvbnRcIjtcbiAgICBsaW5rQ29udC5jbGFzc0xpc3QuYWRkKFwibGlua0NvbnRcIik7XG4gICAgbGlua0NvbnQuY2xhc3NMaXN0LmFkZChcInxcIik7XG4gICAgbGlua0NvbnQuY2xhc3NMaXN0LmFkZChcImZsZXgtcmVzcFwiKTtcbiAgICBjb25zdCBvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIG9sLmlubmVySFRNTCA9IGFyZy5vbDtcbiAgICBjb25zdCBzbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHNsLmNsYXNzTGlzdC5hZGQoXCJzbFwiKVxuICAgIHNsLmlubmVySFRNTCA9IGFyZy5zbDtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5kYXRhc2V0LmxpbmsgPSBhcmcuc2w7XG4gICAgYnRuLmlubmVySFRNTCA9IFwiQ29weVwiO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuXG4gICAgbGlua0NvbnQuYXBwZW5kQ2hpbGQob2wpO1xuICAgIGxpbmtDb250LmFwcGVuZENoaWxkKHNsKTtcbiAgICBsaW5rQ29udC5hcHBlbmRDaGlsZChidG4pO1xuICAgIGNvbnQuaW5zZXJ0QmVmb3JlKGxpbmtDb250LCBjb250LmZpcnN0Q2hpbGQpO1xuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgY29uc3QgY29weVR4dCA9IGJ0bi5kYXRhc2V0Lmxpbms7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvcHlUeHQpO1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5VHh0KTtcblxuICAgICAgICBidG4uc3R5bGUuY3NzVGV4dCA9IFwiYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnktNDAwKTtcIjtcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiQ29waWVkIVwiO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYnRuLnN0eWxlLmNzc1RleHQgPSBcIlwiO1xuICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiQ29weVwiO1xuICAgICAgICB9LCBcIjQwMFwiKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVMaW5rcyhwcm9taXNlKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHByb21pc2U7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ2V0SW5kZXhGb3JOZXh0KCksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgIGNyZWF0ZUNvbnQoKTtcbiAgICBET00oZGF0YSlcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTGlua3MoKSB7XG4gICAgY3JlYXRlQ29udCgpO1xuICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmtzQ29udFwiKTtcblxuXG4gICAgY29uc3QgbGlua3MgPSBnZXRBbGxJdGVtQmFzZWRPbkluZGV4KCk7XG4gICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgRE9NKGxpbmspO1xuICAgIH0pXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGhhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xuICAgIGNvbnN0IGxzY29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWxzY29udFwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAgIGhhbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsc2NvbnQuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1tb2JpbGUtb3BlbicpO1xuICAgICAgICBsc2NvbnQuc3R5bGUudG9wID0gaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArIFwicHhcIjtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYoIWxzY29udC5jb250YWlucyhlLnRhcmdldCkgJiYgZS50YXJnZXQgIT0gaGFtICYmICFoYW0uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICBsc2NvbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1tb2JpbGUtb3BlbicpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgbHNjb250LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtbW9iaWxlLW9wZW4nKTtcbiAgICB9KTtcbn07IiwiaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZcIjtcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gXCIuL3ZhbGlkYXRpb25cIjtcbmltcG9ydCBzaG9ydGVuZXIgZnJvbSBcIi4vc2hvcnRlbmVyXCI7XG5pbXBvcnQge2NyZWF0ZUxpbmtzLCBsb2FkTGlua3N9IGZyb20gXCIuL21hbmFnZUxpbmtzXCI7XG5cbm5hdigpO1xubG9hZExpbmtzKCk7XG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aW9uLXNob3J0ZW5lci0tYnRuXCIpO1xuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY3JlYXRlTGlua3Moc2hvcnRlbmVyKHZhbGlkYXRpb24oKSkpO1xufSk7XG4iLCJpbXBvcnQgdmFsaWRhdGlvbiBmcm9tIFwiLi92YWxpZGF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHVybCA9IHZhbGlkYXRpb24oKTtcblxuICAgIGlmKHVybCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBjb25zdCBjb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3Rpb24tc2hvcnRlbmVyXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3Rpb24tc2hvcnRlbmVyLS1pbnB1dFwiKTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuc2hydGNvLmRlL3YyL3Nob3J0ZW4/dXJsPSR7dXJsfWApXG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBkYXRhLmpzb24oKTtcblxuICAgIGlmKGpzb25EYXRhLm9rKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb25EYXRhKTtcbiAgICAgICAgcmV0dXJuIHtvbDoganNvbkRhdGEucmVzdWx0Lm9yaWdpbmFsX2xpbmssIHNsOiBqc29uRGF0YS5yZXN1bHQuc2hvcnRfbGluazJ9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgICAgICBjb25zdCBlcnJNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgZXJyTXNnLmNsYXNzTGlzdC5hZGQoXCJlcnJNc2dcIik7XG4gICAgICAgIGVyck1zZy5pbm5lckhUTUwgPSBqc29uRGF0YS5lcnJvcjtcbiAgICAgICAgY29udC5hcHBlbmRDaGlsZChlcnJNc2cpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9O1xufTsiXSwibmFtZXMiOlsiY29udCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0IiwidmFsdWUiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN0eWxlIiwicG9zaXRpb24iLCJhZGQiLCJlcnJNc2ciLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJnZXRBbGxJdGVtQmFzZWRPbkluZGV4Iiwia2V5IiwibGlua3MiLCJpIiwibG9jYWxTdG9yYWdlIiwidW5zaGlmdCIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJjcmVhdGVDb250IiwiZ2V0RWxlbWVudEJ5SWQiLCJsZW5ndGgiLCJzZWN0aW9uIiwiaWQiLCJET00iLCJhcmciLCJsaW5rQ29udCIsIm9sIiwic2wiLCJidG4iLCJkYXRhc2V0IiwibGluayIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvcHlUeHQiLCJjb25zb2xlIiwibG9nIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY3NzVGV4dCIsInNldFRpbWVvdXQiLCJoYW0iLCJsc2NvbnQiLCJoZWFkZXIiLCJ0b2dnbGUiLCJ0b3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJjb250YWlucyIsInRhcmdldCIsIndpbmRvdyIsIm5hdiIsImZvckVhY2giLCJhc3luYyIsInByb21pc2UiLCJkYXRhIiwic2V0SXRlbSIsImdldEluZGV4Rm9yTmV4dCIsInN0cmluZ2lmeSIsImNyZWF0ZUxpbmtzIiwidXJsIiwidmFsaWRhdGlvbiIsInVuZGVmaW5lZCIsImZldGNoIiwianNvbkRhdGEiLCJqc29uIiwib2siLCJyZXN1bHQiLCJvcmlnaW5hbF9saW5rIiwic2hvcnRfbGluazIiLCJlcnJvciIsInNob3J0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=