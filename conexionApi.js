function obtenerDatos()
{
    $.get( "http://localhost/backend/public/obtenerProductos", function( data ) {
        $("#datos").empty();
        data.forEach(element => {
            $("#datos").append('<li style="background-image: url('+element.imagen+');"><img src="'+element.imagen+'" width="70" height="70"><a href="#detalle" class="ui-btn" onclick="getProducto('+element.id+')" style="text-align: right; ">'+element.nombre+' $'+element.precio+'</a></li>');
        });
      });
}
/*  Prototipo 1
<a id="link" href="#detalle" onclick="getProducto('+element.id+')">
 <div class="box">
     <img src="'+element.imagen+'" width="70" height="70">
         <h4>Retirar dinero</h4>
     </img>
 </div>
</a>*/

function getProducto(id)
{
    $("#imagen").empty();
    $("#nombre_producto").empty();
    $.get("http://localhost/backend/public/producto/"+id,
    function(data, status){
        $("#imagen").append('<img src="'+data.imagen+'" width="100%">');
        $("#nombre_producto").append('<h3>'+data.nombre+'</h3>');
    });
}