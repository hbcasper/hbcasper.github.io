var imagen;

google.maps.event.addDomListener(window, 'load', initialize(0));

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
	$('.btn-guardar').click(function(){
		var inputsVacios = $('.editEmpresa').find("input").filter(function() {
	            return this.value === "";
	    });
	    var selectsVacios = $('.editEmpresa').find("select").filter(function() {
	            return this.value === "";
	    });
	 	if(inputsVacios.length==0){
	    	if(selectsVacios.length==0){
	    		guardarEmpresa();
	        $('.editEmpresa')[0].reset();
		    $('#modalEmpresa').modal('hide');
	       }
	    }
    });
    $('.editarInfo').click(function(){
    	$('#nombre').val($('#nombreInfo').text());
		$('#sector').val($('#sectorInfo').text());
		$('#razon').val($('#razonInfo').text());
		$('#rfc').val($('#rfcInfo').text());
		$('#pais').val($('#paisInfo').text());
		$('#estado').val($('#estadoInfo').text());
		$('#ciudad').val($('#ciudadInfo').text());
		$('#localidad').val($('#localidadInfo').text());
		$('#direccion').val($('#direccionInfo').text());
		$('#CP').val($('#CPInfo').text());
		$('#web').val($('#webInfo').text());
		$('#telefono').val($('#telefonoInfo').text());
		$('#nombreC').val($('#nombreCInfo').text());
		$('#aPaternoC').val($('#aPaternoCInfo').text());
		$('#aMaternoC').val($('#aMaternoCInfo').text());
		$('#direccionC').val($('#direccionCInfo').text());
		$('#correoC').val($('#correoCInfo').text());
		$('#telefonoC').val($('#telefonoCInfo').text());
		$('#celularC').val($('#celularCInfo').text());
		$('#imagen').attr('src',$('#imagenInfo').attr('src'));
    });
    
    $("#imagenLogotipo").change(function(){
    	readURL(this);
	});
	
	$("#modalEmpresa").on('shown.bs.modal', function () {
		google.maps.event.addDomListener(window, 'load', initialize(1));
		google.maps.event.addDomListener(window, "resize", resizingMap());
    });
    $('#modalEmpresa').on('hidden.bs.modal', function () {
    	google.maps.event.addDomListener(window, 'load', initialize(0));
		google.maps.event.addDomListener(window, "resize", resizingMap());
	});
});


function guardarEmpresa(){
	$('#nombreInfo').text($('#nombre').val());
	$('#sectorInfo').text($('#sector').val());
	$('#razonInfo').text($('#razon').val());
	$('#rfcInfo').text($('#rfc').val());
	$('#paisInfo').text($('#pais').val());
	$('#estadoInfo').text($('#estado').val());
	$('#ciudadInfo').text($('#ciudad').val());
	$('#localidadInfo').text($('#localidad').val());
	$('#direccionInfo').text($('#direccion').val());
	$('#CPInfo').text($('#CP').val());
	$('#webInfo').text($('#web').val());
	$('#telefonoInfo').text($('#telefono').val());
	$('#nombreCInfo').text($('#nombreC').val());
	$('#aPaternoCInfo').text($('#aPaternoC').val());
	$('#aMaternoCInfo').text($('#aMaternoC').val());
	$('#direccionCInfo').text($('#direccionC').val());
	$('#correoCInfo').text($('#correoC').val());
	$('#telefonoCInfo').text($('#telefonoC').val());
	$('#celularCInfo').text($('#celularC').val());
	$('#imagenInfo').attr('src', imagen);
}