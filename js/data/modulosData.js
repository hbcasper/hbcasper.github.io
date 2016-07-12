$(function () {
    var datos = [
    	{
    		"clave":"FF01",
    		"nombre":"Pollitos Felices",
    		"dispositivo":"DP01",
    		"modelo":"M01",
    		"tipo":"Empresita",
    		"descripcion":"Empresita de pollos",
    		"fecha":"2016-08-25",
    		"sucursal":"SC01",
    		"centroProd":"CP01",
    		"sitio":"ST01",
    		"nave":"NV01",
    		"area":"AR01",
    		"sensores":{
    				"pin0":true,
    				"sensor0":"Temperatura",
    				"pin1":true,
    				"sensor1":"Temperatura",
    				"pin2":false,
    				"sensor2":"",
    				"pin3":true,
    				"sensor3":"Lluvia"
    				},
    		"controles":{
    				"pin0":false,
    				"control0":"",
    				"pin1":true,
    				"control1":"Temperatura",
    				"pin2":false,
    				"control2":"",
    				"pin3":true,
    				"control3":"Temperatura"
    				}
    	},        
    	{
    		"clave":"FF02",
    		"nombre":"Comida rica",
    		"dispositivo":"DP01",
    		"modelo":"M02",
    		"tipo":"Cocina",
    		"descripcion":"Cocina comida rica",
    		"fecha":"2014-11-25",
    		"sucursal":"SC01",
    		"centroProd":"CP01",
    		"sitio":"ST01",
    		"nave":"NV01",
    		"area":"AR01",
    		"sensores":{
    				"pin0":true,
    				"sensor0":"calor",
    				"pin1":true,
    				"sensor1":"calor",
    				"pin2":false,
    				"sensor2":"",
    				"pin3":true,
    				"sensor3":"calor"
    				},
    		"controles":{
    				"pin0":false,
    				"control0":"",
    				"pin1":true,
    				"control1":"calor",
    				"pin2":false,
    				"control2":"",
    				"pin3":true,
    				"control3":"calor"
    				}
    	}
    ];
    $table.bootstrapTable({data: datos});
});