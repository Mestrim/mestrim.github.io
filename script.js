document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("homeButton").addEventListener("click", function() {
        window.location.href = "index.html";
    });

    document.getElementById("myWorks").addEventListener("click", function() {
        window.location.href = "myWorks.html";
    });

    document.getElementById("contact").addEventListener("click", function() {
        window.location.href = "contact.html";
    });
    document.getElementById("about").addEventListener("click", function() {
        window.location.href = "about.html";
    });


    document.getElementById("copyEmail").addEventListener("click", function() {
        var copyText = document.getElementById("myEmail").textContent;

        navigator.clipboard.writeText(copyText).then(function() {
            alert("Copied the text: " + copyText);
        }).catch(function(err) {
            console.error('Unable to copy text', err);
        });
    });

});
