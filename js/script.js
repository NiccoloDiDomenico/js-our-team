// Team members
const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

console.log(`Team Members:`, teamMembers);


//   ELEMENTS
const teamMembersGridElement = document.getElementById("team-members-grid")
const addMemberFormElement = document.getElementById("add-member-form")

console.log(teamMembersGridElement, addMemberFormElement);

// INPUTS
const inputs = document.querySelectorAll("#add-member-form input")
const nameInputs = document.getElementById("name")
const roleInputs = document.getElementById("role")
const emailInputs = document.getElementById("email")
const fileInputs = document.getElementById("file")

console.log(inputs, nameInputs, roleInputs, emailInputs, fileInputs);



// FUNCTIONS

// Cards section
// Funzione che crea la card membro
const createCard = ({ name, role, email, img }) => {
    return `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-4">
                    <img src="./${img}" alt="Profile photo" class="img-fluid rounded-start" style="height: 100%">
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${role}</p>
                        <p class="card-text"><small class="text-info">${email}</small></p>
                    </div>
                </div>
            </div>
        </div>
    `
};
// console.log(createCard());

// Funzione che aggiunge le cards dei membri nell'HTML
const renderTeamMembersCards = () => {
    let items = "";

    for (let i = 0; i < teamMembers.length; i++) {
        const currentMembers = teamMembers[i];
        // console.log(currentMembers);

        const card = createCard(teamMembers[i]);
        items += card;
        // console.log(items);

    }
    teamMembersGridElement.innerHTML = items;
};

// Form section

const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);

    // Ottengo i valori degli input
    const name = nameInputs.value.trim()
    const role = roleInputs.value.trim()
    const email = emailInputs.value.trim()
    const image = fileInputs.value.trim()

    console.log(name, role, email, image);

    // Creo un nuovo ogetto con le proprietà dei valori presi prima
    const newMember = {
        name,
        role,
        email,
        image
    }

    // Aggiungo il nuovo ogetto all'array principale
    teamMembers.push(newMember);
    console.log(teamMembers);

    renderTeamMembersCards();

    // Reset del form
    addMemberFormElement.reset();
}

// LOGIC
renderTeamMembersCards();

addMemberFormElement.addEventListener("submit", handleSubmit);
