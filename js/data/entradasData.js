$(function () {
    var datos = [
    	{
    		"concepto":"CN001",
    		"almacen":"AL001",
    		"proovedor":"PROV1",
    		"fecha":"2016-04-07",
    		"clave":"FF001",
    		"producto":"Comida",
    		"nombreProd":"Compollo",
    		"unidades":"45",
    		"unMed":"kg",
    		"costo":"4500",
    		"total":"98000",
    		"descripcion":"Comida para pollitos",
    		"naturaleza":"Entrada"
    	},        
    	{
    		"clave": "EN001",
            "almacen": "AL001",
            "naturaleza":"Entrada",
            "fecha":"2016-03-23",
            "precio": "$560",
            "cantidad":"100000",
            "proovedor":"El pollito feliz",
            "sector":"salud"
    	},
    	{
    		"clave": "EN002",
    		"almacen": "AL002",
            "naturaleza":"Entrada",
            "fecha":"2016-04-24",
            "producto": "Comida para pollitos2",
            "precio": "$560",
            "cantidad":"100000",
            "proovedor":"El pollito triste"
    	},        
        {
            "clave": 1,
            "producto": "Item 1",
            "precio": "$23",
            "cantidad":"3",
            "proovedor":"Pollitos Inc"
        },
        {
            "clave": 2,
            "producto": "Item 2",
            "precio": "$20",
            "cantidad":"5",
            "proovedor":"Pollos"
        },
        {
            "clave":"5",
            "id": 5,
            "name": "Item 5",
            "price": "$5"
        },
        {
            "clave":"6"
        },
        {
            "clave":"7"
        },
        {
            "clave":"8"
        },
        {
            "clave":"9"
        },
        {
            "clave":"10"
        },
        {
            "clave":"11"
        }
    ];
    $table.bootstrapTable({data: datos});
});