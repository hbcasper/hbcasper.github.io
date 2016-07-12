var $table = $('#table');
var currentRow;

//fecha actual
var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();

var fechaActual = d.getFullYear() + '-' +
    ((''+month).length<2 ? '0' : '') + month + '-' +
    ((''+day).length<2 ? '0' : '') + day;

var horaActual = ''+((''+hour).length<2 ? '0' : '') + hour + ':' +
	((''+min).length<2 ? '0' : '') + min + ':' +
	((''+sec).length<2 ? '0' : '') + sec;

$("header").load("header.html");
$("#menu-nav").load("menu-nav.html");
$("#chat").load("chat.html");
$("#avisos").load("avisos.html");
//$("footer").load("footer.html");

function editarFormatter(value, row, index) {
    return [
        '<button type="button" class="btn btn-editar btn-xs">'+
        '<span class="glyphicon glyphicon-pencil icon-pencil" aria-hidden="true"></span> Editar</button>'
    ];
}

function masInfoFormatter(value, row, index) {
    return [
        '<button type="button" class="btn btn-masInfo btn-xs">'+
        '<span class="glyphicon glyphicon-plus-sign icon-plus" aria-hidden="true"></span> Más</button>'
    ];
}

function elimFormatter(value, row, index) {
    return [
        '<button type="button" class="btn btn-eliminar btn-xs">'+
        '<span class="glyphicon glyphicon-remove-sign icon-remove" aria-hidden="true"></span> Eliminar</button>'
    ];
}

$(document).ready(function() {
	$('.btn-nuevo').click(function(){
		$('form')[0].reset();
		if($('#imagen').attr('src')!=undefined){
			$('#imagen').attr('src', 'http://dev.alurosu.com/bobo/chat/data/img/admin/default.png');
		}
	});
	$('.btn-cancelar').click(function(e){
		if(!confirm('¿Seguro que quieres cancelar? Perderás los datos no guardados')){
    		e.stopPropagation();
    	}
	});
});