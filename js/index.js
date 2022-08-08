var tabs = document.querySelector("#tabs").querySelectorAll("li");
var lists = document.querySelector("#lists").querySelectorAll("ul");

for(var i = 0; i< tabs.length; i++){
    tabs[i].onclick = showlist;
}

function showlist(){
    for( var i = 0; i<tabs.length; i++){
        if( tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className = "clearfix active";
        }
        else {
            tabs[i].className = "";
            lists[i].className = "clearfix";
        }
        
    }
}
var seckillNav = document.querySelector("#seckillNav");
window.addEventListener('scroll',function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
    
    if( scrollTop >= 260){
        seckillNav.className = "seckill-nav seckill-navfixed"
    }else {
        seckillNav.className = "seckill-nav";
    }
    console.log(scrollTop);
})