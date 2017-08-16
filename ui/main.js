console.log('Loaded!');
//change the text of main-text div
var element=document.getElementById('main-text');

element.innertHTML='New Value';

//move the image
var img=document.getElementById('madi');
img.onclick=function(){
   img.style.marginLeft='100px'; 
}