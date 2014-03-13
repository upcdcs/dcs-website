$(document).ready(function() {
  if ($('body').hasClass('academic_programs')) {
    tabs.initialize();
  } else if ($('body').hasClass('people')) {
    people.initialize();
  } else if ($('body').hasClass('department')) {
    department.initialize();
  } else if ($('body').hasClass('why_upcdcs')) {
    upcdcs.initialize();
  }
});

var tabs = {
  initialize: function() {
    var program = $('#program').val();
    $("#"+program).show();    
    $("[data-item='"+program+"']").parent().parent().show().parent().addClass('expanded');
    $("[data-item = '"+program+"']").addClass('current');
    $("[data-item='ap-bachelor-of-science']").click(function(e) {
      e.preventDefault();
      $("[data-item='ap-bachelor-of-science']").addClass('current');
      $("[data-item='ap-master-of-science'], [data-item='ap-continuing-education-program']").removeClass('current');
      $('#ap-bachelor-of-science').show();
      $('#ap-master-of-science, #ap-continuing-education-program').hide();
    });
    $("[data-item='ap-master-of-science']").click(function(e) {
      e.preventDefault();
      $("[data-item='ap-master-of-science']").addClass('current');
      $("[data-item='ap-bachelor-of-science'], [data-item='ap-continuing-education-program']").removeClass('current');
      $('#ap-master-of-science').show();
      $('#ap-bachelor-of-science, #ap-continuing-education-program').hide();
    });
    $("[data-item='ap-continuing-education-program']").click(function(e) {
      e.preventDefault();
      $("[data-item='ap-continuing-education-program']").addClass('current');
      $("[data-item='ap-bachelor-of-science'], [data-item='ap-master-of-science']").removeClass('current');
      $('#ap-continuing-education-program').show();
      $('#ap-bachelor-of-science, #ap-master-of-science').hide();
    });
  }
};

var people = {
  initialize: function() {    
    var id = window.location.hash.substring(1);    
    $("[data-item='p-core-faculty']").parent().parent().show().parent().addClass('expanded');
    if (id.length > 0) {    
      $("[data-item='p-"+id+"']").addClass('current');
    }
    $("[data-item='p-support-staff']").attr('href', '#support-staff');
    $("[data-item='p-core-faculty']").attr('href','#core-faculty');
    $("[data-item='p-affiliate-professor']").attr('href','#affiliate-professor');
    $("[data-item='p-visiting-professor']").attr('href','#visiting-professor');
    $("[data-item='p-lecturers']").attr('href', '#lecturers');
    $("[data-item='p-support-staff']").click(function(e) {            
      $(".expandable-menu .current").removeClass('current');       
      $("[data-item='p-support-staff']").addClass('current');            
    });    
    $("[data-item='p-core-faculty']").click(function(e) {            
      $(".expandable-menu .current").removeClass('current');         
      $("[data-item='p-core-faculty']").addClass('current');      
    });
    $("[data-item='p-affiliate-professor']").click(function(e) {            
      $(".expandable-menu .current").removeClass('current');         
      $("[data-item='p-affiliate-professor']").addClass('current');      
    });
    $("[data-item='p-visiting-professor']").click(function(e) {      
      $(".expandable-menu .current").removeClass('current');         
      $("[data-item='p-visiting-professor']").addClass('current');      
    });
    $("[data-item='p-lecturers']").click(function(e) {     
      $(".expandable-menu .current").removeClass('current');         
      $("[data-item='p-lecturers']").addClass('current');      
    });
  }
}

var department = {
  initialize: function() {    
    var id = window.location.hash.substring(1);        
    $("[data-item='td-history']").parent().parent().show().parent().addClass('expanded');
    if (id.length > 0) {    
      $("[data-item='td-"+id+"']").addClass('current');
    }
    $('.expandable-menu').click(function(e) {
      var attrib = $(e.target).attr('data-item');
      if (attrib.indexOf('td') >= 0) {
        $(".expandable-menu .current").removeClass('current'); 
        $("[data-item='"+attrib+"']").addClass('current');
      }
    });    
  }
}

var upcdcs = {
  initialize: function() {
    var item = window.location.hash.substring(1);
    upcdcs.highlight(item);
    $('.expandable-menu a[data-item^="wupcdcs-"]').on('click', function(e) {
      $('.expandable-menu a.current').removeClass('current');
      $(this).addClass('current');
    });
  },
  highlight: function(item) {
    console.log(item);
    if (item.length > 0) {
      $('a[data-item="wupcdcs-' + item + '"]').addClass('current').parent().parent().show().parent().addClass('expanded');
    }
  }
}

var link_id = {
  initialize: function() {
    
  }
}