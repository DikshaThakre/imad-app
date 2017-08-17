//Counter code
var button=document.getElementById('counter');

button.onclick=function(){
    //create the request object
   
    var request=new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
      if(request.readyState===XMLHttpRequest.DONE){
          //take some action
          if(request.status===200){
            var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
          }
      }  
        //not done yet
    };
    //make the request
    request.open('GET', 'http://dthakre1998.imad.hasura-app.io/counter',true);
    request.send(null);
};
//submit name

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
   //make request to the server and send the name
   //create the request object
   
    var request=new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
      if(request.readyState===XMLHttpRequest.DONE){
          //take some action
          if(request.status===200){
               //capture a list of names and render it as a list.
            var names=request.responseText;
            names=JSON.parse(names);
            var names=['name1','name2','name3','name4'];
            var list='';
            for(var i=0; i<names.length; i++){
            list+='<li>' + names[i] + '<li>';
       
   }
   var ul=document.getElementById('namelist');
   ul.innerHTML=list;
          }
      }  
        //not done yet
    };
    //make the request
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    request.open('GET', 'http://dthakre1998.imad.hasura-app.io/counter/submit-name?name-' + name, true);
    request.send(null);
   
};
