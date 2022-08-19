//array donde se cargarán los datos recibidos:
let productos= [];

//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM

function showProductsList(array){

    let htmlContentToAppend = "";

    let htmlContentToAppend1 = ''

    htmlContentToAppend1 += `
                                <h2>  Productos </h2>
                                <h3> `+ 'Verás aquí todos los productos de la categoría' + ' ' + productos.catName +` </h3>
                            
                            ` 
    document.getElementById("titulo").innerHTML = htmlContentToAppend1; 

    for(let i = 0; i < array.products.length; i++){ 
        
        let autos = array.products[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src= " `+ autos.image +` " alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ autos.name + ' ' + '-' + ' '+ autos.currency + ' '+ autos.cost + `</h4> 
                        <p> `+ autos.description +`</p> 
                        </div>
                        <small class="text-muted">` + autos.soldCount + ' ' + 'vendidos' + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("products-list-container").innerHTML = htmlContentToAppend; 
    }
}


/* 
EJECUCIÓN:

-Al cargar la página se llama a getJSONData() pasándole por parámetro la dirección para obtener el listado.
-Se verifica el estado del objeto que devuelve, y, si es correcto, se cargan los datos en el arreglo.
-Por último, se llama a showCategoriesList() pasándole por parámetro el arreglo de productos.

*/

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productos = resultObj.data;
            showProductsList(productos);
        }
    });
});