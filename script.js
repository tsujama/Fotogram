let photos = [
    {
        "source": "herbs.jpg",
        "alt": "Kräuter in einer dunklen Schale"
    },
    {
        "source": "mountains.png",
        "alt": "Berge"
    },
    {
        "source": "sunflower.jpg",
        "alt": "Sonnenblume"
    },
    {
        "source": "alps.jpg",
        "alt": "Ein Bild der Alpen"
    },
    {
        "source": "bear.jpg",
        "alt": "Ein Bild eines Bären"
    },
    {
        "source": "forest.jpg",
        "alt": "Ein Bild eines Waldes im Herbst"
    },
    {
        "source": "toucan.jpg",
        "alt": "Ein Bild eines Toucans"
    },
    {
        "source": "flower.jpg",
        "alt": "Eine Nahaufnahme einer bunten Blume"
    },
    {
        "source": "jumping-spider.png",
        "alt": "Ein Bild einer Springspinne auf einer Blume"
    },
    {
        "source": "milky-way.jpg",
        "alt": "Ein Bild des Nachthimmels mit vielen Sternen"
    },
    {
        "source": "railway-track.jpg",
        "alt": "Ein Bild von Eisenbahnschienen"
    },
];

let picWrapperDiv = document.getElementById("picWrapper");
let picDialog = document.getElementById("myDialog");

function renderImage() {
    for (let i = 0; i < photos.length; i++) {
        picWrapperDiv.innerHTML += buildImageTemplate(i);
    }
}

function openDialog() {
    picDialog.showModal();
    picDialog.classList.add("opened");
}

function closeDialog() {
    picDialog.close();
    picDialog.classList.remove("opened");
}

function buildImageTemplate(i) {
    return `
        <img onclick="${openDialog()}" src="./assets/img/${photos[i].source}" alt="${photos[i].alt}">`
}

