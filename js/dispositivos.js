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
	$('.btn-guardar').click(function(){
		var inputsVacios = $('.nuevoDispositivo').find("input").filter(function() {
	            return this.value === "";
	    });
	    var selectsVacios = $('.nuevoDispositivo').find("select").filter(function() {
	            return this.value === "";
	    });
	 	if(inputsVacios.length==0){
	    	if(selectsVacios.length==0){
		    	var dispositivo = obtenerDispositivo();
		    	$('#table').bootstrapTable('remove', {field: 'clave', values: [currentRow.clave]});
		    	$table.bootstrapTable('append', dispositivo);
	        $('.nuevoDispositivo')[0].reset();
		    $('#modalNuevoDispositivo').modal('hide');
	       }
	    }
    });
    $('.editarInfo').click(function(){
    	$('#modalInfoDispositivo').modal('hide');
    	$('.modalTitle').text("Editar Dispositivo");
    	$('.modalBc').text("Editar Dispositivo");
    	$('#clave').val(currentRow.clave);
    	$('#nombre').val(currentRow.nombre);
		$('#modelo').val(currentRow.modelo);
		$('#descripcion').val(currentRow.descripcion);
		$('#sucursal').val(currentRow.sucursal);
		$('#centroProd').val(currentRow.centroProd);
		$('#sitio').val(currentRow.sitio);
		$('#nave').val(currentRow.nave);
		$('#area').val(currentRow.area);
		$('#modalNuevoDispositivo').modal('show');
    });
    $("#modalNuevoDispositivo").on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
    		resizeMap();
    });
    $("#modalInfoDispositivo").on('shown.bs.modal', function () {
            resizeMap();
    });
});

window.editarEvents = {
    'click .btn-editar': function (e, value, row, index) {
        $('.modalTitle').text("Editar Dispositivo");
    	$('.modalBc').text("Editar Dispositivo");
		$('#clave').val(row.clave);
    	$('#nombre').val(row.nombre);
		$('#modelo').val(row.modelo);
		$('#descripcion').val(row.descripcion);
		$('#sucursal').val(row.sucursal);
		$('#centroProd').val(row.centroProd);
		$('#sitio').val(row.sitio);
		$('#nave').val(row.nave);
		$('#area').val(row.area);
		$('#modalNuevoDispositivo').modal('show');
		currentRow = row;
    }
};

window.masInfoEvents = {
    'click .btn-masInfo': function (e, value, row, index) {
		$('#claveInfo').text(row.clave);
    	$('#nombreInfo').text(row.nombre);
		$('#modeloInfo').text(row.modelo);
		$('#descripcionInfo').text(row.descripcion);
		$('#sucursalInfo').text(row.sucursal);
		$('#centroProdInfo').text(row.centroProd);
		$('#sitioInfo').text(row.sitio);
		$('#naveInfo').text(row.nave);
		$('#areaInfo').text(row.area);
		$('#modalInfoDispositivo').modal('show');
        currentRow = row;
    }
};