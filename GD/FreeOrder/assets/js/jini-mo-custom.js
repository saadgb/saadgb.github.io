function makeSidebarSticky() {
	$( '.mo-sidebar-sticky' ).Stickyfill();
}

function initPanelToggles() {
	$( '.mo-order-info-col .block h1' ).click(function() {
		$( this ).siblings( '.mo-order-info-panel' ).toggle(400, 'linear');
		$( this ).parent( '.block' ).toggleClass( 'collapsed' );
	});
}


$(function(){
  $(".fold-table tr.view").on("click", function(){
    $(this).toggleClass("open").next(".fold").toggleClass("open");
  });
});