// ---------- Language data ----------
// Only fixed UI text lives here (nav, hero, section heads, ledes, card copy, footer).
// Publication titles, journal names, and timeline entries in script.js stay in
// English on every language, since that's the language they were actually
// published/written in - translating them would misrepresent the source.
// To add a language: add a key block below, and a button in the #langSwitch
// markup in index.html (data-lang must match the key here).

const translations = {
  en: {
    nav_research: "Research",
    nav_publications: "Publications",
    nav_collaborate: "Collaborate",
    nav_career: "Career",
    nav_cv: "CV",
    nav_contact: "Contact",

    hero_eyebrow: "Postdoctoral Researcher · Statistical Ecology",
    hero_tagline: "I build Bayesian models that turn scattered field data — capture histories, territory surveys, dead recoveries — into evidence for how populations grow, move, and decline, and into insights that management and conservation can actually act on.",
    hero_btn_contact: "Get in touch",

    research_eyebrow: "01 · What I study",
    research_h2: "Making demography spatial",
    research_lede: "My work spans spatially explicit demographic models, integrated population models, mark\u2011recapture frameworks, and species distribution models — with a focus on turning demographic inference into evidence\u2011based management.",

    pillar1_title: "Spatial demography",
    pillar1_desc: "Integrated population models that let survival, productivity, and dispersal vary in space — not just in time — and correct the biases that arise when they don't.",
    pillar2_title: "Disease & resilience",
    pillar2_desc: "Evaluating how emerging wildlife diseases — including the recent HPAI panzootic — reshape demographic rates and long-term population resilience.",
    pillar3_title: "Methods & computation",
    pillar3_desc: "Bayesian hierarchical modelling in JAGS/NIMBLE, simulation studies, and faster computational frameworks for fitting mark-recapture and distance-sampling models at scale.",
    pillar4_title: "Conservation applications",
    pillar4_desc: "Translating demographic inference into insights that are directly usable by managers and conservation practitioners — not just academic outputs.",

    pub_eyebrow: "02 · Selected output",
    pub_h2: "Publications",
    pub_lede_small: "128 citations · h-index 4 (as of June 2026)",
    toggle_show: "Show full publication list ↓",
    toggle_hide: "Show fewer ↑",

    collab_eyebrow: "03 · Collaborations",
    collab_h2: "Collaborations",
    collab_lede: "From time to time I'm approached by researchers, NGOs, or public administrations with a dataset and a question about what it's telling them — is a population declining, and why? Below are the kinds of data I most often work with. If that sounds like your situation, get in touch — depending on my schedule I may not always be able to take it on, but I'm always happy to hear about it.",

    card1_title: "Occupancy & distribution",
    card1_desc: "Presence/absence data: single-season and dynamic occupancy models, species distribution models, and power analyses for monitoring design.",
    card2_title: "Counts & abundance",
    card2_desc: "N-mixture models and state-space models for time series of counts, separating true population change from observation noise.",
    card3_title: "Distance sampling",
    card3_desc: "Simple and generalized hierarchical distance sampling, including simulation-based assessments of abundance and detectability.",
    card4_title: "Mark-recapture & ringing data",
    card4_desc: "Single-state, multistate, dead-recovery, and joint live-dead models built from capture histories and ringing data.",
    card5_title: "Data integration",
    card5_desc: "Integrated population models that combine survival, productivity, counts, and other data streams into one coherent demographic picture.",
    collab_cta_html: "If you think I could help with something like this — a quick question or a longer collaboration — <a href=\"#contact\" class=\"pub-link\">get in touch</a>.",

    career_eyebrow: "04 · Career so far",
    career_h2: "Path to here",

    cv_eyebrow: "05 · Full record",
    cv_h2: "Curriculum vitae",
    cv_lede_small: "Full employment history, education, grants, teaching, supervision, and media coverage.",
    cv_btn: "Download PDF ↓",

    footer_role: "Swiss Ornithological Institute · Sempach, Switzerland",
    footer_email: "Email",
  },
  ca: {
    nav_research: "Recerca",
    nav_publications: "Publicacions",
    nav_collaborate: "Col\u00b7laboracions",
    nav_career: "Trajectòria",
    nav_cv: "CV",
    nav_contact: "Contacte",

    hero_eyebrow: "Investigador postdoctoral · Ecologia estadística",
    hero_tagline: "Construeixo models bayesians que converteixen dades de camp disperses — històries de captura, censos de territori, recuperacions d'individus morts — en evidència sobre com creixen, es mouen i declinen les poblacions, i en coneixement que la gestió i la conservació poden fer servir de debò.",
    hero_btn_contact: "Contacta amb mi",

    research_eyebrow: "01 · Què estudio",
    research_h2: "Donant dimensió espacial a la demografia",
    research_lede: "La meva feina abasta models demogràfics espacialment explícits, models poblacionals integrats, marcs de marcatge\u2011recaptura i models de distribució d'espècies — amb l'objectiu de convertir la inferència demogràfica en gestió basada en evidència.",

    pillar1_title: "Demografia espacial",
    pillar1_desc: "Models poblacionals integrats que permeten que la supervivència, la productivitat i la dispersió variïn en l'espai — no només en el temps — i que corregeixen els biaixos que apareixen quan no ho fan.",
    pillar2_title: "Malalties i resiliència",
    pillar2_desc: "Avaluació de com les malalties emergents de fauna salvatge — incloent-hi la recent panzoòtia d'influença aviària — modifiquen les taxes demogràfiques i la resiliència poblacional a llarg termini.",
    pillar3_title: "Mètodes i computació",
    pillar3_desc: "Modelització jeràrquica bayesiana amb JAGS/NIMBLE, estudis de simulació, i marcs computacionals més ràpids per ajustar models de marcatge\u2011recaptura i mostreig de distàncies a gran escala.",
    pillar4_title: "Aplicacions a la conservació",
    pillar4_desc: "Traduir la inferència demogràfica en coneixement directament útil per a gestors i professionals de la conservació — no només en resultats acadèmics.",

    pub_eyebrow: "02 · Producció seleccionada",
    pub_h2: "Publicacions",
    pub_lede_small: "128 citacions · índex h 4 (a juny de 2026)",
    toggle_show: "Mostra la llista completa de publicacions ↓",
    toggle_hide: "Mostra'n menys ↑",

    collab_eyebrow: "03 · Col\u00b7laboracions",
    collab_h2: "Col\u00b7laboracions",
    collab_lede: "De tant en tant em contacten investigadors, ONG o administracions públiques amb un conjunt de dades i una pregunta sobre què els diuen — una població està disminuint, i per què? A sota teniu els tipus de dades amb què treballo més sovint. Si la vostra situació s'hi assembla, escriviu-me — segons la meva disponibilitat potser no sempre podré assumir-ho, però sempre m'agrada saber-ne més.",

    card1_title: "Ocupació i distribució",
    card1_desc: "Dades de presència/absència: models d'ocupació d'una sola temporada i dinàmics, models de distribució d'espècies, i anàlisis de potència per al disseny de seguiments.",
    card2_title: "Recomptes i abundància",
    card2_desc: "Models N-mixture i models d'espai d'estats per a sèries temporals de recomptes, que separen el canvi real de població del soroll d'observació.",
    card3_title: "Mostreig de distàncies",
    card3_desc: "Mostreig de distàncies jeràrquic simple i generalitzat, incloent-hi avaluacions basades en simulació de l'abundància i la detectabilitat.",
    card4_title: "Marcatge-recaptura i anellament",
    card4_desc: "Models d'un sol estat, multiestat, de recuperació de morts, i models conjunts de viu-mort construïts a partir d'històries de captura i dades d'anellament.",
    card5_title: "Integració de dades",
    card5_desc: "Models poblacionals integrats que combinen supervivència, productivitat, recomptes i altres fonts de dades en una sola imatge demogràfica coherent.",
    collab_cta_html: "Si creieu que us puc ajudar amb alguna cosa així — una pregunta ràpida o una col\u00b7laboració més llarga — <a href=\"#contact\" class=\"pub-link\">contacteu-me</a>.",

    career_eyebrow: "04 · Trajectòria",
    career_h2: "El camí fins aquí",

    cv_eyebrow: "05 · Registre complet",
    cv_h2: "Currículum vitae",
    cv_lede_small: "Historial laboral complet, formació, ajuts, docència, supervisió, i aparicions als mitjans.",
    cv_btn: "Descarrega el PDF ↓",

    footer_role: "Institut Ornitològic Suís · Sempach, Suïssa",
    footer_email: "Correu",
  }
};

// ---------- Language switching ----------
let currentLang = 'en';

function applyLanguage(lang){
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
  });

  // Keep the pub-list toggle button in sync with its current open/closed state.
  const toggleBtn = document.getElementById('togglePubs');
  const full = document.getElementById('pubListFull');
  if (toggleBtn && full){
    const hidden = full.hasAttribute('hidden');
    toggleBtn.textContent = hidden ? translations[lang].toggle_show : translations[lang].toggle_hide;
  }

  try { localStorage.setItem('lang', lang); } catch (e) {}
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

let savedLang = 'en';
try { savedLang = localStorage.getItem('lang') || 'en'; } catch (e) {}
applyLanguage(savedLang);
