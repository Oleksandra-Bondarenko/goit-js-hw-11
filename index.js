import{a as u,S as d,i}from"./assets/vendor-B4VkUtbg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(s){return u.get("https://pixabay.com/api/",{params:{key:"57566280-4551ff72abb6b2c46ea49083b",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader-wrapper"),p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function m(s){const o=s.map(r=>`<li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img
              class="gallery-image"
              src="${r.webformatURL}"
              alt="${r.tags}"
            />
            </a>

            <div class="info">
              <p class="info-item">
                Likes
                <span>${r.likes}</span>
              </p>

              <p class="info-item">
                Views
                <span>${r.views}</span>
              </p>

              <p class="info-item">
                Comments
                <span>${r.comments}</span>
              </p>

              <p class="info-item">
                Downloads
                <span>${r.downloads}</span>
              </p>
            </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",o),p.refresh()}function h(){l.innerHTML=""}function y(){c.classList.remove("is-hidden")}function g(){c.classList.add("is-hidden")}const L=document.querySelector(".form");L.addEventListener("submit",b);function b(s){s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();o!==""&&(h(),y(),f(o).then(r=>{if(r.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",theme:"dark"});return}m(r.hits)}).catch(r=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#EF4040",theme:"dark"})}).finally(()=>{g()}),s.currentTarget.reset())}
//# sourceMappingURL=index.js.map
