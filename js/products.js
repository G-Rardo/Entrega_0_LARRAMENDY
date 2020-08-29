var categoriesArray = [];
showSpinner();
function showCategoriesList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let category = array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
                    
                    
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ category.name +`</h4>
                        <br>
                        <br>
                        
                        <small class="text-muted">` + category.soldCount + ` artículos vendidos</small>
                        
                    </div>
                    <p class="mb-1">`+ category.description +`</p><br>
                    <p class="mb-1">`+ category.currency +`  `+ category.cost +`</p>
                </div>
            </div>
        </div>
        `

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    hideSpinner();
    }
}

function ordenarRelevancia(){
    categoriesArray.sort( function(ant, sig){
        if (ant.soldCount < sig.soldCount){ //Revisa si uno de los soldCount es menor que el otro
            return 1;
        }
        if (ant.soldCount > sig.soldCount) {
            return -1;
        } 
        return 0;
    });
    showCategoriesList(categoriesArray);
}
function ordenarPrecioAsc(){ //Ordena los precios del menor al mayor
    categoriesArray.sort( function(ant, sig){
        if (ant.cost > sig.cost){
            return 1;
        }
        if (ant.cost < sig.cost) {
            return -1;
        } 
        return 0;
    
    });
    showCategoriesList(categoriesArray);
}

function ordenarPrecioDes(){ //Ordena los precios del mayor al menor
    categoriesArray.sort( function(ant, sig){
        if (ant.cost < sig.cost){
            return 1;
        }
        if (ant.cost > sig.cost) {
            return -1;
        } 
        return 0;
    
    });
    showCategoriesList(categoriesArray);
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            showCategoriesList(categoriesArray);
        }
    });
});