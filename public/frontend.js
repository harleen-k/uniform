
function fetchProducts(done){
    $.get('/api/products',function(data){
        done(data)
    })
}

function createproduct(product){
    return $(`
            <div class="col-4 card my-4 mx-2 p-2">
                <h4 class= "name">${product.name}</h4>
                <div class="schoolname">${product.schoolname}</div>
                <div class="row">
                    <div class="col price">
                    Rs. ${product.price}
                     </div>
                    <div class="col">
                     <button class="btn btn-primary">Button</button>
                    </div>
                </div>
            </div> 
            `)
}

$(function(){

    let productList= $('#product-list')

    fetchProducts(function(products){
        productList.empty()
        for( product of products){
            productList.append(createproduct(product)) 
        }
    })

    
    
})