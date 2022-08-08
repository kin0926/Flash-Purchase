var tabs = document.querySelector("#tabs").querySelectorAll("li");
var lists = document.querySelector("#lists").querySelectorAll("ul");

for(var i = 0; i< tabs.length; i++){
    tabs[i].onclick = showlist;
}

function showlist(){
    //排他思想
    for( var i = 0; i<tabs.length; i++){
        tabs[i].className = "";
        //这个是下面的商品部分，如果点击的是这个则添加active样式
        tabs[i] === this ? lists[i].className = "clearfix active" : lists[i].className = "clearfix";
    }
    this.className = "active";
}

//时间栏窗口位置固定
var seckillNav = document.querySelector("#seckillNav");
window.addEventListener('scroll',function(){
    var scrollTop = window.scrollY;
    scrollTop >= 260 ? seckillNav.className = "seckill-nav seckill-navfixed" : seckillNav.className = "seckill-nav";
    console.log(scrollTop);
})