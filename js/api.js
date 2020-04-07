document.querySelector("#submit").addEventListener("click", envMsg);

function envMsg(){
    

    

    var mensaje = document.getElementById("mensaje").value;
    

    let url = "https://api.whatsapp.com/send?phone=523861055227&text=" + mensaje;
    
    window.open(url);
    
}