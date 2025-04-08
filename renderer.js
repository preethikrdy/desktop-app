const slides = document.querySelectorAll('.question-slide');
let currentSlide = 0;

function showSlide(index){
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

document.getElementById('next-btn').addEventListener('click', () => {
    if(currentSlide < slides.length - 1){
        currentSlide++;
        showSlide(currentSlide);
    }
});

document.getElementById("quiz-form").addEventListener("submit", function(e){
    e.preventDefault();

    const form = e.target;
    const answers = {};

    for(let i = 1; i <= 5; i++){
        const selected = form.querySelector(`input[name="q${i}"]:checked`);
        if(selected){
            answers[`q${i}`] = selected.value;
        }
    }

    const counts = {};
    Object.values(answers).forEach(letter => {
        counts[letter] = (counts[letter] || 0) + 1;
    });

    let maxCount = 0;
    let mostCommon = null;
    for(let letter in counts){
        if(counts[letter] > maxCount){
            maxCount = counts[letter];
            mostCommon = letter;
        }
    }

    const resultsMap = {
        a: "Mars",
        b: "Luka",
        c: "Sammy",
        d: "Kobe",
        e: "Clover",
        f: "Duke"
    };

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = resultsMap[mostCommon] || "Oops! Answer all the questions please!";
    resultDiv.classList.remove("hidden");
});

showSlide(currentSlide);
