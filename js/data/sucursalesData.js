$(function () {
    var datos = [
    	{
    		"nombre":"SC01",
    		"direccion":"calle 1 # 5 x80 y 82",
    		"pais":"México",
    		"estado":"Yucatán",
    		"ciudad":"Mérida",
    		"localidad":"L01",
    		"fecha":"2016-05-25"
    	},        
    	{
    		"nombre":"SC02",
    		"direccion":"calle 2 # 10 x800 y 802",
    		"pais":"México",
    		"estado":"Campeche",
    		"ciudad":"Campeche",
    		"localidad":"L02",
    		"fecha":fechaActual
    	}
    ];
    $table.bootstrapTable({data: datos});
});