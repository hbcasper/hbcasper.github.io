if (document.cookie.indexOf("CrewCentreSession=Valid") == -1) {
  location.href = "login.html";
}

$(document).ready(function() {
	$.ajaxSetup({
	  cache: true
	});
	
	$('.header').find('a').click(function(){
		var opcion = $(this).attr("class");
		$(".main-content").load("blank.html");
		$('.header').find('.active').removeClass('active');
		$('.'+opcion).parent().addClass("active");
		$('.menu-cvu').hide(250);
		$('.menu-proyectos').hide(250);
		$('.menu-organizaciones').hide(250);
		$('.menu-propuestas').hide(250);
		$('.menu-perfil').hide(250);
		$('.menu-consulta').hide(250);
		$('.menu-ajustes').hide(250);
		$('.menu-'+opcion).show(250);
		
	});
	
	$('.menu').find('a').click(function(){
		var opcion = $(this).attr("class");
		$(".main-content").load(opcion+".html");
		$('.menu').find('.active').removeClass('active');
		$('.'+opcion).parent().addClass("active");
		$.getScript("js/"+opcion+".js");
	});
});