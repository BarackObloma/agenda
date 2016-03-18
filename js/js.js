//Defino un objeto con las caracteristicas que necesito
function contacto(){
    this.nre = "";
    this.tfono = "";
    this.mail = "";
}
//Creo una variable tipo arreglo o vector para almacenar los datos
//que necesitaré
var Contactos = new Array();
//abreviacion para document.getElementById para no escribirla 
//siempre solo usar gId
function gId(id){
    return document.getElementById(id);
}
//Declaro una funcion que tendrá como parametro un objeto al
//cual le modificaré su estado
function mostrar(){
    gId("InfoContacto").style.display='block';
    gId('Nombre').focus();
}
function ocultar(){
    gId('Nombre').value= '';
    gId('Telefono').value= '';
    gId('Email').value = '';
    gId("InfoContacto").style.display='none';
}
function guardar(){
    contac = new contacto();
    contac.nre = gId('Nombre').value;
    contac.tfono = gId('Telefono').value;
    contac.mail = gId('Email').value;
    Contactos[Contactos.length] = contac;
    ocultar();
    MostrarContacto();
}
function MostrarContacto(){
    gId('TodosContactos').innerHTML = '';
    for(x=0; x<Contactos.length; x++){
        contac = Contactos[x];
        div = document.createElement('div');
        div.setAttribute('class','contacto');
        div.innerHTML = "Nombre: " + contac.nre+ "<br>"+
        "Telefono: "+ contac.tfono+ "<br>"+
        "Email: " +contac.mail+ "<br>"+ 
        "<button onclick='editar("+x+");'>Editar</button>"+" "+"<button onclick='eliminar("+x+");'>Eliminar</button>";
        gId('TodosContactos').appendChild(div);
    }
}
function eliminar(id_contacto){
    newCon = new Array();
    for(x=0; x<Contactos.length; x++){
        if(x != id_contacto){
         newCon[newCon.length] = Contactos[x];   
        }
    }
    Contactos = newCon;
    MostrarContacto();
}
function editar(id_contacto){
    contac = Contactos[id_contacto];
    mostrar();
    gId('Nombre').value = contac.nre;
    gId('Telefono').value = contac.tfono;
    gId('Email').value = contac.mail;
    eliminar(id_contacto);
}