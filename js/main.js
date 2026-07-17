lucide.createIcons();

// ============ NAVBAR SCROLL EFFECT ============
const header = document.getElementById('site-header');

function updateHeaderBg() {
  if (window.scrollY > 40) {
    header.classList.remove('bg-transparent');
    header.classList.add('bg-white', 'shadow-sm');
  } else {
    header.classList.add('bg-transparent');
    header.classList.remove('bg-white', 'shadow-sm');
  }
}
window.addEventListener('scroll', updateHeaderBg);
updateHeaderBg();

// ============ SCROLLSPY ============
// garis hijau otomatis pindah ngikutin section yang lagi keliatan
const navLinks = document.querySelectorAll('.nav-link');

// ambil section id yang beneran ada dari data-section tiap link
const sections = Array.from(navLinks)
  .map(link => document.getElementById(link.dataset.section))
  .filter(Boolean);

function setActiveLink(id) {
  navLinks.forEach(link => {
    const isActive = link.dataset.section === id;
    link.classList.toggle('text-navy', isActive);
    link.classList.toggle('font-semibold', isActive);
    link.classList.toggle('border-lime', isActive);
    link.classList.toggle('border-transparent', !isActive);
  });
}

function updateActiveOnScroll() {
  const scrollPos = window.scrollY + 120; // offset biar gantinya pas navbar udah nutupin dikit bagian atas section
  let currentId = sections[0]?.id;
  for (const section of sections) {
    if (section.offsetTop <= scrollPos) {
      currentId = section.id;
    }
  }
  setActiveLink(currentId);
}

// klik menu: langsung pindah aktif
navLinks.forEach(link => {
  link.addEventListener('click', () => setActiveLink(link.dataset.section));
});

window.addEventListener('scroll', updateActiveOnScroll);
updateActiveOnScroll();
