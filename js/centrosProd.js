function obtenerCP(){
	return cp = [{
		"nombre":$('#nombre').val(),
		"sucursal":$('#sucursal').val(),
		"empresa":"EP01",
    	"direccion":"calle 8 num 67",
		"fecha":fechaActual
		}];
}

$(document).ready(function() {
	$('.btn-nuevo').click(function(){
		$('.modalTitle').text("Nuevo Centro de Producción");
		$('.modalBc').text("Nuevo Centro de Producción");
	});
	$('.btn-guardar').click(function(){
		var inputsVacios = $('.nuevoCP').find("input").filter(function() {
	            return this.value === "";
	    });
	    var selectsVacios = $('.nuevoCP').find("select").filter(function() {
	            return this.value === "";
	    });
	 	if(inputsVacios.length==0){
	    	if(selectsVacios.length==0){
	    		if($('.modalTitle').text()==="Nuevo Centro de Producción"){
		    		var centroProd = obtenerCP();
		    		$table.bootstrapTable('append', centroProd);
	        } else{
		    	var centroProd = obtenerCP();
		    	$('#table').bootstrapTable('remove', {field: 'nombre', values: [currentRow.nombre]});
		    	$table.bootstrapTable('append', centroProd);
	        }
	        $('.nuevoCP')[0].reset();
		    $('#modalNuevoCP').modal('hide');
	       }
	    }
    });
    $('.editarInfo').click(function(){
    	$('#modalInfoCP').modal('hide');
    	$('.modalTitle').text("Editar Centro de Producción");
    	$('.modalBc').text("Editar Centro de Producción");
    	$('#nombre').val(currentRow.nombre);
		$('#sucursal').val(currentRow.sucursal);
		$('#modalNuevoCP').modal('show');
    });
    $("#modalNuevoCP").on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
    		resizeMap();
    });
    $("#modalInfoCP").on('shown.bs.modal', function () {
            resizeMap();
    });
});

window.editarEvents = {
    'click .btn-editar': function (e, value, row, index) {
        $('.modalTitle').text("Editar Centro de Producción");
    	$('.modalBc').text("Editar Centro de Producción");
		$('#nombre').val(row.nombre);
		$('#sucursal').val(row.sucursal);
		$('#modalNuevoCP').modal('show');
		currentRow = row;
    }
};

window.masInfoEvents = {
    'click .btn-masInfo': function (e, value, row, index) {
		$('#nombreInfo').text(row.nombre);
		$('#sucursalInfo').text(row.sucursal);
        $('#modalInfoCP').modal('show');
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