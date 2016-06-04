var registros = [];
var rid;

$(document).ready(function() {
	$('.guardar').click(function() {
		$('.guardar-registro').find("input").removeClass("input-error");
		$('.guardar-registro').find("select").removeClass("input-error");
		
		var inputsVacios = $('.guardar-registro').find("input").filter(function() {
			return this.value === "";
		});
		var selectsVacios = $('.guardar-registro').find("select").filter(function() {
			return this.value === "";
		});

		if (inputsVacios.length == 0) {
			if (selectsVacios.length == 0) {
				
				var registro = {
					'rid':registros.length,
					'id':$('#id').val(),
					'isbn':$('#isbn').val(),
					'titulo':$('#titulo').val(),
					'editorial':$('#editorial').val(),
					'edicion':$('#edicion').val(),
					'fecha':$('#fecha').val(),
					'volumen':$('#volumen').val(),
					'paginas':$('#paginas').val(),
					'tiraje':$('#tiraje').val(),
					'idioma':$('#idioma').val(),
					'autor':$('#autor').val(),
					'coautor':$('#coautor').val(),
					'area':$('#area').val(),
					'disciplina':$('#disciplina').val(),
					'subdisciplina':$('#subdisciplina').val()
				};
				
				var nuevo = "<hr><p id='r"+registro.rid+"'><strong>Titulo: " + registro.titulo + "</strong><br>Id: " + registro.id 
					+ "<br>ISBN: " + registro.isbn + "<br>Editorial: " + registro.editorial + "<br>Edición: " + registro.edicion + "</p>";
				
				var btnEditar = $('<button/>',
				{
					text:'Editar',
					id:registros.length,
					type:'button',
					'class':'btn btn-primary editar',
					click: function () { 
						rid = this.id;
						$('#id').val(registros[rid].id);
						$('#isbn').val(registros[rid].isbn);
						$('#titulo').val(registros[rid].titulo);
						$('#editorial').val(registros[rid].editorial);
						$('#edicion').val(registros[rid].edicion);
						$('#fecha').val(registros[rid].fecha);
						$('#volumen').val(registros[rid].volumen);
						$('#paginas').val(registros[rid].paginas);
						$('#tiraje').val(registros[rid].tiraje);
						$('#idioma').val(registros[rid].idioma);
						$('#autor').val(registros[rid].autor);
						$('#coautor').val(registros[rid].coautor);
						$('#area').val(registros[rid].area);
						$('#disciplina').val(registros[rid].disciplina);
						$('#subdisciplina').val(registros[rid].subdisciplina);
					}
				});
				
				registros.push(registro);
				
				$('.nuevo-registro').before(nuevo);
				$('.nuevo-registro').before(btnEditar);
				$('.guardar-registro')[0].reset();
			} else {
				selectsVacios.addClass("input-error");
			} 
		} else {
			inputsVacios.addClass("input-error");
			selectsVacios.addClass("input-error");
		}
		
		$('body').animate({ scrollTop: 0 }, "slow");
	});

});
