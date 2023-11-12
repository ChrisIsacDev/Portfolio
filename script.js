
// script.js
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const trail = document.querySelector(".trail");
  let isDrawing = false;

  document.addEventListener("mousemove", (e) => {
      if (isDrawing) {
          for (let i = 0; i < 1; i++) { // Duplicar o elemento 10 vezes
              const trailElement = document.createElement("div");
              trailElement.className = "trail-element";
              trailElement.style.left = e.clientX + "px";
              trailElement.style.top = e.clientY + window.scrollY + "px"; // Leva em consideração a rolagem
              document.body.appendChild(trailElement);

              setTimeout(() => {
                  trailElement.style.opacity = 0;
                  setTimeout(() => {
                      trailElement.remove();
                  }, 500); // Remover após 0.5s
              }, 10 * i); // Intervalo de 10ms entre cada elemento
          }
      }

      isDrawing = !isDrawing;
  });
});






document.addEventListener("DOMContentLoaded", function() {
  const titles = document.querySelectorAll(".title");

  titles.forEach(function(title) {
    title.addEventListener("click", function() {
      titles.forEach(function(otherTitle) {
        if (otherTitle !== title) {
          otherTitle.classList.remove("active");
        }
      });

      title.classList.toggle("active");
    });
  });
});


const titles = document.querySelectorAll(".title");

titles.forEach((title) => {
  let originalTransform = window.getComputedStyle(title).getPropertyValue('transform');

  title.addEventListener("mousemove", (e) => {
    const width = title.offsetWidth;
    const height = title.offsetHeight;
    const mouseX = e.clientX - title.getBoundingClientRect().left;
    const mouseY = e.clientY - title.getBoundingClientRect().top;

    const moveX = (width / 2 - mouseX) / 5;
    const moveY = (height / 2 - mouseY) / 5;

    title.style.transform = `scale(1.1) perspective(1000px) rotateX(${moveY}deg) rotateY(${moveX}deg)`;
  });

  title.addEventListener("mouseleave", () => {
    title.style.transform = originalTransform;
  });
});

document.getElementById('designer').addEventListener('click', function() {
  // Use JavaScript para rolar a página até o elemento "designer"
  document.getElementById('designer-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('dev-frontend').addEventListener('click', function() {
  // Use JavaScript para rolar a página até o elemento "dev-frontend"
  document.getElementById('dev-frontend-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('agilidade').addEventListener('click', function() {
  // Use JavaScript para rolar a página até o elemento "agilidade"
  document.getElementById('agilidade-section').scrollIntoView({ behavior: 'smooth' });
});

function changeImage(newImageUrl) {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = newImageUrl;
}

const thumbnailsData = {
  'imgs/categories/Behance.png': {
      title: 'Behance',
      url: 'https://www.behance.net/cubixeditor'
     
  },
  'imgs/categories/instagram.png': {
      title: 'Instagram',
      url: 'https://www.instagram.com/isacevolve/'

  },

};

// Função para alterar a imagem principal e o título
// Função para alterar a imagem principal e o título
// Função para alterar a imagem principal, o título e o redirecionamento
function changeImageAndTitle(imageSrc) {
  const mainImage = document.getElementById('mainImage');
  const mainTitle = document.querySelector('.main-title');
  const mainSubtitle = document.querySelector('.main-subtitle');

  mainImage.src = imageSrc;
  mainTitle.textContent = thumbnailsData[imageSrc].title;
  mainSubtitle.textContent = thumbnailsData[imageSrc].subtitle; // Atualiza o subtítulo
  mainSubtitle.textContent = 'portfólio';

  mainImage.addEventListener('click', function() {
    window.location.href = thumbnailsData[imageSrc].url;
  });
}



// Associar a função de troca de imagem e título aos cliques nas miniaturas
const thumbnails = document.querySelectorAll('.thumbnail-card');
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
      const imageSrc = this.style.backgroundImage.replace('url("', '').replace('")', '');
      changeImageAndTitle(imageSrc);
  });
});