function obtenerModulo(){
	return modulo = [{
		"clave":$('#clave').val(),
		"nombre":$('#nombre').val(),
		"dispositivo":$('#dispositivo').val(),
		"modelo":$('#modelo').val(),
		"tipo":$('#tipo').val(),
		"descripcion":$('#descripcion').val(),
		"sucursal":$('#sucursal').val(),
		"centroProd":$('#centroProd').val(),
		"sitio":$('#sitio').val(),
		"nave":$('#nave').val(),
		"area":$('#area').val(),
		"fecha":fechaActual, 
		"sensores":{
				"pin0":$('#sp0').is(':checked'),
				"sensor0":checkPins('#sp0', '#sensor0'),
				"pin1":$('#sp1').is(':checked'),
				"sensor1":checkPins('#sp1', '#sensor1'),
				"pin2":$('#sp2').is(':checked'),
				"sensor2":checkPins('#sp2', '#sensor2'),
				"pin3":$('#sp3').is(':checked'),
				"sensor3":checkPins('#sp3', '#sensor3')
				},
		"controles":{
				"pin0":$('#cp0').is(':checked'),
				"control0":checkPins('#cp0', '#control0'),
				"pin1":$('#cp1').is(':checked'),
				"control1":checkPins('#cp1', '#control1'),
				"pin2":$('#cp2').is(':checked'),
				"control2":checkPins('#cp2', '#control2'),
				"pin3":$('#cp3').is(':checked'),
				"control3":checkPins('#cp3', '#control3')
				}
    	}];
}

function checkPins(pin, tipo){
	if($(pin).is(':checked')){
		$(tipo).show(250);
		return $(tipo).val();
	} else {
		$(tipo).hide(250);
		return "";
	}
}

$(document).ready(function() {
	$('.btn-nuevo').click(function(){
		$('.modalTitle').text("Nuevo Módulo");
		$('.modalBc').text("Nuevo Módulo");
	});
	$('.btn-guardar').click(function(){
		var inputsVacios = $('.nuevoModulo').find("input").filter(function() {
	            return this.value === "";
	    });
	    var selectsVacios = $('.nuevoModulo').find("select").filter(function() {
	            return this.value === "";
	    });
	 	if(inputsVacios.length==0){
	    	//if(selectsVacios.length==0){
	    		if($('.modalTitle').text()==="Nuevo Módulo"){
		    		var modulo = obtenerModulo();
		    		$table.bootstrapTable('append', modulo);
	        } else{
		    	var modulo = obtenerModulo();
		    	$('#table').bootstrapTable('remove', {field: 'clave', values: [currentRow.clave]});
		    	$table.bootstrapTable('append', modulo);
	        }
	        $('.nuevoModulo')[0].reset();
		    $('#modalNuevoModulo').modal('hide');
	       //}
	    }
    });
    $('.editarInfo').click(function(){
    	$('#modalInfoModulo').modal('hide');
    	$('.modalTitle').text("Editar Módulo");
    	$('.modalBc').text("Editar Módulo");
    	$('#clave').val(currentRow.clave);
    	$('#nombre').val(currentRow.nombre);
    	$('#dispositivo').val(currentRow.dispositivo);
		$('#modelo').val(currentRow.modelo);
		$('#tipo').val(currentRow.tipo);
		$('#descripcion').val(currentRow.descripcion);
		$('#sucursal').val(currentRow.sucursal);
		$('#centroProd').val(currentRow.centroProd);
		$('#sitio').val(currentRow.sitio);
		$('#nave').val(currentRow.nave);
		$('#area').val(currentRow.area);
		$('#sp0').prop('checked', currentRow.sensores.pin0);
		$('#sensor0').val(currentRow.sensores.sensor0);
		checkPins('#sp0', '#sensor0');
		$('#sp1').prop('checked', currentRow.sensores.pin1);
		$('#sensor1').val(currentRow.sensores.sensor1);
		checkPins('#sp1', '#sensor1');
		$('#sp2').prop('checked', currentRow.sensores.pin2);
		$('#sensor2').val(currentRow.sensores.sensor2);
		checkPins('#sp2', '#sensor2');
		$('#sp3').prop('checked', currentRow.sensores.pin3);
		$('#sensor3').val(currentRow.sensores.sensor3);
		checkPins('#sp3', '#sensor3');
		$('#cp0').prop('checked', currentRow.controles.pin0);
		$('#control0').val(currentRow.controles.control0);
		checkPins('#cp0', '#control0');
		$('#cp1').prop('checked', currentRow.controles.pin1);
		$('#control1').val(currentRow.controles.control1);
		checkPins('#cp1', '#control1');
		$('#cp2').prop('checked', currentRow.controles.pin2);
		$('#control2').val(currentRow.controles.control2);
		checkPins('#cp2', '#control2');
		$('#cp3').prop('checked', currentRow.controles.pin3);
		$('#control3').val(currentRow.controles.control3);
		checkPins('#cp3', '#control3');
		$('#modalNuevoModulo').modal('show');
    });
    $("#modalNuevoModulo").on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
    		resizeMap();
    });
    $("#modalInfoModulo").on('shown.bs.modal', function () {
            resizeMap();
    });
    
    //pins
    $('#sp0').click(function(){
    	checkPins('#sp0', '#sensor0');
    });
    $('#sp1').click(function(){
    	checkPins('#sp1', '#sensor1');
    });
    $('#sp2').click(function(){
    	checkPins('#sp2', '#sensor2');
    });
    $('#sp3').click(function(){
    	checkPins('#sp3', '#sensor3');
    });
    $('#cp0').click(function(){
    	checkPins('#cp0', '#control0');
    });
    $('#cp1').click(function(){
    	checkPins('#cp1', '#control1');
    });
    $('#cp2').click(function(){
    	checkPins('#cp2', '#control2');
    });
    $('#cp3').click(function(){
    	checkPins('#cp3', '#control3');
    });
});

window.editarEvents = {
    'click .btn-editar': function (e, value, row, index) {
        $('.modalTitle').text("Editar Módulo");
    	$('.modalBc').text("Editar Módulo");
		$('#clave').val(row.clave);
    	$('#nombre').val(row.nombre);
    	$('#dispositivo').val(row.dispositivo);
		$('#modelo').val(row.modelo);
		$('#tipo').val(row.tipo);
		$('#descripcion').val(row.descripcion);
		$('#sucursal').val(row.sucursal);
		$('#centroProd').val(row.centroProd);
		$('#sitio').val(row.sitio);
		$('#nave').val(row.nave);
		$('#area').val(row.area);
		$('#sp0').prop('checked', row.sensores.pin0);
		$('#sensor0').val(row.sensores.sensor0);
		checkPins('#sp0', '#sensor0');
		$('#sp1').prop('checked', row.sensores.pin1);
		$('#sensor1').val(row.sensores.sensor1);
		checkPins('#sp1', '#sensor1');
		$('#sp2').prop('checked', row.sensores.pin2);
		$('#sensor2').val(row.sensores.sensor2);
		checkPins('#sp2', '#sensor2');
		$('#sp3').prop('checked', row.sensores.pin3);
		$('#sensor3').val(row.sensores.sensor3);
		checkPins('#sp3', '#sensor3');
		$('#cp0').prop('checked', row.controles.pin0);
		$('#control0').val(row.controles.control0);
		checkPins('#cp0', '#control0');
		$('#cp1').prop('checked', row.controles.pin1);
		$('#control1').val(row.controles.control1);
		checkPins('#cp1', '#control1');
		$('#cp2').prop('checked', row.controles.pin2);
		$('#control2').val(row.controles.control2);
		checkPins('#cp2', '#control2');
		$('#cp3').prop('checked', row.controles.pin3);
		$('#control3').val(row.controles.control3);
		checkPins('#cp3', '#control3');
		$('#modalNuevoModulo').modal('show');
		currentRow = row;
    }
};

window.masInfoEvents = {
    'click .btn-masInfo': function (e, value, row, index) {
		$('#claveInfo').text(row.clave);
    	$('#nombreInfo').text(row.nombre);
		$('#modeloInfo').text(row.modelo);
		$('#dispositivoInfo').text(row.dispositivo);
		$('#tipoInfo').text(row.tipo);
		$('#descripcionInfo').text(row.descripcion);
		$('#sucursalInfo').text(row.sucursal);
		$('#centroProdInfo').text(row.centroProd);
		$('#sitioInfo').text(row.sitio);
		$('#naveInfo').text(row.nave);
		$('#areaInfo').text(row.area);
		$('#sp0Info').prop('checked', row.sensores.pin0);
		$('#sensor0Info').text(row.sensores.sensor0);
		checkPins('#sp0', '#sensor0');
		$('#sp1Info').prop('checked', row.sensores.pin1);
		$('#sensor1Info').text(row.sensores.sensor1);
		checkPins('#sp1', '#sensor1');
		$('#sp2Info').prop('checked', row.sensores.pin2);
		$('#sensor2Info').text(row.sensores.sensor2);
		checkPins('#sp2', '#sensor2');
		$('#sp3Info').prop('checked', row.sensores.pin3);
		$('#sensor3Info').text(row.sensores.sensor3);
		checkPins('#sp3', '#sensor3');
		$('#cp0Info').prop('checked', row.controles.pin0);
		$('#control0Info').text(row.controles.control0);
		checkPins('#cp0', '#control0');
		$('#cp1Info').prop('checked', row.controles.pin1);
		$('#control1Info').text(row.controles.control1);
		checkPins('#cp1', '#control1');
		$('#cp2Info').prop('checked', row.controles.pin2);
		$('#control2Info').text(row.controles.control2);
		checkPins('#cp2', '#control2');
		$('#cp3Info').prop('checked', row.controles.pin3);
		$('#control3Info').text(row.controles.control3);
		checkPins('#cp3', '#control3');
		$('#modalInfoModulo').modal('show');
        currentRow = row;
    }
};

window.elimEvents = {
    'click .btn-eliminar': function (e, value, row, index) {
    	if(confirm('Quieres eliminar '+row.clave +'?')){
    		$('#table').bootstrapTable('remove', {field: 'clave', values: [row.clave]});
    	}
    }
};