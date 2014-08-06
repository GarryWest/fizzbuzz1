$(document).ready(function(){

for (var i=1; i<=100; i++){
  if ((i % 3 === 0) && (i % 5 === 0)){
      $(".entry-lines").append("fizzbuzz<br/>");
  } else if(i%3 === 0) {
    $(".entry-lines").append("fizz");  
  } else if(i%5 === 0){
    $(".entry-lines").append("buzz");  
  } else {
    $(".entry-lines").append(i);
  };
  $(".entry-lines").append(" ");
};
 
});
