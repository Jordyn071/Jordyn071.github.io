$(document).ready(function() {
  // Single Page Nav for highlighting nav items
  $("#MainNav").singlePageNav();


 // Nav sidebar clicking and toggler for smaller screen

  $(".navbar-toggler").on("click", function(e) {
    $(".sidebar-1").toggleClass("show");
    e.stopPropagation();
  });

  $("html").click(function(e) {
    var sidebar = document.getElementById("Sidebar");

    if (!sidebar.contains(e.target)) {
      $(".sidebar-1").removeClass("show");
    }
  });

  $("#MainNav .nav-link").click(function(e) {
    $(".sidebar-1").removeClass("show");
  });
});
