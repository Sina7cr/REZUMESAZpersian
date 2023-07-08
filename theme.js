        function myFunction2() {
         var element = document.body;
         var element2 = document.getElementById('h2');
         var element3 = document.getElementById('h1');
         var element4 = document.getElementById('p');
         var element5 = document.getElementById('form');
        //  var element5 = document.getElementsByClassName('eia');

        //  var element5 = div.getElementsByTagName("a");
        //  for (let i = 0; i < element5.length; i++) {
        //     element5[i].style.color = "black";
        //     element5[i].style.backgroundColor = "rgb(219, 216, 216)";
        //  }
         element.classList.toggle("darkmode");
         element2.classList.toggle("darkmodeh2");
         element3.classList.toggle("darkmode3");
         element4.classList.toggle("darkmode4");
         element5.classList.toggle("darkmodeform");
      }
