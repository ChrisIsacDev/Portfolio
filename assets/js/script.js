const roles = ["Ux/Ui Designer", "Front-end", "Social Media"];
let roleIndex = 0;

function changeRole() {
    const roleElement = document.getElementById('role');
    roleElement.classList.add('fadeOut');

    setTimeout(() => {
        roleElement.textContent = roles[roleIndex];
        roleIndex = (roleIndex + 1) % roles.length;
        roleElement.classList.remove('fadeOut');
    }, 500);
}

function autoChangeRole() {
    setInterval(() => {
        changeRole();
    }, 2000);
}

// Chamando automaticamente a função de mudança de papel
autoChangeRole();
