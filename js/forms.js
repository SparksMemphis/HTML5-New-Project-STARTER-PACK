// Changes appearance of active form items
// from: http://buildinternet.com/2009/01/changing-form-input-styles-on-focus-with-jquery/
$(document).ready(function() {

    $('.un input, .pw input').addClass("idleField");  
    $('.un input, .pw input').focus(function() {  
        $(this).removeClass("idleField").addClass("focusField");  
        if (this.value == this.defaultValue){  
            this.value = '';  
        }  
        if(this.value != this.defaultValue){  
            this.select();  
        }  
    });  
    $('.un input, .pw input').blur(function() {  
        $(this).removeClass("focusField").addClass("idleField");  
        if ($.trim(this.value == '')){  
            this.value = (this.defaultValue ? this.defaultValue : '');  
        }  
    });
});
// end selected appearance change

// justifies form input items to look like it's in a tabel
// from: http://www.jankoatwarpspeed.com/post/2008/07/09/Justify-elements-using-jQuery-and-CSS.aspx
$(document).ready(function() {
    var max = 0;
    $("label").each(function(){
        if ($(this).width() > max)
            max = $(this).width();    
    });
    $("label").width(max);
});
// end justification