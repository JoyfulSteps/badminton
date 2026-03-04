import './style.css';
import { phases, weeks } from './content/roadmap.js';
import { injuryPrevention, equipmentGuide, postSessionChecklist } from './content/supplements.js';
import { warmup, cooldown } from './content/warmup.js';
import { rules } from './content/rules.js';

// ===== State =====
const state = {
  completedWeeks: JSON.parse(localStorage.getItem('bm_completed') || '[]'),
  theme: localStorage.getItem('bm_theme') || 'dark',
  checklistState: JSON.parse(localStorage.getItem('bm_checklist') || '{}'),
};

function saveState() {
  localStorage.setItem('bm_completed', JSON.stringify(state.completedWeeks));
  localStorage.setItem('bm_theme', state.theme);
  localStorage.setItem('bm_checklist', JSON.stringify(state.checklistState));
}

function toggleWeekComplete(weekId) {
  const idx = state.completedWeeks.indexOf(weekId);
  if (idx >= 0) state.completedWeeks.splice(idx, 1);
  else state.completedWeeks.push(weekId);
  saveState();
}

// ===== Theme =====
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = state.theme === 'dark' ? '☀️' : '🌙';
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  saveState();
  applyTheme();
});

applyTheme();

// ===== Sidebar =====
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarClose = document.getElementById('sidebar-close');
const sidebarOverlay = document.getElementById('sidebar-overlay');

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('active');
}

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.add('open');
  sidebarOverlay.classList.add('active');
});

sidebarClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// ===== Navigation Rendering =====
function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  const currentHash = location.hash || '#home';

  let html = `
    <div class="nav-section">
      <div class="nav-section-title">Tổng quan</div>
      <a class="nav-item ${currentHash === '#home' ? 'active' : ''}" href="#home">
        <span class="nav-icon">🏠</span> Trang chủ
      </a>
    </div>
  `;

  phases.forEach(phase => {
    const phaseWeeks = weeks.filter(w => w.phase === phase.id);
    html += `<div class="nav-section">
      <div class="nav-section-title">${phase.icon} ${phase.name} (Tuần ${phase.weeks})</div>`;
    phaseWeeks.forEach(w => {
      const isComplete = state.completedWeeks.includes(w.id);
      const isActive = currentHash === `#week-${w.id}`;
      html += `<a class="nav-item ${isActive ? 'active' : ''}" href="#week-${w.id}">
        <span class="nav-icon">${isComplete ? '✅' : '📖'}</span>
        <span>Tuần ${w.id}: ${w.title}</span>
        ${isComplete ? '<span class="nav-check">✓</span>' : ''}
      </a>`;
    });
    html += `</div>`;
  });

  html += `
    <div class="nav-section">
      <div class="nav-section-title">📚 Bổ trợ</div>
      <a class="nav-item ${currentHash === '#rules' ? 'active' : ''}" href="#rules">
        <span class="nav-icon">📏</span> Luật chơi cầu lông
      </a>
      <a class="nav-item ${currentHash === '#injury' ? 'active' : ''}" href="#injury">
        <span class="nav-icon">🏥</span> Phòng chấn thương
      </a>
      <a class="nav-item ${currentHash === '#equipment' ? 'active' : ''}" href="#equipment">
        <span class="nav-icon">🎒</span> Trang bị & Dụng cụ
      </a>
      <a class="nav-item ${currentHash === '#warmup' ? 'active' : ''}" href="#warmup">
        <span class="nav-icon">🔥</span> Khởi động & Giãn cơ
      </a>
      <a class="nav-item ${currentHash === '#checklist' ? 'active' : ''}" href="#checklist">
        <span class="nav-icon">📋</span> Checklist cuối buổi
      </a>
    </div>
  `;

  nav.innerHTML = html;
}

// ===== Page Renderers =====

function renderHome() {
  const completed = state.completedWeeks.length;
  const total = weeks.length;
  const progress = Math.round((completed / total) * 100);

  let html = `
    <div class="hero">
      <h1><span class="emoji">🏸</span> Lộ trình cầu lông</h1>
      <p>12 tuần huấn luyện cho người mới bắt đầu. Phù hợp mọi người, nhẹ nhàng & bài bản.</p>
      <div class="hero-stats">
        <div class="hero-stat">
          <div class="stat-value">12</div>
          <div class="stat-label">Tuần</div>
        </div>
        <div class="hero-stat">
          <div class="stat-value">3</div>
          <div class="stat-label">Giai đoạn</div>
        </div>
        <div class="hero-stat">
          <div class="stat-value">${completed}/${total}</div>
          <div class="stat-label">Hoàn thành</div>
        </div>
      </div>
    </div>

    <div class="section-title">Lộ trình 3 giai đoạn</div>
    <div class="phase-grid">
  `;

  phases.forEach(phase => {
    const phaseWeeks = weeks.filter(w => w.phase === phase.id);
    html += `
      <div class="phase-card" style="--phase-color: ${phase.color}">
        <div class="phase-card-header">
          <span class="phase-icon">${phase.icon}</span>
          <h3>${phase.name}</h3>
          <span class="phase-tag">Tuần ${phase.weeks}</span>
        </div>
        <p>${phase.desc}</p>
        <div class="phase-weeks">
          ${phaseWeeks.map(w => `
            <a href="#week-${w.id}" class="phase-week-dot ${state.completedWeeks.includes(w.id) ? 'completed' : ''}" title="Tuần ${w.id}: ${w.title}">
              ${w.id}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  html += `</div>`;

  html += `
    <div class="section-title">Nội dung bổ trợ</div>
    <div class="supplement-grid">
      <div class="supplement-card" onclick="location.hash='#rules'">
        <span class="supp-icon">📏</span>
        <div class="supp-title">Luật chơi</div>
        <div class="supp-desc">Tính điểm, giao cầu, lỗi</div>
      </div>
      <div class="supplement-card" onclick="location.hash='#injury'">
        <span class="supp-icon">🏥</span>
        <div class="supp-title">Phòng chấn thương</div>
        <div class="supp-desc">Xử lý & phòng tránh</div>
      </div>
      <div class="supplement-card" onclick="location.hash='#equipment'">
        <span class="supp-icon">🎒</span>
        <div class="supp-title">Trang bị</div>
        <div class="supp-desc">Vợt, giày, quần áo</div>
      </div>
      <div class="supplement-card" onclick="location.hash='#warmup'">
        <span class="supp-icon">🔥</span>
        <div class="supp-title">Khởi động</div>
        <div class="supp-desc">Warm-up & Cool-down</div>
      </div>
      <div class="supplement-card" onclick="location.hash='#checklist'">
        <span class="supp-icon">📋</span>
        <div class="supp-title">Checklist</div>
        <div class="supp-desc">Kiểm tra cuối buổi</div>
      </div>
    </div>
  `;

  return html;
}

function renderWeek(weekId) {
  const week = weeks.find(w => w.id === weekId);
  if (!week) return '<p>Không tìm thấy tuần này.</p>';

  const phase = phases.find(p => p.id === week.phase);
  const isComplete = state.completedWeeks.includes(weekId);
  const prevWeek = weeks.find(w => w.id === weekId - 1);
  const nextWeek = weeks.find(w => w.id === weekId + 1);

  let html = `
    <div class="lesson-header">
      <div class="lesson-breadcrumb">
        <a href="#home">Trang chủ</a> <span>›</span>
        <span>${phase.icon} ${phase.name}</span> <span>›</span>
        <span>Tuần ${week.id}</span>
      </div>
      <h1 class="lesson-title">Tuần ${week.id}: ${week.title}</h1>
      <div class="lesson-meta">
        <span class="lesson-meta-item">⏱️ ${week.duration}</span>
        <span class="lesson-meta-item">📊 ${week.difficulty}</span>
        <span class="lesson-meta-item">${phase.icon} ${phase.name}</span>
      </div>
    </div>

    <div class="objectives">
      <h3>🎯 Mục tiêu tuần này</h3>
      <ul>
        ${week.objectives.map(o => `<li>${o}</li>`).join('')}
      </ul>
    </div>
  `;

  // Tips at top
  if (week.tips) {
    week.tips.forEach(tip => {
      const typeClass = tip.type === 'info' ? 'tip-info' : tip.type === 'warning' ? 'tip-warning' : tip.type === 'danger' ? 'tip-danger' : 'tip-success';
      html += `<div class="tip-box ${typeClass}"><span class="tip-icon">${tip.text.slice(0, 2)}</span><span>${tip.text.slice(2)}</span></div>`;
    });
  }

  // Drills
  html += `<div class="drill-section"><h3>📋 Bài tập chi tiết</h3>`;
  week.drills.forEach(drill => {
    html += `
      <div class="drill-card">
        <h4>${drill.title} <span class="drill-time">${drill.time}</span></h4>
        <p>${drill.desc}</p>
        ${drill.steps ? `<ol class="drill-steps">${drill.steps.map(s => `<li>${s}</li>`).join('')}</ol>` : ''}
      </div>
    `;
  });
  html += `</div>`;

  // Checklist
  if (week.checklist) {
    const checkKey = `week-${weekId}`;
    const checks = state.checklistState[checkKey] || [];
    html += `
      <div class="checklist">
        <h3>✅ Checklist cuối buổi</h3>
        ${week.checklist.map((item, i) => {
      const checked = checks.includes(i);
      return `
            <div class="checklist-item" data-week="${weekId}" data-index="${i}">
              <input type="checkbox" id="ck-${weekId}-${i}" ${checked ? 'checked' : ''}>
              <label for="ck-${weekId}-${i}">${item}</label>
            </div>
          `;
    }).join('')}
      </div>
    `;
  }

  // Mark complete
  html += `
    <button class="complete-btn ${isComplete ? 'is-completed' : ''}" data-week-complete="${weekId}">
      ${isComplete ? '✅ Đã hoàn thành tuần này!' : '⬜ Đánh dấu hoàn thành tuần này'}
    </button>
  `;

  // Week navigation
  html += `<div class="week-nav">`;
  if (prevWeek) {
    html += `<a class="week-nav-btn" href="#week-${prevWeek.id}">← Tuần ${prevWeek.id}</a>`;
  } else {
    html += `<span></span>`;
  }
  if (nextWeek) {
    html += `<a class="week-nav-btn primary" href="#week-${nextWeek.id}">Tuần ${nextWeek.id} →</a>`;
  } else {
    html += `<a class="week-nav-btn primary" href="#home">🏠 Về trang chủ</a>`;
  }
  html += `</div>`;

  return html;
}

function renderInjuryPrevention() {
  let html = `
    <div class="lesson-header">
      <div class="lesson-breadcrumb">
        <a href="#home">Trang chủ</a> <span>›</span> <span>Phòng chấn thương</span>
      </div>
      <h1 class="lesson-title">${injuryPrevention.title}</h1>
    </div>
    <div class="supplement-content">
  `;

  injuryPrevention.sections.forEach(section => {
    html += `<h2>${section.title}</h2>`;
    if (Array.isArray(section.items) && typeof section.items[0] === 'object' && section.items[0].name) {
      section.items.forEach(item => {
        html += `
          <div class="drill-card">
            <h4>🔸 ${item.name}</h4>
            <p><strong>Nguyên nhân:</strong> ${item.cause}</p>
            <p><strong>Phòng tránh:</strong> ${item.prevent}</p>
            <p><strong>Sơ cứu:</strong> ${item.firstAid}</p>
          </div>
        `;
      });
    } else {
      html += `<ul>${section.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    }
  });

  html += `</div>`;
  return html;
}

function renderEquipment() {
  let html = `
    <div class="lesson-header">
      <div class="lesson-breadcrumb">
        <a href="#home">Trang chủ</a> <span>›</span> <span>Trang bị & Dụng cụ</span>
      </div>
      <h1 class="lesson-title">${equipmentGuide.title}</h1>
    </div>
    <div class="supplement-content">
  `;

  equipmentGuide.sections.forEach(section => {
    html += `<h2>${section.title}</h2>`;
    section.items.forEach(item => {
      html += `
        <div class="drill-card">
          <h4>🔸 ${item.name}</h4>
          <p>${item.desc}</p>
        </div>
      `;
    });
  });

  html += `</div>`;
  return html;
}

function renderWarmup() {
  let html = `
    <div class="lesson-header">
      <div class="lesson-breadcrumb">
        <a href="#home">Trang chủ</a> <span>›</span> <span>Khởi động & Giãn cơ</span>
      </div>
      <h1 class="lesson-title">🔥 Khởi động & Giãn cơ</h1>
    </div>
    <div class="supplement-content">
  `;

  // Warmup
  html += `<h2>${warmup.title} <small style="font-weight:400;color:var(--text-muted)">(${warmup.duration})</small></h2>`;
  html += `<p>${warmup.desc}</p>`;
  html += `<div class="tip-box tip-danger"><span class="tip-icon">🚫</span><span>KHÔNG BỎ QUA khởi động! Đây là cách tốt nhất để phòng chấn thương.</span></div>`;

  warmup.sections.forEach(section => {
    html += `<h3>${section.title}</h3>`;
    section.exercises.forEach(ex => {
      html += `
        <div class="drill-card">
          <h4>${ex.name} <span class="drill-time">${ex.duration}</span></h4>
          <p>${ex.desc}</p>
        </div>
      `;
    });
  });

  // Cooldown
  html += `<h2>${cooldown.title} <small style="font-weight:400;color:var(--text-muted)">(${cooldown.duration})</small></h2>`;
  html += `<p>${cooldown.desc}</p>`;

  cooldown.sections.forEach(section => {
    html += `<h3>${section.title}</h3>`;
    section.exercises.forEach(ex => {
      html += `
        <div class="drill-card">
          <h4>${ex.name} <span class="drill-time">${ex.duration}</span></h4>
          <p>${ex.desc}</p>
        </div>
      `;
    });
  });

  html += `</div>`;
  return html;
}

function renderPostChecklist() {
  let html = `
    <div class="lesson-header">
      <div class="lesson-breadcrumb">
        <a href="#home">Trang chủ</a> <span>›</span> <span>Checklist cuối buổi</span>
      </div>
      <h1 class="lesson-title">${postSessionChecklist.title}</h1>
      <p style="color:var(--text-secondary);margin-top:8px">In hoặc screenshot checklist này để dùng sau mỗi buổi tập.</p>
    </div>
  `;

  postSessionChecklist.items.forEach(cat => {
    const checkKey = `post-${cat.category}`;
    const checks = state.checklistState[checkKey] || [];
    html += `
      <div class="checklist">
        <h3>${cat.category}</h3>
        ${cat.tasks.map((task, i) => {
      const checked = checks.includes(i);
      return `
            <div class="checklist-item" data-postcat="${cat.category}" data-index="${i}">
              <input type="checkbox" id="post-${cat.category}-${i}" ${checked ? 'checked' : ''}>
              <label for="post-${cat.category}-${i}">${task}</label>
            </div>
          `;
    }).join('')}
      </div>
    `;
  });

  return html;
}

function renderRules() {
  let html = `
    <div class="lesson-header">
      <div class="lesson-breadcrumb">
        <a href="#home">Trang chủ</a> <span>›</span> <span>Luật chơi cầu lông</span>
      </div>
      <h1 class="lesson-title">${rules.title}</h1>
    </div>
    <div class="supplement-content">
  `;

  rules.sections.forEach(section => {
    html += `<h2>${section.title}</h2>`;
    section.content.forEach(block => {
      html += `<h3>${block.subtitle}</h3>`;
      html += `<ul>${block.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    });
  });

  html += `</div>`;
  return html;
}

// ===== Router =====
function route() {
  const hash = location.hash || '#home';
  const content = document.getElementById('content');
  let html = '';

  if (hash === '#home') {
    html = renderHome();
  } else if (hash.startsWith('#week-')) {
    const weekId = parseInt(hash.replace('#week-', ''));
    html = renderWeek(weekId);
  } else if (hash === '#rules') {
    html = renderRules();
  } else if (hash === '#injury') {
    html = renderInjuryPrevention();
  } else if (hash === '#equipment') {
    html = renderEquipment();
  } else if (hash === '#warmup') {
    html = renderWarmup();
  } else if (hash === '#checklist') {
    html = renderPostChecklist();
  } else {
    html = renderHome();
  }

  content.innerHTML = html;
  renderSidebar();
  bindEvents();
  closeSidebar();
  window.scrollTo(0, 0);
}

// ===== Event Binding =====
function bindEvents() {
  // Week complete buttons
  document.querySelectorAll('[data-week-complete]').forEach(btn => {
    btn.addEventListener('click', () => {
      const weekId = parseInt(btn.dataset.weekComplete);
      toggleWeekComplete(weekId);
      route();
    });
  });

  // Week checklists
  document.querySelectorAll('.checklist-item[data-week]').forEach(item => {
    const checkbox = item.querySelector('input');
    const weekId = item.dataset.week;
    const index = parseInt(item.dataset.index);
    const checkKey = `week-${weekId}`;

    const handleChange = () => {
      if (!state.checklistState[checkKey]) state.checklistState[checkKey] = [];
      const arr = state.checklistState[checkKey];
      const idx = arr.indexOf(index);
      if (checkbox.checked && idx < 0) arr.push(index);
      if (!checkbox.checked && idx >= 0) arr.splice(idx, 1);
      saveState();
    };

    checkbox.addEventListener('change', handleChange);
    item.addEventListener('click', (e) => {
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
        handleChange();
      }
    });
  });

  // Post-session checklists
  document.querySelectorAll('.checklist-item[data-postcat]').forEach(item => {
    const checkbox = item.querySelector('input');
    const cat = item.dataset.postcat;
    const index = parseInt(item.dataset.index);
    const checkKey = `post-${cat}`;

    const handleChange = () => {
      if (!state.checklistState[checkKey]) state.checklistState[checkKey] = [];
      const arr = state.checklistState[checkKey];
      const idx = arr.indexOf(index);
      if (checkbox.checked && idx < 0) arr.push(index);
      if (!checkbox.checked && idx >= 0) arr.splice(idx, 1);
      saveState();
    };

    checkbox.addEventListener('change', handleChange);
    item.addEventListener('click', (e) => {
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
        handleChange();
      }
    });
  });
}

// ===== Init =====
window.addEventListener('hashchange', route);
route();

// Remove Vite's default files
const defaultEl = document.querySelector('#app > .vite');
if (defaultEl) defaultEl.remove();
