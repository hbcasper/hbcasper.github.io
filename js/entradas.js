function obtenerEntrada(){
	return entrada = [{
		"concepto":$('#concepto').val(),
		"almacen":$('#almacen').val(),
		"proovedor":$('#proovedor').val(),
		"fecha":$('#fechaEntrada').val(),
		"clave":$('#clave').val(),
		"producto":$('#producto').val(),
		"nombreProd":$('#nombreProd').val(),
		"unidades":$('#unidades').val(),
		"unMed":$('#unMed').val(),
		"costo":$('#costo').val(),
		"total":$('#total').val(),
		"descripcion":$('#descripcion').val(),
		"naturaleza":"Entrada"
		}];
}

$(document).ready(function(){
	$('.btn-nuevo').click(function(){
		$('.modalTitle').text("Nueva Entrada");
		$('.modalBc').text("Nueva Entrada");
	});
	$('.btn-guardar').click(function(){
		var inputsVacios = $('.nuevaEntrada').find("input").filter(function() {
	            return this.value === "";
	    });
	    var selectsVacios = $('.nuevaEntrada').find("select").filter(function() {
	            return this.value === "";
	    });
	 	if(inputsVacios.length==0){
	    	if(selectsVacios.length==0){
	    		if($('.modalTitle').text()==="Nueva Entrada"){
		    		console.log('guardado');
		    		var entrada = obtenerEntrada();
		    		$table.bootstrapTable('append', entrada);
	        } else{
	        	console.log('editado');
		    	var entrada = obtenerEntrada();
		    	$('#table').bootstrapTable('remove', {field: 'clave', values: [currentRow.clave]});
		    	$table.bootstrapTable('append', entrada);
		    	 //$table.bootstrapTable('updateRow', {index: currentIndex, row: entrada});
	        }
	        $('.nuevaEntrada')[0].reset();
		    $('#modalNuevaEntrada').modal('hide');
	       }
	    }
    });
    $('.editarInfo').click(function(){
    	$('#modalInfoEntrada').modal('hide');
    	$('.modalTitle').text("Editar Entrada");
    	$('.modalBc').text("Editar Entrada");
		$('#concepto').val(currentRow.concepto);
		$('#almacen').val(currentRow.almacen);
		$('#proovedor').val(currentRow.proovedor);
		$('#fechaEntrada').val(currentRow.fecha);
		$('#clave').val(currentRow.clave);
		$('#producto').val(currentRow.producto);
		$('#nombreProd').val(currentRow.nombreProd);
		$('#unidades').val(currentRow.unidades);
		$('#unMed').val(currentRow.unMed);
		$('#costo').val(currentRow.costo);
		$('#total').val(currentRow.total);
		$('#descripcion').val(currentRow.descripcion);
		$('#modalNuevaEntrada').modal('show');
		//$('body').addClass('modal-open');
    });
    $("#modalNuevaEntrada").on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
    });
});

window.editarEvents = {
    'click .btn-editar': function (e, value, row, index) {
        $('.modalTitle').text("Editar Entrada");
		$('.modalBc').text("Editar Entrada");
		$('#concepto').val(row.concepto);
		$('#almacen').val(row.almacen);
		$('#proovedor').val(row.proovedor);
		$('#fechaEntrada').val(row.fecha);
		$('#clave').val(row.clave);
		$('#producto').val(row.producto);
		$('#nombreProd').val(row.nombreProd);
		$('#unidades').val(row.unidades);
		$('#unMed').val(row.unMed);
		$('#costo').val(row.costo);
		$('#total').val(row.total);
		$('#descripcion').val(row.descripcion);
		$('#modalNuevaEntrada').modal('show');
		currentRow = row;
    }
};

window.masInfoEvents = {
    'click .btn-masInfo': function (e, value, row, index) {
		$('#conceptoInfo').text(row.concepto);
		$('#almacenInfo').text(row.almacen);
		$('#proovedorInfo').text(row.proovedor);
		$('#fechaInfo').text(row.fecha);
		$('#claveInfo').text(row.clave);
		$('#productoInfo').text(row.producto);
		$('#nombreProdInfo').text(row.nombreProd);
		$('#unidadesInfo').text(row.unidades);
		$('#unMedInfo').text(row.unMed);
		$('#costoInfo').text(row.costo);
		$('#totalInfo').text(row.total);
		$('#descripcionInfo').text(row.descripcion);
        $('#modalInfoEntrada').modal('show');
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