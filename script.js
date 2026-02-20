// CONFIGURACIÓN DE LA HISTORIA - PERSONALIZA ESTO MARIA
const storySteps = [
    {
        text: "Hola Maria... ¿Sabes? Estaba recordando el día que nos conocimos.",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop", // Cambia por tu foto
    },
    {
        text: "Ese momento cambió mi vida por completo. Todavía recuerdo tu sonrisa...",
        image: "https://images.unsplash.com/photo-1516589174184-c6852661448c?q=80&w=800&auto=format&fit=crop",
    },
    {
        text: "Desde entonces, cada día a tu lado ha sido una aventura increíble.",
        image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=800&auto=format&fit=crop",
    },
    {
        text: "Por eso hoy quería decirte algo especial...",
        image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=800&auto=format&fit=crop",
    }
];

// ELEMENTOS DEL DOM
const screenEnvelope = document.getElementById('screen-envelope');
const screenStory = document.getElementById('screen-story');
const screenFinal = document.getElementById('screen-final');
const envelope = document.getElementById('envelope');
const storyText = document.getElementById('story-text');
const storyImage = document.getElementById('story-image');
const btnNext = document.getElementById('btn-next');
const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const heartsContainer = document.getElementById('hearts-container');
const finalTitle = document.getElementById('final-title');
const finalButtons = document.querySelector('.final-buttons');
const successMessage = document.getElementById('success-message');

let currentStep = 0;

// 1. ABRIR SOBRE
envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
        switchScreen(screenEnvelope, screenStory);
        showStep();
    }, 1500);
});

// 2. MOSTRAR PASOS DE LA HISTORIA
function showStep() {
    if (currentStep < storySteps.length) {
        const step = storySteps[currentStep];
        storyImage.src = step.image;
        typeWriter(step.text, storyText);
    } else {
        switchScreen(screenStory, screenFinal);
    }
}

btnNext.addEventListener('click', () => {
    currentStep++;
    showStep();
});

// 3. EFECTO MÁQUINA DE ESCRIBIR
function typeWriter(text, element) {
    element.innerHTML = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}

// 4. CAMBIO DE PANTALLAS
function switchScreen(oldScreen, newScreen) {
    oldScreen.classList.remove('active');
    setTimeout(() => {
        newScreen.classList.add('active');
    }, 400);
}

// 5. BOTÓN QUE SE ESCAPA (DODGING BUTTON)
function moveButton(btn) {
    const maxX = window.innerWidth - btn.offsetWidth - 20;
    const maxY = window.innerHeight - btn.offsetHeight - 20;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    btn.style.position = 'fixed';
    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`;
}

// Para computadoras (mouse)
btnNo.addEventListener('mouseover', () => moveButton(btnNo));

// Para celulares (touch)
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton(btnNo);
});

// 6. BOTÓN SÍ
btnYes.addEventListener('click', () => {
    finalTitle.classList.add('hidden');
    finalButtons.classList.add('hidden');
    successMessage.classList.remove('hidden');
    
    // Intensificar lluvia de corazones
    for(let i=0; i<30; i++) {
        setTimeout(createHeart, i * 100);
    }
});

// 7. LLUVIA DE CORAZONES
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 600);
