function showTab(id, btn) {
  document.querySelectorAll('[id^="tab-"]').forEach(t => t.style.display = 'none');
  document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).style.display = 'grid';
  btn.classList.add('active');
}

function selectPakket(card) {
  document.querySelectorAll('.pakket-select-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  const naam = card.querySelector('.psc-name');
  const input = document.getElementById('gekozen-pakket');
  if (naam && input) input.value = naam.textContent.trim();
}

function kiesEnScroll(id) {
  const card = document.getElementById(id);
  if (card) selectPakket(card);
  document.getElementById('inschrijven').scrollIntoView({ behavior: 'smooth' });
}

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', function() {
  navMenu.classList.toggle('open');
  navToggle.classList.toggle('open');
});
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function() {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
  });
});
