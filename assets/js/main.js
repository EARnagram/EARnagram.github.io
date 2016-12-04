$('.main-nav').on('click', '.item', function(e) {
  var nav = $('.main-nav a.item');
  changeActive(this, nav);
  changeView(this, "content");
});

function changeActive(anchor, nav) {
  nav.each((i, e) => e.title === anchor.title ? $(e).addClass('active') : $(e).removeClass('active'));
};

function changeView(anchor, selector) {
  var current = $(anchor).attr('title');
  if (selector === "content") {
    $('.content-view').each((i, e) => !$(e).hasClass(current) ? $(e).hide('fast') : setTimeout(() => $(e).show("slow"), 500));
  } else {
    $('.technical-view').each((i, e) => !$(e).hasClass(current) ? $(e).fadeOut('fast') : setTimeout(() => $(e).fadeIn("slow"), 500));
  }

}

$('.technical-list').on('click', '.item', function(e) {
  var anchors = $('.technical-list a.item');
  changeActive(this, anchors);
  changeView(this, "technical");
});
