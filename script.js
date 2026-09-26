

/* =========================================
   PRACTICE
   ========================================= */

let practiceScore = 0;
let answeredQuestions = 0;

function checkPractice(button, isCorrect) {

    const card = button.closest(".practice-card");
    const result = card.querySelector(".practice-result");

    if (card.dataset.answered === "true") {
        return;
    }

    card.dataset.answered = "true";

    answeredQuestions = answeredQuestions + 1;

    if (isCorrect) {
        practiceScore = practiceScore + 1;
        result.innerHTML = "✅ Correct! Well done!";
    } else {
        result.innerHTML = "❌ Not quite. Keep learning!";
    }

    if (answeredQuestions === 5) {

        const completeBox =
            document.querySelector(".practice-complete");

        if (completeBox) {

            completeBox.style.display = "block";

            completeBox.innerHTML =
                "<h3>🎉 Practice Complete!</h3>" +
                "<p>Your score: <strong>" +
                practiceScore +
                " / 5</strong></p>" +
                "<p>Keep practicing to improve your computer skills.</p>";
        }
    }
}

/* =========================================
   FEEDBACK
   ========================================= */

const feedbackForm = document.getElementById("feedback-form");

if (feedbackForm) {

    feedbackForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const result = document.getElementById("feedback-result");

        result.textContent =
            "Thank you! Your feedback has been submitted.";

        result.style.color = "green";

        feedbackForm.reset();

    });

}

function checkPractice(button, isCorrect) {

    const card = button.closest(".practice-card");
    const result = card.querySelector(".practice-result");

    if (isCorrect) {

        result.innerHTML = "✅ Correct! Well done!";

    } else {

        result.innerHTML = "❌ Not quite. Try again!";

    }

}

const quizForm = document.getElementById("quiz-form");

if (quizForm) {

    quizForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const correctAnswers = {
            q1: "keyboard",
            q2: "monitor",
            q3: "browser",
            q4: "mouse",
            q5: "central-processing-unit",
            q6: "speaker",
            q7: "printer",
            q8: "keyboard",
            q9: "organize",
            q10: "browser"
        };

        let score = 0;

        for (let question in correctAnswers) {

            const selected =
                document.querySelector(
                    'input[name="' + question + '"]:checked'
                );

            if (selected && selected.value === correctAnswers[question]) {
                score++;
            }

        }

        const result = document.getElementById("quiz-result");

        result.innerHTML =
            "<h3>🎉 Quiz Complete!</h3>" +
            "<p>Your score: <strong>" +
            score +
            " / 10</strong></p>";

        if (score >= 8) {

            result.innerHTML +=
                "<p>🌟 Excellent work!</p>";

        } else if (score >= 5) {

            result.innerHTML +=
                "<p>👍 Good job! Keep practicing.</p>";

        } else {

            result.innerHTML +=
                "<p>📚 Keep learning and try again!</p>";

        }

        result.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

}

/* =========================================
   DASHBOARD PROGRESS
   ========================================= */

const dashboardProgress =
    document.getElementById("dashboard-progress");

const dashboardProgressFill =
    document.getElementById("dashboard-progress-fill");

if (dashboardProgress && dashboardProgressFill) {

    const savedProgress =
        localStorage.getItem("learningProgress") || 0;

    dashboardProgress.textContent =
        savedProgress + "%";

    dashboardProgressFill.style.width =
        savedProgress + "%";
}

/* =========================================
   LOGIN
   ========================================= */

const loginForm = document.getElementById("login-form");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value.trim();

        if (username === "" || password === "") {

            alert("Please enter your username and password.");

        } else {

            localStorage.setItem("username", username);

            window.location.href = "dashboard.html";

        }

    });

}

function showLearning(topic) {

    if (topic === "computer") {

        document.getElementById("learning-title").textContent =
            "🖥️ What is a Computer?";

        document.getElementById("learning-text").textContent =
            "A computer is an electronic device that accepts data, processes it, stores it, and produces useful information. Computers are used for education, communication, work, entertainment, banking and many other activities.";

        document.getElementById("learning-info").style.display = "block";
    }
}