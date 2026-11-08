// Journal call data.
// Each call belongs to a journal (key into JOURNALS) and has one or more deadlines.
// Deadline fields: date (YYYY-MM-DD), optional time (HH:MM, default 23:59), optional tz ('AoE' default | 'UTC' | IANA zone),
// status: 'announced' (on the journal's or publisher's own call page) | 'provisional' (third-party listing, editor's post,
// or not yet confirmed on the journal page) | 'estimated' (not out yet; follows an earlier pattern)
// Last checked: 8 Nov 2026
window.LAST_CHECKED = "2026-11-08";

window.TOPICS = {
  aied:  { label: "AI in education",              color: "#0F8A7E" },
  la:    { label: "Learning analytics & data",    color: "#4C57C9" },
  ls:    { label: "Learning sciences",            color: "#B87A0B" },
  csed:  { label: "Computing education",          color: "#C03E66" },
  tel:   { label: "Technology-enhanced learning", color: "#3E7A3A" },
  he:    { label: "Higher & online education",    color: "#8A4CC4" },
  stem:  { label: "STEM education",               color: "#C4561E" },
  engd:  { label: "Engineering education",        color: "#2F6F9F" },
  edres: { label: "Education research & policy",  color: "#8B5A3A" },
  comp:  { label: "Comparative & international education", color: "#5B6B7F" }
};

// model: 'Open access' | 'Diamond OA' (free to read and publish) | 'Hybrid' | 'Subscription'
// jif: Clarivate Journal Impact Factor, jifYear: the JCR release it comes from (2025 = released June 2026).
// Leave jif out if the journal has no JIF or none could be confirmed; the site then shows (no IF).
// metric: optional extra (CiteScore, APC, indexing), only where the publisher's own page states it
window.JOURNALS = {
  etrd:   { short: "ETR&D", jif: 5.6, jifYear: 2025, name: "Educational Technology Research and Development", publisher: "Springer", model: "Hybrid", url: "https://link.springer.com/journal/11423" },
  sle:    { short: "SLE", jif: 17.9, jifYear: 2025, name: "Smart Learning Environments", publisher: "Springer", model: "Open access", url: "https://link.springer.com/journal/40561" },
  ijstem: { short: "IJ STEM Ed", jif: 10.7, jifYear: 2025, name: "International Journal of STEM Education", publisher: "Springer", model: "Open access", url: "https://link.springer.com/journal/40594" },
  tkl:    { short: "TKL", jif: 4.2, jifYear: 2025, name: "Technology, Knowledge and Learning", publisher: "Springer", model: "Hybrid", url: "https://link.springer.com/journal/10758" },
  jset:   { short: "JSET", jif: 5.5, jifYear: 2025, name: "Journal of Science Education and Technology", publisher: "Springer", model: "Hybrid", url: "https://link.springer.com/journal/10956" },
  disced: { short: "Discover Ed", name: "Discover Education", publisher: "Springer", model: "Open access", metric: "Scopus, DOAJ", url: "https://link.springer.com/journal/44217" },
  nzjes:  { short: "NZJES", jif: 1.5, jifYear: 2024, name: "New Zealand Journal of Educational Studies", publisher: "Springer", model: "Hybrid", url: "https://link.springer.com/journal/40841" },
  rise:   { short: "RISE", jif: 3.1, jifYear: 2025, name: "Research in Science Education", publisher: "Springer", model: "Hybrid", url: "https://link.springer.com/journal/11165" },
  ijsme:  { short: "IJSME", jif: 2.8, jifYear: 2025, name: "International Journal of Science and Mathematics Education", publisher: "Springer", model: "Hybrid", url: "https://link.springer.com/journal/10763" },
  aper:   { short: "APER", jif: 4.6, jifYear: 2024, name: "The Asia-Pacific Education Researcher", publisher: "Springer", model: "Hybrid", url: "https://link.springer.com/journal/40299" },
  eeaa:   { short: "EEAA", jif: 1.6, jifYear: 2024, name: "Educational Assessment, Evaluation and Accountability", publisher: "Springer", model: "Hybrid", url: "https://link.springer.com/journal/11092" },
  csse:   { short: "CSSE", name: "Cultural Studies of Science Education", publisher: "Springer", model: "Hybrid", url: "https://link.springer.com/journal/11422" },
  caeai:  { short: "C&E: AI", name: "Computers and Education: Artificial Intelligence", publisher: "Elsevier", model: "Open access", metric: "CiteScore 28.7 · APC US$2,880", url: "https://www.sciencedirect.com/journal/computers-and-education-artificial-intelligence" },
  see:    { short: "SEE", jif: 3.9, jifYear: 2025, name: "Studies in Educational Evaluation", publisher: "Elsevier", model: "Hybrid", url: "https://www.sciencedirect.com/journal/studies-in-educational-evaluation" },
  tate:   { short: "TATE", jif: 4.3, jifYear: 2025, name: "Teaching and Teacher Education", publisher: "Elsevier", model: "Hybrid", url: "https://www.sciencedirect.com/journal/teaching-and-teacher-education" },
  jee:    { short: "JEE", jif: 5.3, jifYear: 2025, name: "Journal of Engineering Education", publisher: "Wiley", model: "Hybrid", url: "https://onlinelibrary.wiley.com/journal/21689830" },
  eje:    { short: "EJE", jif: 3.6, jifYear: 2024, name: "European Journal of Education", publisher: "Wiley", model: "Hybrid", url: "https://onlinelibrary.wiley.com/journal/14653435" },
  jrte:   { short: "JRTE", jif: 3.5, jifYear: 2025, name: "Journal of Research on Technology in Education", publisher: "Taylor & Francis", model: "Hybrid", url: "https://www.tandfonline.com/journals/ujrt20" },
  ijmest: { short: "IJMEST", jif: 0.6, jifYear: 2024, name: "International Journal of Mathematical Education in Science and Technology", publisher: "Taylor & Francis", model: "Hybrid", url: "https://www.tandfonline.com/journals/tmes20" },
  herd:   { short: "HERD", jif: 3.7, jifYear: 2025, name: "Higher Education Research & Development", publisher: "Taylor & Francis", model: "Hybrid", url: "https://www.tandfonline.com/journals/cher20" },
  ijse:   { short: "IJSE", jif: 2.3, jifYear: 2024, name: "International Journal of Science Education", publisher: "Taylor & Francis", model: "Hybrid", url: "https://www.tandfonline.com/journals/tsed20" },
  jsdse:  { short: "JSDSE", jif: 2.3, jifYear: 2025, name: "Journal of Statistics and Data Science Education", publisher: "Taylor & Francis", model: "Open access", url: "https://www.tandfonline.com/journals/ujse21" },
  infedu: { short: "INFEDU", jif: 2.4, jifYear: 2025, name: "Informatics in Education", publisher: "Vilnius University", model: "Diamond OA", url: "https://infedu.vu.lt/journal/INFEDU" },
  jios:   { short: "JIOS", name: "Journal of Information and Organizational Sciences", publisher: "University of Zagreb", model: "Diamond OA", url: "https://jios.foi.hr/" },
  ijel:   { short: "IJEL", name: "International Journal on E-Learning", publisher: "AACE", model: "Subscription", url: "https://aace.org/pubs/ijel/" },
  ets:    { short: "ET&S", jif: 7.1, jifYear: 2025, name: "Educational Technology & Society", publisher: "IFETS", model: "Diamond OA", url: "https://www.j-ets.net/" },
  npjsol: { short: "npj SoL", name: "npj Science of Learning", publisher: "Nature Portfolio", model: "Open access", url: "https://www.nature.com/npjscilearn/" }
};

window.CALLS = [
  /* ---------- AI in education & ed tech ---------- */
  {
    id: "etrd-coreg", journal: "etrd", topics: ["aied", "ls"],
    title: "Human-AI Co-Regulation and Learner Agency: Rethinking Learning Processes in AI-Supported Learning Contexts",
    editors: "Yun-Fang Tu, Gwo-Jen Hwang",
    url: "https://link.springer.com/collections/cdaacabgef",
    note: "Two-stage: email an 800–1,000-word extended abstract to both guest editors; invited authors then submit full papers. Publication planned for April 2028.",
    deadlines: [
      { label: "Extended abstracts", date: "2026-12-15", status: "announced", note: "By email to the guest editors." },
      { label: "Full manuscripts (invited)", date: "2027-03-15", status: "announced" }
    ]
  },
  {
    id: "etrd-hitl", journal: "etrd", topics: ["aied", "tel"],
    title: "Human-in-the-Loop: Reenvisioning Instructional Design and Technology Development in the Era of AI",
    editors: "Xiaoming Zhai, Jongchan Park, Lin Yan",
    url: "https://link.springer.com/collections/jddbiegiid",
    note: "Abstracts of up to 500 words go through the guest editors' portal; only invited authors submit full papers (up to 8,000 words). Publication targeted for December 2027.",
    deadlines: [
      { label: "Abstracts", date: "2027-01-01", status: "announced" },
      { label: "Full manuscripts (invited)", date: "2027-05-30", status: "announced" }
    ]
  },
  {
    id: "caeai-agents", journal: "caeai", topics: ["aied"],
    title: "AI Agents in Education: Multi-level Engagement for Student Learning",
    editors: "Weijiao Huang, Luke Fryer, Michael Sailer, Pantelis M. Papadopoulos",
    url: "https://www.sciencedirect.com/journal/computers-and-education-artificial-intelligence",
    note: "Looks at AI agents at three levels: student learning, teaching practice, and institutions or systems. Cross-level empirical studies are especially welcome.",
    deadlines: [ { label: "Structured research proposals", date: "2026-11-30", status: "announced", note: "The journal page lists this as the submission deadline; a guest editor describes it as the proposal deadline." } ]
  },
  {
    id: "sle-assess", journal: "sle", topics: ["aied", "la"],
    title: "Reimagining assessment for learning in the age of generative AI",
    editors: "Yizhou Fan, Ryan S. Baker, Abhinava Barthakur, Dragan Gašević, Yang Jiang",
    url: "https://link.springer.com/collections/eeigbjiafi",
    note: "Send a working title and abstract through the collection's Google Form; decisions in early December 2026, then invited full papers.",
    deadlines: [
      { label: "Abstracts", date: "2026-11-30", status: "announced" },
      { label: "Full manuscripts (invited)", date: "2027-03-31", status: "announced" }
    ]
  },
  {
    id: "sle-open", journal: "sle", topics: ["tel", "aied"],
    title: "Open education principles between the tension of humans and machines in the Generative AI era",
    editors: "Ahmed Tlili, Aras Bozkurt, Glenda Cox, Robert Farrow",
    url: "https://link.springer.com/collections/hacbfhdedh",
    note: "Papers are published as soon as they are accepted.",
    deadlines: [ { label: "Full papers", date: "2026-12-30", status: "announced" } ]
  },
  {
    id: "sle-psych", journal: "sle", topics: ["ls", "aied"],
    title: "The Psychology of Smart Learning: Designing AI-Rich Environments for Human Learning",
    editors: "Fred Paas, Ping Li, Peng Wang, Liye Zou",
    url: "https://link.springer.com/collections/hfccfahefc",
    deadlines: [ { label: "Submissions", date: "2027-06-30", status: "announced" } ]
  },
  {
    id: "jrte-ethics", journal: "jrte", topics: ["aied", "edres"],
    title: "Ethics, Responsibility, and Generative AI in Educational Research",
    url: "https://think.taylorandfrancis.com/special_issues/ethics-responsibility-and-generative-ai-in-educational-research/",
    note: "Case examples, conceptual pieces, ethical frameworks, empirical and policy studies on how researchers use generative AI.",
    deadlines: [ { label: "Abstracts", date: "2026-11-15", status: "provisional", note: "Date from a third-party listing; the publisher's page didn't show it when checked." } ]
  },
  {
    id: "eje-ai", journal: "eje", topics: ["aied", "he"],
    title: "Artificial Intelligence in Education: Learning, Employability, and Institutional Strategies",
    url: "https://onlinelibrary.wiley.com/page/journal/14653435/homepage/call-for-papers/si-2026-000865",
    deadlines: [ { label: "Submissions", date: "2026-12-20", status: "provisional", note: "Date from a third-party listing." } ]
  },
  {
    id: "ijel-ai", journal: "ijel", topics: ["aied", "tel"],
    title: "Emerging AI Technologies and Digital Learning in PreK-12 and Higher Education: Pedagogical and Empirical Evidence",
    editors: "Moe Debbagh Greene, Michael Broda, Chi-Ning Chang",
    url: "https://aace.org/pubs/ijel/emerging-ai-special-issue/",
    note: "Abstracts closed on 1 July 2026. Publication planned for May 2027.",
    deadlines: [
      { label: "Abstracts", date: "2026-07-01", status: "announced" },
      { label: "Full manuscripts", date: "2026-11-30", status: "provisional", note: "Date from a guest editor's post; the journal page shows peer review starting 30 November." }
    ]
  },
  {
    id: "aper-feedback", journal: "aper", topics: ["aied"],
    title: "Humanizing AI-mediated Feedback for Writing",
    url: "https://link.springer.com/collections/iffhjcagac",
    deadlines: [ { label: "Submissions", date: "2027-02-28", status: "provisional", note: "Date from a third-party listing." } ]
  },
  {
    id: "aper-emi", journal: "aper", topics: ["he", "aied"],
    title: "Pedagogical Transformation through Human–AI Collaboration in English-Medium Instruction",
    url: "https://link.springer.com/collections/djhaaaccge",
    deadlines: [ { label: "Submissions", date: "2027-05-31", status: "provisional", note: "Date from a third-party listing." } ]
  },

  /* ---------- learning analytics, data, learning sciences ---------- */
  {
    id: "jios-la", journal: "jios", topics: ["la", "aied"],
    title: "Actionable Learning Analytics and AI-Supported Learning Design",
    editors: "Blaženka Divjak, Bart Rienties",
    url: "https://jios.foi.hr/special-issue",
    note: "Conceptual, empirical and methodological papers, plus PRISMA-style reviews.",
    deadlines: [ { label: "Submissions", date: "2026-12-31", status: "announced" } ]
  },
  {
    id: "ets-data", journal: "ets", topics: ["la", "tel"],
    title: "Sustainable Utilization of Educational Data for Learning and Teaching",
    url: "https://sites.google.com/view/journalets/announce",
    deadlines: [ { label: "Submissions", date: "2026-12-31", status: "provisional", note: "Date from a third-party listing." } ]
  },
  {
    id: "eeaa-emis", journal: "eeaa", topics: ["comp", "la"],
    title: "Education Management Information Systems in Europe: Country Perspectives on Linked Education Data",
    url: "https://link.springer.com/collections/ddiejbfhhd",
    deadlines: [ { label: "Submissions", date: "2026-12-31", status: "provisional", note: "Date from a third-party listing." } ]
  },
  {
    id: "npj-math", journal: "npjsol", topics: ["ls", "stem"],
    title: "Mathematical Cognition in Evolving Learning Environments",
    url: "https://www.nature.com/collections/cgiefaideh",
    deadlines: [ { label: "Submissions", date: "2026-11-28", status: "provisional", note: "Date from a third-party listing." } ]
  },
  {
    id: "npj-embodied", journal: "npjsol", topics: ["ls"],
    title: "Embodied Learning",
    url: "https://www.nature.com/collections/ddeibijijd",
    deadlines: [ { label: "Submissions", date: "2027-01-10", status: "provisional", note: "Date from a third-party listing." } ]
  },

  /* ---------- computing, STEM, engineering ---------- */
  {
    id: "infedu-ctai", journal: "infedu", topics: ["csed", "aied"],
    title: "Computational Thinking and AI in School Informatics and Mathematics",
    editors: "Mart Laanpere, Melih Turgut",
    url: "https://infedu.vu.lt/journal/INFEDU",
    note: "Diamond open access: no APCs or submission fees. Responses to abstracts by 20 March 2027; publication 10 December 2027.",
    deadlines: [
      { label: "Abstracts", date: "2027-02-20", status: "announced" },
      { label: "Full manuscripts", date: "2027-06-15", status: "announced" }
    ]
  },
  {
    id: "ijstem-ailit", journal: "ijstem", topics: ["stem", "aied"],
    title: "AI Literacy and STEM Education",
    editors: "Yeping Li, Thomas K. F. Chiu, Meixia Ding, Jonas Hallström, Milo Koretsky",
    url: "https://link.springer.com/collections/chdfcibfje",
    deadlines: [ { label: "Submissions", date: "2027-01-31", status: "announced" } ]
  },
  {
    id: "ijstem-assess", journal: "ijstem", topics: ["stem", "aied"],
    title: "Assessment for STEM Education in the AI Era",
    url: "https://link.springer.com/collections/hbgejjhffg",
    deadlines: [ { label: "Submissions", date: "2027-01-31", status: "announced" } ]
  },
  {
    id: "ijstem-math", journal: "ijstem", topics: ["stem"],
    title: "Mathematics and Effective STEM Learning",
    url: "https://link.springer.com/collections/hehbdefjia",
    note: "Empirical studies, research syntheses and scholarly commentaries.",
    deadlines: [ { label: "Submissions", date: "2027-08-31", status: "announced" } ]
  },
  {
    id: "jset-genai", journal: "jset", topics: ["stem", "aied"],
    title: "Integrating Generative AI into Scientific Practices and Its Implications for Science Education",
    url: "https://link.springer.com/collections/eehhgegdha",
    deadlines: [ { label: "Submissions", date: "2027-07-31", status: "announced" } ]
  },
  {
    id: "ijmest-icmet", journal: "ijmest", topics: ["stem", "tel"],
    title: "Math Education and Technology: Shaping the Future of Learning, Vol. II",
    editors: "Vanda Santos",
    url: "https://think.taylorandfrancis.com/?p=61934",
    note: "Mainly extended versions of ICMET 2026 papers (6,000–9,000 words). Choose \"ICMET2026 SI\" when submitting. Publication July 2027.",
    deadlines: [ { label: "Papers", date: "2026-12-29", status: "announced" } ]
  },
  {
    id: "jsdse-ai", journal: "jsdse", topics: ["stem", "aied"],
    title: "Building AI-Powered Learning Experiences for Statistics and Data Science Teaching",
    url: "https://community.amstat.org/discussion/call-for-papers-on-building-ai-powered-learning-experiences-for-statistics-and-data-science-teaching-deadline-january-15-2027",
    deadlines: [ { label: "Submissions", date: "2027-01-15", status: "provisional", note: "Announced by the editor-in-chief on ASA Connect; not yet checked on the journal page." } ]
  },
  {
    id: "rise-multimodal", journal: "rise", topics: ["stem", "ls"],
    title: "Multimodal literacies and representations for learning",
    url: "https://link.springer.com/collections/jiaadbagaf",
    deadlines: [ { label: "Submissions", date: "2026-12-31", status: "provisional", note: "Date from a third-party listing." } ]
  },
  {
    id: "rise-misinfo", journal: "rise", topics: ["stem"],
    title: "Argumentation and the problem of misinformation in science education",
    url: "https://link.springer.com/collections/jfjieedgbd",
    deadlines: [ { label: "Submissions", date: "2026-12-31", status: "provisional", note: "Date from a third-party listing." } ]
  },
  {
    id: "rise-ai", journal: "rise", topics: ["stem", "aied"],
    title: "Artificial Intelligence in Science Education",
    url: "https://link.springer.com/collections/dbihehajcd",
    deadlines: [ { label: "Submissions", date: "2027-12-31", status: "provisional", note: "Date from a third-party listing." } ]
  },
  {
    id: "ijsme-equity", journal: "ijsme", topics: ["stem", "comp"],
    title: "Transforming Equity in STEM Education: Disciplinary Challenges and Global Perspectives",
    url: "https://link.springer.com/collections/fgdedfhejh",
    deadlines: [ { label: "Submissions", date: "2026-12-31", status: "provisional", note: "Date from a third-party listing." } ]
  },
  {
    id: "csse-steam", journal: "csse", topics: ["stem"],
    title: "Science and Sustainability in Transition: Towards a relational and embodied STEAM education",
    url: "https://link.springer.com/collections/bcjfbcbbjj",
    deadlines: [ { label: "Submissions", date: "2027-01-31", status: "provisional", note: "Date from a third-party listing." } ]
  },
  {
    id: "ijse-creativity", journal: "ijse", topics: ["stem"],
    title: "What Makes Creativity Scientific? Recognising and Cultivating Scientific Creativity in Science Education",
    url: "https://think.taylorandfrancis.com/special_issues/what-makes-creativity-scientific/",
    deadlines: [ { label: "Abstracts", date: "2027-02-15", status: "provisional", note: "Date from a third-party listing." } ]
  },
  {
    id: "jee-speculative", journal: "jee", topics: ["engd"],
    title: "Speculative Pedagogies and Collective Future-Making in P-20 Engineering Education",
    url: "https://onlinelibrary.wiley.com/page/journal/21689830/call-for-papers/si-2026-001195",
    deadlines: [ { label: "Submissions", date: "2026-11-30", status: "provisional", note: "Date from a third-party listing." } ]
  },

  /* ---------- higher education, research, comparative ---------- */
  {
    id: "tkl-smart", journal: "tkl", topics: ["tel"],
    title: "Reimagining Learning through SMART Pedagogy and Emerging Technologies",
    url: "https://link.springer.com/collections/fbddegcbja",
    deadlines: [ { label: "Submissions", date: "2027-08-31", status: "announced" } ]
  },
  {
    id: "disced-srl", journal: "disced", topics: ["he", "ls"],
    title: "Learner Agency and Self-Regulated Learning in Online and Blended Higher Education",
    url: "https://link.springer.com/journal/44217",
    deadlines: [ { label: "Submissions", date: "2027-07-13", status: "announced" } ]
  },
  {
    id: "disced-future", journal: "disced", topics: ["edres", "tel"],
    title: "Leading Future-Ready Education: Digital Transformation, Human Capacity, Equity, and Institutional Resilience",
    url: "https://link.springer.com/journal/44217",
    deadlines: [ { label: "Submissions", date: "2027-06-07", status: "announced" } ]
  },
  {
    id: "disced-anniv", journal: "disced", topics: ["edres"],
    title: "Discover Education 5th Anniversary Collection: Celebrating Five Years of Innovation and Impact in Education Research",
    url: "https://link.springer.com/journal/44217",
    deadlines: [ { label: "Submissions", date: "2026-12-31", status: "announced" } ]
  },
  {
    id: "herd-grades", journal: "herd", topics: ["he"],
    title: "Beyond grades",
    url: "https://think.taylorandfrancis.com/special_issues/beyond-grades/",
    deadlines: [ { label: "Submissions", date: "2027-03-01", status: "provisional", note: "Date from a third-party listing." } ]
  },
  {
    id: "nzjes-decol", journal: "nzjes", topics: ["comp", "aied"],
    title: "Decolonising AI in educational studies: Wayfinding approaches",
    url: "https://link.springer.com/journal/40841",
    note: "Invites approaches that respond to context and are grounded in local and Indigenous knowledge, rather than dominant AI trajectories.",
    deadlines: [ { label: "Submissions", date: "2027-03-31", status: "announced" } ]
  },
  {
    id: "nzjes-asian", journal: "nzjes", topics: ["comp", "edres"],
    title: "Centring Asian Race in Education and Educational Research",
    url: "https://link.springer.com/journal/40841",
    deadlines: [ { label: "Submissions", date: "2026-12-01", status: "announced" } ]
  },
  {
    id: "see-culture", journal: "see", topics: ["edres"],
    title: "Long-term change in school and teaching culture",
    url: "https://www.sciencedirect.com/special-issue/334556/long-term-change-in-school-and-teaching-culture",
    deadlines: [ { label: "Submissions", date: "2026-12-01", status: "provisional", note: "Date from a third-party listing." } ]
  },
  {
    id: "tate-belonging", journal: "tate", topics: ["edres"],
    title: "Teacher (un)belonging: Roles and identities",
    url: "https://www.sciencedirect.com/special-issue/331838/teacher-un-belonging-roles-and-identities",
    deadlines: [ { label: "Submissions", date: "2026-12-20", status: "provisional", note: "Date from a third-party listing." } ]
  }
];
