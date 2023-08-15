
  document.getElementById('body').style.backgroundColor='#FFE226'; //Cambiar por FFE226
  document.getElementById('inicio-sesion').style.display='block';//cambiar por block
  document.getElementById('listado-ordenes').style.display='none'
  document.getElementById('ordenes-disponibles').style.display='none'
  document.getElementById('ordenes-tomadas').style.display='none';
  document.getElementById('ordenes-entregadas').style.display='none';
  document.getElementById('perfil').style.display='none';
  document.getElementById('factura').style.display='none';

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
  document.getElementById('ordenes-disponibles').style.display='none'
  document.getElementById('ordenes-tomadas').style.display='none';
  document.getElementById('ordenes-entregadas').style.display='none'
  document.getElementById('icono-inicio').style.color="#ffffff"
  document.getElementById('perfil').style.display='none';
  document.getElementById('factura').style.display='none';
  
  
 }

function generarOrdenesDisponibles() {
  document.getElementById('body').style.backgroundColor='#ffffff';
  document.getElementById('inicio-sesion').style.display='none';
  document.getElementById('listado-ordenes').style.display='none';
  document.getElementById('ordenes-disponibles').style.display='block';
  document.getElementById('ordenes-tomadas').style.display='none';
  document.getElementById('ordenes-entregadas').style.display='none';
  document.getElementById('perfil').style.display='none';
  document.getElementById('factura').style.display='none';

}

function generarOrdenesTomadas() {
  document.getElementById('body').style.backgroundColor='#ffffff';
  document.getElementById('inicio-sesion').style.display='none';
  document.getElementById('listado-ordenes').style.display='none';
  document.getElementById('ordenes-disponibles').style.display='none';
  document.getElementById('ordenes-tomadas').style.display='block';
  document.getElementById('ordenes-entregadas').style.display='none';
  document.getElementById('perfil').style.display='none';
  document.getElementById('factura').style.display='none';

}

function generarOrdenesEntregadas() {
  document.getElementById('body').style.backgroundColor='#ffffff';
  document.getElementById('inicio-sesion').style.display='none';
  document.getElementById('listado-ordenes').style.display='none';
  document.getElementById('ordenes-disponibles').style.display='none';
  document.getElementById('ordenes-tomadas').style.display='none';
  document.getElementById('ordenes-entregadas').style.display='block'
  document.getElementById('perfil').style.display='none';
  document.getElementById('factura').style.display='none';


}

function generarPerfil() {
  document.getElementById('icono-usuario-footer').style.color='#ffffff';

  document.getElementById('body').style.backgroundColor='#ffffff';
  document.getElementById('inicio-sesion').style.display='none';
  document.getElementById('listado-ordenes').style.display='none';
  document.getElementById('ordenes-disponibles').style.display='none';
  document.getElementById('ordenes-tomadas').style.display='none';
  document.getElementById('ordenes-entregadas').style.display='none';
  document.getElementById('perfil').style.display='block';
  document.getElementById('factura').style.display='none';
}

function generarFactura() {
  document.getElementById('icono-usuario-footer').style.color='#ffffff';

  document.getElementById('body').style.backgroundColor='#ffffff';
  document.getElementById('inicio-sesion').style.display='none';
  document.getElementById('listado-ordenes').style.display='none';
  document.getElementById('ordenes-disponibles').style.display='none';
  document.getElementById('ordenes-tomadas').style.display='none';
  document.getElementById('ordenes-entregadas').style.display='none';
  document.getElementById('perfil').style.display='none';
  document.getElementById('factura').style.display='block';


}