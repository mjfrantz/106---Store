
//Object Constructor
function Item(title, description, price, image, category){
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
    this.category = category;
}

function saveItem() {
    //get data 
    var title = $("#titleTxt").val();
    var description = $("#descriptionTxt").val();
    var price = $("#priceTxt").val();
    var image = $("#imageTxt").val();
    var category = $("#selCategory").val();

    console.log(title, description, price, image, category);

    // create object 
    var theItem = new Item(title, description, price, image, category);
    console.log(theItem);
    //Read the obj
    console.log("the title: ", theItem.title)
    
    //save object to backend
}


function init(){
    console.log("Init");

    //initializations 

    //events
    $("#btnSave").click(saveItem);
}

window.onload = init;