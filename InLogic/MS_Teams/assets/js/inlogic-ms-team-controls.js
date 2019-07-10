/* Popover */

function popover() {
	
	
	
	 $("[data-toggle=popover]").popover({
        html : true,
        placement: 'top',
        content: function() {
            var content = $(this).attr("data-popover-content");
            return $(content).children(".popover-body").html();
            
        }
    });
    
  
    $('body').on('click', function (e) {
    $('[data-toggle=popover]').each(function () {
        // hide any open popovers when the anywhere else in the body is clicked
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});
    
    

$(document).on("click", ".popover .close" , function(){
        $(this).parents(".popover").popover('hide');
    });
    
    
    
 
    
	
}
/* Popover END*/











/* Table JS */


function tablejs() {


(function ($) {
  "use strict";
  $.fn.responsiveTable = function() { 

    var toggleColumns = function($table) {
      var selectedControls = [];
      $table.find(".Accordion-timetable, .Tab").each( function() {
        selectedControls.push( $(this).attr("aria-selected") );
      });
      var cellCount = 0, colCount = 0;
      var setNum = $table.find(".Rtable-cell").length / Math.max( $table.find(".Tab").length, $table.find(".Accordion-timetable").length );
      $table.find(".Rtable-cell").each( function() {
        $(this).addClass("hiddenSmall");
        if( selectedControls[colCount] === "true" ) $(this).removeClass("hiddenSmall");
        cellCount++;
        if( cellCount % setNum === 0 ) colCount++; 
      });
    };
    $(this).each(function(){ toggleColumns($(this)); });

    $(this).find(".Tab").click( function() {
      $(this).attr("aria-selected","true").siblings().attr("aria-selected","false");
      toggleColumns( $(this).parents(".Rtable") );
    });

    $(this).find(".Accordion-timetable").click( function() {
      $(this).attr("aria-selected", $(this).attr("aria-selected") !== "true" );
      toggleColumns( $(this).parents(".Rtable") );
    });

  };
}(jQuery));


$(".js-RtableTabs, .js-RtableAccordions").responsiveTable();

}


/* Table JS END */



















