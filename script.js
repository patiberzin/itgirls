const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentImages = [];
let currentIndex = 0;

/* CONFIGURAÇÃO DAS IMAGENS POR CATEGORIA */
const galleries = {
  'Alfaiataria Contemporânea': [
    'alfaiataria1.png',
    'alfaiataria2.png',
    'alfaiataria3.png',
  ],
  'Sofisticação Essencial': [
    'essencial1.png',
    'essencial2.png',
    'essencial3.png',
  ],
  'Neutros Naturais': ['natural1.png', 'natural2.png', 'natural3.png'],
  'Noir Moderno': ['noir1.png', 'noir2.png', 'noir3.png'],
  'Clássico Atemporal': ['classico1.png', 'classico2.png', 'classico3.png'],
  'Borgonha Intenso': ['borgonha1.png', 'borgonha2.png', 'borgonha3.png'],
};

/* Abrir modal ao clicar na descrição */
document.querySelectorAll('.description').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const title = this.textContent.trim();
    currentImages = galleries[title];
    currentIndex = 0;

    modalImg.src = currentImages[currentIndex];
    modal.classList.add('active');
  });
});

/* Fechar modal */
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

/* Próxima imagem */
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  modalImg.src = currentImages[currentIndex];
});

/* Imagem anterior */
prevBtn.addEventListener('click', () => {
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  modalImg.src = currentImages[currentIndex];
});

/* Fechar clicando fora */
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
