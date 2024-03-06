const baseURL = "https://myusernamestinks.github.io/wdd230/";
const linksURL = "https://myusernamestinks.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.lessons);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getLinks();

function displayLinks(weeks) {
    const linksContainer = document.getElementById("links-container");
    weeks.forEach(week => {
        const lessonDiv = document.createElement("div");
        lessonDiv.classList.add("lesson");

        const lessonHeading = document.createElement("h2");
        lessonHeading.textContent = `Lesson ${week.lesson}`;

        const linksDiv = document.createElement("div");

        week.links.forEach(link => {
            const linkAnchor = document.createElement("a");
            linkAnchor.href = baseURL + link.url.replace();
            linkAnchor.textContent = link.title;
            linksDiv.appendChild(linkAnchor);
        });

        lessonDiv.appendChild(lessonHeading);
        lessonDiv.appendChild(linksDiv);
        linksContainer.appendChild(lessonDiv);
    });
}