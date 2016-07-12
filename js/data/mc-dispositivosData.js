$table = $('#table');
$(function () {
    var datos = [
    	{
    		"clave":"DP01",
    		"nombre":"Dispositivo 1",
    		"fecha":"2016-08-25",
    		"sucursal":"SC01",
    		"centroProd":"CP01",
    		"sitio":"ST01",
    		"nave":"NV01",
    		"area":"AR01",
    		"estado":"bueno",
    		"sensores":[{
    				"pin":1,
    				"sensor":"Temperatura",
    				"tipo":"Temperatura",
    			},	
    			{	"pin":2,
    				"sensor":"Temperatura",
    				"tipo":"Temperatura",
    			},
    			{	"pin":3,
    				"sensor":"",
    				"tipo":"",
    			},
    			{	"pin":4,
    				"sensor":"Lluvia",
    				"tipo":"Temperatura"
    			}]
    	},        
    	{
    		"clave":"DP02",
    		"nombre":"Dispositivo 2",
    		"modelo":"M02",
    		"descripcion":"Cocina comida rica",
    		"fecha":"2014-11-25",
    		"sucursal":"SC02",
    		"centroProd":"CP01",
    		"sitio":"ST01",
    		"nave":"NV01",
    		"area":"AR01",
    		"sensores":[{
    				"pin":1,
    				"sensor":"",
    				"tipo":"",
    			},	
    			{	"pin":2,
    				"sensor":"Calor",
    				"tipo":"Calor",
    			},
    			{	"pin":3,
    				"sensor":"Radiación",
    				"tipo":"Radiación",
    			},
    			{	"pin":4,
    				"sensor":"",
    				"tipo":""
    			}]
    	}
    ];
    $table.bootstrapTable({data: datos});
});