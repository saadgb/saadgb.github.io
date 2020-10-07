function videoModal() {
   $(document).ready(function() {

// Gets the video src from the data-src on each button

var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);

  
  
// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
})
  


// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
}) 
    
      
// document ready  
});



}







function gotoTop() {


jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

}






function toast() {




function showAlert(type, message, duration) {
    if (!message) return false;
    if (!type) type = 'info';
    $("<div class='alert alert-message alert-" +
        type +
        " data-alert alert-dismissible'>" +
        "<button class='close alert-link' data-dismiss='alert'>&times;</button>" +
        message + " </div>").hide().appendTo('body').fadeIn(300);
    if (duration === undefined) {
        duration = 5000;
    }
    if (duration !== false) {
        $(".alert-message").delay(duration).fadeOut(500, function() {
            $(this).remove();
        });
    }
}
/*// Trigger the alert with function
showAlert('success', 'Oh yeah! Chido buana');*/

// ...or trigger it using a button
$('.btn').on("click", function() {
    var type = $(this).data('type');
    var message = $(this).data('message');
    var duration = $(this).data('duration');
    showAlert(type, message, duration);
});





}