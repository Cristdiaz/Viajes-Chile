$(document).ready(function () {


  /*tooltip para los íconos de la sección "Quienes somos" */
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  $(document).ready(function () {
    $(".card-title").click(function () {
      $(this).hide();
    });
  });

  
})

