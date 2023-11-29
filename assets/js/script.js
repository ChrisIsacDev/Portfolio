
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

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#016cf8",
  "#016AF4",
  "#0161DF",
  "#0159CB",
  "#0150B7",
  "#0147A2",
  "#013E8E",
  "#01357A",
  "#012C65",
  "#002351",
  "#001B3D",
  "#001229",
  "#000914",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000"
 
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();






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

function handleTitleHover() {
  const titles = document.querySelectorAll('.title');

  titles.forEach(title => {
    title.addEventListener('mouseover', () => {
      titles.forEach(otherTitle => {
        if (otherTitle !== title) {
          otherTitle.classList.add('hovered');
        }
      });
    });

    title.addEventListener('mouseout', () => {
      titles.forEach(otherTitle => {
        if (otherTitle !== title) {
          otherTitle.classList.remove('hovered');
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  handleTitleHover();
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