$(function () {
    var datos = [
    	{
    		"nombre":"Pollitos felices",
    		"rfc":"JISU982342",
    		"direccion":"calle 18 num 670",
    		"tipo":"completa",
    		"fecha":fechaActual,
    		"clave":"EP01",
    		"modulos":{
    					"administracion":true,
    					"monitoreo":true,
    					"inventarios":true,
    					"proovedores":true
    				},
    		"sucursales":"4",
    		"usuarios":"21",
    		"inicioVigencia":fechaActual,
    		"finVigencia":"2016-06-06"
    		
    	},        
    	{
    		"nombre":"FF01",
    		"rfc":"JISU982342",
    		"direccion":"calle 18 num 670",
    		"tipo":"completa",
    		"fecha":fechaActual,
    		"modulos":{
    					"administracion":true,
    					"monitoreo":true,
    					"inventarios":true,
    					"proovedores":true
    				},
    	}
    ];
    $table.bootstrapTable({data: datos});
});