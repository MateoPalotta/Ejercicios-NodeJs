const Formulario = document.getElementById('Formulario');

function nombreElegante(nombre){
    if(nombre.startsWith('a')){
        if(nombre.endsWith('a')){
        return true
    }
    }
    return false
}

const name = Formulario.elements['name'].value.toLowerCase();
const esElegante = nombreElegante(nombre);

if (esElegante) {
    'Es elegante';
} else {
    'No es elegante';
}
