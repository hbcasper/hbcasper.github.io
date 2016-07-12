$table = $('#table');
$(function () {
    var datos = [
    	{
    		"descripcion":"Tarea 1",
    		"asignado":"Luis",
    		"fecha":"2015-08-29",
    		"instruccion":"Comprar comida",
    		"sucursal":"SC01",
    		"granja":"GR01",
    		"area":"AR01",
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
    	},        
    	{
    		"descripcion":"Tarea 2",
    		"asignado":"Luis",
    		"fecha":"2015-01-17",
    		"instruccion":"Comprar comida",
    		"sucursal":"SC02",
    		"granja":"GR02",
    		"area":"AR02",
    		"horario":{
    				"lunes":true,
    				"martes":false,
    				"miercoles":true,
    				"jueves":false,
    				"viernes":true,
    				"sabado":false,
    				"domingo":false,
    				"hora":"18:45"
    				},
    	}
    ];
    $table.bootstrapTable({data: datos});
});