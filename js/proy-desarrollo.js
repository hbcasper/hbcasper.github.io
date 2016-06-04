
$(document).ready(function() {
	$('input').click(function(){
		var titulo = $(this).parent('div').parent('div').find('label').html();
		var contenido = $(this).val();
		var id = $(this).attr('id');
		$('#comment-titulo').text(titulo);
		$('#comment-texto').text(contenido);
		$('.comentarios').empty();
		$('.comentarios').append("<div class='inserta-comentario'></div>");
		var comentarios = verComentarios();
		$(comentarios).each(function(index, comments){
			var buscarComentarios = true;
			if(comments.id==id){
				$(comments.comments).each(function (index, comentario) { 
				 	$('.inserta-comentario').before("<p>"+comentario.usuario+" a las "+comentario.hora+" dijo: "+comentario.texto+"</p>");
				});
				buscarComentarios = false;
			}
			return buscarComentarios;
		});
		
	});
	$('.btn-comment').click(function(){
		var d = new Date();
		var msg = $('.send-comment').val();
		$('.inserta-comentario').before("<p>Tú comentaste a las "+ d.getHours()+":"+d.getMinutes() +" : "+msg+"</p>");
		$('.send-comment').val("");
	});
});

function verComentarios(){
	return comentarios = [{
		'id':'context-id',
		'comments':[{
				'usuario':'María',
				'hora':'09:35',
				'texto':'El ID debes dejarlo'
			},
			{
				'usuario':'Juan',
				'hora':'09:36',
				'texto':'María tiene razón'
			}]
		},
		{
		'id':'context-nombre',
		'comments':[{
				'usuario':'María',
				'hora':'14:20',
				'texto':'El nombre no me convence'
			},
			{
				'usuario':'María',
				'hora':'14:22',
				'texto':'Te sugiero un nombre más llamativo'
			},
			{
				'usuario':'Juan',
				'hora':'18:53',
				'texto':'A mí me parece bien el nombre'
			}]
		}
	];
}