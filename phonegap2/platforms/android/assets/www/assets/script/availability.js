$(document).ready(function() {
  $('.available-period')
      .on('click', function() {
          $(this)
              .toggleClass('YES NO')
              .trigger('changeState');
      })
      .on('changeState', function(e) {
            $(this).find('input').attr('disabled', 'disabled');
            if ($(this).hasClass('YES')) {
                $(this).find('input').removeAttr('disabled');
            }
        });
  $('.toggle-day, .toggle-hour')
      .on('click', function() {
          var day = $(this).data('day');
          var hour = $(this).data('hour');
          var active = $(this).data('active');
          if (day !== undefined) {
              var classRow = '.available-period[data-day=' + day + ']';
          }
          else {
              var classRow = '.available-period[data-hour=' + hour + ']';
          }
          $(classRow)
              .removeClass('NOHOVER YESHOVER YES NO')
              .addClass(active ? 'NO NOHOVER' :  'YES YESHOVER')
              .trigger('changeState');
          $(this).data('active', !active);
      })
      .hover(function() {
          var day = $(this).data('day');
          var hour = $(this).data('hour');
          if (day !== undefined) {
              var classRow = '.available-period[data-day=' + day + ']';
          }
          else {
              var classRow = '.available-period[data-hour=' + hour + ']';
          }
          $(classRow)
              .addClass(($(classRow).hasClass("YES")) ? 'YESHOVER' : 'NOHOVER')
              .removeClass(($(classRow).hasClass("YES")) ? 'NOHOVER' : '');
      }, function() {
          var day = $(this).data('day');
          var hour = $(this).data('hour');
          if (day !== undefined) {
              var classRow = '.available-period[data-day=' + day + ']';
          }
          else {
              var classRow = '.available-period[data-hour=' + hour + ']';
          }
          $(classRow).removeClass('YESHOVER NOHOVER');
  });
  $('.NEVER').on('click', function(){
      $('.YES').each(function(){
          $(this)
              .removeClass('YES')
              .addClass('NO');
      })
  });
});
