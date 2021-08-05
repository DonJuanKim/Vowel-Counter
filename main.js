const countBtn = document.getElementById("countBtn");

countBtn.addEventListener('click', () => {
    let input = document.getElementById('input').value;
    // console.log(vowelCount(input));
    vowelCount(input);
});

function vowelCount(str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
};