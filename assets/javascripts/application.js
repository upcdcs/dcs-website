$(document).ready(function() {
  notifications.initialize();
  textareas.initialize();
  scrollbars.initialize();
  menus.initialize();
});

var notifications = {
  initialize: function() {
    if ($('p.notification').length) {
      $('p.notification').addClass('shown');
      setTimeout(function() {
        $('p.notification').removeClass('shown');
      }, 2500);
    }
  }
};

var textareas = {
  initialize: function() {
    $('textarea').autosize();
  }
};

var scrollbars = {
  initialize: function() {
    $('.custom-scrollbar').mCustomScrollbar({
      scrollInertia: 0,
      theme: 'dark-thick'
    });
  }
};

var menus = {
  initialize: function() {
    if ($('.expandable-menu').length) {
      menus.expandableMenus();
    }
  },
  expandableMenus: function() {
    $('.expandable-menu li p').on('click', function() {
      if ($(this).closest('li').hasClass('expanded')) {
        $(this).closest('li').removeClass('expanded').find('ul').slideUp(250);
      } else {
        $('.expandable-menu .expanded').removeClass('expanded').find('ul').slideUp(250);
        $(this).closest('li').addClass('expanded').find('ul').slideDown(250);
      }
    });

    $(document).on('scroll', function() {
      if ($(document).scrollTop() > $('#main-sidebar').offset().top) {
        $('#main-sidebar .expandable-menu').addClass('sticky');
      } else {
        $('#main-sidebar .expandable-menu').removeClass('sticky');
      }
    });
  }
};