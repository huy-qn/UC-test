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


  $('#indicator-select').selectize({
      searchField: ['name', 'value'],
      options: [
        {name: "Access to electricity", value: "(% of population)"},
        {name: "Adequacy of social insurance programs", value: "(% of total welfare of beneficiary households)"},
        {name: "Adjusted savings: net forest depletion", value: "(current US$)"},
        {name: "CO2 intensity", value: "(kg per kg of oil equivalent energy use)"},
        {name: "Child employment in agriculture", value: "(% of economically active children ages 7-14)"},
      ]
  });

  $('#country-select').selectize({
    maxItems: 4,
    items: [1,2],
    plugins: ['remove_button']
  });



});