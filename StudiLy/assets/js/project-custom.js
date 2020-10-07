function scroll() {
   new SimpleBar(document.getElementById('myElement'));
}



function tableRowClickable()

{


  $(".table-row").click(function () {
    window.document.location = $(this).data("href");
  });


}






function sidebarToggle() {
  $(document).on('click', '.icon-sidebar', function (e) {
    const element = document.querySelector('.sidebar');
    element.classList.toggle('expand');
     
    /* $('.aside').removeClass('expand');
     $('.icon-aside').removeClass('active');*/
    $(this).toggleClass('active');
      $('.sectionE').toggleClass('not-expanded');
    $('.bread-crumb').toggleClass('bread-crumb-expanded');
    
  
      
  });
}




function selectSearch() {
    $('select').selectpicker();


}









