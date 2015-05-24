jQuery(document).ready(function($){
  $('.toggle-comments').on('click', function(event){
    event.preventDefault();
    $('.panel').addClass('is-visible');
  });
  $('.panel').on('click', function(event){
    if( $(event.target).is('.panel') || $(event.target).is('.panel-close') ) { 
      $('.panel').removeClass('is-visible');
      event.preventDefault();
    }
  });
});