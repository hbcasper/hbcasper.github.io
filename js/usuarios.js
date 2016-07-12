var imagen;

function obtenerUsuario(){
	return usuario = [{
		"nombre":$('#nombre').val(),
		"empresa":"EP01",
    	"aPaterno":$('#aPaterno').val(),
    	"aMaterno":$('#aMaterno').val(),
    	"usuario":$('#usuario').val(),
    	"correo":$('#correo').val(),
    	"direccion":$('#direccion').val(),
    	"telefono":$('#telefono').val(),
    	"celular":$('#celular').val(),
    	"sucursal":$('#sucursal').val(),
    	"area":$('#area').val(),
    	"estado":$("input[name='estadoRadio']:checked").val(),
    	"perfil":$("input[name='perfilRadio']:checked").val(),
		"fecha":fechaActual,
		"imagen":imagen,
		}];
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagen').attr('src', e.target.result);
            imagen = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function() {
	$('.btn-nuevo').click(function(){
		$('.modalTitle').text("Nuevo Usuario");
		$('.modalBc').text("Nuevo Usuario");
	});
	$('.btn-guardar').click(function(){
		var inputsVacios = $('.nuevoUsuario').find("input").filter(function() {
	            return this.value === "";
	    });
	    var selectsVacios = $('.nuevoUsuario').find("select").filter(function() {
	            return this.value === "";
	    });
	 	if(inputsVacios.length==0){
	    	if(selectsVacios.length==0){
	    		if($('.modalTitle').text()==="Nuevo Usuario"){
		    		var usuario = obtenerUsuario();
		    		$table.bootstrapTable('append', usuario);
	        } else{
		    	var usuario = obtenerUsuario();
		    	$('#table').bootstrapTable('remove', {field: 'nombre', values: [currentRow.nombre]});
		    	$table.bootstrapTable('append', usuario);
	        }
	        $('.nuevoUsuario')[0].reset();
		    $('#modalNuevoUsuario').modal('hide');
	       }
	    }
    });
    $('.editarInfo').click(function(){
    	$('#modalInfoUsuario').modal('hide');
    	$('.modalTitle').text("Editar Usuario");
    	$('.modalBc').text("Editar Usuario");
    	$('#nombre').val(currentRow.nombre);
		$('#aPaterno').val(currentRow.aPaterno);
		$('#aMaterno').val(currentRow.aMaterno);
		$('#usuario').val(currentRow.usuario);
		$('#correo').val(currentRow.correo);
		$('#direccion').val(currentRow.direccion);
		$('#telefono').val(currentRow.telefono);
		$('#celular').val(currentRow.celular);
		$('#sucursal').val(currentRow.sucursal);
		$('#area').val(currentRow.area);
		$('#imagen').attr('src',currentRow.imagen);
		$('input:radio[name=estadoRadio]').filter('[value='+currentRow.estado+']').prop('checked', true);
		$('input:radio[name=perfilRadio]').filter('[value='+currentRow.perfil+']').prop('checked', true);
		$('#modalNuevoUsuario').modal('show');
    });
    $("#modalNuevoUsuario").on('shown.bs.modal', function () {
            $('body').addClass('modal-open');
    });
    $("#imagenUsuario").change(function(){
    	readURL(this);
	});
});

window.editarEvents = {
    'click .btn-editar': function (e, value, row, index) {
        $('.modalTitle').text("Editar Usuario");
    	$('.modalBc').text("Editar Usuario");
		$('#nombre').val(row.nombre);
		$('#aPaterno').val(row.aPaterno);
		$('#aMaterno').val(row.aMaterno);
		$('#usuario').val(row.usuario);
		$('#correo').val(row.correo);
		$('#direccion').val(row.direccion);
		$('#telefono').val(row.telefono);
		$('#celular').val(row.celular);
		$('#sucursal').val(row.sucursal);
		$('#area').val(row.area);
		$('#imagen').attr('src',row.imagen);
		$('input:radio[name=estadoRadio]').filter('[value='+row.estado+']').prop('checked', true);
		$('input:radio[name=perfilRadio]').filter('[value='+row.perfil+']').prop('checked', true);
		$('#modalNuevoUsuario').modal('show');
		currentRow = row;
    }
};

window.masInfoEvents = {
    'click .btn-masInfo': function (e, value, row, index) {
		$('#nombreInfo').text(row.nombre);
		$('#aPaternoInfo').text(row.aPaterno);
		$('#aMaternoInfo').text(row.aMaterno);
		$('#usuarioInfo').text(row.usuario);
		$('#correoInfo').text(row.correo);
		$('#direccionInfo').text(row.direccion);
		$('#telefonoInfo').text(row.telefono);
		$('#celularInfo').text(row.celular);
		$('#sucursalInfo').text(row.sucursal);
		$('#areaInfo').text(row.area);
		$('#imagenInfo').attr('src',row.imagen);
		$('input:radio[name=estadoRadioInfo]').filter('[value='+row.estado+']').prop('checked', true);
		$('input:radio[name=perfilRadioInfo]').filter('[value='+row.perfil+']').prop('checked', true);
		$('#modalInfoUsuario').modal('show');
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