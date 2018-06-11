(function ($) {
    console.log($("#block-bb4-main-menu").width());
    console.log($("#block-bb4-search").width());
    console.log($("#nav-collapse").width());
    if (($("#block-bb4-main-menu").width() + $("#block-bb4-search").width() > $("#nav-collapse").width()) || ($("#block-bb4-main-menu").width() === 0 )) {
        $("#block-bb4-main-menu").addClass("w-100");
        
    }
    console.log(document.getElementById("block-bb4-main-menu").width);
})(jQuery);

