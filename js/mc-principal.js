$(document).ready(function(){
	$.ajaxSetup({
	  cache: true
	});	
	$('.menu-mc').find('a').click(function(){
		var opcion = $(this).attr("class");
		$(".mc-content").load(opcion+".html");
		$.getScript("js/mapa.js");
	});
});

window.masInfoEventsDisp = {
    'click .btn-masInfo': function (e, value, row, index) {
		$('#claveInfo').text(row.clave);
    	$('#nombreInfo').text(row.nombre);
		$('#fechaInfo').text(row.fecha);
		$('#estadoInfo').text(row.estado);
		$('#descripcionInfo').text(row.descripcion);
		$('#sucursalInfo').text(row.sucursal);
		$('#centroProdInfo').text(row.centroProd);
		$('#sitioInfo').text(row.sitio);
		$('#naveInfo').text(row.nave);
		$('#areaInfo').text(row.area);
		$tableDisp.bootstrapTable('append', row.sensores);
		$('#modalInfoDispositivo').modal('show');
        currentRow = row;
    }
};

window.editarEventsVariables = {
    'click .btn-editar': function (e, value, row, index) {
        $('.modalTitle').text("Editar Variable");
		$('.modalBc').text("Editar Variable");
		$('#nombre').val(row.nombre),
		$('#tipo').val(row.tipo);
		range.slider('setValue', [row.minimo, row.maximo]);
		$('#sucursal').val(row.sucursal);
		$('#granja').val(row.granja);
		$('#area').val(row.area);
		$('#control1min').prop('checked', row.controles.control1min);
		$('#control1max').prop('checked', row.controles.control1max);
		$('#control2min').prop('checked', row.controles.control2min);
		$('#control2max').prop('checked', row.controles.control2max);
		$('#control3min').prop('checked', row.controles.control3min);
		$('#control3max').prop('checked', row.controles.control3max);
		$('#control4min').prop('checked', row.controles.control4min);
		$('#control4max').prop('checked', row.controles.control4max);
		$('#visual').prop('checked', row.visual);
		checkAlarma('#visual', '#visualSlider', row.visualSlider);
		$('#sonora').prop('checked', row.sonora);
		checkAlarma('#sonora', '#sonoraSlider', row.sonoraSlider);
		$('#correo').prop('checked', row.correo);
		checkAlarma('#correo', '#correoSlider', row.correoSlider);
		$('#modalNuevaVariable').modal('show');
		currentRow = row;
    }
};

window.masInfoEventsVariables = {
    'click .btn-masInfo': function (e, value, row, index) {
		$('#nombreInfo').text(row.nombre),
		$('#tipoInfo').text(row.tipo);
		$('#minimoInfo').text(row.minimo);
		$('#maximoInfo').text(row.maximo);
		$('#sucursalInfo').text(row.sucursal);
		$('#granjaInfo').text(row.granja);
		$('#areaInfo').text(row.area);
		$('#control1minInfo').prop('checked', row.controles.control1min);
		$('#control1maxInfo').prop('checked', row.controles.control1max);
		$('#control2minInfo').prop('checked', row.controles.control2min);
		$('#control2maxInfo').prop('checked', row.controles.control2max);
		$('#control3minInfo').prop('checked', row.controles.control3min);
		$('#control3maxInfo').prop('checked', row.controles.control3max);
		$('#control4minInfo').prop('checked', row.controles.control4min);
		$('#control4maxInfo').prop('checked', row.controles.control4max);
		$('#visualInfo').prop('checked', row.visual);
		$('#visualSliderInfo').text(row.visualSlider+' min');
		$('#sonoraInfo').prop('checked', row.sonora);
		$('#sonoraSliderInfo').text(row.sonoraSlider+' min');
		$('#correoInfo').prop('checked', row.correo);
		$('#correoSliderInfo').text(row.correoSlider+' min');
        $('#modalInfoVariable').modal('show');
        currentRow = row;
    }
};

window.elimEventsVariables = {
    'click .btn-eliminar': function (e, value, row, index) {
    	if(confirm('Quieres eliminar '+row.nombre +'?')){
    		$('#table').bootstrapTable('remove', {field: 'clave', values: [row.clave]});
    	}
    }
};

window.masInfoEventsSensores = {
    'click .btn-masInfo': function (e, value, row, index) {
		$('#claveInfo').text(row.clave);
    	$('#nombreInfo').text(row.nombre);
    	$('#fechaInfo').text(row.fecha);
    	$('#tipoInfo').text(row.tipo);
    	$('#estadoInfo').text(row.estado);
		$('#modalInfoSensor').modal('show');
        currentRow = row;
    }
};

window.editarEventsTareas = {
    'click .btn-editar': function (e, value, row, index) {
        $('.modalTitle').text("Editar Tarea");
		$('.modalBc').text("Editar Tarea");
		$('#descripcion').val(row.descripcion);
		$('#asignado').val(row.asignado);
		$('#instruccion').val(row.instruccion);
		$('#sucursal').val(row.sucursal);
		$('#granja').val(row.granja);
		$('#area').val(row.area);
		$('#lunes').prop('checked', row.horario.lunes);
		$('#martes').prop('checked', row.horario.martes);
		$('#miercoles').prop('checked', row.horario.miercoles);
		$('#jueves').prop('checked', row.horario.jueves);
		$('#viernes').prop('checked', row.horario.viernes);
		$('#sabado').prop('checked', row.horario.sabado);
		$('#domingo').prop('checked', row.horario.domingo);
		$('#hora').val(row.horario.hora);
		$('#modalNuevaTarea').modal('show');
		currentRow = row;
    }
};

window.masInfoEventsTareas = {
    'click .btn-masInfo': function (e, value, row, index) {
		$('#descripcionInfo').text(row.descripcion);
		$('#asignadoInfo').text(row.asignado);
		$('#instruccionInfo').text(row.instruccion);
		$('#sucursalInfo').text(row.sucursal);
		$('#granjaInfo').text(row.granja);
		$('#areaInfo').text(row.area);
		$('#lunesInfo').prop('checked', row.horario.lunes);
		$('#martesInfo').prop('checked', row.horario.martes);
		$('#miercolesInfo').prop('checked', row.horario.miercoles);
		$('#juevesInfo').prop('checked', row.horario.jueves);
		$('#viernesInfo').prop('checked', row.horario.viernes);
		$('#sabadoInfo').prop('checked', row.horario.sabado);
		$('#domingoInfo').prop('checked', row.horario.domingo);
		$('#horaInfo').text(row.horario.hora);
        $('#modalInfoTarea').modal('show');
        currentRow = row;
    }
};

window.elimEventsTareas = {
    'click .btn-eliminar': function (e, value, row, index) {
    	if(confirm('Quieres eliminar '+row.nombre +'?')){
    		$('#table').bootstrapTable('remove', {field: 'descripcion', values: [row.descripcion]});
    	}
    }
};

window.editarEventsEventos = {
    'click .btn-editar': function (e, value, row, index) {
        $('.modalTitle').text("Editar Evento");
		$('.modalBc').text("Editar Evento");
		$('#nombre').val(row.nombre),
		$('#accion').val(row.accion),
		$('#sucursal').val(row.sucursal);
		$('#granja').val(row.granja);
		$('#area').val(row.area);
		$('#lunes').prop('checked', row.horario.lunes);
		$('#martes').prop('checked', row.horario.martes);
		$('#miercoles').prop('checked', row.horario.miercoles);
		$('#jueves').prop('checked', row.horario.jueves);
		$('#viernes').prop('checked', row.horario.viernes);
		$('#sabado').prop('checked', row.horario.sabado);
		$('#domingo').prop('checked', row.horario.domingo);
		$('#hora').val(row.horario.hora);
		$('#control').val(row.control);
		$('#modalNuevoEvento').modal('show');
		currentRow = row;
    }
};

window.masInfoEventsEventos = {
    'click .btn-masInfo': function (e, value, row, index) {
		$('#nombreInfo').text(row.nombre),
		$('#accionInfo').text(row.accion),
		$('#sucursalInfo').text(row.sucursal);
		$('#granjaInfo').text(row.granja);
		$('#areaInfo').text(row.area);
		$('#lunesInfo').prop('checked', row.horario.lunes);
		$('#martesInfo').prop('checked', row.horario.martes);
		$('#miercolesInfo').prop('checked', row.horario.miercoles);
		$('#juevesInfo').prop('checked', row.horario.jueves);
		$('#viernesInfo').prop('checked', row.horario.viernes);
		$('#sabadoInfo').prop('checked', row.horario.sabado);
		$('#domingoInfo').prop('checked', row.horario.domingo);
		$('#horaInfo').text(row.horario.hora);
		$('#controlInfo').text(row.control);
        $('#modalInfoEvento').modal('show');
        currentRow = row;
    }
};

window.elimEventsEventos = {
    'click .btn-eliminar': function (e, value, row, index) {
    	if(confirm('Quieres eliminar '+row.nombre +'?')){
    		$('#table').bootstrapTable('remove', {field: 'clave', values: [row.clave]});
    	}
    }
};

$.fn.extend({
    treed: function (o) {
      var openedClass = 'glyphicon-minus-sign';
      var closedClass = 'glyphicon-plus-sign';
      
      if (typeof o != 'undefined'){
        if (typeof o.openedClass != 'undefined'){
        openedClass = o.openedClass;
        }
        if (typeof o.closedClass != 'undefined'){
        closedClass = o.closedClass;
        }
      };
      
        //initialize each of the top levels
        var tree = $(this);
        tree.find('li').has("ul").each(function () {
            var branch = $(this); //li with children ul
            branch.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");
            branch.addClass('branch');
            branch.on('click', function (e) {
                if (this == e.target) {
                    var icon = $(this).children('i:first');
                    icon.toggleClass(openedClass + " " + closedClass);
                    $(this).children().children().toggle();
                }
            });
            branch.children().children().toggle();
        });
        //fire event from the dynamically added icon
      tree.find('.branch .indicator').each(function(){
        $(this).on('click', function () {
            $(this).closest('li').click();
        });
      });
        //fire event if the li contains an anchor instead of text
        tree.find('a').each(function () {
            $(this).on('click', function (e) {
                //$(this).closest('li').click();
                //agregar aqui filtro
            	var ubicacion = $(this).closest('a').find('p');
            	var tipo = '';
            	$.each(ubicacion.attr("class").split(' '), function(index, item) {
    				if (item != 'hidden') {
        				tipo = item.toString();
    				}
    			});
    			$table = $('#table');
    			if(tipo==='sucursal')
            		$table.bootstrapTable('filterBy', {'sucursal': ubicacion.text().trim()});
            	else if(tipo==='centroProd')
            		$table.bootstrapTable('filterBy', {'centroProd': ubicacion.text().trim()});
            	else if(tipo==='sitio')
            		$table.bootstrapTable('filterBy', {'sitio': ubicacion.text().trim()});
            	else if(tipo==='nave')
            		$table.bootstrapTable('filterBy', {'nave': ubicacion.text().trim()});
            	else if(tipo==='area')
            		$table.bootstrapTable('filterBy', {'area': ubicacion.text().trim()});
                e.preventDefault();
            });
        });
        //fire event to open branch if the li contains a button instead of text
        tree.find('.branch>button').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
    }
});

$('#tree1').treed();
