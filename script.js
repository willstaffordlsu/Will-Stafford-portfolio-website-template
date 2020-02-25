$("#icon1").hover(function() {
    $(this).css({ width: "100%", height: "100%" });
        }, function () {
            $(this).css({ width: "auto", height: "auto"});
});

$("#icon2").hover(function() {
    $(this).css({ width: "100%", height: "100%" });
        }, function () {
            $(this).css({ width: "auto", height: "auto"});
});

$("#icon3").hover(function() {
    $(this).css({ width: "100%", height: "100%" });
        }, function () {
            $(this).css({ width: "auto", height: "auto"});
});

$("#icon4").hover(function() {
    $(this).css({ width: "100%", height: "100%" });
        }, function () {
            $(this).css({ width: "auto", height: "auto"});
});

$("#icon5").hover(function() {
    $(this).css({ width: "100%", height: "100%" });
        }, function () {
            $(this).css({ width: "auto", height: "auto"});
});

function gitRepos() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            results = JSON.parse(this.responseText);
            document.getElementById("repo").innerHTML = results[0].name;
        }
    }
    xhttp.open("GET", "https://api.github.com/users/willstaffordlsu/repos", true);
    xhttp.send();
}