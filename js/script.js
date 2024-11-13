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

console.log(teamMembersGridElement);


// FUNCTIONS

// Funzione che crea la card membro
const createCard = ({ name, role, email, img }) => {
    return `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-lg-4">
                    <img src="./${img}" alt="Profile photo">
                </div>
                <div class="col-lg-8">
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

// LOGIC
renderTeamMembersCards();

