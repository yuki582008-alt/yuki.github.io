// Teori Alam Semesta Content
const theories = {
    bigbang: {
        title: "💥 Big Bang Theory",
        content: `Teori Big Bang menyatakan bahwa alam semesta bermula dari **singularitas** berukuran sangat kecil namun densitasnya tak terhingga sekitar **13.8 miliar tahun lalu**.

**Bukti Utama:**
- *Cosmic Microwave Background* (sisa panas Big Bang)
- *Redshift* galaksi (semua bergerak menjauh)
- *Abundance* hidrogen & helium ringan

**Timeline:**
1. 10⁻⁴³ detik: Planck Epoch
2. 10⁻³⁶ detik: Inflasi kosmik
3. 3 menit: Nukleosintesis
4. 380.000 tahun: Rekombinasi

*"Alam semesta lahir dari ledakan, dan kita adalah abunya bintang."* - Carl Sagan`
    },
    multiversum: {
        title: "🔄 Multiverse Theory",
        content: `**Multiverse** mengusulkan ada **tak hingga alam semesta** di luar yang kita kenal.

**4 Level Multiverse (Max Tegmark):**
- *Level I*: Alam semesta tak hingga → duplikat kita ada
- *Level II*: Bubble universes (inflasi abadi)
- *Level III*: Many-worlds quantum
- *Level IV*: Mathematical structures

**Implikasi:**
- *Fine-tuning* alam semesta → anthropic principle
- Kita mungkin hidup di **simulasi** salah satu bubble

*"Di multiverse, segala kemungkinan terjadi di suatu tempat."*`
    },
    string: {
        title: "🎻 String Theory",
        content: `**String Theory** menggantikan partikel titik dengan **getaran tali 1D** berukuran **10⁻³⁵ meter** (Planck length).

**Fitur:**
- 10/11 dimensi ruang-waktu
- 5 versi → **M-Theory** menyatukan
- Prediksi **graviton** → quantum gravity

**Kritik:**
- Belum ada bukti eksperimental
- Terlalu banyak **landscape** (10⁵⁰⁰ vakum)

**"Realitas adalah simfoni getaran kosmik."*`
    },
    darkenergy: {
        title: "🌑 Dark Energy",
        content: `**Dark Energy** (~68% alam semesta) menyebabkan **akselerasi ekspansi**.

**Bukti:**
- 1998: Supernova tipe Ia redshifted lebih cepat
- *Cosmic Microwave Background*
- *Baryon Acoustic Oscillations*

**Teori:**
- *Cosmological Constant* (Λ) → Einstein's blunder?
- *Quintessence* → dynamic field
- *Phantom Energy* → Big Rip?

**"Dark energy adalah harga yang kita bayar untuk stabilitas kosmik."*`
    },
    blackhole: {
        title: "🕳️ Black Hole Information Paradox",
        content: `**Black hole** menantang hukum fisika fundamental.

**Paradox:**
1. Quantum: Info tidak hilang
2. Hawking radiation: Black hole menguap
3. **Kontradiksi**: Info hilang selamanya?

**Solusi Modern:**
- *Holographic principle* → info di surface
- *Firewalls* → radiasi ekstrem di horizon
- *ER=EPR* → wormholes = entanglement

**"Black hole adalah laboratorium alam untuk quantum gravity."*`
    },
    quantum: {
        title: "⚛️ Quantum Gravity",
        content: `**Quantum Gravity** menyatukan General Relativity + Quantum Mechanics.

**Pendekatan:**
- *Loop Quantum Gravity* → spacetime granular
- *String Theory* → higher dimensions
- *Asymptotic Safety* → fixed point

**Prediksi:**
- *Spacetime foam* skala Planck
- *Black hole entropy* = area/4
- *Big Bounce* bukan Big Bang

**"Gravity adalah ilusi entanglement quantum."* - Erik Verlinde`
    },
    hologram: {
        title: "📽️ Holographic Universe",
        content: `**Holographic Principle**: 3D universe = proyeksi 2D surface.

**Asal:**
- Black hole entropy ~ area (Bekenstein-Hawking)
- *AdS/CFT correspondence* (Maldacena)

**Implikasi:**
- Alam semesta = hologram di boundary
- Kita hidup di **"Matrix"** 2D
- Volume info terbatas surface area

**"Realitas kita hanyalah bayangan di dinding gua Plato kosmik."*`
    }
};

const teaserTheories = [
    "Alam semesta mengembang 73 km/detik per megaparsec! 🚀",
    "95% alam semesta = materi gelap + energi gelap. 😱",
    "Black hole menyimpan info di surface, bukan volume! 🕳️",
    "String theory butuh 11 dimensi ruang-waktu! 🎻",
    "Multiverse: Kemungkinan tak hingga ada di luar sana! 🔄"
];

// DOM Elements
const loginBox = document.getElementById('loginBox');
const mainContent = document.getElementById('mainContent');
const loginForm = document.getElementById('loginForm');
const theoryContent = document.getElementById('theoryContent');
const currentTheory = document.getElementById('currentTheory');
const sidebar = document.getElementById('sidebar');
const randomTheory = document.getElementById('randomTheory');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showRandomTeaser();
    setInterval(showRandomTeaser, 5000);
    
    loginForm.addEventListener('submit', handleLogin);
    
    // Demo login (ganti password sesuai keinginan)
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleLogin();
    });
});

function showRandomTeaser() {
    const random = teaserTheories[Math.floor(Math.random() * teaserTheories.length)];
    randomTheory.textContent = random;
    randomTheory.style.opacity = '0';
    setTimeout(() => randomTheory.style.opacity = '1', 100);
}

function handleLogin(e) {
    e?.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Demo login (ganti password ini)
    if (password === 'kosmos123' || username.toLowerCase() === 'admin') {
        loginBox.style.transform = 'scale(0.8)';
        loginBox.style.opacity = '0';
        setTimeout(() => {
            loginBox.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.style.animation = 'slideIn 1s ease-out';
            loadTheory('bigbang');
        }, 500);
    } else {
        // Shake animation
        loginBox.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => loginBox.style.animation = '', 500);
    }
}

function loadTheory(theoryKey) {
    const theory = theories[theoryKey ];
    if (!theory) return;
    
    currentTheory.textContent = theory.title.split(' ')[1];
    theoryContent.innerHTML = `
        <div class="theory-card">
            <h2>${theory.title }</h2>
            ${theory.content.replace(/\n/g, '<br>').replace(/\*/g, '<strong>').replace(/•/g, '<br>•')}
        </div>
    `;
    
    // Update active menu
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
    document.querySelector(`[data-theory="${theoryKey }"]`).classList.add('active');
}

function toggleMenu() {
    sidebar.classList.toggle('active');
}

// Menu click handlers
document.querySelectorAll('.sidebar li').forEach(li => {
    li.addEventListener('click', function() {
        const theoryKey = this.dataset.theory;
        loadTheory(theoryKey);
        toggleMenu(); // Close sidebar
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') toggleMenu();
});