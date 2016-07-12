function obtenerLicencia(){
	return licencia = [{
		"clave":$('#clave').val(),
		"nombre":$('#nombre').val(),
		"rfc":$('#rfc').val(),
    	"direccion":$('#direccion').val(),
    	"tipo":"Completa",
    	"fecha":fechaActual,
    	"modulos":{
    			"administracion":$('#modulosAdministracion').is(':checked'),
    			"monitoreo":$('#modulosMonitoreo').is(':checked'),
    			"inventarios":$('#modulosInventarios').is(':checked'),
    			"proovedores":$('#modulosProovedores').is(':checked')
    			},
    	"sucursales":$('#sucursales').val(),
    	"usuarios":$('#usuarios').val(),
    	"inicioVigencia":$('#inicioVigencia').val(),
    	"finVigencia":$('#finVigencia').val(),
		}];
}

$(document).ready(function() {
	$('.btn-nuevo').click(function(){
		$('.modalTitle').text("Nueva Licencia");
		$('.modalBc').text("Nueva Licencia");
	});
	$('.btn-guardar').click(function(){
		var inputsVacios = $('.nuevaLicencia').find("input").filter(function() {
	            return this.value === "";
	    });
	    var selectsVacios = $('.nuevaLicencia').find("select").filter(function() {
	            return this.value === "";
	    });
	 	if(inputsVacios.length==0){
	    	if(selectsVacios.length==0){
	    		if($('.modalTitle').text()==="Nueva Licencia"){
		    		var licencia = obtenerLicencia();
		    		$table.bootstrapTable('append', licencia);
	        } else{
		    	var licencia = obtenerLicencia();
		    	$('#table').bootstrapTable('remove', {field: 'nombre', values: [currentRow.nombre]});
		    	$table.bootstrapTable('append', licencia);
	        }
	        $('.nuevaLicencia')[0].reset();
		    $('#modalNuevaLicencia').modal('hide');
	       }
	    }
    });
    $('.editarInfo').click(function(){
    	$('#modalInfoLicencia').modal('hide');
    	$('.modalTitle').text("Editar Licencia");
    	$('.modalBc').text("Editar Licencia");
    	$('#clave').val(currentRow.clave);
    	$('#nombre').val(currentRow.nombre);
		$('#rfc').val(currentRow.rfc);
		$('#direccion').val(currentRow.direccion);
		$('#tipo').val(currentRow.tipo);
		$('#fecha').val(currentRow.fecha);
		$('#modulosAdministracion').prop('checked', currentRow.modulos.administracion);
		$('#modulosMonitoreo').prop('checked', currentRow.modulos.monitoreo);
		$('#modulosInventarios').prop('checked', currentRow.modulos.inventarios);
		$('#modulosProovedores').prop('checked', currentRow.modulos.proovedores);
		$('#sucursales').val(currentRow.sucursales);
		$('#usuarios').val(currentRow.usuarios);
		$('#inicioVigencia').val(currentRow.inicioVigencia);
		$('#finVigencia').val(currentRow.finVigencia);
		$('#modalNuevaLicencia').modal('show');
    });
    $("#modalNuevaLicencia").on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
    });
});

window.editarEvents = {
    'click .btn-editar': function (e, value, row, index) {
        $('.modalTitle').text("Editar Licencia");
    	$('.modalBc').text("Editar Licencia");
		$('#clave').val(row.clave);
    	$('#nombre').val(row.nombre);
		$('#rfc').val(row.rfc);
		$('#direccion').val(row.direccion);
		$('#tipo').val(row.tipo);
		$('#fecha').val(row.fecha);
		$('#modulosAdministracion').prop('checked', row.modulos.administracion);
		$('#modulosMonitoreo').prop('checked', row.modulos.monitoreo);
		$('#modulosInventarios').prop('checked', row.modulos.inventarios);
		$('#modulosProovedores').prop('checked', row.modulos.proovedores);
		$('#sucursales').val(row.sucursales);
		$('#usuarios').val(row.usuarios);
		$('#inicioVigencia').val(row.inicioVigencia);
		$('#finVigencia').val(row.finVigencia);
		$('#modalNuevaLicencia').modal('show');
		currentRow = row;
    }
};

window.masInfoEvents = {
    'click .btn-masInfo': function (e, value, row, index) {
		$('#claveInfo').text(row.clave);
    	$('#nombreInfo').text(row.nombre);
		$('#rfcInfo').text(row.rfc);
		$('#direccionInfo').text(row.direccion);
		$('#tipoInfo').text(row.tipo);
		$('#fechaInfo').text(row.fecha);
		$('#modulosAdministracionInfo').prop('checked', row.modulos.administracion);
		$('#modulosMonitoreoInfo').prop('checked', row.modulos.monitoreo);
		$('#modulosInventariosInfo').prop('checked', row.modulos.inventarios);
		$('#modulosProovedoresInfo').prop('checked', row.modulos.proovedores);
		$('#sucursalesInfo').text(row.sucursales);
		$('#usuariosInfo').text(row.usuarios);
		$('#inicioVigenciaInfo').text(row.inicioVigencia);
		$('#finVigenciaInfo').text(row.finVigencia);
		$('#modalInfoLicencia').modal('show');
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