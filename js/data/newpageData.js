//newpage agregar datos que se ven en la tabla por default
$(function () {
    var datos = [
    /*
     * ejemplo
     * {
     * 	"nombre":"SC01",
     *	"direccion":"calle 1 # 5 x80 y 82",
     *	"pais":"México",
     *  "fecha":"2016-04-07" o fechaActual
     * },
     */
    	{
    		"":"",
    		"":""
    	},        
    	{
    		"":"",
    		"":"",
    	}
    ];
    $table.bootstrapTable({data: datos});
});