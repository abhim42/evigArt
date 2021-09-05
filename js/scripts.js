$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

var imageArray = []

const setImg = () => {
  var mainRow = document.getElementById("mainRow");
  var div = document.createElement("div");
  div.classList.add("col-md-3");
  var cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "bg-transparent", "border-0");
  cardDiv.innerHTML =
    "<img src='images/charcol.jpeg' class='card-img-top' width='100%' height='348.09px' style='object-fit: cover;'>";
  var cardDescDiv = document.createElement("div");
  cardDescDiv.classList.add("card-body", "custom-padding");
  cardDescDiv.innerHTML =
    "<h5 class='card-title text-center' style='color: #ba431d!important;'>Charcol Drawing</h5>";
  mainRow.appendChild(div);
  div.appendChild(cardDiv);
  cardDiv.appendChild(cardDescDiv);
  console.log(div);
};

setImg();
//  <div class="col-md-3">
//                     <div class="card bg-transparent border-0">
//                         <img src="images/charcol.jpeg" class="card-img-top" alt="..." width="100%" height="348.09px"
//                             style="object-fit: cover;">
//                         <div class="card-body" style="padding: 1.25rem 0px !important;">
//                             <h5 class="card-title text-center" style="color: #ba431d!important ; ">
//                                 Charcol Drawing</h5>
//                         </div>

//                     </div>
//                 </div>
