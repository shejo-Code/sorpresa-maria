// CONFIGURACIÓN DE LA HISTORIA COMPLETA (14 PASOS)
const storySteps = [
    { id: 2, theme: "dark", text: "Querida Maria,<br>Solo remito esta carta para informarte que eres linda <3 , y que te bañes :v", image: "img/im2.png" },
    { id: 3, theme: "dark", text: "Ya tenemos 8 presidentes en menos de 10 años y nosotros aun no aplicamos... ¿qué esperamos xd?", images: ["img/im3.png", "img/im4.png", "img/im5.png"] },
    { id: 4, theme: "dark", text: "No te asustes, te comento: estos últimos meses me interesó la ProGRAMACION, estoy estudiando en casa (Python, Linux, GIS, automatización). Veo que los que trabajan en esto ganan mucho dinero. Pero igual seguiré trabajando... y como parte de mi aprendizaje te envío esta CARTA virtual Maria. Utilicé HTML, JS, CSS y mi repositorio de GitHub.", images: ["img/im6.png", "img/im7.png"] },
    { id: 5, theme: "dark", text: "Pero... tengo un problema...", image: "img/im8.png" },
    { id: 6, theme: "dark", text: "Sucede que soy Gay u.u", image: "img/im9.png" },
    { id: 7, theme: "dark", text: "jajajaja te la creiste :v wee ", image: "img/im10.png", bigImage: true },
    { id: 8, theme: "dark", text: "Ok no, pongámonos serios XD. El problema es que cada día te recuerdo más seguido. Por momentos se siente bonito, pero por otros momentos un poco vacío ❤️🍺", images: ["img/im11.png", "img/im12.png"] },
    { id: 9, theme: "dark", text: "Por el momento no tengo muchos recursos, está lo de mi casa y la tesis también :,v, así que a veces me da un poco de pena no tener a donde llevarte o invitarte 😭", image: "img/im13.png" },
    { id: 10, theme: "dark", text: "Además está que llueve mucho XD, no da ganas de salir ☔️📰", image: "img/im14.png" },
    { id: 11, theme: "gamer-choice", text: "asi que , dejame invitarte a una aventura!!!", image: "img/im15.png" },
    { id: 12, theme: "gamer-missions", text: "Y por todo eso propongo hacer algo mañana. ELIGE TU MISIÓN:", image: "img/im21.png" },
    { id: 13, theme: "dark", text: "Entonces...", image: "img/im15.png" },
    { id: 14, theme: "final-question", text: "Maria, ¿te gustaría salir conmigo este fin de semana? 😳", image: "img/im22.png" },
    { id: 15, theme: "dark", text: "Genial!! <3... Con cariño y aprecio... Jose :3<br><br><br>PSDT: Que linda eres", images: ["img/im17.jpeg", "img/im18.jpeg"], isAlbum: true, gif: "img/im24.gif" }
];

// ELEMENTOS DOM
const screenEnvelope = document.getElementById('screen-envelope');
const screenStory = document.getElementById('story-screen');
const envelopeMain = document.getElementById('envelope-main');
const btnOpenEnvelope = document.getElementById('btn-open-envelope');
const mainText = document.getElementById('main-text');
const imageWrapper = document.getElementById('image-wrapper');
const btnNext = document.getElementById('btn-next');
const gamerContainer = document.getElementById('gamer-container');
const gamerChoice10 = document.getElementById('gamer-choice-10');
const missionList = document.getElementById('mission-list');
const btnGamerYes = document.getElementById('btn-gamer-yes');
const btnGamerNo = document.getElementById('btn-gamer-no');
const emergencyLight = document.getElementById('emergency-light');
const finalChoice = document.getElementById('final-choice');
const btnYesFinal = document.getElementById('btn-yes-final');
const btnNoFinal = document.getElementById('btn-no-final');

let currentStepIndex = 0;
let yesButtonScale = 1;
let typingTimeout = null;

// COMPATIBILIDAD TÁCTIL
function addClickAndTouch(element, callback) {
    if (!element) return;
    element.addEventListener('click', (e) => { e.preventDefault(); callback(); });
    element.addEventListener('touchstart', (e) => { e.preventDefault(); callback(); }, { passive: false });
}

// 1. ABRIR SOBRE
function openEnvelope() {
    envelopeMain.classList.add('open');
    setTimeout(() => {
        screenEnvelope.classList.add('page-flip-exit');
        setTimeout(() => {
            screenEnvelope.classList.remove('active');
            screenStory.classList.add('active');
            showStep();
        }, 800);
    }, 1500);
}

addClickAndTouch(btnOpenEnvelope, openEnvelope);

// MOSTRAR PASOS
function showStep() {
    if (typingTimeout) clearTimeout(typingTimeout);
    
    const step = storySteps[currentStepIndex];
    document.body.className = "theme-" + step.theme;
    
    // Visibilidad UI
    emergencyLight.classList.toggle('hidden', step.theme !== 'emergency');
    gamerContainer.classList.toggle('hidden', !step.theme.startsWith('gamer'));
    gamerChoice10.classList.toggle('hidden', step.theme !== 'gamer-choice');
    missionList.classList.toggle('hidden', step.theme !== 'gamer-missions');
    finalChoice.classList.toggle('hidden', step.theme !== 'final-question');
    
    const hideNext = (step.id === 11 || step.id === 12 || step.id === 14);
    btnNext.classList.toggle('hidden', hideNext);

    imageWrapper.innerHTML = ''; 
    let activeImg = null;

    if (step.isAlbum) {
        // MOSTRAR GIF FINAL
        if (step.gif) {
            const gif = document.createElement('img');
            gif.src = step.gif; gif.className = "final-gif show";
            imageWrapper.appendChild(gif);
        }
        step.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src; img.className = "album-img show";
            imageWrapper.appendChild(img);
        });
    } else if (step.images) {
        if (step.id === 4) {
            activeImg = document.createElement('img');
            activeImg.src = step.images[0]; 
            activeImg.classList.add('show');
            imageWrapper.appendChild(activeImg);
            typeWriter(step.text, mainText, () => {
                const img2 = document.createElement('img');
                img2.src = step.images[1]; img2.className = "mini-side show";
                imageWrapper.appendChild(img2);
                activeImg.style.display = 'none';
            });
            return;
        } else if (step.id === 8) {
            activeImg = document.createElement('img');
            activeImg.src = step.images[0]; 
            activeImg.className = "side-img show";
            imageWrapper.appendChild(activeImg);
            typeWriter(step.text, mainText, () => {
                const img2 = document.createElement('img');
                img2.src = step.images[1]; img2.className = "side-img show";
                imageWrapper.appendChild(img2);
            });
            return;
        } else if (step.id === 3) {
            typeWriter(step.text, mainText, () => {
                const img1 = document.createElement('img');
                img1.src = step.images[0]; img1.className = "p3-small";
                imageWrapper.appendChild(img1);
                setTimeout(() => img1.classList.add('show'), 100);
                setTimeout(() => {
                    const img2 = document.createElement('img');
                    img2.src = step.images[1]; img2.className = "p3-medium";
                    imageWrapper.appendChild(img2);
                    setTimeout(() => img2.classList.add('show'), 100);
                }, 1000);
                setTimeout(() => {
                    const img3 = document.createElement('img');
                    img3.src = step.images[2]; img3.className = "p3-large";
                    imageWrapper.appendChild(img3);
                    setTimeout(() => img3.classList.add('show'), 100);
                }, 2000);
            });
            return;
        }
    } else {
        activeImg = document.createElement('img');
        activeImg.src = step.image;
        if (step.id === 11) {
            activeImg.className = "gamer-image-mini show";
            mainText.className = "typewriter retro-text-only";
        } else {
            mainText.className = "typewriter";
            if (step.fullImage) activeImg.className = "full-screen-img show";
            if (step.bigImage) activeImg.className = "big-step-img";
        }
        imageWrapper.appendChild(activeImg);
    }

    resetDodgingButton(btnGamerNo);
    if (step.id === 11) setupDodgingButton(btnGamerNo);

    typeWriter(step.text, mainText, () => {
        if (activeImg) activeImg.classList.add('show');
    });
}

function typeWriter(text, element, callback) {
    element.innerHTML = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            if (text.substr(i, 4) === "<br>") {
                element.innerHTML += "<br>"; i += 4;
            } else {
                element.innerHTML += text.charAt(i); i++;
            }
            typingTimeout = setTimeout(type, 50);
        } else {
            if (callback) callback();
        }
    }
    type();
}

function nextStep() {
    screenStory.classList.add('page-flip-exit');
    setTimeout(() => {
        currentStepIndex++;
        if (currentStepIndex >= storySteps.length) currentStepIndex = 0;
        showStep();
        screenStory.classList.remove('page-flip-exit');
        screenStory.classList.add('page-flip-enter');
        setTimeout(() => screenStory.classList.remove('page-flip-enter'), 50);
    }, 400);
}

addClickAndTouch(btnNext, nextStep);
addClickAndTouch(btnGamerYes, nextStep);
window.selectMission = function(id) { nextStep(); };

function setupDodgingButton(btn) {
    const move = (e) => {
        if (e.type === 'touchstart') e.preventDefault();
        const x = Math.random() * (window.innerWidth - btn.offsetWidth - 40) + 20;
        const y = Math.random() * (window.innerHeight - btn.offsetHeight - 40) + 20;
        btn.style.position = 'fixed'; btn.style.left = x + 'px'; btn.style.top = y + 'px'; btn.style.zIndex = "1000";
    };
    btn.onmouseover = move; btn.ontouchstart = move;
}

function resetDodgingButton(btn) {
    btn.onmouseover = null; btn.ontouchstart = null; btn.style.position = 'static';
}

addClickAndTouch(btnNoFinal, () => {
    yesButtonScale += 0.8;
    btnYesFinal.style.transform = `scale(${yesButtonScale})`;
    if (yesButtonScale > 12) btnYesFinal.click();
});

addClickAndTouch(btnYesFinal, () => {
    nextStep();
});

showStep();
