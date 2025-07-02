// Validação simples de formulário
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContato");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    alert("Mensagem enviada com sucesso! Entrarei em contato em breve.");
    form.reset();
  });
});

function toggleMenu() {
  const menu = document.getElementById("navbarMenu");
  menu.classList.toggle("active");
}

const form = document.getElementById('formContato');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Envia o form via fetch para Formsubmit
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      window.location.href = "https://maycondev44.github.io/maycon_art_photo/obrigado.html";
    } else {
      alert('Erro ao enviar mensagem, tente novamente.');
    }
  }).catch(() => {
    alert('Erro ao enviar mensagem, verifique a conexão.');
  });
});
