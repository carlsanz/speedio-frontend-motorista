function validarFormulario() {
    const emailInput = document.getElementById('email');
    const contrasenaInput = document.getElementById('contrasena');

    const email = emailInput.value;
    const contrasena = contrasenaInput.value;

    // Expresión regular para validar el email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(email)) {
      
    } else {
      alert('Email inválido');
      return;
    }

    // Verificar que la contraseña tenga al menos 6 caracteres
    if (contrasena.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
    } else {
      ingreso()
    }

  }

 function ingreso() {
  document.getElementById('body').style.backgroundColor='#ffffff';
  document.getElementById('inicio-sesion').style.display='none';
  document.getElementById('listado-ordenes').style.display='block'
  document.getElementById('icono-inicio').style.color="#ffffff"
  
  
 }