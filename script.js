// ---------- Content data ----------
// Edit these arrays to update publications, software links, and career timeline.

const selectedPubs = [
  { num: 1, tag: "Methods", title: "Making survival spatial: an integrated model for territory occupancy and capture-recapture data.", meta: "In review at Methods in Ecology and Evolution (2026)", doi: "10.32942/X2BH4D" },
  { num: 2, tag: "Applied", title: "Evaluating the demographic impacts of the highly pathogenic avian influenza panzootic.", meta: "Journal of Applied Ecology, 63(1): e70234 (2026)", doi: "10.1111/1365-2664.70234" },
  { num: 3, tag: "Methods", title: "Performance of generalized distance sampling models with temporary emigration: a simulation study.", meta: "Oikos, 2026(2): e11544 (2026)", doi: "10.1002/oik.11544" },
  { num: 4, tag: "Applied", title: "Fall and rise of a threatened raptor: unraveling long-term population dynamics with spatially explicit integrated models.", meta: "Ecological Applications, 35(2): e70013 (2025)", doi: "10.1002/eap.70013" },
  { num: 5, tag: "Methods", title: "Joint estimation of survival and dispersal effectively corrects the permanent emigration bias in mark-recapture analyses.", meta: "Scientific Reports, 13(1): 6970 (2023)", doi: "10.1038/s41598-023-32866-0" },
  { num: 6, tag: "Applied", title: "Evaluating European LIFE conservation projects: improvements in survival of an endangered vulture.", meta: "Journal of Applied Ecology, 56(5): 1210–1219 (2019)", doi: "10.1111/1365-2664.13350" },
];

const fullPubs = [
  { num: 7, tag: "Applied", title: "Reinforcement is not enough to establish a viable population of the globally threatened Aquatic Warbler at the margin of its breeding range.", meta: "Ornithological Applications, duag012 (2026)", doi: "10.1093/ornithapp/duag012" },
  { num: 8, tag: "Applied", title: "Peregrine Falcon populations under threat again.", meta: "Animal Conservation, 29(2): 133–135 (2026)", doi: "10.1111/acv.70050" },
  { num: 9, tag: "Methods", title: "Comparison of Bayesian models to estimate survival from dead-recovery alone and together with live-encounter data.", meta: "Ecology and Evolution, 15(6): e71517 (2025)", doi: "10.1002/ece3.71517" },
  { num: 10, tag: "Applied", title: "Contrasting vital rate contributions across interconnected populations of a highly vagile avian scavenger: a multisite modelling approach.", meta: "Biological Conservation, 311: 111454 (2025)", doi: "10.1016/j.biocon.2025.111454" },
  { num: 11, tag: "Applied", title: "Assumptions about survival estimates and dispersal processes can have severe impacts on population viability assessments.", meta: "Biological Conservation, 292: 110550 (2024)", doi: "10.1016/j.biocon.2024.110550" },
  { num: 12, tag: "Applied", title: "Raptor reintroductions: cost-effective alternatives to captive breeding.", meta: "Animal Conservation, 25(2): 170–181 (2022)", doi: "10.1111/acv.12729" },
  { num: 13, tag: "Applied", title: "Evaluating population resilience to anticipated stressors using integrated population modeling: a case study of Peregrine Falcons.", meta: "In review at Journal of Ornithology (2026)", doi: "10.32942/X2BH31" },
  { num: 14, tag: "Applied", title: "Demographic causes of the pesticide crash in the peregrine falcon.", meta: "In review at Ecology (2025)", doi: "10.32942/X2R05B" },
  { num: 15, tag: "Methods", title: "A new computational framework for speeding up the fitting of multistate capture-mark-recapture models.", meta: "Submitted to Methods in Ecology and Evolution (2026)", doi: "10.32942/X2539M" },
  { num: 16, tag: "Report", title: "Power analysis for a potential white-backed woodpecker monitoring design in Switzerland.", meta: "Technical report, Swiss Ornithological Institute (2024)", doi: null },
  { num: 17, tag: "Report", title: "Estudio sobre la viabilidad de la extracción de pollos en la población de águila de Bonelli en Mallorca.", meta: "Technical report, Universitat de Barcelona & Aquila A-LIFE (2021)", doi: null },
];

// Add more cards here as new repos go live.
// repoLink -> the GitHub repo. viewLink -> the rendered output (e.g. GitHub Pages), omit if none yet.
const softwareCards = [
  { title: "hpai-demography", desc: "A Quarto tutorial walking through the peregrine falcon HPAI panzootic paper: building the integrated population model step by step, from raw data to the resilience analysis, with live code fetching the published data and posterior from Zenodo.", repoLink: "https://github.com/jaumebadiaboher/hpai-demography", viewLink: "https://jaumebadiaboher.github.io/hpai-demography/hpai_tutorial.html" },
];

const timeline = [
  { date: "Sep 2023 – present", role: "Postdoctoral Researcher in Statistical Ecology", org: "Swiss Ornithological Institute (Vogelwarte) · Supervisors: Marc Kéry & Michael Schaub" },
  { date: "2020 – 2023", role: "Doctoral Researcher in Biodiversity — PhD", org: "Universitat de Barcelona · Supervisor: Antonio Hernández-Matías" },
  { date: "Jun – Sep 2017", role: "Red List Officer", org: "IUCN Red List Unit, Cambridge, UK" },
  { date: "2016 – 2018", role: "MSc in Biology — Animal Ecology", org: "Lund University, Sweden" },
  { date: "2011 – 2015", role: "BSc in Environmental Biology", org: "Universitat Autònoma de Barcelona" },
];

// ---------- Render helpers ----------
function pubItemHTML(p){
  const doiLink = p.doi ? `<a class="pub-link" href="https://doi.org/${p.doi}" target="_blank" rel="noopener">DOI: ${p.doi} →</a>` : '';
  return `
    <div class="pub-item">
      <div class="pub-num">${String(p.num).padStart(2,'0')}</div>
      <div>
        <span class="pub-tag">${p.tag}</span>
        <p class="pub-title">${p.title}</p>
        <p class="pub-meta">${p.meta}</p>
        ${doiLink}
      </div>
    </div>`;
}

function renderPubs(){
  document.getElementById('pubListMain').innerHTML = selectedPubs.map(pubItemHTML).join('');
  document.getElementById('pubListFull').innerHTML = fullPubs.map(pubItemHTML).join('');
}

function renderSoftware(){
  document.getElementById('softwareCards').innerHTML = softwareCards.map(c => `
    <div class="card">
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <div class="card-links">
        <a class="pub-link" href="${c.repoLink}" target="_blank" rel="noopener">View repo →</a>
        ${c.viewLink ? `<a class="pub-link" href="${c.viewLink}" target="_blank" rel="noopener">Read tutorial →</a>` : ''}
      </div>
    </div>`).join('');
}

function renderTimeline(){
  document.getElementById('timelineList').innerHTML = timeline.map(t => `
    <li>
      <div class="tl-date">${t.date}</div>
      <p class="tl-role">${t.role}</p>
      <p class="tl-org">${t.org}</p>
    </li>`).join('');
}

// ---------- Interactions ----------
document.getElementById('togglePubs').addEventListener('click', (e) => {
  const full = document.getElementById('pubListFull');
  const hidden = full.hasAttribute('hidden');
  if (hidden){ full.removeAttribute('hidden'); e.target.textContent = 'Show fewer ↑'; }
  else { full.setAttribute('hidden', ''); e.target.textContent = 'Show full publication list ↓'; }
});

document.getElementById('navToggle').addEventListener('click', (e) => {
  const links = document.getElementById('navLinks');
  const open = links.classList.toggle('open');
  e.currentTarget.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  document.getElementById('navLinks').classList.remove('open');
}));

renderPubs();
if (document.getElementById('softwareCards')) renderSoftware(); // section is hidden for now — see index.html
renderTimeline();
