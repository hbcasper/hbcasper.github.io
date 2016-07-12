var visual = $("#visualSlider").slider({
	tooltip: 'always'
});
var sonora = $("#sonoraSlider").slider({
	tooltip: 'always'
});
var correo = $("#correoSlider").slider({
	tooltip: 'always'
});
var range = $("#rangeSlider").slider({
	tooltip: 'always'
});

function obtenerVariable(){
	return variable = [{
		"clave":"FF01",
		"estado":true,
		"nombre":$('#nombre').val(),
		"tipo":$('#tipo').val(),
		"minimo":range.slider('getValue')[0],
		"maximo":range.slider('getValue')[1],
		"sucursal":$('#sucursal').val(),
		"granja":$('#granja').val(),
		"area":$('#area').val(),
		"controles":{
				"control1min":$('#control1min').is(':checked'),
				"control1max":$('#control1max').is(':checked'),
				"control2min":$('#control2min').is(':checked'),
				"control2max":$('#control2max').is(':checked'),
				"control3min":$('#control3min').is(':checked'),
				"control3max":$('#control3max').is(':checked'),
				"control4min":$('#control4min').is(':checked'),
				"control4max":$('#control4max').is(':checked')
			},
		 "visual":$('#visual').is(':checked'),
		 "visualSlider":visual.slider('getValue'),
		 "sonora":$('#sonora').is(':checked'),
		 "sonoraSlider":sonora.slider('getValue'),
		 "correo":$('#correo').is(':checked'),
		 "correoSlider":correo.slider('getValue')
		}];
}

function checkAlarma(alarma, slider, value){
	if($(alarma).is(':checked')){
		$(slider).slider('setValue', value);
		$(slider).slider('enable');
	} else {
		$(slider).slider('setValue', 0);
		$(slider).slider('disable');
	}
}

$(document).ready(function() {
	$('.btn-nuevo').click(function(){
		$('.modalTitle').text("Nueva Variable");
		$('.modalBc').text("Nueva Variable");
		$('.nuevaVariable')[0].reset();
		range.slider('setValue', [10, 90]);
		visual.slider('setValue', 1);
		sonora.slider('setValue', 1);
		correo.slider('setValue', 1);
	});
	$('.btn-guardar').click(function(){
		var inputsVacios = $('.nuevoVariable').find("input").filter(function() {
	            return this.value === "";
	    });
	    var selectsVacios = $('.nuevoVariable').find("select").filter(function() {
	            return this.value === "";
	    });
	 	if(inputsVacios.length==0){
	    	if(selectsVacios.length==0){
	    		if($('.modalTitle').text()==="Nueva Variable"){
		    		var variable = obtenerVariable();
		    		$table.bootstrapTable('append', variable);
	        } else{
		    	var variable = obtenerVariable();
		    	$('#table').bootstrapTable('remove', {field: 'clave', values: [currentRow.clave]});
		    	$table.bootstrapTable('append', variable);
	        }
	        $('.nuevaVariable')[0].reset();
		    $('#modalNuevaVariable').modal('hide');
	       }
	    }
    });
    $('.editarInfo').click(function(){
    	$('#modalInfoVariable').modal('hide');
    	$('.modalTitle').text("Editar Variable");
    	$('.modalBc').text("Editar Variable");
    	$('#nombre').val(currentRow.nombre),
		$('#tipo').val(currentRow.tipo);
		range.slider('setValue', [currentRow.minimo, currentRow.maximo]);
		$('#sucursal').val(currentRow.sucursal);
		$('#granja').val(currentRow.granja);
		$('#area').val(currentRow.area);
		$('#control1min').prop('checked', currentRow.controles.control1min);
		$('#control1max').prop('checked', currentRow.controles.control1max);
		$('#control2min').prop('checked', currentRow.controles.control2min);
		$('#control2max').prop('checked', currentRow.controles.control2max);
		$('#control3min').prop('checked', currentRow.controles.control3min);
		$('#control3max').prop('checked', currentRow.controles.control3max);
		$('#control4min').prop('checked', currentRow.controles.control4min);
		$('#control4max').prop('checked', currentRow.controles.control4max);
		$('#visual').prop('checked', currentRow.visual);
		checkAlarma('#visual', '#visualSlider', currentRow.visualSlider);
		$('#sonora').prop('checked', currentRow.sonora);
		checkAlarma('#sonora', '#sonoraSlider', currentRow.sonoraSlider);
		$('#correo').prop('checked', currentRow.correo);
		checkAlarma('#correo', '#correoSlider', currentRow.correoSlider);		
		$('#modalNuevaVariable').modal('show');
    });
    $("#modalNuevaVariable").on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
    });
        
    $('#visual').click(function(){
    	checkAlarma('#visual', '#visualSlider');
    });
    
    $('#sonora').click(function(){
    	checkAlarma('#sonora', '#sonoraSlider');
    });
    $('#correo').click(function(){
    	checkAlarma('#correo', '#correoSlider');
    });
});