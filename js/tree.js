$.fn.extend({
    treed: function (o) {
      var openedClass = 'glyphicon-minus-sign';
      var closedClass = 'glyphicon-plus-sign';
      
      if (typeof o != 'undefined'){
        if (typeof o.openedClass != 'undefined'){
        openedClass = o.openedClass;
        }
        if (typeof o.closedClass != 'undefined'){
        closedClass = o.closedClass;
        }
      };
      
        //initialize each of the top levels
        var tree = $(this);
        tree.find('li').has("ul").each(function () {
            var branch = $(this); //li with children ul
            branch.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");
            branch.addClass('branch');
            branch.on('click', function (e) {
                if (this == e.target) {
                    var icon = $(this).children('i:first');
                    icon.toggleClass(openedClass + " " + closedClass);
                    $(this).children().children().toggle();
                }
            });
            branch.children().children().toggle();
        });
        //fire event from the dynamically added icon
      tree.find('.branch .indicator').each(function(){
        $(this).on('click', function () {
            $(this).closest('li').click();
        });
      });
        //fire event if the li contains an anchor instead of text
        tree.find('a').each(function () {
            $(this).on('click', function (e) {
                //$(this).closest('li').click();
                //agregar aqui filtro
            	var ubicacion = $(this).closest('a').find('p');
            	var tipo = '';
            	$.each(ubicacion.attr("class").split(' '), function(index, item) {
    				if (item != 'hidden') {
        				tipo = item.toString();
    				}
    			});
    			$table = $('#table');
    			if(tipo==='sucursal')
            		$table.bootstrapTable('filterBy', {'sucursal': ubicacion.text().trim()});
            	else if(tipo==='centroProd')
            		$table.bootstrapTable('filterBy', {'centroProd': ubicacion.text().trim()});
            	else if(tipo==='sitio')
            		$table.bootstrapTable('filterBy', {'sitio': ubicacion.text().trim()});
            	else if(tipo==='nave')
            		$table.bootstrapTable('filterBy', {'nave': ubicacion.text().trim()});
            	else if(tipo==='area')
            		$table.bootstrapTable('filterBy', {'area': ubicacion.text().trim()});
                e.preventDefault();
            });
        });
        //fire event to open branch if the li contains a button instead of text
        tree.find('.branch>button').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
    }
});

$('#tree1').treed();;