/*Code for Translating Text*/

async function translateText(text, sourceLang, targetLang) {
    const langResponse = await fetch("https://api.translateplus.io/v1/translate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "ff4f048a0e5ce99dc0f3d799794967cec0b9b7d2"
        },
        body: JSON.stringify({
            text: text,
            source: sourceLang, //sourceLang === "auto" ? undefined : sourceLang,
            target: targetLang
        })
    });

    const data = await langResponse.json();
    return data.translations.translation;

}

document.getElementById("trans").addEventListener("click", async () => {
    const text = document.getElementById("inputText").value.trim();
    const sourceLang = document.getElementById("sourceLang").value;
    const targetLang = document.getElementById("targetLang").value;

    if (!text) return;

    try {
        const translated = await translateText(text, sourceLang, targetLang);
        document.getElementById("outputText").value = translated;
    } catch (err) {
        console.error(err);
        document.getElementById("outputText").value = "Error translating...";
    }
});

/* Code for detecting text language*/

document.getElementById("detect").addEventListener("click", async () => {
    const text = document.getElementById("inputTextDetect").value.trim();
    const display = document.getElementById("langOutput");

    if (!text) {
        display.textContent = "Enter text to be detected";
        return;
    }

    try {
        const detectResponse = await fetch("https://api.translateplus.io/v1/language_detect", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": "ff4f048a0e5ce99dc0f3d799794967cec0b9b7d2"
            },
            body: JSON.stringify({ text })
        });

        const data = await detectResponse.json();
        console.log("Full API response:", data)

        const languageNames = {
            en: "English",
            fr: "French",
            es: "Spanish",
            de: "German",
            ja: "Japanese",
            ko: "Korean",
            "zh-CN": "Chinese (Simplified)",
            tl: "Tagalog"
        };
        const langCode = data.language_detection.language;
        const detectedLang = languageNames[langCode] || langCode;

        display.textContent = `Detected Language: ${detectedLang}`;
} catch(error) {
    console.error("Error detecting language:", error);
    display.textContent = "Failed to detect language";
}

});

/*Code for Flashcards*/

document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".flashcard-swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: false,
    });

    document.getElementById("addFlashcard").addEventListener("click", () => {
        const front = document.getElementById("flashcardFront").value.trim();
        const back = document.getElementById("flashcardBack").value.trim();
        if (!front || !back) return;
        console.log("Front:", front, "Back:", back);
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `
            <div class="card-inner">
                <div class="card-front"><strong>Q:</strong> ${front}</div>
                <div class="card-back"><strong>A:</strong> ${back}</div>
            </div>
        `;
        document.getElementById("flashcardWrapper").appendChild(slide);
        swiper.update();

        //Add sound
        //addSound.play();

        //Cute alert
        Swal.fire({
            title: '🎉 Flashcard Added!',
            text: 'Your flashcard was saved successfully!',
            icon: 'success',
            confirmButtonText: 'Yay!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    });

    document.addEventListener("click", (e) => {
        const card = e.target.closest(".card-inner");
        if(card) {
            card.classList.toggle("flipped");
        }
    });
});