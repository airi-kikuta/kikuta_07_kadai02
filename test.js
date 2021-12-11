
$("#button").on("click",function () {

    const janken = Math.floor(Math.random() * 3 + 1)
    console.log(janken);
  
    if (janken === 1) {
      $("#icon").html('<img src="img/gu.png" alt="">');
      console.log("グー");
    }else if (janken === 2) {
      $("#icon").html('<img src="img/choki.png" alt="">');
      console.log("チョキ");
    }else if (janken === 3) {
      $("#icon").html('<img src="img/paa.png" alt="">');
      console.log("パー");
    }
    
  });


