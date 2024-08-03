let themes = document.querySelector(".themes");
let selection = document.querySelector("#selection");

//این شرط این را در نظر می گیره که اگر کلید تم در لوکال استوریج بود  همون باشه و اگر نبود این چیزی که بهش دادیم باشه
let selectTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark";
selection.textContent = selectTheme;
document.body.className = selectTheme;

Array.from(themes.children).forEach(theme => {
    theme.addEventListener("click", e => {
        let color = e.target.dataset.color;
        document.body.className = color;
        selection.textContent = color;
        //با این روش اطلاعات را در لوکال استوریج ذخیره می کنیم
        localStorage.setItem("theme", color)
    })
});