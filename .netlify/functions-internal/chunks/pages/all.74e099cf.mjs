/* empty css                              */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot } from '../astro.2baccee1.mjs';
import 'html-escaper';

const $$Astro$7 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`<<<<<<< HEAD:src/components/Navigation.svelte
${maybeRenderHead($$result)}<div class=" absolute top-0 w-full h-16 flex items-end justify-end bg-[#e37500]
  ">
  <a href="/" class="text-white text-decoration-none text-2xl p-4 inline-block hover:text-black" --- --- <div class="bg-[#e37500] absolute top-0 w-full h-16 flex items-end justify-end">
  </a><a href="/" class="text-white text-decoration-none text-2xl p-4 inline-block">>>>>>> main:src/components/Navigation.astro
    >Home</a>
  <a href="/about-me/" class="text-white text-decoration-none text-2xl p-4 inline-block">About</a>
  <a href="/photography/" class="text-white text-decoration-none text-2xl p-4 inline-block">Photography</a>
  <a href="/music/" class="text-white text-decoration-none text-2xl p-4 inline-block">Music</a>
  <a href="/programming/" class="text-white text-decoration-none text-2xl p-4 inline-block">Programming</a>
  <a href="/blog/" class="text-white text-decoration-none text-2xl p-4 inline-block">Blog</a>
</div>`;
}, "/Users/joshuala/Projects/personal-website/src/components/Navigation.astro");

const $$Astro$6 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Main;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en" class="text-white bg-[#0a1828] font-sans">
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="viewport" content="width=device-width">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>${pageTitle}</title>
  ${renderHead($$result)}</head>
  <body>
    <div class="h-16 w-full">
    ${renderComponent($$result, "Navigation", $$Navigation, {})}
    </div>
    <h1 class="text-center text-6xl">${pageTitle}</h1>
    ${renderSlot($$result, $$slots["default"])}
  </body></html>`;
}, "/Users/joshuala/Projects/personal-website/src/layouts/Main.astro");

const $$Astro$5 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Home";
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": pageTitle })}`;
}, "/Users/joshuala/Projects/personal-website/src/pages/index.astro");

const $$file$5 = "/Users/joshuala/Projects/personal-website/src/pages/index.astro";
const $$url$5 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
Promise.resolve();
const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;
/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 */
function escape(value, is_attr = false) {
    const str = String(value);
    const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
    pattern.lastIndex = 0;
    let escaped = '';
    let last = 0;
    while (pattern.test(str)) {
        const i = pattern.lastIndex - 1;
        const ch = str[i];
        escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : (ch === '"' ? '&quot;' : '&lt;'));
        last = i + 1;
    }
    return escaped + str.substring(last);
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(context || (parent_component ? parent_component.$$.context : [])),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    const assignment = (boolean && value === true) ? '' : `="${escape(value, true)}"`;
    return ` ${name}${assignment}`;
}

/* src/components/PhotoSlide.svelte generated by Svelte v3.55.1 */

const PhotoSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let track;

	return `
<div class="${"flex gap-[4vmin] absolute left-1/2 top-1/4 select-none transform -translate-x-0 -translate-y--1/2"}" id="${"image-track"}" data-mouse-down-at="${"0"}" data-prev-percentage="${"0"}"${add_attribute("this", track, 0)}><img class="${"w-[40vmin] h-[56vmin] object-cover object-[100%]"}" src="${"https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}" draggable="${"false"}" alt="${"a"}">
  <img class="${"w-[40vmin] h-[56vmin] object-cover object-[100%]"}" src="${"https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"}" draggable="${"false"}" alt="${"a"}">
  <img class="${"w-[40vmin] h-[56vmin] object-cover object-[100%]"}" src="${"https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}" draggable="${"false"}" alt="${"a"}">
  <img class="${"w-[40vmin] h-[56vmin] object-cover object-[100%]"}" src="${"https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}" draggable="${"false"}" alt="${"a"}">
  <img class="${"w-[40vmin] h-[56vmin] object-cover object-[100%]"}" src="${"https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}" draggable="${"false"}" alt="${"a"}">
  <img class="${"w-[40vmin] h-[56vmin] object-cover object-[100%]"}" src="${"https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"}" draggable="${"false"}" alt="${"a"}">
  <img class="${"w-[40vmin] h-[56vmin] object-cover object-[100%]"}" src="${"https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"}" draggable="${"false"}" alt="${"a"}">
  <img class="${"w-[40vmin] h-[56vmin] object-cover object-[100%]"}" src="${"https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}" draggable="${"false"}" alt="${"a"}"></div>`;
});

const $$Astro$4 = createAstro();
const $$Photography = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Photography;
  const pageTitle = "Photography";
  return renderTemplate`${maybeRenderHead($$result)}<body class=" h-screen w-screen m-0 overflow-hidden">
${renderComponent($$result, "Main", $$Main, { "pageTitle": pageTitle }, { "default": () => renderTemplate`${renderComponent($$result, "PhotoSlide", PhotoSlide, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/joshuala/Projects/personal-website/src/components/PhotoSlide.svelte", "client:component-export": "default" })}` })}
</body>`;
}, "/Users/joshuala/Projects/personal-website/src/pages/photography.astro");

const $$file$4 = "/Users/joshuala/Projects/personal-website/src/pages/photography.astro";
const $$url$4 = "/photography";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Photography,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Programming = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Programming;
  const pageTitle = "Programming";
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": pageTitle })}`;
}, "/Users/joshuala/Projects/personal-website/src/pages/programming.astro");

const $$file$3 = "/Users/joshuala/Projects/personal-website/src/pages/programming.astro";
const $$url$3 = "/programming";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Programming,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const pageTitle = "About-Me";
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": pageTitle })}`;
}, "/Users/joshuala/Projects/personal-website/src/pages/about-me.astro");

const $$file$2 = "/Users/joshuala/Projects/personal-website/src/pages/about-me.astro";
const $$url$2 = "/about-me";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AboutMe,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Music = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Music;
  const pageTitle = "Music";
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": pageTitle })}`;
}, "/Users/joshuala/Projects/personal-website/src/pages/music.astro");

const $$file$1 = "/Users/joshuala/Projects/personal-website/src/pages/music.astro";
const $$url$1 = "/music";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Music,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const pageTitle = "Blog";
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": pageTitle })}`;
}, "/Users/joshuala/Projects/personal-website/src/pages/blog.astro");

const $$file = "/Users/joshuala/Projects/personal-website/src/pages/blog.astro";
const $$url = "/blog";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e };
