this.logueado = false;
$("#Entrada").click(Function()){
    if($usuario).val() == "admin" && $("#contraseña").val() == '54321')(
        logueado =true;
        if(logueado == true){
            swal.fire ('Usuario correcto')
        }
    )
        else{
            swal.fire('Usuario Incorrecto');
        } 
}