$(document).ready(function() {
    //force tabs module to open with hover on desktop only
    var tabs = $('.mega_tabs a');
    if( window.innerWidth > 768){
        tabHover()
    }else{
        tabs.on('click',function (e) {
            $('.mega_tabs li').removeClass('default');
        });
    }
    $(window).resize( function(){
        if(window.innerWidth > 768){
            tabHover()
        }else{
            tabs.off('mouseenter');
        }
    });
    //make the tabs module open on hover
    function tabHover (){
        tabs.on('mouseenter',function (e) {
            e.preventDefault()
            $(this).parents('.mega_tabs').find('.default').removeClass('default');
            $(this).tab('show');
        });
    }
    //close opend dropdown-menu if hoverd over another dropdown
    $('.dropdown.hvr').mouseenter(function(){
        if( window.innerWidth > 768){
            $('.dropdown').not(this).removeClass('open');
        }
    });
    // force dropdown-menu not to close when clicked inside


    //focus ask box
    $('.noscrollbars').focus(function(){
        $(this).parent().addClass('active');
    });
    $('.noscrollbars').blur(function(){
        $(this).parent().removeClass('active');
    });


    // notification click to delete red indicator
    $('.ntfc_lnk').on('click', function(){
        $('.ntfc_num').remove();
    });
    $('.ntfc_num').on('click', function(e){
        e.stopPropagation();
    });

    //add to favorite button active state
    $('.bookmark').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        var BmText = $(this).find('.action_text');
        BmText.html(BmText.text() == 'مفضلاتي' ? 'إلغاء' : 'مفضلاتي');

    })
    //fixed sticky social div when scrolled past
    var $window = $(window),
        $stickyEl = $('.Social_Sharing'),
        elTop = $stickyEl.offset().top;
        elWidth = $stickyEl.width();
    $window.scroll(function() {
        $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
        $stickyEl.width(elWidth);
    });



});




