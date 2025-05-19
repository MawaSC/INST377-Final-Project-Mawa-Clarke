document.getElementById("searchButton").addEventListener("click", async () => {
    const word = document.getElementById("searchInput").value.trim();
    const selectedLang = document.getElementById("languageSelect").value;

    if (!word) {
        alert("Please enter a word.");
        return;
    }

    const outputD = document.getElementById("output");
    outputD.innerHTML = "Searching...";

    try {
        const sectionR = await fetch(`https://en.wiktionary.org/w/api.php?action=parse&page=${encodeURIComponent(word)}&prop=sections&format=json&origin=*`);
        const sectionD = await sectionR.json();

        if(!sectionD.parse || !sectionD.parse.sections) {
            outputD.innerHTML = "Word not found.";
            return;
        }

        const sections = sectionD.parse.sections;
        const langSection = sections.find(sec => sec.line.toLowerCase() === selectedLang.toLowerCase());

        if(!langSection) {
            outputD.innerHTML = `No "${selectedLang}" section found for ${word}".`;
            return;
        }

        const sectionIndex = langSection.index;
        const contentR = await fetch(`https://en.wiktionary.org/w/api.php?action=parse&page=${encodeURIComponent(word)}&section=${sectionIndex}&prop=text&format=json&origin=*`);
        const contentD = await contentR.json();

        const htmlContent = contentD.parse.text["*"];
        outputD.innerHTML = htmlContent;

    } catch(error) {
        outputD.innerHTML = `Error: ${error.message}`;
    }
});