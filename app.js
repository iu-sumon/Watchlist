var trs = document.getElementsByClassName('bidAndask-row');

$(".arrow-icon2").click(function () {

  $(this).toggleClass("fa-rotate-180");

  if ($(this).hasClass("fa-rotate-180")) {

    for (var i = 0; i < trs.length; i++) {
      if (i < 3) {
        trs[i].style.display = 'table-row';
      } else {
        trs[i].style.display = 'none';
      }
    }
  } 
  else {
    $(".bidAndask-row").hide();
  }

});


//Added color timeAndsales table
var bidRows = document.querySelectorAll('.set-row-color1');

bidRows.forEach((rw) => {

  if (rw.classList.contains('set-row-color1')) {

    rw.style.color = '#0CAF82';
  }

});

var askRows = document.querySelectorAll('.set-row-color2');

askRows.forEach((rw) => {

  if (rw.classList.contains('set-row-color2')) {

    rw.style.color = '#FE3957';
  }

});

var premium = "FALSE"
var premiumColumns=7;

for(var i=1; i<10 ; i++)
{
    if(premium == "TRUE")
    {
       console.log('premium true card')
    }
    else
    {
       
        if(i<premiumColumns)
        {
            console.log(i + 'show visible')
        }
        else
        {
          console.log(i + 'show blur')
        }
      
    }
}
 