$table = $('#table');
$(function () {
    var datos = [
    	{
    		"clave":"SN01",
    		"nombre":"Sensor 1",
    		"dispositivo":"DP01",
    		"fecha":"2016-08-25",
    		"sucursal":"SC01",
    		"centroProd":"CP01",
    		"sitio":"ST01",
    		"nave":"NV01",
    		"area":"AR01",
    		"tipo":"Temperatura",
    		"estado":"bueno",
    		"lectura":"38",
    		"tablero":true
    	},        
    	{
    		"clave":"SN02",
    		"nombre":"Sensor 2",
    		"dispositivo":"DP01",
    		"fecha":"2016-08-25",
    		"sucursal":"SC01",
    		"centroProd":"CP01",
    		"sitio":"ST01",
    		"nave":"NV01",
    		"area":"AR02",
    		"tipo":"Lluvia",
    		"estado":"bueno",
    		"lectura":"25",
    		"tablero":false
    	},
    	{
    		"clave":"SN03",
    		"nombre":"Sensor 3",
    		"dispositivo":"DP02",
    		"fecha":"2016-08-25",
    		"sucursal":"SC02",
    		"centroProd":"CP01",
    		"sitio":"ST01",
    		"nave":"NV01",
    		"area":"AR01",
    		"tipo":"PH",
    		"estado":"bueno",
    		"lectura":"10",
    		"tablero":true
    	}
    ];
    $table.bootstrapTable({data: datos});
});