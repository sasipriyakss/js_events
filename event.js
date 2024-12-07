const grandparent =document.querySelector('#grandparent');
const parent=document.querySelector('#parent');
const child=document.querySelector('#child');
// event bubling   center to up
// grandparent.addEventListener("click",function(){
//     console.log("grandparent clicked");
// }, 
// false    //default false
// );
//  parent.addEventListener("click",function(){
//     console.log("parent clicked");

//  }
// );

// child.addEventListener("click",function() {
//     console.log("child Clicked");
// });

// event capturing
grandparent.addEventListener("click",function(){
    console.log("grandparent clicked");
},true );

parent.addEventListener("click",function() {
    console.log("parent clicked")
},false);

child.addEventListener("click",function(e){
    console.log("child clicked");
    e.stopPropagation();
},true);
