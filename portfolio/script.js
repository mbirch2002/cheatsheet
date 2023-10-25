document.addEventListener("DOMContentLoaded", function() {
    const clickableDivOne = document.getElementById("one");
    const clickableDivTwo = document.getElementById("two");
    const clickableDivThree = document.getElementById("three");
    const clickableDivFour = document.getElementById("four");
    const clickableDivFive = document.getElementById("five");

    clickableDivOne.addEventListener("click", function() {
        window.location.href = "../cheatsheet/index.html";
    });
    clickableDivTwo.addEventListener("click", function() {
        window.location.href = "../styleGuide/index.html";
    });
    clickableDivThree.addEventListener("click", function() {
        window.location.href = "../teaCozy/index.html";
    });
    clickableDivFour.addEventListener("click", function() {
        window.location.href = "../plantClub/index.html";
    });
    clickableDivFive.addEventListener("click", function() {
        window.location.href = "../mixedMessages/index.html";
    });
});
