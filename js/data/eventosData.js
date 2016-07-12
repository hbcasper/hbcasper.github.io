$table = $('#table');
$(function () {
    var datos = [
    	{
    		"clave":"FF01",
    		"nombre":"Evento 1",
    		"accion":"Avanzar",
    		"sucursal":"SC01",
    		"granja":"GR01",
    		"area":"AR01",
    		"repeticion":"500",
    		"estado":true,
    		"horario":{
    				"lunes":true,
    				"martes":true,
    				"miercoles":true,
    				"jueves":true,
    				"viernes":true,
    				"sabado":true,
    				"domingo":true,
    				"hora":"05:03"
    				},
    		"control":"CR01"
    	},        
    	{
    		"clave":"FF02",
    		"nombre":"Evento 2",
    		"accion":"Retroceder",
    		"sucursal":"SC02",
    		"granja":"GR02",
    		"area":"AR02",
    		"repeticion":"400",
    		"estado":false,
    		"horario":{
    				"lunes":true,
    				"martes":false,
    				"miercoles":false,
    				"jueves":true,
    				"viernes":true,
    				"sabado":false,
    				"domingo":false,
    				"hora":"15:03"
    				},
    		"control":"CR02"
    	}
    ];
    $table.bootstrapTable({data: datos});
});