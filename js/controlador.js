  let usertxt = document.getElementById("email");
  let passwordtxt = document.getElementById("contrasena");
  let botonIngresar = document.getElementById("boton-inicio-sesion");



const inicioSesion=()=> {
  document.getElementById('body').style.backgroundColor='#FFE226'; //Cambiar por FFE226
  document.getElementById('inicio-sesion').style.display='block';//cambiar por block
  document.getElementById('listado-ordenes').style.display='none'
  document.getElementById('ordenes-disponibles').style.display='none'
  document.getElementById('ordenes-tomadas').style.display='none';
  document.getElementById('ordenes-entregadas').style.display='none';
  document.getElementById('perfil').style.display='none';
  document.getElementById('factura').style.display='none';


}
inicioSesion();


botonIngresar.addEventListener("click", () => {

  loginMotorista(usertxt.value, passwordtxt.value);
});

// 
const loginMotorista = async (user, password) => {

  let respuesta = await fetch(`http://localhost:3000/motoristas/login`, {
      method: 'POST',
      headers: {
          
          "Content-Type": "application/json", //MIME Type
      },
      body: JSON.stringify(
          {
              "correo_electronico": `${document.getElementById("email").value}`,
              "contrasena": `${document.getElementById("contrasena").value}`
          }
      )
      
  });
  
  let usuario = await respuesta.json();
  console.log(usuario.status)
  if (usuario.status == true) {
    ingreso()
  }else{
    validarFormulario()
  }
  
}


// 

 

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

function validarFormulario() {
  return alert('Email invalido o contraseña incorrecta');
}