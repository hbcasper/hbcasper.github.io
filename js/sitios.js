function obtenerSitio(){
	return sitio = [{
		"nombre":$('#nombre').val(),
		"centroProd":$('#centroProd').val(),
		"empresa":"EP01",
    	"direccion":"calle 8 num 67",
		"fecha":fechaActual
		}];
}

$(document).ready(function() {
	$('.btn-nuevo').click(function(){
		$('.modalTitle').text("Nuevo Sitio");
		$('.modalBc').text("Nuevo Sitio");
	});
	$('.btn-guardar').click(function(){
		var inputsVacios = $('.nuevoSitio').find("input").filter(function() {
	            return this.value === "";
	    });
	    var selectsVacios = $('.nuevoSitio').find("select").filter(function() {
	            return this.value === "";
	    });
	 	if(inputsVacios.length==0){
	    	if(selectsVacios.length==0){
	    		if($('.modalTitle').text()==="Nuevo Sitio"){
		    		var sitio = obtenerSitio();
		    		$table.bootstrapTable('append', sitio);
	        } else{
		    	var sitio = obtenerSitio();
		    	$('#table').bootstrapTable('remove', {field: 'nombre', values: [currentRow.nombre]});
		    	$table.bootstrapTable('append', sitio);
	        }
	        $('.nuevoSitio')[0].reset();
		    $('#modalNuevoSitio').modal('hide');
	       }
	    }
    });
    $('.editarInfo').click(function(){
    	$('#modalInfoSitio').modal('hide');
    	$('.modalTitle').text("Editar Sitio");
    	$('.modalBc').text("Editar Sitio");
    	$('#nombre').val(currentRow.nombre);
		$('#centroProd').val(currentRow.centroProd);
		$('#modalNuevoSitio').modal('show');
    });
    $("#modalNuevoSitio").on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
    		resizeMap();
    });
    $("#modalInfoSitio").on('shown.bs.modal', function () {
            resizeMap();
    });
	
});

window.editarEvents = {
    'click .btn-editar': function (e, value, row, index) {
        $('.modalTitle').text("Editar Sitio");
    	$('.modalBc').text("Editar Sitio");
		$('#nombre').val(row.nombre);
		$('#centroProd').val(row.centroProd);
		$('#modalNuevoSitio').modal('show');
		currentRow = row;
    }
};

window.masInfoEvents = {
    'click .btn-masInfo': function (e, value, row, index) {
		$('#nombreInfo').text(row.nombre);
		$('#centroProdInfo').text(row.centroProd);
        $('#modalInfoSitio').modal('show');
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