$(document)
  .ready(function() {

    var
      changeSides = function() {
        $('.ui.shape')
          .eq(0)
            .shape('flip over')
            .end()
          .eq(1)
            .shape('flip over')
            .end()
          .eq(2)
            .shape('flip back')
            .end()
          .eq(3)
            .shape('flip back')
            .end()
        ;
      },
      validationRules = {
        firstName: {
          identifier  : 'email',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter an e-mail'
            },
            {
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            }
          ]
        }
      }
    ;

    $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      })
    ;

    $('.ui.form')
      .form(validationRules, {
        on: 'blur'
      })
    ;

    $('.masthead .information')
      .transition('scale in')
    ;

    setInterval(changeSides, 3000);

  })
;

/*****************************************************************************
  Scroll Effect
******************************************************************************/
jQuery(function( $ ){

  $.localScroll.defaults.axis = 'xy';

  $.localScroll({
    target: '#home', // could be a selector or a jQuery object too.
    queue:true,
    duration:1000,
    hash:true,
    onBefore:function( e, anchor, $target ){
      // The 'this' is the settings object, can be modified
    },
    onAfter:function( anchor, settings ){
      // The 'this' contains the scrolled element (#content)
    }
  });

});