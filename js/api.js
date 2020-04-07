document.querySelector("#submit").addEventListener("click", envMsg);

function envMsg(){
    
    var name = document.getElementById("nombre").value;
    var water = document.getElementById("garrafones").value;
    var street = document.getElementById("calle").value;
    var number = document.getElementById("numero").value;
    
    let url = "https://api.whatsapp.com/send?phone=523861055227&text=*PURIFICADORA DE AGUA SAN IGNACIO*%0A*Servicio de pedidos*%0A%0A%0A*Nombre:* %0A" 
                + name + 
                "%0A*Numero de garrafones:* %0A"
                + water +
                "%0A*Domicilio:* %0A"
                + street + " " + number;
                
    
    window.open(url);
    
}