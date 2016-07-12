function obtenerNave(){
	return nave = [{
		"nombre":$('#nombre').val(),
		"sitio":$('#sitio').val(),
		"empresa":"EP01",
    	"direccion":"calle 8 num 67",
		"fecha":fechaActual
		}];
}

$(document).ready(function() {
	$('.btn-nuevo').click(function(){
		$('.modalTitle').text("Nueva Nave");
		$('.modalBc').text("Nueva Nave");
	});
	$('.btn-guardar').click(function(){
		var inputsVacios = $('.nuevaNave').find("input").filter(function() {
	            return this.value === "";
	    });
	    var selectsVacios = $('.nuevaNave').find("select").filter(function() {
	            return this.value === "";
	    });
	 	if(inputsVacios.length==0){
	    	if(selectsVacios.length==0){
	    		if($('.modalTitle').text()==="Nueva Nave"){
		    		var nave = obtenerNave();
		    		$table.bootstrapTable('append', nave);
	        } else{
		    	var nave = obtenerNave();
		    	$('#table').bootstrapTable('remove', {field: 'nombre', values: [currentRow.nombre]});
		    	$table.bootstrapTable('append', nave);
	        }
	        $('.nuevaNave')[0].reset();
		    $('#modalNuevaNave').modal('hide');
	       }
	    }
    });
    $('.editarInfo').click(function(){
    	$('#modalInfoNave').modal('hide');
    	$('.modalTitle').text("Editar Nave");
    	$('.modalBc').text("Editar Nave");
    	$('#nombre').val(currentRow.nombre);
		$('#sitio').val(currentRow.sitio);
		$('#modalNuevaNave').modal('show');
    });
    $("#modalNuevaNave").on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
    		resizeMap();
    });
    $("#modalInfoNave").on('shown.bs.modal', function () {
            resizeMap();
    });
	
});

window.editarEvents = {
    'click .btn-editar': function (e, value, row, index) {
        $('.modalTitle').text("Editar Nave");
    	$('.modalBc').text("Editar Nave");
		$('#nombre').val(row.nombre);
		$('#sitio').val(row.sitio);
		$('#modalNuevaNave').modal('show');
		currentRow = row;
    }
};

window.masInfoEvents = {
    'click .btn-masInfo': function (e, value, row, index) {
		$('#nombreInfo').text(row.nombre);
		$('#sitioInfo').text(row.sitio);
        $('#modalInfoNave').modal('show');
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