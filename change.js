// // This code is only used to remember theme selection
// const themeSwitch = document.querySelector('.theme-switch');
// themeSwitch.checked = localStorage.getItem('switchedTheme') === 'true';

// themeSwitch.addEventListener('change', function (e) {
//   if(e.currentTarget.checked === true) {
//     // Add item to localstorage
//     localStorage.setItem('switchedTheme', 'true');
//   } else {
//     // Remove item if theme is switched back to normal
//     localStorage.removeItem('switchedTheme');
//   }
// });
// function change(){
//     document.getElementById("imgchange").src = "./image/unnamed.png";
// }
const nav = document.getElementById('nav');
function toggleDarkLightMode(mode) {
    nav.style.backgroundColor =
      mode === DARK_THEME ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor =
      mode === DARK_THEME ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    // Icon text
    toggleIcon.children[0].textContent =
      mode === DARK_THEME ? 'Dark Mode' : 'Light Mode';
    // Change icon
    mode === DARK_THEME
      ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
      : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  
    // Changing images
    mode === DARK_THEME ? imageMode('dark') : imageMode('light');
  }



