$table = $('#table');
$(function () {
    var datos = [
    	{
    		"clave":"VR01",
    		"nombre":"Variable 1",
    		"sucursal":"SC01",
    		"granja":"GR01",
    		"area":"AR01",
    		"tipo":"Tipo 1",
    		"minimo":5,
    		"maximo":50,
    		"estado":true,
    		"controles":{
    				"control1min":true,
    				"control1max":true,
    				"control2min":true,
    				"control2max":true,
    				"control3min":true,
    				"control3max":true,
    				"control4min":true,
    				"control4max":true,
    		},
    		"visual":true,
    		"visualSlider":20,
    		"sonora":true,
    		"sonoraSlider":15,
    		"correo":true,
    		"correoSlider":30
    	},        
    	{
    		"clave":"VR02",
    		"nombre":"Variable 2",
    		"sucursal":"SC02",
    		"granja":"GR02",
    		"area":"AR02",
    		"tipo":"Tipo 2",
    		"minimo":10,
    		"maximo":33,
    		"estado":false,
    		"controles":{
    				"control1min":true,
    				"control1max":false,
    				"control2min":true,
    				"control2max":true,
    				"control3min":false,
    				"control3max":true,
    				"control4min":false,
    				"control4max":false,
    		},
    		"visual":true,
    		"visualSlider":10,
    		"sonora":false,
    		"sonoraSlider":10,
    		"correo":false,
    		"correoSlider":10
    	}
    ];
    $table.bootstrapTable({data: datos});
});