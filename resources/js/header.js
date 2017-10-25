var header = null, content = null, oldHTML = null;

window.addEventListener("load", function() {
    header = document.getElementById('header');
    content = document.getElementById('content');
});

window.addEventListener("scroll", isHeaderOutOfView);

function isHeaderOutOfView() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollTop != null && content != null && scrollTop - content.offsetTop > 0 && oldHTML == null) {
        oldHTML = header.innerHTML;
        header.innerHTML = "<span class=\"bigTitle\">A<span class=\"bold\">R</span></span>" +
            "<span class=\"smallHeader\"><a href=\"index.html\">Home</a> | <a href=\"linkedin.html\">LinkedIn</a> | " +
            "<a href=\"resume.html\">Résumé</a> | <a href=\"spotify.html\">Spotify</a></span>";
        header.style.textAlign = "left";
        header.classList.add("shadow");
    } else if (scrollTop != null && content != null && scrollTop - content.offsetTop <= 0 && oldHTML != null) {
        header.innerHTML = oldHTML;
        oldHTML = null;
        header.style.textAlign = "center";
        header.classList.remove("shadow");
    }
}
