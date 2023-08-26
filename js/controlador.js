  let usertxt = document.getElementById("email");
  let passwordtxt = document.getElementById("contrasena");
  let botonIngresar = document.getElementById("boton-inicio-sesion");
  let user=[];
  let ordenesDis=[];
  let nuevoUsuario=[];




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
  nuevoUsuario=usuario.motorista
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
  // console.log(nuevoUsuario)
  
  
 }

 

const generarOrdenesDisponibles = async()=> {
  let respuesta = await fetch(`http://localhost:3000/ordenes/disponible/dis`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json", //MIME Type
    }
  });
    let ordenes = await respuesta.json();
    console.log(ordenes);
  

  document.getElementById('body').style.backgroundColor='#ffffff';
  document.getElementById('inicio-sesion').style.display='none';
  document.getElementById('listado-ordenes').style.display='none';
  document.getElementById('ordenes-disponibles').style.display='block';
  document.getElementById('ordenes-tomadas').style.display='none';
  document.getElementById('ordenes-entregadas').style.display='none';
  document.getElementById('perfil').style.display='none';
  document.getElementById('factura').style.display='none';

  for (let i = 0; i < ordenes.length; i++) {
    document.getElementById("contenedor-pedidos").innerHTML+=
    `<div class="pedidos">
    <div >
        <span><i class="icono-pedido fa-sharp fa-solid fa-basket-shopping"></i></span>
    </div>
    <div>
        <p style="margin-bottom: 0; margin-top: 28px;">pedido #${ordenes[i].numero_orden}</p>
        <h5 style="margin-top: 5px; margin-bottom: 28px;">Destino:${ordenes[i].destino}</h5>
    </div>
</div>`;
    
  }



}

const generarOrdenesTomadas = async()=> {
  let respuesta = await fetch(`http://localhost:3000/ordenes/tomada/dis`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json", //MIME Type
    }
  });
    let ordenesTomadas = await respuesta.json();
    console.log(ordenesTomadas);


  document.getElementById('body').style.backgroundColor='#ffffff';
  document.getElementById('inicio-sesion').style.display='none';
  document.getElementById('listado-ordenes').style.display='none';
  document.getElementById('ordenes-disponibles').style.display='none';
  document.getElementById('ordenes-tomadas').style.display='block';
  document.getElementById('ordenes-entregadas').style.display='none';
  document.getElementById('perfil').style.display='none';
  document.getElementById('factura').style.display='none';

  for (let i = 0; i< ordenesTomadas.length; i++) {
    document.getElementById("contenedor-pedidos-tomados").innerHTML+=
    `<div id="pedido-tomado" class="pedido-tomado">
    <div>
        <p style="margin-bottom: 0; margin-top: 28px;">Pedido #${ordenesTomadas[i].numero_orden}</p>
        <h5 style="margin-top: 5px; margin-bottom: 28px;">ESTADO</h5>
    </div>

    <div style="display: flex;">
        <div class="estado-orden">En Origen</div>
        <div class="estado-orden">En Camino</div>
    </div>

    <div class="estado-orden">
        Entregado
    </div>
    <div onclick="generarFactura(this)" class="estado-orden">
        Ver Factura
    </div>
</div>`;
      }



}

const generarOrdenesEntregadas = async()=> {
  let respuesta = await fetch(`http://localhost:3000/ordenes/entregada/dis`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json", //MIME Type
    }
  });
    let ordenesEntregadas = await respuesta.json();
    console.log(ordenesEntregadas);

  document.getElementById('body').style.backgroundColor='#ffffff';
  document.getElementById('inicio-sesion').style.display='none';
  document.getElementById('listado-ordenes').style.display='none';
  document.getElementById('ordenes-disponibles').style.display='none';
  document.getElementById('ordenes-tomadas').style.display='none';
  document.getElementById('ordenes-entregadas').style.display='block'
  document.getElementById('perfil').style.display='none';
  document.getElementById('factura').style.display='none';

  for (let i = 0; i < ordenesEntregadas.length; i++) {
    document.getElementById("contenedor-pedidos-entregados").innerHTML+=
    `<div class="pedidos">
      <div >
          <span><i class="icono-pedido fa-sharp fa-solid fa-basket-shopping"></i></span>
      </div>
      <div>
        <p style="margin-bottom: 0; margin-top: 28px;">Pedido #${ordenesEntregadas[i].estado}</p>
        <h5 style="margin-top: 5px; margin-bottom: 28px;">Destino: ${ordenesEntregadas[i].destino}</h5>
     </div>
      <span><i class="icono-check fa-solid fa-check-double"></i></span>
    </div>`;
  }
  


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

  document.getElementById("contenedor-motorista").innerHTML=
  ` <div class="contenedor-atributos">
  <p class="atributos-motorista">Nombre</p>
  <h1 class="info-atributos">${nuevoUsuario.nombre}</h1>
</div>
<div class="contenedor-atributos">
  <p class="atributos-motorista">Usuario</p>
  <h1 class="info-atributos">${nuevoUsuario.nombre+" "+nuevoUsuario.apellido}</h1>
</div>
<div class="contenedor-atributos">
  <p class="atributos-motorista">Teléfono</p>
  <h1 class="info-atributos">${nuevoUsuario.telefono}</h1>
</div>`;


}

function generarFactura(element) {
  document.getElementById('icono-usuario-footer').style.color='#ffffff';

  document.getElementById('body').style.backgroundColor='#ffffff';
  document.getElementById('inicio-sesion').style.display='none';
  document.getElementById('listado-ordenes').style.display='none';
  document.getElementById('ordenes-disponibles').style.display='none';
  document.getElementById('ordenes-tomadas').style.display='none';
  document.getElementById('ordenes-entregadas').style.display='none';
  document.getElementById('perfil').style.display='none';
  document.getElementById('factura').style.display='block';

 document.getElementById("pedido-tomado").querySelector('*');


}

function validarFormulario() {
  return alert('Email invalido o contraseña incorrecta');
}