//burger

let menu = document.querySelector('#menu');
let burger = document.querySelector('#burger');
let fermer = document.querySelector('#fermer')

burger.addEventListener('click',function(){
    menu.classList.add('deploye','transition');
});

fermer.addEventListener('click',function(){
    menu.classList.remove('deploye');
});

window.addEventListener('resize',function(){
    if(window.innerWidth<=768){
        menu.classList.remove('deploye','transition')
    }
})

//carrousel

if(document.querySelector('.carrousel')){
    let carrousel = document.querySelector('.carrousel');
    let reglette = document.querySelector('.carrousel .reglette');
    let figures = document.querySelectorAll('.carrousel .reglette figure');
    let nbFigures = figures.length;
    let vitesse = carrousel.dataset.vitesse || 3000;
    let tabOrganisation = new Array(nbFigures);
    

    reglette.style.width = 100 * nbFigures +'%';

    for(let i=0; i<nbFigures; i++){
        figures[i].style.order = i;
        figures[i].style.width = (100/nbFigures)+'%';
        tabOrganisation[i] = i;
    }

    function attribOrder(){
        for( let i=0 ; i< nbFigures ; i++){
            figures[i].style.order = tabOrganisation[i];
        }
    }

    function nextImage(){
        let element = tabOrganisation.pop();
        tabOrganisation.unshift(element);
        attribOrder();
    }

    function previousImage(){
        let element = tabOrganisation.shift();
        tabOrganisation.push(element);
        attribOrder();
    }

    let timer = setInterval(carrouselNext,vitesse);

    function carrouselNext(){
        reglette.classList.add('animavance');
        setTimeout(function(){
            nextImage();
            reglette.style.left = 0;
            reglette.classList.remove('animavance');
        },1000)
    }

    function carrouselPrevious(){
        previousImage();
        reglette.style.left = '-100%';
        reglette.classList.add('animrecule');
        setTimeout(function(){
            reglette.classList.remove('animrecule');
            reglette.style.left = 0;
        },1000)
    }


    carrousel.addEventListener('mouseenter',function(){
        clearInterval(timer);
    });

    carrousel.addEventListener('mouseleave',function(){
        timer = setInterval(carrouselNext,3000);
    });

    let previous = document.querySelector('.previous');
    let next = document.querySelector('.next');
    previous.addEventListener('click',carrouselPrevious);
    next.addEventListener('click',carrouselNext);
}

// formulaire

let firstname = document.querySelector('#firstname');
let checkfirstname = document.querySelector('#checkfirstname');
let firstnameOk = false;



firstname.addEventListener('input',function(){
    if(firstname.value.length <= 1){
        checkfirstname.innerHTML='First name needs to have at least 2 characters';
        checkfirstname.classList.add('error');
        firstnameOk = false;
    }
    else{
        checkfirstname.innerHTML='<i class="fa-solid fa-check">';
        checkfirstname.classList.remove('error');
        checkfirstname.classList.add('ok');
        firstnameOk = true;
    }
    validControl();
})

let lastname = document.querySelector('#lastname');
let checklastname = document.querySelector('#checklastname');
let lastnameOk = false;



lastname.addEventListener('input',function(){
    if(lastname.value.length <= 1){
        checklastname.innerHTML='Name needs to have at least 2 characters';
        checklastname.classList.add('error');
        lastnameOk = false;
    }
    else{
        checklastname.innerHTML='<i class="fa-solid fa-check">';
        checklastname.classList.remove('error');
        checklastname.classList.add('ok');
        lastnameOk = true;
    }
    validControl();
})

let email = document.getElementById("email");
let checkemail = document.getElementById("checkemail");
let emailregex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w]{2,}$/;
let emailOk = false;

email.addEventListener('input',function(){
    let emailInput = email.value;
    if (emailregex.test(emailInput)) {
        checkemail.innerHTML='<i class="fa-solid fa-check">';
        checkemail.classList.remove('error');
        checkemail.classList.add('ok');
        emailOk = true;
      } else {
        checkemail.innerHTML='Invalid email';
        checkemail.classList.add('error');
        emailOk = false;
      }
})

let object = document.querySelector('#object');
let checkobject = document.querySelector('#checkobject');
let objectOk = false;



object.addEventListener('input',function(){
    if(object.value.length <= 1){
        checkobject.innerHTML='object needs to have more characters';
        checkobject.classList.add('error');
        objectOk = false;
    }
    else{
        checkobject.innerHTML='<i class="fa-solid fa-check">';
        checkobject.classList.remove('error');
        checkobject.classList.add('ok');
        objectOk = true;
    }
    validControl();
})

function validControl(){
    if( firstnameOk && lastnameOk && emailOk && object){
        document.querySelector('button[type=submit]').disabled = false;
    }
    else{
        document.querySelector('button[type=submit]').disabled = true;
    }
}
