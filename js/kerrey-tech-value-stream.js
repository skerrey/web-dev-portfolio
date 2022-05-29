$(document).ready(function () {
  $(".grid-container-devops").mousewheel(function (e, delta) {
    this.scrollLeft -= delta*50;
    e.preventDefault();
  });
});

