const countBtn = document.getElementById("countBtn");

countBtn.addEventListener('click', () => {
    let input = document.getElementById('input').value;
    // console.log(vowelCount(input));
    alert(vowelCount(input));
});

function vowelCount(str) {
    var count = 0;
    var vowels = "aeiouAEIOU";
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) > -1) {
            count++;
        }
    }
    return "Your texts contains " + count + " vowels in it.";
};