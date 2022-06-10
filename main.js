function chamaPagina() {
    var elemento = document.getElementById('idfirstpage');
    elemento.classList.remove("first-page");
    elemento.classList.add('first-page-none');

    var elemento2 = document.getElementById('idsecondpage');
    elemento2.classList.remove('second-page');
    elemento2.classList.add('second-page-flex')
}

function voltarPagina() {
    var elemento = document.getElementById('idfirstpage');
    elemento.classList.remove("first-page-none");
    elemento.classList.add('first-page');

    var elemento2 = document.getElementById('idsecondpage');
    elemento2.classList.remove('second-page-flex');
    elemento2.classList.add('second-page'); 
}

function mudaBackground() { 
    document.getElementById('one').classList.remove('one');
    document.getElementById('one').classList.add('four12');

}

function mudaBackground1() { 
    document.getElementById('two').classList.remove('two');
    document.getElementById('two').classList.add('four12');

}
function mudaBackground2() { 
    document.getElementById('three').classList.remove('three');
    document.getElementById('three').classList.add('four12');

}
function mudaBackground3() { 
    document.getElementById('four').classList.remove('four');
    document.getElementById('four').classList.add('four12');

}
function mudaBackground4() { 
    document.getElementById('five').classList.remove('five');
    document.getElementById('five').classList.add('four12');

}






