$( document ).ready(function() {

  console.log( "Hello!" )
  
  $.getJSON( "/dashboard/data", function() {
  })
  .done(function() {
    console.log( "success" );
  })
  
});
