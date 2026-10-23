/* script.js — এটা শুধু config.js এর তথ্য দিয়ে সাইট বানায়। সাধারণত বদলানোর দরকার নেই। */
const C = CONFIG, $ = s => document.querySelector(s);
const e = t => String(t ?? "").replace(/[&<>"]/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
const asset = path => path.split("/").map(encodeURIComponent).join("/");
const ext = l => /^https?:/.test(l) ? ' target="_blank" rel="noopener"' : "";
const socialSvg = icon => {
  const icons = {
    facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3H13.5V7.5c0-.9.3-1.5 1.6-1.5H17V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.3v8h3.2Z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Zm5.1-2.7a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2Z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.9 8.5A1.7 1.7 0 1 1 6.9 5a1.7 1.7 0 0 1 0 3.5ZM5.5 10h2.8v9H5.5v-9Zm4.7 0h2.7v1.2h.1c.4-.7 1.3-1.5 2.9-1.5 3 0 3.5 2 3.5 4.5V19h-2.8v-17.4h-2.8v7.2c0 1.8-.1 4.2-2.6 4.2-2.6 0-3-2.1-3-4.3V10Z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 12c0-1.7-.2-3.4-.6-5-.4-1.8-1.7-3.2-3.5-3.7C16.5 2.5 13.6 2 12 2s-4.5.5-6.9 1.3C3.3 3.8 2 5.2 1.6 7c-.4 1.6-.6 3.3-.6 5s.2 3.4.6 5c.4 1.8 1.7 3.2 3.5 3.7C7.5 21.5 10.4 22 12 22s4.5-.5 6.9-1.3c1.8-.5 3.1-1.9 3.5-3.7.4-1.6.6-3.3.6-5Zm-13.6 3.4V8.6l6.1 3.4-6.1 3.4Z"/></svg>`,
    behance: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 7.5h5.2c2.4 0 3.8 1.2 3.8 3.1 0 1.4-.8 2.3-1.9 2.7 1.5.3 2.4 1.6 2.4 3.3 0 2.2-1.9 3.4-4.5 3.4H3.5V7.5Zm3.4 4.3h1.1c1 0 1.6-.4 1.6-1.2 0-.8-.6-1.2-1.6-1.2H6.9v2.4Zm0 4.7h1.5c1.3 0 2-.5 2-1.5 0-1-.7-1.5-2-1.5H6.9v3Zm9.3-7.2h5.3v1.9h-5.3v-1.9Zm5.3 5.5c-.5 1.4-1.7 2.3-3.6 2.3-2.7 0-4.5-1.8-4.5-4.5 0-2.7 1.8-4.6 4.5-4.6 2.6 0 4.2 1.7 4.4 4.2h-2.6c-.2-.9-.8-1.4-1.8-1.4-1.2 0-2 .9-2 2.3 0 1.4.9 2.3 2 2.3 1.1 0 1.7-.5 1.9-1.5h2.7Z"/></svg>`
  };
  return icons[icon] || icons.facebook;
};
const brandColors = {
  facebook: '#1877F2',
  instagram: '#E4405F',
  linkedin: '#0A66C2',
  youtube: '#FF0000',
  behance: '#1769FF'
};
const tl = a => `<ul class="tl">${a.map(i => `<li><span class="w">${e(i.when)}</span><h4>${e(i.title)}</h4>${i.where ? `<div class="p">${e(i.where)}</div>` : ""}${i.text ? `<p>${e(i.text)}</p>` : ""}</li>`).join("")}</ul>`;
const S = C.show, pad = n => String(n + 1).padStart(2, "0");
const parts = [
 ["", "", () => `<header class="hero" id="home"><div class="flare"></div>
   <div class="portrait"><img src="${e(asset(C.photo))}" alt="${e(C.name)}" fetchpriority="high"></div>
   <div class="hero2"><div class="hc">${C.available ? `<span class="live"><i></i>${e(C.available)}</span>` : ""}<h1><span>${e(C.firstLine)}</span><span>${e(C.secondLine)}</span></h1><p class="role">${e(C.role)}</p><p class="note">${e(C.heroNote)}</p><div class="btns"><a class="big" href="#work">View my work</a><a class="ghost" href="#contact">Contact me</a></div><div class="loc">${e(C.location)}</div></div></div></header>
   <div class="marq"><div>${[...C.ticker, ...C.ticker, ...C.ticker, ...C.ticker].map(t => `<span>${e(t)}</span><span>✦</span>`).join("")}</div></div>`, 1],
["gallery", "Gallery", () => `<section id="gallery"><div class="wrap rv"><span class="k">Raju gallery</span><h2>My <em>moments.</em></h2></div><div class="gallery-grid wrap">${(C.galleryImages || []).map(src => `<figure class="gallery-card"><img src="${e(asset(`Raju all pic/${src}`))}" alt="${e(src.replace(/\.[^.]+$/, ''))}"></figure>`).join("")}</div></section>`, (C.galleryImages || []).length > 0],
["about", "About", () => `<section id="about"><div class="wrap about rv"><div><span class="k">About me</span><h2>Behind <em>the lens.</em></h2></div><div>${C.about.map(p => `<p>${e(p)}</p>`).join("")}${C.stats?.length ? `<div class="stats">${C.stats.map(s => `<div><b>${e(s.n)}</b><span>${e(s.label)}</span></div>`).join("")}</div>` : ""}</div></div></section>`, S.about],
 ["services", "Services", () => `<section id="services"><div class="wrap rv"><span class="k">What I do</span><h2>Services</h2>${C.services.map((s, i) => `<div class="row service-${(i % 6) + 1}"><span class="n">${pad(i)}</span><h3>${e(s.title)}</h3><p>${e(s.text)}</p><div class="tags">${(s.tags || []).map(t => `<i>${e(t)}</i>`).join("")}</div></div>`).join("")}</div></section>`, S.services && C.services.length],
 ["work", "Work", () => `<section id="work"><div class="wrap rv"><span class="k">Selected work</span><h2>The <em>reel.</em></h2></div><div class="strip">${C.projects.map(p => `<article class="poster"><div class="img" style="${p.image ? `background-image:url('${e(/^https?:/.test(p.image) ? p.image : asset(p.image))}')` : `background:linear-gradient(${150 + p.title.length * 17}deg,#3a2a14,#0f1c26 70%,#6db1dc55)`}"><span class="cat">${e(p.category)}</span><h3>${e(p.title)}</h3><p>${e(p.text)}</p>${p.link ? `<a class="go" href="${e(p.link)}"${ext(p.link)}>View project ↗</a>` : ""}</div></article>`).join("")}</div><div class="wrap"><p class="hint">Scroll sideways to browse →</p></div></section>`, S.work && C.projects.length],
 ["freelance", "Freelance", () => `<section id="freelance"><div class="wrap rv"><span class="k">Freelancing</span><h2>How I <em>work.</em></h2><p style="color:var(--mut);margin:-20px 0 34px">${e(C.freelance.intro)}</p><div class="plat">${C.freelance.platforms.map(p => `<a href="${e(p.link)}"${ext(p.link)}><b>${e(p.name)}</b><span>${e(p.note)}</span></a>`).join("")}</div><div class="steps">${C.freelance.steps.map(s => `<div><h3>${e(s.title)}</h3><p>${e(s.text)}</p></div>`).join("")}</div></div></section>`, S.freelance],
 ["journey", "Journey", () => `<section id="journey"><div class="wrap rv"><span class="k">Study & story</span><h2>My <em>journey.</em></h2><div class="two"><div><h4 style="font:400 30px var(--serif);margin:0 0 24px">Education & Training</h4>${tl(C.education)}</div><div><h4 style="font:400 30px var(--serif);margin:0 0 24px">Work Experience</h4>${tl(C.story)}</div></div></div></section>`, S.journey],
 ["skills", "Skills", () => `<section id="skills"><div class="wrap rv"><span class="k">Toolkit</span><h2>Skills</h2><p class="skill-intro">${e(C.skillsIntro)}</p><div class="tags skill-tags">${C.skillFocus.map(s => `<i>${e(s)}</i>`).join("")}</div></div></section>`, S.skills && C.skillFocus.length],
 ["contact", "Contact", () => `<section class="contact" id="contact"><div class="wrap rv"><span class="k">Contact</span><h2>Let's make<br><em>something great.</em></h2><p>${e(C.contactText)}</p><a class="big" href="mailto:${e(C.email)}">Email me ↗</a><div class="cl"><span>${e(C.email)}</span></div><div class="soc">${C.socials.map(s => `<a href="${e(s.link)}"${ext(s.link)} style="--brand-color:${brandColors[s.icon] || '#f0a54a'}"><span class="social-icon">${socialSvg(s.icon || s.name.toLowerCase())}</span><span>${e(s.name)}</span></a>`).join("")}</div></div></section>`, 1]
].filter(p => p[3]);
document.title = `${C.name} — ${C.role}`;
$("#nav").innerHTML = `<a class="brand" href="#gallery">${e("RAJU")}</a>` + parts.filter(p => p[0] && p[0] !== "contact" && p[0] !== "gallery").map(p => `<a class="l" href="#${p[0]}">${p[1]}</a>`).join("") + `<a class="pill" href="#contact">Hire me</a>`;
$("#main").innerHTML = parts.map(p => p[2]()).join("") + `<footer>© ${new Date().getFullYear()} ${e(C.name)}. All rights reserved.</footer>`;
const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: .12 });
document.querySelectorAll(".rv").forEach(x => io.observe(x));
