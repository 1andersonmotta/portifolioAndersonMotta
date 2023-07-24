
function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i)
        });
    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);

    setInterval(() => { ativaLetra(titulo) }, 5000)
}
escrevendoLetra()

function menuMobol() {
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')

    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })

}

function sobreMim() {
    const divExperiencia = document.querySelectorAll('.experience_content div')
    const liExperiencia = document.querySelectorAll('.experience_content ul li')
    const divEducation = document.querySelectorAll('.education_content div')
    const liEducation = document.querySelectorAll('.education_content ul li')


    divExperiencia[0].classList.add('ativo')
    divEducation[0].classList.add('ativo')
    liExperiencia[0].classList.add('ativo')
    liEducation[0].classList.add('ativo')

    function slideShow(index) {
        divExperiencia.forEach((div) => {
            div.classList.remove('ativo');
        })
        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo');
        })
        divExperiencia[index].classList.add('ativo')
        liExperiencia[index].classList.add('ativo')
    }

    function slideShow2(index) {
        divEducation.forEach((div) => {
            div.classList.remove('ativo');
        })
        liEducation.forEach((botao) => {
            botao.classList.remove('ativo');
        })
        divEducation[index].classList.add('ativo')
        liEducation[index].classList.add('ativo')
    }

    liExperiencia.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow(index)
        });
    });

    liEducation.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow2(index)
        });
    });


}

sobreMim()

const divEducation = document.querySelectorAll('.education_content div')
const liEducation = document.querySelectorAll('.education_content ul li')
function slideShow2(index) {
    divEducation.forEach((div) => {
        div.classList.remove('ativo');
    })
    liEducation.forEach((botao) => {
        botao.classList.remove('ativo');
    })
    divEducation[index].classList.add('ativo')
    if (index == 7) { index = 0 }
    liEducation[index].classList.add('ativo')
}

let contador = 1
function show() {
    if (contador == 7) {
        slideShow2(7);
        return contador = 0
    }
    slideShow2(contador);
    return contador++
}
function clickou() {
    if (contador == 7) {
        slideShow2(7);
        return contador = 0
    }
    slideShow2(contador);
    return contador++
}


const listAll = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects_models ul li');
const buttonAll = document.querySelectorAll('.projects_models .all');

function removeClick(index) {
    buttonGeral.forEach((item) => {
        item.classList.remove('ativo');
    });
    buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((event, index) => {
    event.addEventListener('click', () => {
        removeClick(index);
    })
})

function showLista(lista, buttom = "all") {

    lista.forEach((item) => {
        item.classList.remove('ativo')

    })
    if (buttom == 'reais') {
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');

    }
    if (buttom == 'estudo') {
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
        lista[8].classList.add('ativo');
        lista[9].classList.add('ativo');
        lista[10].classList.add('ativo');
        lista[11].classList.add('ativo');
        lista[11].classList.add('ativo');
        lista[12].classList.add('ativo');
        lista[13].classList.add('ativo');
        lista[14].classList.add('ativo');
        lista[15].classList.add('ativo');
        lista[16].classList.add('ativo');
        lista[17].classList.add('ativo');
        lista[18].classList.add('ativo');
        lista[19].classList.add('ativo');
        lista[20].classList.add('ativo');
        lista[21].classList.add('ativo');
        lista[22].classList.add('ativo');



    }
    if (buttom == 'website') {
        lista[8].classList.add('ativo');
        lista[9].classList.add('ativo');
        lista[16].classList.add('ativo');


    }
    if (buttom == 'all') {
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
        lista[8].classList.add('ativo');
        lista[9].classList.add('ativo');
        lista[10].classList.add('ativo');
        lista[11].classList.add('ativo');
        lista[12].classList.add('ativo');
        lista[13].classList.add('ativo');
        lista[14].classList.add('ativo');
        lista[15].classList.add('ativo');
        lista[16].classList.add('ativo');
        lista[17].classList.add('ativo');
        lista[18].classList.add('ativo');
        lista[19].classList.add('ativo');
        lista[20].classList.add('ativo');
        lista[21].classList.add('ativo');
        lista[22].classList.add('ativo');


    }
}

buttonGeral.forEach((item) => {
    item.addEventListener('click', (e) => {
        let currentButton = e.target;
        if (currentButton.classList.contains('all')) {
            showLista(listAll)
        }
        if (currentButton.classList.contains('reais')) {
            showLista(listAll, "reais")
        }
        if (currentButton.classList.contains('estudo')) {
            showLista(listAll, "estudo")
        }
        if (currentButton.classList.contains('website')) {
            showLista(listAll, "website")
        }
        if (currentButton.classList.contains('all')) {
            showLista(listAll, "all")
        }
    })
})



///brincando com animações com greensock
const myservices = document.querySelectorAll(".my_services ul li")
myservices.forEach(el => {

    el.addEventListener("click", (evt) => {
        console.log(evt.target)
        gsap.fromTo(evt.target, {
            duration: 4,
            scale: 0.1,
            y: 40,
            ease: "power1.inOut",
            repeat: 1

        }, {
            duration: 2,
            scale: 1,
            y: 0,
            ease: "power1.in",
            repeat: 0
        })
    })
})

gsap.fromTo(".box", {
    color: "black",
}, {
    color: "white",
    repeat: -1,
    duration: 2,
    yoyo: true,

})
const wts = document.querySelectorAll(".sobre_info i")
gsap.to(wts[4], {
    color: "green",
    repeat: - 1,
    duration: 3,
    yoyo: true,
})
gsap.to(wts[1], {
    color: "white",
    repeat: - 1,
    duration: 3,
    yoyo: true,
})
gsap.to(wts[3], {
    color: "blue",
    repeat: - 1,
    duration: 3,
    yoyo: true,
})

gsap.fromTo(".footer_sociais li", {
    border: "1px solid white",
    rotation: 720,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",

}, {
    ease: "power1.inOut",
    border: "1px solid white",
    rotation: -720,
    duration: 6,
    repeat: -1,
    yoyo: true,
})


function random() {
    gsap.to(".diferente_n", {
        textShadow: `1px 1px 1px ${getRandomColor()},0 0 1vw ${getRandomColor()},0 0 1vw ${getRandomColor()}, 0 0 1vw ${getRandomColor()},0 0 1vw ${getRandomColor()}`,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
    })
    gsap.to(".img", {
        border: `2px solid ${getRandomColor()}`,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
    })
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
setInterval(random, 3000)




