/**
 * International Law Observatory - Main Application Logic
 * Handles UI interactions, rendering, and search functionality.
 */

// Initialize on load
document.addEventListener('DOMContentLoaded', function () {
    initDate();

    // Initial Render
    renderTreaties();
    renderCases();
    renderResolutions();

    // Update counts
    updateCounts();

    // Setup global search shortcut (Cmd/Ctrl + K)
    document.addEventListener("keydown", e => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            document.getElementById('advanced-search').focus();
        }
    });

    // Make functions globally available for HTML onclick handlers
    window.performAdvancedSearch = performAdvancedSearch;
    window.clearAdvancedSearch = clearAdvancedSearch;
    window.switchTab = switchTab;
    window.renderTreaties = renderTreaties;
    window.renderCases = renderCases;
    window.showAllCases = showAllCases;
    window.renderResolutions = renderResolutions;
});

function initDate() {
    const dateEl = document.getElementById("current-date");
    if (!dateEl) return;
    const now = new Date();
    const monthsAr = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    dateEl.textContent = now.getDate() + " " + monthsAr[now.getMonth()] + " " + now.getFullYear();
}

function updateCounts() {
    if (typeof treatiesData !== 'undefined') {
        const tCount = document.getElementById("treatyCount");
        if (tCount) tCount.textContent = treatiesData.length;
    }
    if (typeof casesData !== 'undefined') {
        const cCount = document.getElementById("caseCount");
        if (cCount) cCount.textContent = casesData.length;
    }
}

/* ==========================================================================
   NAVIGATION & TABS
   ========================================================================== */
function switchTab(tab) {
    document.querySelectorAll(".nav-item").forEach(el => {
        el.classList.remove("active");
        if (el.dataset.tab === tab) el.classList.add("active");
    });

    document.querySelectorAll(".section-content").forEach(el => {
        el.classList.remove("active");
    });
    const content = document.getElementById(tab + "-content");
    if (content) content.classList.add("active");

    const pageTitle = document.getElementById("page-title");
    const pageIcon = document.getElementById("page-icon");

    if (!pageTitle || !pageIcon) return;

    switch (tab) {
        case "treaties":
            pageTitle.querySelector("h1").textContent = "الاتفاقيات الدولية";
            pageTitle.querySelector("p").textContent = "مرجع شامل للمعاهدات والاتفاقيات الدولية الملزمة";
            pageIcon.textContent = "📜";
            renderTreaties();
            break;
        case "cases":
            pageTitle.querySelector("h1").textContent = "السوابق القضائية";
            pageTitle.querySelector("p").textContent = "أحكام وقضايا من المحاكم الدولية الرئيسية (ICJ, ICC, ECHR)";
            pageIcon.textContent = "⚖️";
            renderCases();
            break;
        case "resolutions":
            pageTitle.querySelector("h1").textContent = "القرارات الدولية";
            pageTitle.querySelector("p").textContent = "قاعدة بيانات قرارات مجلس الأمن والجمعية العامة";
            pageIcon.textContent = "🗳️";
            renderResolutions();
            break;
        case "resources":
            pageTitle.querySelector("h1").textContent = "المصادر والقانون العرفي";
            pageTitle.querySelector("p").textContent = "الروابط المباشرة للمصادر الدولية الموثوقة";
            pageIcon.textContent = "📚";
            break;
    }
}

/* ==========================================================================
   ADVANCED SEARCH (GLOBAL)
   ========================================================================== */
function performAdvancedSearch() {
    const q = document.getElementById('advanced-search').value.trim().toLowerCase();
    const topic = document.getElementById('filter-topic').value;
    const court = document.getElementById('filter-court').value;
    const year = document.getElementById('filter-year').value;

    const resDiv = document.getElementById('advanced-search-results');

    if (q === '' && topic === '' && court === '' && year === '') {
        resDiv.style.display = 'none';
        resDiv.innerHTML = '';
        return;
    }

    let results = [];

    // Search Treaties
    if (typeof treatiesData !== 'undefined') {
        treatiesData.forEach(t => {
            if ((q === '' || t.name.toLowerCase().includes(q) || t.topic.toLowerCase().includes(q)) &&
                (topic === '' || t.topic === topic) &&
                (year === '' || t.date === year)) {
                results.push({ type: 'معاهدة', name: t.name, date: t.date, info: t.topic, link: t.link });
            }
        });
    }

    // Search Cases
    if (typeof casesData !== 'undefined') {
        casesData.forEach(c => {
            if ((q === '' || c.name.toLowerCase().includes(q) || (c.summary && c.summary.toLowerCase().includes(q))) &&
                (court === '' || c.court === court) &&
                (topic === '' || (c.topic && c.topic === topic)) && // cases usually don't have topic in current data schema, but keeping for future
                (year === '' || c.year === year)) {
                results.push({ type: 'قضية', name: c.name, date: c.year, info: c.court, link: c.link });
            }
        });
    }

    // Search Resolutions
    if (typeof resolutionsData !== 'undefined') {
        resolutionsData.forEach(r => {
            if ((q === '' || r.number.toLowerCase().includes(q) || r.subject.toLowerCase().includes(q)) &&
                (topic === '' || (r.subject && r.subject.includes(topic))) &&
                (court === '' || (r.type && r.type === court)) && // court filter acts as type filter roughly? Or separate? 
                // Refinement: Court filter shouldn't apply to resolutions unless we map 'SC'->'ICJ'? No.
                // For now, if court filter is set, maybe skip resolutions or match type? 
                // The UI has "ICJ/ICC" in court filter. Resolutions are SC/GA. So if court is selected, resolutions should effectively be 0?
                // But filter-court value is "ICJ", "ICC" etc. Resolution types are "مجلس الأمن", "الجمعية العامة".
                // So if court is set, we ignore resolutions unless empty.
                (court === '' ? true : false) &&
                (year === '' || r.year === year)) {
                results.push({ type: 'قرار دولي', name: r.number, date: r.year, info: r.type, link: r.link });
            }
        });
    }

    // Display Results
    resDiv.style.display = 'block';
    if (results.length === 0) {
        resDiv.innerHTML = '<div style="padding:18px;color:#E53935;font-weight:700;">لا توجد نتائج مطابقة.</div>';
        return;
    }

    let html = '<table style="width:100%;background:white;border-radius:12px;overflow:hidden;box-shadow:0 1px 2px rgba(10,20,41,0.06);margin-top:8px;">';
    html += '<thead style="background:var(--dark2);color:white;"><tr><th>النوع</th><th>الاسم</th><th>المجال/المحكمة</th><th>السنة</th><th>رابط</th></tr></thead><tbody>';
    results.forEach(r => {
        html += `<tr>
            <td style="font-weight:700;">${r.type}</td>
            <td>${r.name}</td>
            <td>${r.info || ''}</td>
            <td>${r.date || ''}</td>
            <td><a href="${r.link}" class="link-cell" target="_blank">تفاصيل ↗</a></td>
        </tr>`;
    });
    html += '</tbody></table>';
    resDiv.innerHTML = html;
}

function clearAdvancedSearch() {
    ['advanced-search', 'filter-topic', 'filter-court', 'filter-year'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = (id.includes('filter') ? '' : ''); // select defaults to first option usually empty
    });

    // Reset specific selects if needed
    document.getElementById('filter-topic').value = '';
    document.getElementById('filter-court').value = '';

    // Clear local search inputs
    ['treaty-search', 'case-search', 'resolution-search'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    // Reset local filters
    if (document.getElementById('topic-filter')) document.getElementById('topic-filter').value = 'الكل';
    if (document.getElementById('court-filter')) document.getElementById('court-filter').value = 'الكل';
    if (document.getElementById('resolution-type-filter')) document.getElementById('resolution-type-filter').value = 'الكل';
    if (document.getElementById('resolution-year-filter')) document.getElementById('resolution-year-filter').value = '';

    // Hide global results
    const resDiv = document.getElementById('advanced-search-results');
    if (resDiv) {
        resDiv.style.display = 'none';
        resDiv.innerHTML = '';
    }

    // Re-render
    renderTreaties();
    renderCases();
    renderResolutions();
}

/* ==========================================================================
   RENDER FUNCTIONS
   ========================================================================== */
function renderTreaties() {
    if (typeof treatiesData === 'undefined') return;

    const searchVal = (document.getElementById("treaty-search")?.value || "").toLowerCase();
    const topicVal = (document.getElementById("topic-filter")?.value || "الكل");

    let filtered = treatiesData.filter(t => {
        let matchTopic = topicVal === "الكل" || !topicVal || t.topic === topicVal;
        let matchSearch = !searchVal || t.name.toLowerCase().includes(searchVal) || t.topic.toLowerCase().includes(searchVal);
        return matchTopic && matchSearch;
    });

    let html = "";
    filtered.forEach(t => {
        let topicClass = "";
        if (t.topic === "حقوق الإنسان") topicClass = "topic-humanrights";
        else if (t.topic === "البيئة والمناخ") topicClass = "topic-env";
        else if (t.topic === "نزع السلاح") topicClass = "topic-disarm";

        html += `<tr>
            <td><strong>${t.name}</strong></td>
            <td>${t.date}</td>
            <td><span class="topic-tag ${topicClass}">${t.topic}</span></td>
            <td>${t.states} دول</td>
            <td><a href="${t.link}" class="link-cell" target="_blank">تفاصيل ↗</a></td>
        </tr>`;
    });

    const tbody = document.getElementById("treaties-tbody");
    if (tbody) tbody.innerHTML = html;

    const countEl = document.getElementById("treaty-count");
    if (countEl) countEl.textContent = filtered.length;
}

function renderCases() {
    if (typeof casesData === 'undefined') return;

    const searchVal = (document.getElementById("case-search")?.value || "").toLowerCase();
    const courtVal = (document.getElementById("court-filter")?.value || "الكل");
    let showAll = window._showAllCases === true;

    let filtered = casesData.filter(c => {
        let matchCourt = courtVal === "الكل" || c.court === courtVal;
        let matchSearch = searchVal === "" || c.name.toLowerCase().includes(searchVal) || c.summary.toLowerCase().includes(searchVal);
        return matchCourt && matchSearch;
    });

    // If "Show All" was clicked, we override filters for one render? 
    // Usually showAll implies showing everything, but the user code had this logic.
    // I will keep the filtering logic but if showAll is true, maybe just ignore the count limit?
    // Actually the previous code replaced filtered with full data.
    if (showAll) {
        filtered = casesData;
    }

    let html = "";
    filtered.forEach(c => {
        let courtColor = c.court === "ICJ" ? "#0052CC" : (c.court === "ICC" ? "#C72C1E" : "#F5A623");

        html += `<tr>
            <td><strong>${c.name}</strong></td>
            <td><span style="font-weight:700;color:${courtColor};">${c.court}</span></td>
            <td>${c.year}</td>
            <td><div class="case-summary">${c.summary}</div></td>
            <td><a href="${c.link}" class="link-cell" target="_blank">تفاصيل</a></td>
        </tr>`;
    });

    const tbody = document.getElementById("cases-tbody");
    if (tbody) tbody.innerHTML = html;

    const countEl = document.getElementById("case-count");
    if (countEl) countEl.textContent = filtered.length;
}

function showAllCases() {
    window._showAllCases = true;
    renderCases();
    // Reset flag after a moment so next filter works
    setTimeout(() => { window._showAllCases = false; }, 1000);
}

function renderResolutions() {
    if (typeof resolutionsData === 'undefined') return;

    const searchVal = (document.getElementById("resolution-search")?.value || "").toLowerCase();
    const typeVal = (document.getElementById("resolution-type-filter")?.value || "الكل");
    const yearVal = (document.getElementById("resolution-year-filter")?.value || "");

    let filtered = resolutionsData.filter(r => {
        let matchType = typeVal === "الكل" || r.type === typeVal;
        let matchSearch = searchVal === "" || r.number.toLowerCase().includes(searchVal) || r.subject.toLowerCase().includes(searchVal);
        let matchYear = yearVal === '' || r.year === yearVal;
        return matchType && matchSearch && matchYear;
    });

    let html = "";
    filtered.forEach(r => {
        html += `<tr>
            <td><strong>${r.number}</strong></td>
            <td>${r.type}</td>
            <td>${r.year}</td>
            <td>${r.subject}</td>
            <td><a href="${r.link}" class="link-cell" target="_blank">رابط ↗</a></td>
        </tr>`;
    });

    const tbody = document.getElementById("resolutions-tbody");
    if (tbody) tbody.innerHTML = html;
}
