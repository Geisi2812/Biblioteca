const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    
    let nombre = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor completa todos los campos.');
        return;
    }


    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);

   
    contactForm.reset();
    alert('Mensaje enviado correctamente.');
});
document.getElementById('bookType').addEventListener('change', function() {
    var otherInput = document.getElementById('otherBookType');
    if (this.value === 'Otros') {
        otherInput.style.display = 'block';
        otherInput.required = true;
    } else {
        otherInput.style.display = 'none';
        otherInput.required = false;
    }
});

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por completar la encuesta!');

});