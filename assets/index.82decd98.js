import{r as e,o,c as t,a as r,t as n,F as s,p as l,b as i,d as a,e as c,f as d,g as u}from"./vendor.d735427e.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const o=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?o.credentials="include":"anonymous"===e.crossorigin?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,o)}}();var p=(e,o)=>{for(const[t,r]of o)e[t]=r;return e};const g=e=>(l("data-v-3d3c9e2e"),e=e(),i(),e),f=g((()=>r("p",null,[a(" Recommended IDE setup: "),r("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),a(" + "),r("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1))),m=g((()=>r("p",null,[r("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Documentation "),a(" | "),r("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1))),h=g((()=>r("p",null,[a(" Edit "),r("code",null,"components/HelloWorld.vue"),a(" to test hot module replacement. ")],-1)));var v=p({props:{msg:String},setup(l){const i=e(0);return(e,a)=>(o(),t(s,null,[r("h1",null,n(l.msg),1),f,m,r("button",{type:"button",onClick:a[0]||(a[0]=e=>i.value++)},"count is: "+n(i.value),1),h],64))}},[["__scopeId","data-v-3d3c9e2e"]]);const b=r("img",{alt:"Vue logo",src:"/assets/logo.03d6d6da.png"},null,-1),k={setup:e=>(e,r)=>(o(),t(s,null,[b,c(v,{msg:"Hello Vue 3 + Vite"})],64))};d(`${{}.BASE_URL}service-worker.js`,{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),u(k).mount("#app");
