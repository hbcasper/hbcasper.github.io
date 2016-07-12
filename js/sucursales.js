function obtenerSucursal(){
	return sucursal = [{
		"nombre":$('#nombre').val(),
		"direccion":$('#direccion').val(),
		"pais":$('#pais').val(),
		"estado":$('#estado').val(),
		"ciudad":$('#ciudad').val(),
		"localidad":$('#localidad').val(),
		"fecha":fechaActual
		}];
}

$(document).ready(function() {
	$('.btn-nuevo').click(function(){
		$('.modalTitle').text("Nueva Sucursal");
		$('.modalBc').text("Nueva Sucursal");
	});
	$('.btn-guardar').click(function(){
		var inputsVacios = $('.nuevaSucursal').find("input").filter(function() {
	            return this.value === "";
	    });
	    var selectsVacios = $('.nuevaSucursal').find("select").filter(function() {
	            return this.value === "";
	    });
	 	if(inputsVacios.length==0){
	    	if(selectsVacios.length==0){
	    		if($('.modalTitle').text()==="Nueva Sucursal"){
		    		var sucursal = obtenerSucursal();
		    		$table.bootstrapTable('append', sucursal);
	        } else{
		    	var sucursal = obtenerSucursal();
		    	$('#table').bootstrapTable('remove', {field: 'nombre', values: [currentRow.nombre]});
		    	$table.bootstrapTable('append', sucursal);
	        }
	        $('.nuevaSucursal')[0].reset();
		    $('#modalNuevaSucursal').modal('hide');
	       }
	    }
    });
    $('.editarInfo').click(function(){
    	$('#modalInfoSucursal').modal('hide');
    	$('.modalTitle').text("Editar Sucursal");
    	$('.modalBc').text("Editar Sucursal");
    	$('#nombre').val(currentRow.nombre);
		$('#direccion').val(currentRow.direccion);
		$('#pais').val(currentRow.pais);
		$('#estado').val(currentRow.estado);
		$('#ciudad').val(currentRow.ciudad);
		$('#localidad').val(currentRow.localidad);
		$('#modalNuevaSucursal').modal('show');
    });
    $("#modalNuevaSucursal").on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
            resizeMap();
    });
    $("#modalInfoSucursal").on('shown.bs.modal', function () {
            resizeMap();
    });
});

window.editarEvents = {
    'click .btn-editar': function (e, value, row, index) {
        $('.modalTitle').text("Editar Sucursal");
		$('.modalBc').text("Editar Sucursal");
		$('#nombre').val(row.nombre);
		$('#direccion').val(row.direccion);
		$('#pais').val(row.pais);
		$('#estado').val(row.estado);
		$('#ciudad').val(row.ciudad);
		$('#localidad').val(row.localidad);
		$('#modalNuevaSucursal').modal('show');
		currentRow = row;
    }
};

window.masInfoEvents = {
    'click .btn-masInfo': function (e, value, row, index) {
		$('#nombreInfo').text(row.nombre);
		$('#direccionInfo').text(row.direccion);
		$('#paisInfo').text(row.pais);
		$('#estadoInfo').text(row.estado);
		$('#ciudadInfo').text(row.ciudad);
		$('#localidadInfo').text(row.localidad);
        $('#modalInfoSucursal').modal('show');
        currentRow = row;
    }
};

window.elimEvents = {
    'click .btn-eliminar': function (e, value, row, index) {
    	if(confirm('Quieres eliminar '+row.nombre +'?')){
    		$('#table').bootstrapTable('remove', {field: 'nombre', values: [row.nombre]});
    	}
    }
};