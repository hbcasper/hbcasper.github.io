function obtenerArea(){
	return area = [{
		"nombre":$('#nombre').val(),
		"nave":$('#nave').val(),
		"empresa":"EP01",
    	"direccion":"calle 8 num 67",
		"fecha":fechaActual
		}];
}

$(document).ready(function() {
	$('.btn-nuevo').click(function(){
		$('.modalTitle').text("Nueva Área");
		$('.modalBc').text("Nueva Área");
	});
	$('.btn-guardar').click(function(){
		var inputsVacios = $('.nuevaArea').find("input").filter(function() {
	            return this.value === "";
	    });
	    var selectsVacios = $('.nuevaArea').find("select").filter(function() {
	            return this.value === "";
	    });
	 	if(inputsVacios.length==0){
	    	if(selectsVacios.length==0){
	    		if($('.modalTitle').text()==="Nueva Área"){
		    		var area = obtenerArea();
		    		$table.bootstrapTable('append', area);
	        } else{
		    	var area = obtenerArea();
		    	$('#table').bootstrapTable('remove', {field: 'nombre', values: [currentRow.nombre]});
		    	$table.bootstrapTable('append', area);
	        }
	        $('.nuevaArea')[0].reset();
		    $('#modalNuevaArea').modal('hide');
	       }
	    }
    });
    $('.editarInfo').click(function(){
    	$('#modalInfoArea').modal('hide');
    	$('.modalTitle').text("Editar Área");
    	$('.modalBc').text("Editar Área");
    	$('#nombre').val(currentRow.nombre);
		$('#nave').val(currentRow.nave);
		$('#modalNuevaArea').modal('show');
    });
    $("#modalNuevaArea").on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
            resizeMap();
    });
    $("#modalInfoArea").on('shown.bs.modal', function () {
            resizeMap();
    });
});

window.editarEvents = {
    'click .btn-editar': function (e, value, row, index) {
        $('.modalTitle').text("Editar Área");
    	$('.modalBc').text("Editar Área");
		$('#nombre').val(row.nombre);
		$('#nave').val(row.nave);
		$('#modalNuevaArea').modal('show');
		currentRow = row;
    }
};

window.masInfoEvents = {
    'click .btn-masInfo': function (e, value, row, index) {
		$('#nombreInfo').text(row.nombre);
		$('#naveInfo').text(row.nave);
        $('#modalInfoArea').modal('show');
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