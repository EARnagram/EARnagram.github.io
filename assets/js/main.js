const checkValidHash = () => {
  let url = window.location.href;
  let ind = url.indexOf("#");
  let viewName = url.substring(ind + 1);
  if (!["projects", "technical", "contact"].some(e => e === viewName)) {
    changeHash();
    return false;
  } else {
    return true;
  }
}

const changeActive = (viewName, nav) => {
  nav.each((i, e) => e.title === viewName ? $(e).addClass('active') : $(e).removeClass('active'));
};

const changeView = (current, selector) => {
  $(selector === "content" ? '.content-view' : '.technical-view').each((i, e) => !$(e).hasClass(current) ? $(e).hide('fast') : setTimeout(() => $(e).show("fast"), 300));
};

const hashRegex = /#\w+/;

const changeHash = viewName => {
  let current = viewName,
      url = window.location.href,
      ind = url.indexOf("#"),
      base = url.substring(0, ind);
  if (!viewName) {
    window.location.href = base + "#";
  } else if (hashRegex.test(url)) {
    url = base + "#" + current;
    window.location.href = (ind > -1 ? "" : "#") + url;
  } else {
    window.location.href += (ind > -1 ? "" : "#") + current;
  }
};

$('.main-nav').on('click', '.item', function(e) {
  let nav = $('.main-nav a.item');
  changeActive(this.title, nav);
  changeHash(this.title);
  changeView(this.title, "content");
});


$('.technical-list').on('click', '.item', function(e) {
  let anchors = $('.technical-list a.item');
  changeActive(this.title, anchors);
  changeView(this.title, "technical");
});

if (hashRegex.test(window.location.href)) {
  let url = window.location.href;
  let ind = url.indexOf("#") + 1;
  let viewName = url.substring(ind);
  if (!checkValidHash()) {
    changeView("technical", "content");
    changeActive("technical", $('.main-nav a.item'));
  } else {
    changeView(viewName, "content");
    changeActive(viewName, $('.main-nav a.item'));
  }
}
