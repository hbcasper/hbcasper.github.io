$(function () {
    var datos = [
    	{
    		"clave":"DP01",
    		"nombre":"Dispositivo 1",
    		"modelo":"M01",
    		"descripcion":"Empresita de pollos",
    		"fecha":"2016-08-25",
    		"sucursal":"SC01",
    		"centroProd":"CP01",
    		"sitio":"ST01",
    		"nave":"NV01",
    		"area":"AR01",
    	},        
    	{
    		"clave":"DP02",
    		"nombre":"Dispositivo 2",
    		"modelo":"M02",
    		"descripcion":"Cocina comida rica",
    		"fecha":"2014-11-25",
    		"sucursal":"SC01",
    		"centroProd":"CP01",
    		"sitio":"ST01",
    		"nave":"NV01",
    		"area":"AR01",
    	}
    ];
    $table.bootstrapTable({data: datos});
});