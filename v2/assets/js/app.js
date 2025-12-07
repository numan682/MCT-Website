// Faculty directory with photos now served from local assets for reliability.
const facultyData = [
  {
    name: "Professor Dr. Md. Fokhray Hossain",
    designation: "Dean & Professor",
    qualification: "",
    email: "deanfsit@daffodilvarsity.edu.bd, drfokhray@daffodilvarsity.edu.bd, international@daffodilvarsity.edu.bd",
    phone: "Phone: 9138234-5 Ext: 65108",
    cell: "Cell: 01713493250",
    profile: "https://faculty.daffodilvarsity.edu.bd/profile/mct/fokhray.html",
    photo: "assets/images/faculty/fokhray-hossain.png"
  },
  {
    name: "Prof. Dr. Bimal Chandra Das",
    designation: "Associate Dean & Professor",
    qualification: "",
    email: "bcdas@daffodilvarsity.edu.bd",
    phone: "Phone: 9138234-5 Ext: 53102",
    cell: "Cell: 01847334809",
    profile: "https://faculty.daffodilvarsity.edu.bd/profile/mct/bimal.html",
    photo: "assets/images/faculty/bimal-chandra-das.jpg"
  },
  {
    name: "Mr. Md. Salah Uddin",
    designation: "Assistant Professor and Head",
    qualification: "PhD Research Fellow, Graz University of Technology, Austria",
    email: "headmct@daffodilvarsity.edu.bd, salah.mct@diu.edu.bd",
    phone: "Ext.40100",
    cell: "01847334769, 01515653128",
    profile: "https://faculty.daffodilvarsity.edu.bd/profile/mct/salah-mct.html",
    photo: "assets/images/faculty/md-salah-uddin.jpg"
  },
  {
    name: "Prof. Dr. Md Kabirul Islam",
    designation: "Professor & Dean",
    qualification: "Visiting Scholar, Open University of Hong Kong; multiple international trainings",
    email: "kislam@daffodilvarsity.edu.bd",
    phone: "9138234-5, Ext. 157",
    cell: "88 01819382879",
    profile: "https://faculty.daffodilvarsity.edu.bd/profile/mct/kislam.html",
    photo: "assets/images/faculty/md-kabirul-islam.jpg"
  },
  {
    name: "Dr. Shaikh Muhammad Allayear",
    designation: "Professor & Proctor",
    qualification: "",
    email: "drallayear.mct@diu.edu.bd, proctor@daffodilvarsity.edu.bd",
    phone: "40100",
    cell: "01847334900, 01974013732, 01624013732",
    profile: "https://faculty.daffodilvarsity.edu.bd/profile/mct/Allayear.html",
    photo: "assets/images/faculty/shaikh-muhammad-allayear.jpg"
  },
  {
    name: "Mr. Arif Ahmed",
    designation: "Professor of Practice",
    qualification: "",
    email: "arifahmed@daffodilvarsity.edu.bd",
    phone: "",
    cell: "01754824376",
    profile: "https://faculty.daffodilvarsity.edu.bd/profile/mct/aahmed.html",
    photo: "assets/images/faculty/arif-ahmed.jpg"
  },
  {
    name: "Dr. Md. Samaun Hasan",
    designation: "Assistant Professor",
    qualification: "",
    email: "hasan.mct@diu.edu.bd",
    phone: "164",
    cell: "01847140101, 01719258077",
    profile: "https://faculty.daffodilvarsity.edu.bd/profile/mct/samaun.html",
    photo: "assets/images/faculty/md-samaun-hasan.jpg"
  },
  {
    name: "Mr. Mizanur Rahman",
    designation: "Assistant Professor",
    qualification: "Training on Teaching for Active Learning (DIU, 2017)",
    email: "mizan.mct@diu.edu.bd",
    phone: "164",
    cell: "01711285050",
    profile: "https://faculty.daffodilvarsity.edu.bd/profile/mct/mizanur-mct.html",
    photo: "assets/images/faculty/mizanur-rahman.png"
  },
  {
    name: "Mr. Kazi Jahid Hasan",
    designation: "Assistant Professor",
    qualification: "",
    email: "jahid.mct@diu.edu.bd",
    phone: "",
    cell: "+8801847334969",
    profile: "https://faculty.daffodilvarsity.edu.bd/profile/mct/jahidmct.html",
    photo: "assets/images/faculty/kazi-jahid-hasan.jpg"
  },
  {
    name: "Mr. Apurba Ghosh",
    designation: "Assistant Professor",
    qualification: "Generative AI for Educators Certificate (Google x MIT RAISE, 2024)",
    email: "apurba.mct@diu.edu.bd",
    phone: "",
    cell: "01728826400",
    profile: "https://faculty.daffodilvarsity.edu.bd/profile/mct/apurbamct.html",
    photo: "assets/images/faculty/apurba-ghosh.jpg"
  },
  {
    name: "Mr. Mirza Mohtashim Alam",
    designation: "Lecturer",
    qualification: "Games & interactive media projects (Unity, C#, streaming tech)",
    email: "mirza.mct@diu.edu.bd",
    phone: "164",
    cell: "01719858641",
    profile: "https://faculty.daffodilvarsity.edu.bd/profile/mct/mohtashim.html",
    photo: "assets/images/faculty/mirza-mohtashim-alam.jpg"
  },
  {
    name: "Mr. S M Monowar Kayser",
    designation: "Lecturer",
    qualification: "Virtual Gate & Edugate (immersive event platforms)",
    email: "kayser.mct@diu.edu.bd",
    phone: "",
    cell: "01785356699",
    profile: "https://faculty.daffodilvarsity.edu.bd/profile/mct/monowar.html",
    photo: "assets/images/faculty/sm-monowar-kayser.jpg"
  },
  {
    name: "Mr. Md Shafikul Islam",
    designation: "Lecturer",
    qualification: "AI in Education, Faculty Development workshops (2023–24)",
    email: "shafikul.mct@diu.edu.bd",
    phone: "",
    cell: "+8801770494091, +8801521407981",
    profile: "https://faculty.daffodilvarsity.edu.bd/profile/mct/shafikul.html",
    photo: "assets/images/faculty/md-shafikul-islam.jpg"
  }
];

// Full course outline organized by semester for filtering and rendering.
const courseData = [
  // Level 1, Term 1
  { code: "0212-111", title: "Fundamentals of Graphic Design", credit: 3, semester: 1, type: "Core", desc: "Principles, color, and layout foundations for visual communication." },
  { code: "0212-112", title: "Fundamentals of Graphic Design Lab", credit: 1, semester: 1, type: "Lab", desc: "Practical exercises to apply core design theory and tooling." },
  { code: "0213-113", title: "Drawing & Sketching", credit: 3, semester: 1, type: "Core", desc: "Observation, proportion, and manual rendering skills for creatives." },
  { code: "0611-111", title: "Computer Fundamentals", credit: 3, semester: 1, type: "Core", desc: "Hardware, software, and productivity workflows for creators." },
  { code: "0231-111", title: "English I", credit: 3, semester: 1, type: "Core", desc: "Academic writing and presentation basics." },
  { code: "0223-111", title: "Art of Living", credit: 3, semester: 1, type: "Core", desc: "Personal development, ethics, and mindset for university success." },
  { code: "0222-111", title: "Bangladesh Studies", credit: 3, semester: 1, type: "Core", desc: "History, culture, and civic understanding of Bangladesh." },

  // Level 1, Term 2
  { code: "0231-121", title: "English II", credit: 3, semester: 2, type: "Core", desc: "Advanced communication and research-driven writing." },
  { code: "0212-121", title: "Fundamentals of 3D Design and Modeling", credit: 3, semester: 2, type: "Core", desc: "3D forms, topology, and modeling workflows." },
  { code: "0213-123", title: "Composition Study", credit: 3, semester: 2, type: "Core", desc: "Visual balance, rhythm, and spatial relationships." },
  { code: "0219-125", title: "Creative Writing", credit: 3, semester: 2, type: "Core", desc: "Storytelling craft for scripts, narratives, and campaigns." },
  { code: "0212-127", title: "Principles and Elements of Design", credit: 3, semester: 2, type: "Core", desc: "Form, hierarchy, and gestalt in multimedia contexts." },
  { code: "0212-128", title: "Principles and Elements of Design Lab", credit: 1, semester: 2, type: "Lab", desc: "Studio practice reinforcing design principles." },
  { code: "0613-121", title: "Structured Programming", credit: 3, semester: 2, type: "Core", desc: "Algorithmic thinking and structured problem solving." },
  { code: "0613-122", title: "Structured Programming Lab", credit: 1, semester: 2, type: "Lab", desc: "Hands-on programming drills for structured paradigms." },

  // Level 2, Term 1
  { code: "0613-314", title: "User Interface and Experience", credit: 1, semester: 3, type: "Core", desc: "Fundamentals of UX research and interface heuristics." },
  { code: "0211-211", title: "2D Animation", credit: 3, semester: 3, type: "Core", desc: "Principles of motion and timing for 2D animation." },
  { code: "0211-212", title: "2D Animation Lab", credit: 1, semester: 3, type: "Lab", desc: "Practical animation exercises using industry tools." },
  { code: "0212-213", title: "Basic Typography Design", credit: 3, semester: 3, type: "Core", desc: "Type anatomy, pairing, and layout for digital media." },
  { code: "0613-215", title: "Object-Oriented Programming", credit: 3, semester: 3, type: "Core", desc: "OOP concepts and implementation for interactive systems." },
  { code: "0613-216", title: "Object-Oriented Programming Lab", credit: 1, semester: 3, type: "Lab", desc: "Applied OOP through exercises and small projects." },
  { code: "0211-217", title: "Motion Graphics", credit: 3, semester: 3, type: "Core", desc: "Designing kinetic visuals for media and product UI." },
  { code: "0212-219", title: "3D Design and Modeling", credit: 3, semester: 3, type: "Core", desc: "Intermediate 3D modeling and scene building." },
  { code: "0541-111", title: "Mathematics I", credit: 3, semester: 3, type: "Core", desc: "Foundational math concepts supporting graphics and computing." },

  // Level 2, Term 2
  { code: "0212-221", title: "Character Design & Composition (Z-brush)", credit: 3, semester: 4, type: "Core", desc: "Sculpting characters and posing for narrative impact." },
  { code: "2011-223", title: "Film Studies & Appreciation", credit: 3, semester: 4, type: "Core", desc: "Film language, genres, and critical analysis." },
  { code: "0219-224", title: "Calligraphy", credit: 1, semester: 4, type: "Lab", desc: "Hand-rendered type exploration and form." },
  { code: "0212-226", title: "Texturing", credit: 1, semester: 4, type: "Lab", desc: "Surface detailing and material creation workflows." },
  { code: "0213-224", title: "Figure Drawing", credit: 1, semester: 4, type: "Lab", desc: "Anatomy and gesture drawing for character work." },
  { code: "0533-221", title: "Physics-based Animation", credit: 3, semester: 4, type: "Core", desc: "Simulations and dynamics to drive believable motion." },
  { code: "0613-227", title: "Web Engineering", credit: 3, semester: 4, type: "Core", desc: "Modern web architecture and responsive delivery." },
  { code: "0613-228", title: "Web Engineering Lab", credit: 1, semester: 4, type: "Lab", desc: "Building responsive, performant web experiences." },
  { code: "0212-225", title: "Brand Design and Packaging", credit: 3, semester: 4, type: "Core", desc: "Identity systems, packaging form, and shelf impact." },
  { code: "0541-121", title: "Mathematics II", credit: 3, semester: 4, type: "Core", desc: "Applied math for graphics, simulation, and interaction." },

  // Level 3, Term 1
  { code: "0211-311", title: "3D Animation I", credit: 3, semester: 5, type: "Core", desc: "Animation pipelines and character blocking in 3D." },
  { code: "0211-313", title: "Lighting & Rendering", credit: 3, semester: 5, type: "Core", desc: "Lighting theory and render optimization for realism." },
  { code: "0211-314", title: "Lighting & Rendering Lab", credit: 1, semester: 5, type: "Lab", desc: "Hands-on lighting setups and render passes." },
  { code: "0211-315", title: "3D Environment Design", credit: 3, semester: 5, type: "Core", desc: "World-building, composition, and prop integration." },
  { code: "0211-317", title: "Audio & Video Streaming & Editing", credit: 3, semester: 5, type: "Core", desc: "Post-production, streaming formats, and audio mixing." },
  { code: "0219-319", title: "Graphic Novel", credit: 3, semester: 5, type: "Core", desc: "Visual storytelling through sequential art." },
  { code: "0613-329", title: "Immersive Learning", credit: 3, semester: 5, type: "Core", desc: "Designing learning experiences using XR and interactivity." },
  { code: "0613-312", title: "Script Programming", credit: 1, semester: 5, type: "Lab", desc: "Scripting essentials for automation and media workflows." },

  // Level 3, Term 2
  { code: "0212-324", title: "Industrial Design & Innovation Technology", credit: 1, semester: 6, type: "Lab", desc: "Product prototyping and innovation tooling." },
  { code: "0211-322", title: "3D Animation II", credit: 1, semester: 6, type: "Lab", desc: "Advanced animation polish and performance." },
  { code: "0212-323", title: "Architectural Visualization", credit: 3, semester: 6, type: "Core", desc: "Archviz workflows, lighting, and client-ready renders." },
  { code: "0211-323", title: "Character Animation", credit: 3, semester: 6, type: "Core", desc: "Acting, timing, and personality in motion." },
  { code: "0211-324", title: "Character Animation Lab", credit: 1, semester: 6, type: "Lab", desc: "Scene practice for expressive character shots." },
  { code: "0211-325", title: "Video Production", credit: 3, semester: 6, type: "Core", desc: "End-to-end video planning, shooting, and edits." },
  { code: "0211-327", title: "Visual Effects Production", credit: 3, semester: 6, type: "Core", desc: "Compositing, effects pipelines, and shot tracking." },
  { code: "0211-328", title: "Digital Matte Painting", credit: 1, semester: 6, type: "Lab", desc: "Environment extensions and digital matte workflows." },
  { code: "0613-321", title: "Multimedia Authoring", credit: 3, semester: 6, type: "Core", desc: "Interactive media builds across platforms." },
  { code: "0212-329", title: "New Typeface Design", credit: 3, semester: 6, type: "Core", desc: "Designing and testing original typefaces." },

  // Level 4, Term 1
  { code: "0211-411", title: "Simulation and Modeling", credit: 3, semester: 7, type: "Core", desc: "Advanced simulations for media and interactivity." },
  { code: "0211-412", title: "Simulation and Modeling Lab", credit: 1, semester: 7, type: "Lab", desc: "Applied simulation setups and iteration." },
  { code: "0211-413", title: "Digital Cinematography", credit: 3, semester: 7, type: "Core", desc: "Cinematography craft, camera movement, and lighting." },
  { code: "0613-411", title: "Game Analysis & Development", credit: 3, semester: 7, type: "Core", desc: "Game design patterns, analysis, and prototyping." },
  { code: "0613-412", title: "Game Analysis & Development Lab", credit: 1, semester: 7, type: "Lab", desc: "Hands-on game prototyping and iteration." },
  { code: "0613-413", title: "AR/VR Development", credit: 3, semester: 7, type: "Core", desc: "Building AR/VR experiences with modern toolchains." },
  { code: "0219-411", title: "Project Management", credit: 3, semester: 7, type: "Core", desc: "Agile methods, resource planning, and delivery." },
  { code: "0219-413", title: "Project Area – Phase 1", credit: 3, semester: 7, type: "Core", desc: "Capstone initiation, scoping, and prototyping." },

  // Level 4, Term 2
  { code: "0219-421", title: "Project Area – Phase 2", credit: 3, semester: 8, type: "Core", desc: "Capstone completion, deployment, and showcase." }
];

// Grab key DOM nodes once so the rest of the script can reuse them.
const facultyGrid = document.getElementById("facultyGrid");
const facultySearch = document.getElementById("facultySearch");
const courseList = document.getElementById("courseList");
const courseSearch = document.getElementById("courseSearch");
const courseCount = document.getElementById("courseCount");
const backToTop = document.getElementById("backToTop");

// Build the faculty cards based on search input.
function renderFaculty(filter = "") {
  const query = filter.toLowerCase();
  facultyGrid.innerHTML = "";
  facultyData
    .filter((f) => {
      if (!query) return true;
      return (
        f.name.toLowerCase().includes(query) ||
        (f.designation || "").toLowerCase().includes(query) ||
        (f.qualification || "").toLowerCase().includes(query) ||
        (f.email || "").toLowerCase().includes(query)
      );
    })
    .forEach((f) => {
      const card = document.createElement("div");
      card.className = "col-md-4";
      const qualification = f.qualification ? `<p class="mt-3 mb-2">${f.qualification}</p>` : "";
      const contacts = [f.email, f.phone, f.cell]
        .filter(Boolean)
        .map((line) => `<div>${line}</div>`)
        .join("");
      card.innerHTML = `
        <div class="faculty-card h-100">
          <div class="d-flex align-items-center gap-3">
            <img src="${f.photo}" alt="${f.name}">
            <div>
              <h5 class="mb-0">${f.name}</h5>
              <small class="text-muted">${f.designation || ""}</small>
            </div>
          </div>
          ${qualification}
          <div class="mt-3 small text-muted">${contacts}</div>
          ${f.profile ? `<a class="link-more d-inline-block mt-2" href="${f.profile}" target="_blank" rel="noopener">View profile →</a>` : ""}
        </div>
      `;
      facultyGrid.appendChild(card);
    });
}

// Render courses grouped by semester with quick search and counting.
function renderCourses(options = { semester: "all", search: "" }) {
  const { semester, search } = options;
  const query = search.toLowerCase();
  courseList.innerHTML = "";

  const filtered = courseData.filter((c) => {
    const matchesSemester = !semester || Number(semester) === c.semester;
    const matchesSearch =
      !query ||
      c.title.toLowerCase().includes(query) ||
      c.code.toLowerCase().includes(query) ||
      c.desc.toLowerCase().includes(query) ||
      c.type.toLowerCase().includes(query);
    return matchesSemester && matchesSearch;
  });

  courseCount.textContent = `${filtered.length} course${filtered.length === 1 ? "" : "s"}`;

  if (!filtered.length) {
    courseList.innerHTML = `<div class="course-empty">No courses found for this filter.</div>`;
    return;
  }

  const labels = {
    1: "Level 1 · Term 1",
    2: "Level 1 · Term 2",
    3: "Level 2 · Term 1",
    4: "Level 2 · Term 2",
    5: "Level 3 · Term 1",
    6: "Level 3 · Term 2",
    7: "Level 4 · Term 1",
    8: "Level 4 · Term 2"
  };

  const grouped = filtered.reduce((acc, c) => {
    acc[c.semester] = acc[c.semester] || [];
    acc[c.semester].push(c);
    return acc;
  }, {});

  Object.keys(grouped)
    .sort((a, b) => Number(a) - Number(b))
    .forEach((sem) => {
      const wrapper = document.createElement("div");
      wrapper.className = "course-table-wrap";
      const title = labels[sem] || `Semester ${sem}`;
      const rows = grouped[sem]
        .map(
          (c) => `
          <tr>
            <td><strong>${c.code}</strong></td>
            <td>${c.title}<div class="text-muted small">${c.desc}</div></td>
            <td>${c.credit}</td>
            <td><span class="badge bg-secondary">${c.type}</span></td>
          </tr>
        `
        )
        .join("");
      wrapper.innerHTML = `
        <p class="course-group-title">${title}</p>
        <div class="course-table-scroll">
          <table class="course-table">
            <thead>
              <tr>
                <th width="120">Code</th>
                <th>Title</th>
                <th width="90">Credit</th>
                <th width="110">Type</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      `;
      courseList.appendChild(wrapper);
    });
}

// Kick off the hero slider (and testimonial slider if present).
function initSwiper() {
  new Swiper(".hero-swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    effect: "fade"
  });

  new Swiper(".testimonial-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev"
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 }
    }
  });
}

// Fade-in animations on scroll.
function initAOS() {
  AOS.init({
    once: true,
    duration: 900,
    easing: "ease-out-cubic"
  });
}

// Shrink header and reveal back-to-top button after scrolling a bit.
function handleHeaderScroll() {
  const header = document.querySelector(".site-header");
  const toggleHeader = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
      backToTop.classList.add("show");
    } else {
      header.classList.remove("scrolled");
      backToTop.classList.remove("show");
    }
  };
  toggleHeader();
  window.addEventListener("scroll", toggleHeader);
}

// Smoothly jump to the top when the helper button is clicked.
function handleBackToTop() {
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// Entrance animations for hero elements and floating badges.
function initGSAP() {
  if (typeof gsap === "undefined") return;

  const tl = gsap.timeline({ defaults: { duration: 0.9, ease: "power3.out" } });
  tl.from("[data-hero='eyebrow']", { y: 20, opacity: 0 })
    .from("[data-hero='title']", { y: 24, opacity: 0, duration: 0.9 }, "-=0.3")
    .from("[data-hero='lead']", { y: 18, opacity: 0 }, "-=0.4")
    .from("[data-hero='cta']", { y: 16, opacity: 0 }, "-=0.4")
    .from("[data-hero='cta-alt']", { y: 16, opacity: 0 }, "-=0.5")
    .from(".stat-panel > div", { y: 22, opacity: 0, stagger: 0.07 }, "-=0.4")
    .from(".hero-card-visual", { y: 20, opacity: 0, scale: 0.99 }, "-=0.4");

  gsap.utils.toArray(".floating-chip").forEach((chip, index) => {
    gsap.to(chip, {
      y: index % 2 === 0 ? 10 : -10,
      x: index % 2 === 0 ? -6 : 6,
      duration: 3.4 + index * 0.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });

  gsap.to(".orb", {
    scale: 1.05,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.2
  });
}

// Close the mobile nav when a link is tapped so it does not stay open.
function handleNavCollapse() {
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const toggler = document.querySelector(".navbar-toggler");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!navMenu || !toggler) return;
      const isMobile = window.getComputedStyle(toggler).display !== "none";
      if (isMobile) {
        const instance = bootstrap.Collapse.getInstance(navMenu) || new bootstrap.Collapse(navMenu, { toggle: false });
        instance.hide();
      }
    });
  });
}

// Chip buttons swap active semester while keeping search text.
function handleCourseChips() {
  const chips = document.querySelectorAll(".btn-chip");
  chips.forEach((btn) => {
    btn.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      renderCourses({ semester: btn.dataset.semester || "all", search: courseSearch.value });
    });
  });
}

// Live filtering for faculty and courses based on user typing.
function handleSearchInputs() {
  facultySearch.addEventListener("input", (e) => renderFaculty(e.target.value));
  courseSearch.addEventListener("input", (e) => {
    const activeSem = document.querySelector(".btn-chip.active")?.dataset.semester || "1";
    renderCourses({ semester: activeSem, search: e.target.value });
  });
}

// Lightweight front-end validation for the contact form.
function handleForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    let valid = true;

    form.querySelectorAll("[required]").forEach((field) => {
      if (!field.value.trim()) {
        field.classList.add("is-invalid");
        valid = false;
      } else {
        field.classList.remove("is-invalid");
      }
    });

    const email = formData.get("email");
    if (email && !email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      form.querySelector("[name='email']").classList.add("is-invalid");
      valid = false;
    }

    if (!valid) {
      status.textContent = "Please fix the errors above.";
      status.style.color = "#ff7b6f";
      return;
    }

    status.textContent = "Message sent! We will get back shortly.";
    status.style.color = "#5de0e6";
    form.reset();
  });
}

// Start everything once the page is ready.
function init() {
  renderFaculty();
  renderCourses({ semester: "1", search: "" });
  initSwiper();
  initAOS();
  handleHeaderScroll();
  handleBackToTop();
  handleNavCollapse();
  handleCourseChips();
  handleSearchInputs();
  handleForm();
  initGSAP();
}

// Ensure the script runs after the DOM is loaded.
document.addEventListener("DOMContentLoaded", init);
