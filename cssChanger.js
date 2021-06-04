// #2b2b2b  custom background color
// #ebebeb custom text color
// #29303b standard udemy background color

// todo - adjust colors of the course content side panel, adjust colors for Q&A, fix Course Content tab

$(document).ready(function () {
  $("body, .section--section--BukKG, footer *, .udlite-tab-content").css(
    "background-color",
    "#29303b"
  );
  $(".udlite-in-udheavy *, .udlite-text-xs *, .ellipsis *, footer *").css(
    "color",
    "#ebebeb"
  );
});
