$(function () {
    var datos = [
    	{
    		"nombre":"NV01",
    		"empresa":"EP01",
    		"direccion":"calle 8 num 67",
    		"fecha":"2015-08-29",
    		"sitio":"ST01"
    	},        
    	{
    		"nombre":"NV02",
    		"empresa":"EP02",
    		"direccion":"calle 18 num 670",
    		"fecha":fechaActual,
    		"sitio":"ST02"
    	}
    ];
    $table.bootstrapTable({data: datos});
});