import { cases, getCase } from "./data.js";

const icon = {
  dash: "◈",
  cases: "✦",
  work: "⌁",
  compare: "◐",
  treat: "⚕",
  report: "▣",
  upload: "⇧",
  export: "⇩",
  print: "⎙",
};
const route = () =>
  location.pathname === "/" ? "/dashboard" : location.pathname;
const pill = (s) =>
  `<span class="pill ${s.toLowerCase().replaceAll(" ", "-")}">${s}</span>`;
const progress = (v) =>
  `<div class="progress"><i style="width:${v}%"></i></div>`;
const avatar = (t) => `<div class="avatar">${t}</div>`;
const card = (inner, cls = "") =>
  `<section class="card ${cls}">${inner}</section>`;
function shell(title, eyebrow, content) {
  return `<div class="app"><aside class="sidebar"><a class="brand" href="/dashboard" data-link><div class="brand-mark">✦</div><div><b>Fresh Vibes</b><small>DSD Studio</small></div></a><nav>${[
    ["/dashboard", "Dashboard", "dash"],
    ["/cases", "DSD Cases", "cases"],
    ["/workspace/case-1", "Workspace", "work"],
    ["/compare/case-1", "Compare", "compare"],
    ["/treatment/case-1", "Treatment", "treat"],
    ["/report/case-1", "Report", "report"],
  ]
    .map(([h, l, i]) => `<a href="${h}" data-link>${icon[i]} ${l}</a>`)
    .join(
      "",
    )}</nav><div class="sidebar-note"><b>Clinical demo ready</b><span>Blueprint overlays, reports, plans, and mock AI architecture.</span></div></aside><main><header class="top"><div><p>${eyebrow}</p><h1>${title}</h1></div><div class="top-actions"><span>⌕ Search cases, patients, reports</span><b>Dr. Ava</b></div></header>${content}</main></div>`;
}
function overlay() {
  return `<svg class="overlay" viewBox="0 0 1000 620" preserveAspectRatio="none"><g stroke="#fff" opacity=".32">${Array.from({ length: 10 }, (_, i) => `<line x1="${100 + i * 90}" x2="${100 + i * 90}" y1="70" y2="550"/>`).join("")}${Array.from({ length: 6 }, (_, i) => `<line y1="${120 + i * 72}" y2="${120 + i * 72}" x1="90" x2="910"/>`).join("")}</g><line x1="500" x2="500" y1="40" y2="590" stroke="#e5c982" stroke-width="2" stroke-dasharray="10 8"/><text x="512" y="64">MIDLINE</text><line x1="170" x2="830" y1="185" y2="185"/><text x="178" y="174">HIGH SMILE LINE</text><line x1="160" x2="840" y1="382" y2="382" stroke="#e5c982" stroke-width="2"/><text x="682" y="372">INCISAL EDGE</text><path d="M210 405 C330 508, 675 508, 795 405"/><text x="438" y="503">SMILE CURVE</text><path d="M230 460 C365 560, 635 560, 770 460" stroke="#fff" stroke-dasharray="8 8"/><text x="390" y="566">LOWER LIP LINE</text><g fill="none">${[326, 386, 447, 507, 568, 629].map((x, i) => `<rect x="${x}" y="${238 + (i % 2) * 4}" width="58" height="158" rx="18"/>`).join("")}</g><g>${["62%", "1.0", "0.72", "0.62"].map((t, i) => `<text x="${285 + i * 132}" y="224">${t}</text>`).join("")}</g></svg>`;
}
function smile(show = true) {
  return `<div class="smile-stage"><div class="mouth"></div><div class="teeth upper">${Array.from({ length: 6 }, () => "<i></i>").join("")}</div><div class="teeth lower">${Array.from({ length: 6 }, () => "<i></i>").join("")}</div><span class="calibrated">DSD calibrated smile image</span>${show ? overlay() : ""}</div>`;
}
function metricCards(metrics, compact = false) {
  return card(
    `<div class="section-head"><div><p>Mock AI analysis</p><h2>Clinical metrics</h2></div>${pill("Ready")}</div><div class="metrics ${compact ? "compact" : ""}">${metrics.map((m) => `<article class="metric"><div class="split"><b>${m.name}</b>${pill(m.status)}</div><small>Score ${m.score}/100</small>${progress(m.score)}<p>${m.doctorExplanation}</p><em><b>Recommended correction:</b> ${m.recommendedCorrection}</em><small><b>Patient:</b> ${m.patientExplanation}</small></article>`).join("")}</div>`,
  );
}
function dashboard() {
  const stats = [
    [
      "Active DSD cases",
      cases.filter((c) => c.status === "Active").length,
      "+18%",
    ],
    [
      "Waiting for review",
      cases.filter((c) => c.status === "Review").length,
      "2 urgent",
    ],
    [
      "Patient approvals",
      cases.filter((c) => c.status === "Patient approval").length,
      "1 today",
    ],
    [
      "Completed cases",
      cases.filter((c) => c.status === "Completed").length,
      "96%",
    ],
    ["Monthly DSD revenue", "$62.5k", "placeholder"],
  ];
  return shell(
    "DSD Dashboard",
    "Fresh Vibes DSD Studio",
    `<div class="stat-grid">${stats.map((s) => card(`<span>${s[0]}</span><strong>${s[1]}</strong><small>${s[2]}</small>`)).join("")}</div><div class="dash-grid">${card(
      `<div class="section-head"><h2>Recent DSD cases</h2><a href="/cases" data-link>View all</a></div><table><thead><tr><th>Patient</th><th>Status</th><th>Doctor</th><th>Phase</th><th>Progress</th><th></th></tr></thead><tbody>${cases
        .slice(0, 6)
        .map(
          (c) =>
            `<tr><td><div class="person">${avatar(c.patient.avatar)}<span><b>${c.patient.name}</b><small>${c.treatmentType}</small></span></div></td><td>${pill(c.status)}</td><td>${c.doctor.name}</td><td>${c.phase}</td><td>${progress(c.progress)}</td><td><a href="/workspace/${c.id}" data-link>Open →</a></td></tr>`,
        )
        .join("")}</tbody></table>`,
    )}<div>${card(
      `<h2>Quick actions</h2>${[
        ["New DSD case", "/cases"],
        ["Upload photos", "/cases/case-1"],
        ["Open workspace", "/workspace/case-1"],
        ["Export report", "/report/case-1"],
      ]
        .map((a) => `<a class="action" href="${a[1]}" data-link>✦ ${a[0]}</a>`)
        .join("")}`,
    )}${card(`<h2>Premium analytics</h2><div class="bars">${[45, 72, 58, 90, 76, 96, 68, 84].map((h) => `<i style="height:${h}%"></i>`).join("")}</div><p>Mock DSD velocity and acceptance trend.</p>`)}</div></div>`,
  );
}
function casesPage() {
  return shell(
    "DSD Cases",
    "Case management",
    `<div class="case-grid">${cases.map((c) => card(`<div class="split">${avatar(c.patient.avatar)}${pill(c.status)}</div><h2>${c.patient.name}</h2><small>${c.patient.id} · ${c.patient.age} · ${c.patient.membership}</small><p><b>Doctor:</b> ${c.doctor.name}<br><b>Created:</b> ${c.createdAt}<br><b>Phase:</b> ${c.phase}<br><b>Treatment:</b> ${c.treatmentType}</p><div class="split"><small>Progress</small><small>${c.progress}%</small></div>${progress(c.progress)}<div class="actions"><a href="/cases/${c.id}" data-link>Open case</a><a href="/workspace/${c.id}" data-link>Workspace</a><a href="/report/${c.id}" data-link>Report</a><a href="/compare/${c.id}" data-link>Compare</a></div>`)).join("")}</div>`,
  );
}
function casePage(id) {
  const c = getCase(id);
  return shell(
    c.patient.name,
    "Patient DSD profile",
    `${card(`<div class="hero-case"><div>${avatar(c.patient.avatar)}<h2>${c.treatmentType}</h2><p>${c.summary}</p><div class="info"><span><b>Patient ID:</b> ${c.patient.id}</span><span><b>Contact:</b> ${c.patient.contact}</span><span><b>Doctor:</b> ${c.doctor.name}</span><span><b>Phase:</b> ${c.phase}</span></div></div><div>${pill(c.status)}${pill(c.priority)}<br><br>${progress(c.progress)}<a class="primary" href="/workspace/${c.id}" data-link>Open workspace</a></div></div>`)}<div class="tabs">${["Overview", "Photos", "Analysis", "Treatment", "Documents", "Notes"].map((t) => `<span>${t}</span>`).join("")}</div><div class="two-col"><div>${metricCards(c.metrics)}${photoGrid(c.photos)}</div><div>${timeline(c)}${card(`<h2>Clinical notes</h2>${c.notes.map((n) => `<p>• ${n}</p>`).join("")}`)}${card(`<h2>Export status</h2>${c.exports.map((e) => `<div class="split row"><b>${e.type}</b>${pill(e.status)}</div>`).join("")}`)}</div></div>`,
  );
}
function photoGrid(photos) {
  return card(
    `<div class="section-head"><div><p>Photo protocol</p><h2>Required DSD records</h2></div></div><div class="photo-grid">${photos.map((p) => `<article><div class="photo">⌁</div><div class="split"><b>${p.title}</b>${pill(p.status)}</div><small>${p.description}</small><p>✓ ${p.checklist}</p><button>${icon.upload} Upload</button></article>`).join("")}</div>`,
  );
}
function timeline(c) {
  return card(
    `<h2>Timeline</h2>${c.timeline.map((e) => `<div class="time"><b>${e.title}</b>${pill(e.state === "done" ? "Completed" : e.state === "current" ? "Active" : "Draft")}<p>${e.description}</p><small>${e.date}</small></div>`).join("")}`,
  );
}
function workspace(id) {
  const c = getCase(id);
  return shell(
    "DSD Workspace",
    `${c.patient.name} · ${c.phase}`,
    `<div class="workspace"><aside class="toolrail">${["⇧", "│", "⌒", "▦", "◌", "▤", "◠", "◉", "↺", "⇩"].map((t) => `<button>${t}</button>`).join("")}</aside><section><div class="toolbar">${["Upload photo", "Add midline", "Smile curve", "Golden ratio grid", "Tooth proportions", "Facial symmetry", "Incisal edge", "Lower lip line", "Show/hide overlay"].map((t) => `<button>${t}</button>`).join("")}<button class="dark">Analyze</button></div>${smile(true)}<div class="bottom-bar"><span>Photo: close-up smile · Overlay opacity 84%</span><span>Mock coordinates ready for AI/computer vision.</span></div></section>${metricCards(c.metrics, true)}</div>`,
  );
}
function compare(id) {
  const c = getCase(id);
  return shell(
    "Before / After",
    c.patient.name,
    `<section class="card"><div class="section-head"><div><p>Before / After</p><h2>Proposed DSD preview</h2></div><div class="toggles">${["Original", "DSD Overlay", "Proposed Result", "3D Preview"].map((t) => `<button>${t}</button>`).join("")}</div></div><div class="compare"><div>${smile(false)}</div><div class="after">${smile(true)}</div><span>Before</span><b>After</b><i></i></div><div class="zoom"><button>−</button><button>＋</button><button>⛶</button></div></section>${metricCards(c.metrics.slice(0, 4))}`,
  );
}
function treatmentPage(id) {
  const c = getCase(id);
  const visits = c.treatment.reduce((s, x) => s + x.visits, 0);
  return shell(
    "Treatment Plan",
    c.patient.name,
    `<div class="two-col wide"><div>${card(`<div class="section-head"><div><p>Treatment builder</p><h2>Facially driven plan</h2></div></div>${c.treatment.map((s, i) => `<article class="step"><b>${i + 1}</b><div><h3>${s.title} ${pill(s.status)}</h3><p>${s.description}</p><small><b>Doctor:</b> ${s.doctorNote}</small><small><b>Patient:</b> ${s.patientNote}</small></div><aside>${s.duration}<br>${s.visits} visits<br><b>${s.price}</b></aside></article>`).join("")}`)}${threeD()}</div>${card(`<h2>Total estimate</h2><p class="split"><span>Total visits</span><b>${visits}</b></p><p class="split"><span>Estimated duration</span><b>12–18 weeks</b></p><p class="split"><span>Estimated price</span><b>$16,980</b></p><p class="split"><span>Doctor approval</span>${pill("Ready")}</p><p class="split"><span>Patient approval</span>${pill("Draft")}</p>`)}</div>`,
  );
}
function threeD() {
  return card(
    `<div class="three"><div class="arch"><b>STL/3D viewer integration ready</b></div><div><p>Future 3D mockup</p><h2>Dental arch preview</h2>${["Rotate", "Zoom", "Upper jaw", "Lower jaw", "Full smile", "Before model", "Planned model"].map((x) => `<button>${x}</button>`).join("")}</div></div>`,
  );
}
function report(id) {
  const c = getCase(id);
  return shell(
    "Premium DSD Report",
    c.patient.name,
    `<div class="report-actions"><button onclick="window.print()">${icon.print} Print</button><button>${icon.export} Export PDF</button><button>Share with patient</button></div><article class="report"><section class="cover"><p>Fresh Vibes Dental</p><h1>Digital Smile Design Presentation</h1><p>A premium facially driven smile planning report prepared for patient conversation and clinical review. Mock content must be verified by the doctor.</p>${smile(true)}</section><section class="report-grid"><div><h2>Patient information</h2><p><b>Name:</b> ${c.patient.name}</p><p><b>Patient ID:</b> ${c.patient.id}</p><p><b>Age/gender:</b> ${c.patient.age} / ${c.patient.gender}</p></div><div><h2>Doctor information</h2><p><b>Doctor:</b> ${c.doctor.name}</p><p><b>Role:</b> ${c.doctor.role}</p><p><b>Status:</b> ${c.status}</p></div></section><section><h2>Smile analysis</h2><div class="metrics">${c.metrics
      .slice(0, 6)
      .map(
        (m) =>
          `<article class="metric"><div class="split"><b>${m.name}</b>${pill(m.status)}</div><p>${m.patientExplanation}</p></article>`,
      )
      .join("")}</div></section><section><h2>Treatment plan</h2>${c.treatment
      .slice(0, 7)
      .map(
        (s, i) =>
          `<p class="row"><b>${i + 1}. ${s.title}</b><span>${s.duration} · ${s.price}</span></p>`,
      )
      .join(
        "",
      )}</section><section><h2>Approval section</h2><p>I understand this presentation is a planning visualization and final treatment requires clinical confirmation, consent, and doctor approval.</p><div class="sign"><span>Patient signature / date</span><span>Doctor signature / date</span></div></section></article>`,
  );
}
function render() {
  const p = route();
  let html;
  if (p.startsWith("/cases/")) html = casePage(p.split("/")[2]);
  else if (p === "/cases") html = casesPage();
  else if (p.startsWith("/workspace/")) html = workspace(p.split("/")[2]);
  else if (p.startsWith("/compare/")) html = compare(p.split("/")[2]);
  else if (p.startsWith("/treatment/")) html = treatmentPage(p.split("/")[2]);
  else if (p.startsWith("/report/")) html = report(p.split("/")[2]);
  else html = dashboard();
  document.getElementById("app").innerHTML = html;
  document.querySelectorAll("[data-link]").forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      history.pushState({}, "", a.href);
      render();
      scrollTo(0, 0);
    }),
  );
}
window.addEventListener("popstate", render);
render();
