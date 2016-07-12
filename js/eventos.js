function obtenerEvento(){
	return evento = [{
		"clave":"FF01",
		"repeticion":"500",
		"estado":true,
		"nombre":$('#nombre').val(),
		"accion":$('#accion').val(),
		"sucursal":$('#sucursal').val(),
		"granja":$('#granja').val(),
		"area":$('#area').val(),
		"horario":{
				"lunes":$('#lunes').is(':checked'),
				"martes":$('#martes').is(':checked'),
				"miercoles":$('#miercoles').is(':checked'),
				"jueves":$('#jueves').is(':checked'),
				"viernes":$('#viernes').is(':checked'),
				"sabado":$('#sabado').is(':checked'),
				"domingo":$('#domingo').is(':checked'),
				"hora":$('#hora').val()
			},
		 "control":$('#control').val()	
		}];
}

$(document).ready(function() {
	$('.btn-nuevo').click(function(){
		$('.modalTitle').text("Nuevo Evento");
		$('.modalBc').text("Nuevo Evento");
		$('.nuevoEvento')[0].reset();
	});
	$('.btn-guardar').click(function(){
		var inputsVacios = $('.nuevoEvento').find("input").filter(function() {
	            return this.value === "";
	    });
	    var selectsVacios = $('.nuevoEvento').find("select").filter(function() {
	            return this.value === "";
	    });
	 	if(inputsVacios.length==0){
	    	if(selectsVacios.length==0){
	    		if($('.modalTitle').text()==="Nuevo Evento"){
		    		var evento = obtenerEvento();
		    		$table.bootstrapTable('append', evento);
	        } else{
		    	var evento = obtenerEvento();
		    	$('#table').bootstrapTable('remove', {field: 'clave', values: [currentRow.clave]});
		    	$table.bootstrapTable('append', evento);
	        }
	        $('.nuevoEvento')[0].reset();
		    $('#modalNuevoEvento').modal('hide');
	       }
	    }
    });
    $('.editarInfo').click(function(){
    	$('#modalInfoEvento').modal('hide');
    	$('.modalTitle').text("Editar Evento");
    	$('.modalBc').text("Editar Evento");
    	$('#nombre').val(currentRow.nombre),
		$('#accion').val(currentRow.accion),
		$('#sucursal').val(currentRow.sucursal);
		$('#granja').val(currentRow.granja);
		$('#area').val(currentRow.area);
		$('#lunes').prop('checked', currentRow.horario.lunes);
		$('#martes').prop('checked', currentRow.horario.martes);
		$('#miercoles').prop('checked', currentRow.horario.miercoles);
		$('#jueves').prop('checked', currentRow.horario.jueves);
		$('#viernes').prop('checked', currentRow.horario.viernes);
		$('#sabado').prop('checked', currentRow.horario.sabado);
		$('#domingo').prop('checked', currentRow.horario.domingo);
		$('#hora').val(currentRow.horario.hora);
		$('#control').val(currentRow.control);
		$('#modalNuevoEvento').modal('show');
    });
    $("#modalNuevoEvento").on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
    });
    
    $('.clockpicker').clockpicker({
	    autoclose: 'true'
	});
});