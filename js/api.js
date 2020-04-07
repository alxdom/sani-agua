document.querySelector("#submit").addEventListener("click", envMsg);

function envMsg(){
    
    var name = document.getElementById("nombre").value;
    var water = document.getElementById("garrafones").value;
    var street = document.getElementById("calle").value;
    var number = document.getElementById("numero").value;
    
    let url = "https://api.whatsapp.com/send?phone=523861055227&text=Nombre: %0A" 
                + name + 
                "%0A%0ANumero de garrafones: %0A"
                + water +
                "%0A%0ADomicilio: %0A"
                + street + " " + number;
                
    
    window.open(url);
    
}