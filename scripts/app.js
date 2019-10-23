

var catalog = [];

function getCatalog () {
    this.catalog = [
        {
            title:"First Item",
            description:"Random description",
            price: 11.99,
            image:"https://cdn.shopify.com/s/files/1/2253/9063/products/Web-Res-R1X-Iso-V2_400x.jpg?v=1560899741",
            category:"skateboard"
        },
        {
            title:"Second Item",
            description:"Random description",
            price: 110.99,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvb_a0JxBfA1StsV-2eIeAAtp7an-Qig9H0aU1-TK20MdtLW3viA",
            category:"shortBoard"
        }
    ];
}

function displayCatalog () {
    //get the reference to the UL
    var ul = $("#catalog");

    //for every item on the catalog array,
    for(let i=0; i<catalog.length; i++){
        var item = catalog[i];
        
        //create an LI
        var li = 
        `<div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
                <h6>${item.price}</h6>
             </div>
        </div>`;
        //add the li to UL
        ul.append(li);
     }
}

function init() {
    console.log("hi");

    getCatalog();
    displayCatalog();
}

window.onload = init;