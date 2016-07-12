function obtenerPerfil(){
	return perfil = [{
		"perfil":$('#perfil').val(),
		"empresaP":"EP01",
		"fecha":fechaActual,
		"sucursales":{
					"ver":$('#sucursalesVer').is(':checked'),
					"crear":$('#sucursalesCrear').is(':checked'),
					"editar":$('#sucursalesEditar').is(':checked'),
					"eliminar":$('#sucursalesElim').is(':checked')
					},
		"usuarios":{
					"ver":$('#usuariosVer').is(':checked'),
					"crear":$('#usuariosCrear').is(':checked'),
					"editar":$('#usuariosEditar').is(':checked'),
					"eliminar":$('#usuariosElim').is(':checked')
					},
		"empresa":{
					"ver":$('#empresaVer').is(':checked'),
					"editar":$('#empresaEditar').is(':checked')
					},
		"preferencias":{
					"ver":$('#preferenciasVer').is(':checked'),
					"editar":$('#preferenciasEditar').is(':checked')
					},
		"sucursales":{
					"ver":$('#sucursalesVer').is(':checked'),
					"crear":$('#sucursalesCrear').is(':checked'),
					"editar":$('#sucursalesEditar').is(':checked'),
					"eliminar":$('#sucursalesElim').is(':checked'),
					},
		"dispositivos":{
					"ver":$('#dispositivosVer').is(':checked'),
					"crear":$('#dispositivosCrear').is(':checked'),
					"editar":$('#dispositivosEditar').is(':checked'),
					"eliminar":$('#dispositivosElim').is(':checked'),
					},
		"areas":{
					"ver":$('#areasVer').is(':checked'),
					"crear":$('#areasCrear').is(':checked'),
					"editar":$('#areasEditar').is(':checked'),
					"eliminar":$('#areasElim').is(':checked'),
					},
		"eventos":{
					"ver":$('#eventosVer').is(':checked'),
					"crear":$('#eventosCrear').is(':checked'),
					"editar":$('#eventosEditar').is(':checked'),
					"eliminar":$('#eventosElim').is(':checked'),
					},
		"variables":{
					"ver":$('#variablesVer').is(':checked'),
					"crear":$('#variablesCrear').is(':checked'),
					"editar":$('#variablesEditar').is(':checked'),
					"eliminar":$('#variablesElim').is(':checked'),
					},
		"eventos":$('#eventosCheck').is(':checked'),
		"control":$('#controlCheck').is(':checked'),
		"estados":$('#estadosCheck').is(':checked'),
		"accesos":$('#accesosCheck').is(':checked'),
		"chat":$("input[name='chatRadio']:checked").val()
		}];
}

$(document).ready(function() {
	$('.btn-nuevo').click(function(){
		$('.modalTitle').text("Nuevo Perfil");
		$('.modalBc').text("Nuevo Perfil");
	});
	$('.btn-guardar').click(function(){
		var inputsVacios = $('.nuevoPerfil').find("input").filter(function() {
	            return this.value === "";
	    });
	    var selectsVacios = $('.nuevoPerfil').find("select").filter(function() {
	            return this.value === "";
	    });
	 	if(inputsVacios.length==0){
	    	if(selectsVacios.length==0){
	    		if($('.modalTitle').text()==="Nuevo Perfil"){
		    		var perfil = obtenerPerfil();
		    		$table.bootstrapTable('append', perfil);
	        } else{
		    	var perfil = obtenerPerfil();
		    	$('#table').bootstrapTable('remove', {field: 'perfil', values: [currentRow.perfil]});
		    	$table.bootstrapTable('append', perfil);
	        }
	        $('.nuevoPerfil')[0].reset();
		    $('#modalNuevoPerfil').modal('hide');
	       }
	    }
    });
    $('.editarInfo').click(function(){
    	$('#modalInfoPerfil').modal('hide');
    	$('.modalTitle').text("Editar Perfil");
    	$('.modalBc').text("Editar Perfil");
    	$('#perfil').val(currentRow.perfil);
		$('#sucursalesVer').prop('checked', currentRow.sucursales.ver);
		$('#sucursalesEditar').prop('checked', currentRow.sucursales.editar);
		$('#sucursalesCrear').prop('checked', currentRow.sucursales.crear);
		$('#sucursalesElim').prop('checked', currentRow.sucursales.eliminar);
		$('#usuariosVer').prop('checked', currentRow.usuarios.ver);
		$('#usuariosEditar').prop('checked', currentRow.usuarios.editar);
		$('#usuariosCrear').prop('checked', currentRow.usuarios.crear);
		$('#usuariosElim').prop('checked', currentRow.usuarios.eliminar);
		$('#empresaVer').prop('checked', currentRow.empresa.ver);
		$('#empresaEditar').prop('checked', currentRow.empresa.editar);
		$('#preferenciasVer').prop('checked', currentRow.preferencias.ver);
		$('#preferenciasEditar').prop('checked', currentRow.preferencias.editar);
		$('#dispositivosVer').prop('checked', currentRow.dispositivos.ver);
		$('#dispositivosEditar').prop('checked', currentRow.dispositivos.editar);
		$('#dispositivosCrear').prop('checked', currentRow.dispositivos.crear);
		$('#dispositivosElim').prop('checked', currentRow.dispositivos.eliminar);
		$('#areasVer').prop('checked', currentRow.areas.ver);
		$('#areasEditar').prop('checked', currentRow.areas.editar);
		$('#areasCrear').prop('checked', currentRow.areas.crear);
		$('#areasElim').prop('checked', currentRow.areas.eliminar);
		$('#eventosVer').prop('checked', currentRow.eventos.ver);
		$('#eventosEditar').prop('checked', currentRow.eventos.editar);
		$('#eventosCrear').prop('checked', currentRow.eventos.crear);
		$('#eventosElim').prop('checked', currentRow.eventos.eliminar);
		$('#variablesVer').prop('checked', currentRow.variables.ver);
		$('#variablesEditar').prop('checked', currentRow.variables.editar);
		$('#variablesCrear').prop('checked', currentRow.variables.crear);
		$('#variablesElim').prop('checked', currentRow.variables.eliminar);
		$('#eventosCheck').prop('checked', currentRow.eventosP);
		$('#controlCheck').prop('checked', currentRow.control);
		$('#estadosCheck').prop('checked', currentRow.estados);
		$('#accesosCheck').prop('checked', currentRow.accesos);
		$('input:radio[name=chatRadio]').filter('[value='+currentRow.chat+']').prop('checked', true);
		$('#modalNuevoPerfil').modal('show');
    });
    $("#modalNuevoPerfil").on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
    });	
});

window.editarEvents = {
    'click .btn-editar': function (e, value, row, index) {
        $('.modalTitle').text("Editar Perfil");
    	$('.modalBc').text("Editar Perfil");
    	$('#perfil').val(row.perfil);
		$('#sucursalesVer').prop('checked', row.sucursales.ver);
		$('#sucursalesEditar').prop('checked', row.sucursales.editar);
		$('#sucursalesCrear').prop('checked', row.sucursales.crear);
		$('#sucursalesElim').prop('checked', row.sucursales.eliminar);
		$('#usuariosVer').prop('checked', row.usuarios.ver);
		$('#usuariosEditar').prop('checked', row.usuarios.editar);
		$('#usuariosCrear').prop('checked', row.usuarios.crear);
		$('#usuariosElim').prop('checked', row.usuarios.eliminar);
		$('#empresaVer').prop('checked', row.empresa.ver);
		$('#empresaEditar').prop('checked', row.empresa.editar);
		$('#preferenciasVer').prop('checked', row.preferencias.ver);
		$('#preferenciasEditar').prop('checked', row.preferencias.editar);
		$('#dispositivosVer').prop('checked', row.dispositivos.ver);
		$('#dispositivosEditar').prop('checked', row.dispositivos.editar);
		$('#dispositivosCrear').prop('checked', row.dispositivos.crear);
		$('#dispositivosElim').prop('checked', row.dispositivos.eliminar);
		$('#areasVer').prop('checked', row.areas.ver);
		$('#areasEditar').prop('checked', row.areas.editar);
		$('#areasCrear').prop('checked', row.areas.crear);
		$('#areasElim').prop('checked', row.areas.eliminar);
		$('#eventosVer').prop('checked', row.eventos.ver);
		$('#eventosEditar').prop('checked', row.eventos.editar);
		$('#eventosCrear').prop('checked', row.eventos.crear);
		$('#eventosElim').prop('checked', row.eventos.eliminar);
		$('#variablesVer').prop('checked', row.variables.ver);
		$('#variablesEditar').prop('checked', row.variables.editar);
		$('#variablesCrear').prop('checked', row.variables.crear);
		$('#variablesElim').prop('checked', row.variables.eliminar);
		$('#eventosCheck').prop('checked', row.eventosP);
		$('#controlCheck').prop('checked', row.control);
		$('#estadosCheck').prop('checked', row.estados);
		$('#accesosCheck').prop('checked', row.accesos);
		$('input:radio[name=chatRadio]').filter('[value='+row.chat+']').prop('checked', true);
		$('#modalNuevoPerfil').modal('show');
		currentRow = row;
    }
};

window.masInfoEvents = {
    'click .btn-masInfo': function (e, value, row, index) {
    	$('#perfilInfo').val(row.perfil);
		$('#sucursalesVerInfo').prop('checked', row.sucursales.ver);
		$('#sucursalesEditarInfo').prop('checked', row.sucursales.editar);
		$('#sucursalesCrearInfo').prop('checked', row.sucursales.crear);
		$('#sucursalesElimInfo').prop('checked', row.sucursales.eliminar);
		$('#usuariosVerInfo').prop('checked', row.usuarios.ver);
		$('#usuariosEditarInfo').prop('checked', row.usuarios.editar);
		$('#usuariosCrearInfo').prop('checked', row.usuarios.crear);
		$('#usuariosElimInfo').prop('checked', row.usuarios.eliminar);
		$('#empresaVerInfo').prop('checked', row.empresa.ver);
		$('#empresaEditarInfo').prop('checked', row.empresa.editar);
		$('#preferenciasVerInfo').prop('checked', row.preferencias.ver);
		$('#preferenciasEditarInfo').prop('checked', row.preferencias.editar);
		$('#dispositivosVerInfo').prop('checked', row.dispositivos.ver);
		$('#dispositivosEditarInfo').prop('checked', row.dispositivos.editar);
		$('#dispositivosCrearInfo').prop('checked', row.dispositivos.crear);
		$('#dispositivosElimInfo').prop('checked', row.dispositivos.eliminar);
		$('#areasVerInfo').prop('checked', row.areas.ver);
		$('#areasEditarInfo').prop('checked', row.areas.editar);
		$('#areasCrearInfo').prop('checked', row.areas.crear);
		$('#areasElimInfo').prop('checked', row.areas.eliminar);
		$('#eventosVerInfo').prop('checked', row.eventos.ver);
		$('#eventosEditarInfo').prop('checked', row.eventos.editar);
		$('#eventosCrearInfo').prop('checked', row.eventos.crear);
		$('#eventosElimInfo').prop('checked', row.eventos.eliminar);
		$('#variablesVerInfo').prop('checked', row.variables.ver);
		$('#variablesEditarInfo').prop('checked', row.variables.editar);
		$('#variablesCrearInfo').prop('checked', row.variables.crear);
		$('#variablesElimInfo').prop('checked', row.variables.eliminar);
		$('#eventosCheckInfo').prop('checked', row.eventosP);
		$('#controlCheckInfo').prop('checked', row.control);
		$('#estadosCheckInfo').prop('checked', row.estados);
		$('#accesosCheckInfo').prop('checked', row.accesos);
		$('input:radio[name=chatRadioInfo]').filter('[value='+row.chat+']').prop('checked', true);
        $('#modalInfoPerfil').modal('show');
        currentRow = row;
    }
};

window.elimEvents = {
    'click .btn-eliminar': function (e, value, row, index) {
    	if(confirm('Quieres eliminar '+row.perfil +'?')){
    		$('#table').bootstrapTable('remove', {field: 'perfil', values: [row.perfil]});
    	}
    }
};