var registros = [];
var rid;

$(document).ready(function() {
	$('.nueva-prop').click(function(){
		$('.propuesta-detalle').hide(250);
		$('.guardar-registro')[0].reset();
		$('.propuesta-nueva').show(250);
	});
	
	$('.ver-prop').click(function(){
		$('#titulo-detalle').text("Propuesta 1");
		$('#dirigido-detalle').text("Alfonso Reyes");
		$('#salario-detalle').text("$15,000");
		$('#responsabilidades-detalle').html("<li>Responsabilidad 1</li><li>Responsabilidad 1</li><li>Responsabilidad 1</li>");
		$('.propuesta-nueva').hide(250);
		$('.propuesta-detalle').show(250);
	});
	
	$('.enviar').click(function() {
		$('.guardar-registro').find("input").removeClass("input-error");
		var inputsVacios = $('.guardar-registro').find("input").filter(function() {
			return this.value === "";
		});
		if (inputsVacios.length == 0) {
			var siguiente = registros.length+1;
			var registro = {
				'rid':registros.length,
				'titulo':"Propuesta "+siguiente,
				'dirigido':$('#dirigido').val(),
				'salario':$('#salario').val(),
				'responsabilidades':$('#responsabilidades').val()
			};
			
			var nuevo = "<div id='r"+registro.rid+"'><h3>"+ registro.titulo +"</h3></div>";
			
			var btnVer = $('<button/>',
				{
					text:'Ver',
					id:registros.length,
					type:'button',
					'class':'btn btn-primary ver-prop pull-right',
					click: function () {
						rid = this.id;
						$('#titulo-detalle').text(registros[rid].titulo);
						$('#dirigido-detalle').text(registros[rid].dirigido);
						$('#salario-detalle').text(registros[rid].salario);
						$('#responsabilidades-detalle').text(registros[rid].responsabilidades);
						$('.propuesta-nueva').hide(250);
						$('.propuesta-detalle').show(250);
					} 
				});
				
			registros.push(registro);
			
			$('.propuestas-enviadas').before(nuevo);
			$('.propuestas-enviadas').before(btnVer);
			$('.propuestas-enviadas').before('<br><hr>');
			$('.guardar-registro')[0].reset();
		} else {
			inputsVacios.addClass("input-error");
		}
		
		$('body').animate({ scrollTop: 0 }, "slow");
	});
});