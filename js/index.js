document.addEventListener("DOMContentLoaded", () => {
    const progressCircles = document.querySelectorAll(".progress-circle");

    progressCircles.forEach(circle => {
        const progress = circle.getAttribute("data-progress");
        const circleProgress = circle.querySelector(".circle-progress");
        const circleText = circle.querySelector(".circle-text");
        const radius = circleProgress.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        circleProgress.style.strokeDasharray = `${circumference} ${circumference}`;
        circleProgress.style.strokeDashoffset = circumference;

        let progressValue = 0;
        const interval = setInterval(() => {
            if (progressValue >= progress) {
                clearInterval(interval);
            } else {
                progressValue++;
                const offset = circumference - (progressValue / 100) * circumference;
                circleProgress.style.strokeDashoffset = offset;
                circleText.textContent = `${progressValue}%`;
            }
        }, 20);
    });
});