function work (){
    var span = document.querySelector('.div-drop-down')
    span.classList.toggle('active')
    
}
var i=6;
function pre(){
var main = document.getElementById('main')
if(main.hasChildNodes()){
    var nodes = main.children
        if(i==0)
        {
            nodes[i].style.display = 'none'
            i=5
            nodes[i].style.display = 'block'
        }
        else{
            nodes[i].style.display = 'none'
            i--;
            nodes[i].style.display = 'block'
        }
        console.log(nodes[i])
    }   
}
var i=0;
function next(){
var main = document.getElementById('main')
if(main.hasChildNodes()){
    var nodes = main.children
        if(i==5)
        {
            nodes[i].style.display = 'none'
            i=0;
            nodes[i].style.display = 'block'
        }
        else
        {
            nodes[i].style.display = 'none'
            i++;
            nodes[i].style.display = 'block'
        }
        console.log(nodes[i])
}   
} 
var i=0;  
function work1(){
    var main1 = document.getElementById('main1')
    if(main1.hasChildNodes()){
        var nodes = main1.hasChildNodes
        console.log(nodes[0])
        // if(i==5){
        //     console.log(nodes[i])
        // }
    }
}  
// var s = document.getElementById("all")
        
function hello (){
    var get = document.getElementById('get')
    get.classList.toggle('active')
   }
// var li = document.querySelector('ul').innerText
// console.log(li)
var li = document.getElementById('li')
console.log(li)
 a = []
function select(){
   
    var list = document.getElementById("li")
    console.log(list)
    list.forEach(function(li){
        a.push(li.innerText)
    });
    // console.log(a[5])   
    // var li = document.querySelector('ul li').value
    // console.log(li)
    for (let i = 0; i < a.length; i++) {
        // console.log(a[])
        var data = document.getElementById('data').innerText = a[i]
        console.log(data)
    }
    // var store = list.innerText 
    // console.log(store)
    // a.push(list)
    // console.log(a)
    // var span = document.getElementById('span')
    // span.style.width = "auto"
    
}
function add(){
    var list = document.getElementById("add")
    list.classList.add('myclass')
    console.log(list)
}
function remove(){
   var rem = document.getElementById('add')
   rem.classList.remove("myclass")
   console.log(rem)
}
