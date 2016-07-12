$(document).ready(function(){
	$('.btn-mensaje').click(function(){
		var msg = $('.send-message').val();
		$('.fin-messages').before("<p><small class='pull-right time'>"+((''+hour).length<2 ? '0' : '')+hour+":"+
			((''+min).length<2 ? '0' : '')+min+"</small>"+msg+"</p>");
		$(".messages").animate({ scrollTop: $(".messages")[0].scrollHeight}, 1000);
		$('.send-message').val("");
	});
	 $('.send-message').keyup(function(e){
	 	 if(e.which == 13){
            $('.btn-mensaje').click();
        }
	 });
	 
	 $('.btn-contacto').click(function(){
	 	if($("#chat-wrapper").hasClass("toggled")){
	        toggleChat();
	        $("#body-contacts").toggleClass("contacts-collapsed");
	 	}
	 	$('.img-contacto-chat').attr('src', $(this).find('img').attr('src'));
		$('.nombre-chat').text($(this).find('h5').text());
		$('#navChat').tab('show');
	 });
	 
	 $("#chat-toggle").click(function(e) {
        toggleChat();
        $("#body-contacts").toggleClass("contacts-collapsed");
        $('#chat-tabs a[href="#tabContactos"]').tab('show');
    });
});

function toggleChat(){
	$("#chat-wrapper").toggleClass("toggled");
    $("#main-content").toggleClass("toggled-right");
    $(".chat-collapse").toggle();
}
