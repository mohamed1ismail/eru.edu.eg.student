// ============================================================
// Complete Academic Transcript - Shahd Bandary Mohamed Bandary
// Faculty of Computers & Information Technology - Cybersecurity
// Student ID: 235419
// ============================================================

const semestersData = {

  // ── Year 1 · Term 1 (Autumn 2022/2023) ────────────────────
  "1-1": {
    gpa: "2.22",
    cgpa: "3.26",
    passedCH: "15.00",
    courses: [
      { code: "ERU-CS101", name: "Introduction to Computing", status: "Active", point: "4.00", passFail: "Pass", grade: "A" },
      { code: "ERU-CS102", name: "Programming 1", status: "Active", point: "3.30", passFail: "Pass", grade: "B+" },
      { code: "ERU-MA101", name: "Calculus 1", status: "Active", point: "3.00", passFail: "Pass", grade: "B" },
      { code: "ERU-PH101", name: "Physics", status: "Active", point: "2.30", passFail: "Pass", grade: "C+" },
      { code: "ERU-EN101", name: "English 1", status: "Active", point: "3.70", passFail: "Pass", grade: "A-" }
    ]
  },

  // ── Year 1 · Term 2 (Spring 2022/2023) ────────────────────
  "1-2": {
    gpa: "2.45",
    cgpa: "3.16",
    passedCH: "30.00",
    courses: [
      { code: "ERU-CS103", name: "Data Structures", status: "Active", point: "3.30", passFail: "Pass", grade: "B+" },
      { code: "ERU-CS104", name: "Programming 2", status: "Active", point: "3.70", passFail: "Pass", grade: "A-" },
      { code: "ERU-MA102", name: "Calculus 2", status: "Active", point: "3.00", passFail: "Pass", grade: "B" },
      { code: "ERU-CE101", name: "Digital Logic Design", status: "Active", point: "2.00", passFail: "Pass", grade: "C" },
      { code: "ERU-EN102", name: "English 2", status: "Active", point: "3.30", passFail: "Pass", grade: "B+" }
    ]
  },

  // ── Year 2 · Term 3 (Autumn 2023/2024) ────────────────────
  "2-1": {
    gpa: "2.71",
    cgpa: "3.11",
    passedCH: "45.00",
    courses: [
      { code: "ERU-CS201", name: "Algorithms", status: "Active", point: "3.00", passFail: "Pass", grade: "B" },
      { code: "ERU-CE201", name: "Computer Architecture", status: "Active", point: "2.70", passFail: "Pass", grade: "B-" },
      { code: "ERU-CS202", name: "Operating Systems", status: "Active", point: "2.30", passFail: "Pass", grade: "C+" },
      { code: "ERU-MA201", name: "Probability & Statistics", status: "Active", point: "3.70", passFail: "Pass", grade: "A-" },
      { code: "ERU-IS201", name: "Database Systems", status: "Active", point: "3.30", passFail: "Pass", grade: "B+" }
    ]
  },

  // ── Year 2 · Term 4 (Spring 2023/2024) ────────────────────
  "2-2": {
    gpa: "2.76",
    cgpa: "3.15",
    passedCH: "60.00",
    courses: [
      { code: "ERU-IT201", name: "Computer Networks 1", status: "Active", point: "3.70", passFail: "Pass", grade: "A-" },
      { code: "ERU-CS203", name: "Software Engineering", status: "Active", point: "3.00", passFail: "Pass", grade: "B" },
      { code: "ERU-MA202", name: "Discrete Mathematics", status: "Active", point: "2.30", passFail: "Pass", grade: "C+" },
      { code: "ERU-CYS201", name: "InfoSec Fundamentals", status: "Active", point: "3.30", passFail: "Pass", grade: "B+" },
      { code: "ERU-GE201", name: "Ethics in Computing", status: "Active", point: "4.00", passFail: "Pass", grade: "A" }
    ]
  },

  // ── Year 3 · Term 5 (Autumn 2024/2025) ────────────────────
  "3-1": {
    gpa: "3.00",
    cgpa: "3.16",
    passedCH: "75.00",
    courses: [
      { code: "ERU-CS307", name: "Network Systems", status: "Active", point: "4.00", passFail: "Pass", grade: "A+" },
      { code: "ERU-CS308", name: "UI Design", status: "Active", point: "3.75", passFail: "Pass", grade: "A" },
      { code: "ERU-CS309", name: "Operating Systems (OI)", status: "Active", point: "4.00", passFail: "Pass", grade: "A+" },
      { code: "ERU-CYS310", name: "Basic Cybersecurity", status: "Active", point: "3.00", passFail: "Pass", grade: "A" },
      { code: "ERU-CS311", name: "Cloud Computing", status: "Active", point: "4.00", passFail: "Pass", grade: "A+" },
      { code: "ERU-CE312", name: "Logic Design", status: "Active", point: "3.00", passFail: "Pass", grade: "A" }
    ]
  },

  // ── Year 3 · Term 6 (Spring 2025/2026) ────────────────────
  "3-2": {
    gpa: "3.20",
    cgpa: "3.20",
    passedCH: "93.00",
    courses: [
      { code: "ERU-CYS301", name: "Advanced Network Security", status: "Active", point: "4.00", passFail: "Pass", grade: "A+" },
      { code: "ERU-CYS302", name: "Cryptography", status: "Active", point: "3.75", passFail: "Pass", grade: "A" },
      { code: "ERU-CYS303", name: "Digital Forensics", status: "Active", point: "4.00", passFail: "Pass", grade: "A+" },
      { code: "ERU-CYS304", name: "Penetration Testing", status: "Active", point: "3.75", passFail: "Pass", grade: "A" },
      { code: "ERU-CYS305", name: "Cloud Security", status: "Active", point: "4.00", passFail: "Pass", grade: "A+" },
      { code: "ERU-CYS306", name: "Risk Management & Compliance", status: "Active", point: "3.75", passFail: "Pass", grade: "A" }
    ]
  }

};

// ============================================================
// DOMContentLoaded – Wire-up all interactive events
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('sidebar');
  const mainContainer = document.getElementById('main-container');

  // Toggle Sidebar visibility
  hamburgerBtn.addEventListener('click', () => {
    if (window.innerWidth > 768) {
      sidebar.classList.toggle('collapsed');
      mainContainer.classList.toggle('expanded');
    } else {
      sidebar.classList.toggle('active');
    }
  });

  // Close sidebar on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      sidebar.classList.remove('active');
    } else {
      sidebar.classList.remove('collapsed');
      mainContainer.classList.remove('expanded');
    }
  });

  // ── Semester Results "Go" button ────────────────────────────
  const btnGoResults = document.getElementById('btn-go-results');
  const transcriptCard = document.getElementById('transcript-card-container');
  const warningContainer = document.getElementById('transcript-warning-container');

  if (btnGoResults && transcriptCard && warningContainer) {
    btnGoResults.addEventListener('click', () => {
      const year = document.getElementById('academic-year-select')?.value ?? "";
      const semester = document.getElementById('semester-select')?.value ?? "";
      const key = getSemesterKey(year, semester);

      if (key && semestersData[key]) {
        warningContainer.style.display = 'none';

        // Update summary bar
        document.getElementById('res-gpa').innerText = semestersData[key].gpa;
        document.getElementById('res-cgpa').innerText = semestersData[key].cgpa;
        document.getElementById('res-passed-ch').innerText = semestersData[key].passedCH;

        // Build table body
        const tbody = document.getElementById('results-table-tbody');
        tbody.innerHTML = '';

        // Top header row
        const headerTr = document.createElement('tr');
        headerTr.className = 'Table_Header';
        headerTr.innerHTML = `
          <th scope="col">Course Code</th>
          <th scope="col">Course Name</th>
          <th scope="col">Course Status</th>
          <th scope="col">Point</th>
          <th scope="col">Pass/Fail</th>
          <th scope="col">Grade</th>
        `;
        tbody.appendChild(headerTr);

        // Course rows (alternating background)
        semestersData[key].courses.forEach((course, index) => {
          const tr = document.createElement('tr');
          tr.className = index % 2 === 0 ? 'Table_Row' : 'Table_AlternatingRow';
          tr.innerHTML = `
            <td>${course.code}</td>
            <td>${course.name}</td>
            <td>${course.status}</td>
            <td>${course.point}</td>
            <td>${course.passFail}</td>
            <td>${course.grade}</td>
          `;
          tbody.appendChild(tr);
        });

        // Bottom repeating header row
        const footerTr = document.createElement('tr');
        footerTr.className = 'Table_Header';
        footerTr.innerHTML = `
          <th scope="col">Course Code</th>
          <th scope="col">Course Name</th>
          <th scope="col">Course Status</th>
          <th scope="col">Point</th>
          <th scope="col">Pass/Fail</th>
          <th scope="col">Grade</th>
        `;
        tbody.appendChild(footerTr);

        transcriptCard.style.display = 'block';
        transcriptCard.scrollIntoView({ behavior: 'smooth' });

      } else {
        transcriptCard.style.display = 'none';
        warningContainer.style.display = 'block';
        warningContainer.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Open Academic Affairs menu by default
  toggleMenu('menu-academic');
});

// ============================================================
// Helper: map selected year + semester → database key
// ============================================================
function getSemesterKey(year, semester) {
  // Year 1 (General) – 2023/2024
  if (year === "2023/2024" && semester === "خريف") return "1-1";
  if (year === "2023/2024" && semester === "ربيع") return "1-2";
  // Year 2 (General) – 2024/2025
  if (year === "2024/2025" && semester === "خريف") return "2-1";
  if (year === "2024/2025" && semester === "ربيع") return "2-2";
  // Year 3 (Cybersecurity Major) – 2025/2026
  if (year === "2025/2026" && semester === "خريف") return "3-1";
  if (year === "2025/2026" && semester === "ربيع") return "3-2";
  return null;
}

// ============================================================
// Accordion submenu toggle
// ============================================================
function toggleMenu(menuId) {
  const targetMenu = document.getElementById(menuId);
  const allMenuItems = document.querySelectorAll('.menu-item');
  if (!targetMenu) return;
  const isActive = targetMenu.classList.contains('active');
  allMenuItems.forEach(item => item.classList.remove('active'));
  if (!isActive) targetMenu.classList.add('active');
}

// Submenu item click highlight
function selectSubmenu(linkElement) {
  document.querySelectorAll('.submenu li a').forEach(link => {
    link.style.backgroundColor = '';
    link.style.fontWeight = '';
  });
  linkElement.style.backgroundColor = '#dcedc8';
  linkElement.style.fontWeight = 'bold';
}

// ============================================================
// View switching logic (SPA Routing)
// ============================================================
function switchView(viewName) {
  document.querySelectorAll('.portal-view').forEach(v => v.style.display = 'none');

  const transcriptCard = document.getElementById('transcript-card-container');
  const warningContainer = document.getElementById('transcript-warning-container');
  if (transcriptCard) transcriptCard.style.display = 'none';
  if (warningContainer) warningContainer.style.display = 'none';

  const titleText = document.getElementById('page-title-text');

  if (viewName === 'home') {
    document.getElementById('home-view').style.display = 'block';
    if (titleText) titleText.innerText = 'Home Page';
  } else if (viewName === 'semester-results') {
    document.getElementById('semester-results-view').style.display = 'block';
    if (titleText) titleText.innerText = 'Semester Results';
  }

  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.classList.remove('active');
}

// ============================================================
// Login validation handler
// ============================================================
function handleLogin(event) {
  event.preventDefault();

  const nameInput = document.getElementById('login-name').value.trim();
  const idInput = document.getElementById('login-id').value.trim();
  const passwordInput = document.getElementById('login-password').value;

  const errorMsg = document.getElementById('login-error-msg');
  const overlay = document.getElementById('login-overlay');

  // Accept exact Arabic name or English translation (case-insensitive)
  const normalizedName = nameInput.toLowerCase();
  const isNameValid = (nameInput === "شهد بنداري محمد بنداري") ||
    (normalizedName === "shahd bandary mohamed bandary") ||
    (normalizedName === "shahd bandary");

  const isIdValid = (idInput === '235419');
  const isPasswordValid = (passwordInput === 'shb@#419');

  if (isNameValid && isIdValid && isPasswordValid) {
    // Hide error, fade out login screen
    errorMsg.style.display = 'none';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 400);
  } else {
    // Show validation error message
    errorMsg.style.display = 'block';
  }
}
