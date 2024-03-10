const linksURL = "https://myusernamestinks.github.io/wdd230/data/members.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  return data.members;
}

async function displayMembers(view) {
  const members = await getLinks();
  const membersContainer = document.getElementById("members-container");

  members.forEach((member) => {
    const memberBox = document.createElement("div");
    memberBox.classList.add("member-box");

    if (view === 'grid') {
      memberBox.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
      `;
    } else if (view === 'list') {
      memberBox.innerHTML = `
        <h3>${member.name}</h3>
        <p>Address: ${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
      `;
    }

    membersContainer.appendChild(memberBox);
  });
}

function toggleView(view) {
  const membersContainer = document.getElementById("members-container");

  membersContainer.innerHTML = '';

  membersContainer.classList.toggle('list-view', view === 'list');

  displayMembers(view);
}

displayMembers('grid');

