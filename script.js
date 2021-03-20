var menuitems= document.getElementById("menuitems");
menuitems.style.maxHeight="0px";

function menutoggle(){
    if(menuitems.style.maxHeight=="0px"){
        menuitems.style.maxHeight="200px";
    }else{
        menuitems.style.maxHeight="0px";

    }
}


var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img")

SmallImg[0].onclick =function(){
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick =function(){
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick =function(){
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick =function(){
    ProductImg.src = SmallImg[3].src;
}