document.addEventListener('DOMContentLoaded', function () {

    const email = { //Objeto
        email: '',
        asunto: '', 
        mensaje: '',
    }

    console.log(email)
    // Seleccionar elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    //Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e) {
        e.preventDefault();
        borrarFormulario();
    } )

    //Funciones
    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            borrarFormulario();


            // Crear formulario
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'El email se ha enviado con exito!!!';

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
            
        }, 3000);
    }
    function borrarFormulario() {
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }

    function validar(e) {

        if(e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido.', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        
            limpiarAlerta(e.target.parentElement);

            //asignar los valores
            email[e.target.name] = e.target.value.trim().toLowerCase();
            
            //Comprobar el objeto de email
            comprobarEmail();
        
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);


        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'rounded-lg');

        //Inyectar el error al formulario
        referencia.appendChild(error);
    }


    //Comprueba si existe una alerta y lo eliminar
    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta) {
            alerta.remove();
        }
    }

    //Validar email
    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ // expresion regular
        const resultado = regex.test(email);
        return resultado;
    }
    
    function comprobarEmail() {
        if(Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return
        }
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;   
    }

    
});