function obtenerTarea(){
	return tarea = [{
		"descripcion":$('#descripcion').val(),
		"asignado":$('#asignado').val(),
		"fecha":fechaActual,
		"instruccion":$('#instruccion').val(),
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
				}
		}];
}

$(document).ready(function() {
	$('.btn-nuevo').click(function(){
		$('.modalTitle').text("Nueva Tarea");
		$('.modalBc').text("Nueva Tarea");
		$('.nuevaTarea')[0].reset();
	});
	$('.btn-guardar').click(function(){
		var inputsVacios = $('.nuevaTarea').find("input").filter(function() {
	            return this.value === "";
	    });
	    var selectsVacios = $('.nuevaTarea').find("select").filter(function() {
	            return this.value === "";
	    });
	 	if(inputsVacios.length==0){
	    	if(selectsVacios.length==0){
	    		if($('.modalTitle').text()==="Nueva Tarea"){
		    		var tarea = obtenerTarea();
		    		$table.bootstrapTable('append', tarea);
	        } else{
		    	var tarea = obtenerTarea();
		    	$('#table').bootstrapTable('remove', {field: 'descripcion', values: [currentRow.descripcion]});
		    	$table.bootstrapTable('append', tarea);
	        }
	        $('.nuevaTarea')[0].reset();
		    $('#modalNuevaTarea').modal('hide');
	       }
	    }
    });
    $('.editarInfo').click(function(){
    	$('#modalInfoTarea').modal('hide');
    	$('.modalTitle').text("Editar Tarea");
    	$('.modalBc').text("Editar Tarea");
    	$('#descripcion').val(currentRow.descripcion);
		$('#asignado').val(currentRow.asignado);
		$('#instruccion').val(currentRow.instruccion);
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
		$('#modalNuevaTarea').modal('show');
    });
    $("#modalNuevaTarea").on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
    });
    
    //conditional
    var repeticion = $('#live_form input:radio[name=repeticion]');

	var si = $('#live_form #si');
	var no = $('#live_form #no');

	repeticion.change(function() {
		var value = this.value;
		si.addClass('hidden');
		no.addClass('hidden');

		if (value == 'Si') {
			si.removeClass('hidden');
		}
		if (value == 'No') {
			no.removeClass('hidden');
		}
	});
	
	$('.clockpicker').clockpicker({
	    autoclose: 'true'
	});
});