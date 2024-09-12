const submitFunction = (event) => {
    if(!validarFormulario()){
        event.preventDefault()
    }else{
        event.preventDefault()

        alert(
            'Los datos enviados fueron: \n '+
            'Nombre:' + document.getElementById('nombre').value + '\n'+
            'Apellido:' + document.getElementById('apellido').value + '\n'+
            'Documento:' + document.getElementById('documento').value + '\n'+
            'Email:' + document.getElementById('email').value + '\n'+
            'Edad:' + document.getElementById('edad').value + '\n'+
            'Actividad:' + document.getElementById('actividad').value + '\n'+
            'Nivel Estudio:' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
} 

//Escucha el envio del formulario
document.getElementById('formulario').addEventListener('submit', submitFunction)

function validarFormulario(){
    //Esto valida los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]')
    let validacionCorrecta = true
    camposTexto.forEach(campo =>{
         //error + id con la primera en mayusc
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase + campo.id.slice(1))
        if(campo.value.length == ''){
            mostrarError(errorCampo, "Este campo es requerido!")
            validacionCorrecta = false
        } else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, "Este debe tener al menos 3 caracteres!")
            validacionCorrecta = false
        }

    })
    //Esto valida los campos de email
    const email = document.getElementById('email')
    let errorEmail = document.getElementById('errorEmail')

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, 'Ingrese un correo electronico valido!')
    }

    //Esto valida el campo de edad
    const edad = document.getElementById('edad')
    let errorEdad = document.getElementById('errorEdad')
    if(edad.value < 18){
        mostrarError(errorEdad, 'Debes ser mayor de 18 años para registrarte!')
        validacionCorrecta = false
    }else{
        ocultarError(errorEdad)
    }

    //Validacion de la actividad
    const actividad = document.getElementById('actividad')
    let errorActividad = document.getElementById('errorActividad')
    if (actividad.value == '') {
        mostrarError(errorActividad, 'Por favor, seleccione una actividad')
        validacionCorrecta = false
    }else{
        ocultarError(errorActividad)
    }
    
      //Validacion de nivel de estudio
      const nivelEstudio = document.getElementById('nivelEstudio')
      let errorNivelEstudio = document.getElementById('errorNivelEstudio')
      if (errorNivelEstudio.value == '') {
          mostrarError(errorNivelEstudio, 'Por favor, seleccione un nivel de estudio')
          validacionCorrecta = false
      }else{
          ocultarError(errorNivelEstudio)
      }

       //Validacion de terminos y condiciones
       const aceptoTerminos = document.getElementById('aceptoTerminos')
       let errorAceptoTerminos = document.getElementById('errorAceptoTerminos')
       if (!aceptoTerminos.checked){
           mostrarError(errorAceptoTerminos, 'Necesitas aceptar los terminos y condiciones')
           validacionCorrecta = false
       }else{
           ocultarError(errorAceptoTerminos)
       }

      return validacionCorrecta //esto dira si el formulario completo es o no valido
}

const mostrarError = (elemento, mensaje) =>{
    elemento.textContent = mensaje
    elemento.style.display = "block"
}

const ocultarError = (elemento, mensaje) =>{
    elemento.textContent = ''
    elemento.style.display = "none"
}