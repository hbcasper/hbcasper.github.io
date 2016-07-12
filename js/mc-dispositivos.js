var $tableDisp = $('#tableDisp');

function obtenerDispositivo(){
	return dispositivo = [{
		"clave":$('#clave').val(),
		"nombre":$('#nombre').val(),
		"modelo":$('#modelo').val(),
		"descripcion":$('#descripcion').val(),
		"sucursal":$('#sucursal').val(),
		"centroProd":$('#centroProd').val(),
		"sitio":$('#sitio').val(),
		"nave":$('#nave').val(),
		"area":$('#area').val(),
		"fecha":fechaActual, 
    	}];
}

$(document).ready(function() {
	$tableDisp.bootstrapTable({data: ''});
    $("#modalInfoDispositivo").on('shown.bs.modal', function () {
    	 	$tableDisp.bootstrapTable('resetView');
            resizeMap();
    });
    $("#modalInfoDispositivo").on('hide.bs.modal', function () {
    		$tableDisp.bootstrapTable('removeAll');
    });
    
    $(".btn-masInfo").click(function(){
    	$('#modalInfoDispositivo').modal('show');
    });
});
