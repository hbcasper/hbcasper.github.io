var toggle = true;
var id1, id2;
$(function(){
	var url = this.location.pathname;
	url = url.substr(url.lastIndexOf('/') + 1);
	$('a[href="' + url + '"]').parents('li').addClass('active');
	id1 = $($('.sidebar-nav').find('.active')[0]).attr('id');
	if($('.sidebar-nav').find('.active').length>2)
		id2 = $($('.sidebar-nav').find('.active')[1]).attr('id');
});

$(document).ready(function(){
	    
	//menu inventario
	$('#mInv').click(function(){
		if(!$("#wrapper").hasClass("toggled")){
			$(".togInv").toggle(250);
			$(".togMC").hide(250);
			$(".togAdm").hide(250);
			hideMenus();
		}
	});
	$('#mMov').click(function(e){
		e.stopPropagation();
		$("#menuMov").toggle(250);
		$("#menuCat").hide(250);
	});
	$('#mCat').click(function(e){
		e.stopPropagation();
		$("#menuCat").toggle(250);
		$("#menuMov").hide(250);
	});
	
	//menu produccion
	$('#mProd').click(function(){
		if(!$("#wrapper").hasClass("toggled")){
			$(".togInv").hide(250);
			$(".togMC").hide(250);
			$(".togAdm").hide(250);
			hideMenus();
		}
	});
	
	//menu MC
	$('#mMC').click(function(){
		if(!$("#wrapper").hasClass("toggled")){
			$(".togMC").toggle(250);
			$(".togInv").hide(250);			
			$(".togAdm").hide(250);
			hideMenus();
		}
	});
	
	
	//menu Proov
	$('#mProv').click(function(){
		if(!$("#wrapper").hasClass("toggled")){
			$(".togInv").hide(250);
			$(".togMC").hide(250);
			$(".togAdm").hide(250);
			hideMenus();
		}
	});
	
	//menu Adm
	$('#mAdm').click(function(){
		if(!$("#wrapper").hasClass("toggled")){
			$(".togInv").hide(250);
			$(".togMC").hide(250);
			$(".togAdm").toggle(250);
			hideMenus();
		}
	});
	$('#mEst').click(function(e){
		e.stopPropagation();
		$("#menuEst").toggle(250);
		$("#menuUsr").hide(250);
		$("#menuAjs").hide(250);
		$("#menuSadm").hide(250);
	});
	$('#mUsr').click(function(e){
		e.stopPropagation();
		$("#menuEst").hide(250);
		$("#menuUsr").toggle(250);
		$("#menuAjs").hide(250);
		$("#menuSadm").hide(250);
	});
	$('#mAjs').click(function(e){
		e.stopPropagation();
		$("#menuEst").hide(250);
		$("#menuUsr").hide(250);
		$("#menuAjs").toggle(250);
		$("#menuSadm").hide(250);
	});
	$('#mSadm').click(function(e){
		e.stopPropagation();
		$("#menuEst").hide(250);
		$("#menuUsr").hide(250);
		$("#menuAjs").hide(250);
		$("#menuSadm").toggle(250);
	});
	
	//collapse
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $("#menu-nav").toggleClass("toggled");
        $("#main-content").toggleClass("toggled-left");
        $('#menu ul').hide();
        $('.menu-texto').toggle();
        hideAll();
    });
	
	$('#'+id1).click();
	if(id2) 
		$('#'+id2).click();
		
	$(".togMC").click(function(e){
		e.stopPropagation();
	});
	
	$("#opcUbic").click(function(e){
		$("#ubic").toggle();
	});
});

function hideMenus(){
	$("#menuMov").hide(250);
	$("#menuCat").hide(250);
	$("#menuEst").hide(250);
	$("#menuUsr").hide(250);
	$("#menuAjs").hide(250);
	$("#menuSadm").hide(250);
}

function hideAll(){
	$(".togInv").hide(250);
	$(".togMC").hide(250);
	$(".togAdm").hide(250);
	hideMenus();
}
