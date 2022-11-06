var Search_btn = document.querySelector(".search-btn");
var Close_btn = document.querySelector(".close-btn");
var Input_Search = document.querySelector(".input-search");
var Search_bar_wrap = document.querySelector(".search-bar-wrap");

Search_btn.addEventListener("click", function(){
    Search_bar_wrap.classList.add("active");
});

Close_btn.addEventListener("click", function(){
    Search_bar_wrap.classList.remove("active");
});
