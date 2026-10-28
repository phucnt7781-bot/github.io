/* ====== DATA: edit here ====== */

// Technical skills (level: 0 - 100)
const techSkills = [
  { name: "HTML5 / CSS3", level: 80 },
  { name: "JavaScript (basic)", level: 65 },
  { name: "C / C++", level: 70 },
  { name: "Data Structures & Algorithms", level: 60 },
  { name: "Git & GitHub", level: 65 },
  { name: "SQL / MySQL (basic)", level: 60 },
  { name: "Python (basic)", level: 55 },
];

// Soft skills
const softSkills = [
  "Teamwork",
  "Problem solving",
  "Fast learner",
  "Time management",
  "Communication",
  "Logical thinking",
];

// Projects. Keep only projects you really built.
const projects = [
  {
    name: "IT-web",
    time: "2026",
    stack: ["HTML", "CSS", "JavaScript", "GitHub"],
    link: "https://github.com/phucnt7781-bot/IT-web",
    points: [
      "Built a website introducing the Information Technology field.",
      "Managed source code with Git and published it on GitHub.",
    ],
  },
  {
    name: "Personal Online CV",
    time: "2026",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    link: "https://phucnt7781-bot.github.io",
    points: [
      "Designed a CV website with an A4 layout that also works on mobile.",
      "Deployed for free with GitHub Pages; includes a PDF export button.",
    ],
  },
  {
    // Sample project: replace with your own or delete
    name: "E-commerce Website (Frontend)",
    time: "2025",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "",
    points: [
      "Designed a responsive UI with home page, product list, and shopping cart.",
      "Used JavaScript to add/remove items, calculate totals, and save the cart in localStorage.",
    ],
  },
  {
    // Sample project: replace with your own or delete
    name: "Student Management (Console App)",
    time: "2025",
    stack: ["C++", "OOP", "File I/O"],
    link: "",
    points: [
      "Applied object-oriented programming and file reading/writing for data storage.",
      "Features: add, search, sort students and calculate grade statistics.",
    ],
  },
];

/* ====== RENDER ====== */

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Technical skills
$("techSkills").innerHTML = techSkills
  .map((s) => `<li>${esc(s.name)}<div class="bar"><i data-w="${s.level}"></i></div></li>`)
  .join("");

// Soft skills
$("softSkills").innerHTML = softSkills.map((s) => `<li>${esc(s)}</li>`).join("");

// Projects
$("projects").innerHTML = projects
  .map(
    (p) => `
  <div class="item project">
    <div class="head"><h3>${esc(p.name)}</h3><span class="time">${esc(p.time)}</span></div>
    <div class="tags">${p.stack.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
    <ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    ${p.link ? `<a class="link" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.link.replace("https://", ""))}</a>` : ""}
  </div>`
  )
  .join("");

// Skill bar animation
requestAnimationFrame(() => {
  document.querySelectorAll(".bar i").forEach((el) => (el.style.width = el.dataset.w + "%"));
});

// 3x4 photo: show photo.jpg if it exists, otherwise show placeholder
const photoBox = document.querySelector(".photo");
const photoImg = $("photo");
const showPhoto = () => photoBox.classList.add("ok");
if (photoImg.complete && photoImg.naturalWidth > 0) showPhoto();
photoImg.addEventListener("load", showPhoto);

// Print / Save PDF button
$("printBtn").addEventListener("click", () => window.print());
