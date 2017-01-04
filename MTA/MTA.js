$( document ).ready(function() {
 $( '#Content').load($('select').val());
});
$( 'select').change(function(){
    console.log(this)
 $( '#Content').load(this.value);
});