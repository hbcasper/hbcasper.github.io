var usuarios = ['admin'];
var pws = ['admin'];

$(document).ready(function() {

	$('.btn-lg').click(function() {
		$('#usuario').removeClass("input-error");
		$('#password').removeClass("input-error");
		var usuario = $('#usuario').val();
		var pw = $('#password').val();

		if (usuario == usuarios[0]) {
			if (pw == pws[0]) {
				var sessionTimeout = 1; //horas
				var loginDuration = new Date();
				loginDuration.setTime(loginDuration.getTime() + (sessionTimeout * 60 * 60 * 1000));
				document.cookie = "CrewCentreSession=Valid; " + loginDuration.toGMTString() + "; path=/";

				window.location.href = "index.html";
			} else {
				$('#password').addClass("input-error");
			}
		} else {
			$('#usuario').addClass("input-error");
			$('#password').addClass("input-error");
		}
	});
}); 