let photos = [
    {
        "source": "herbs.jpg",
        "alt": "Kräuter in einer hellbraunen Holzschale"
    },
    {
        "source": "mountains.png",
        "alt": "Mit Bäumen und Sträuchern bewachsene Berge zwischen Nebelschwarten"
    },
    {
        "source": "sunflower.jpg",
        "alt": "Nahaufnahme einer Sonnenblume von der Seite mit vielen weiteren Sonnenblumen im Hintergrund"
    },
    {
        "source": "alps.jpg",
        "alt": "Ein Bild einer grünen Sommerwiese mit den Alpen im Hintergrund und einem strahlend blauen Himmel"
    },
    {
        "source": "bear.jpg",
        "alt": "Ein Bild eines Bären von Hinten, der auf eine Schneelandschaft blickt"
    },
    {
        "source": "forest.jpg",
        "alt": "Ein Bild eines Waldes mit dünnen, langen Bäumen und reichlich braunem Laub auf dem Boden"
    },
    {
        "source": "toucan.jpg",
        "alt": "Ein Bild eines Toucans, welcher gelb-schwarz gefärbt ist und einen langen gelb-, orange-, blau-, roten Schnabel hat"
    },
    {
        "source": "flower.jpg",
        "alt": "Eine Nahaufnahme der Blüten einer großen, bunt gefärbten Blume"
    },
    {
        "source": "jumping-spider.png",
        "alt": "Eine Nahaufnahme einer bräunlichen Springspinne auf einer roten Blume"
    },
    {
        "source": "milky-way.jpg",
        "alt": "Ein Bild des Nachthimmels, auf dem die Milchstraße sowie links und rechts davon viele Sterne zu sehen sind"
    },
    {
        "source": "railway-track.jpg",
        "alt": "Ein Bild von Eisenbahnschienen entlang eines Waldrandes und dem blauen Himmel in der Ferne"
    },
];

let picWrapperDiv = document.getElementById("picWrapper");
let picDialog = document.getElementById("myDialog");
let currentImg = 0;

function renderImage() {
    for (let i = 0; i < photos.length; i++) {
        picWrapperDiv.innerHTML += buildImageTemplate(i);
    }
}

function openDialog(i) {
    let activeImg = document.getElementById("img"+i);
    let dialogTitle = document.getElementById("dialogTitle");
    let dialogImg = document.getElementById("dialogDescr");

    currentImg = i;

    picDialog.showModal();
    picDialog.classList.add("opened");
    dialogTitle.innerHTML = (photos[i].source)
        .replace(".jpg", "")
        .replace(".png", "");
    dialogImg.innerHTML = `<img src="${activeImg.src}" alt="${activeImg.alt}">`;

}

function closeDialog() {
    picDialog.close();
    picDialog.classList.remove("opened");
}

function buildImageTemplate(i) {
    return `
        <img id="img${i}" onclick="openDialog(${i})" src="./assets/img/${photos[i].source}" alt="${photos[i].alt}">`
}

function nextImg() {
    
    currentImg++;
    
    let dialogTitle = document.getElementById("dialogTitle");
    let dialogImg = document.getElementById("dialogDescr");

    if(currentImg < photos.length) {
        dialogTitle.innerHTML = photos[currentImg].source
        .replace(".jpg", "")
        .replace(".png", "");
        dialogImg.innerHTML = `<img src="./assets/img/${photos[currentImg].source}" alt="${photos[currentImg].alt}">`;
    } else {
        currentImg = 0;
        dialogTitle.innerHTML = photos[currentImg].source
        .replace(".jpg", "")
        .replace(".png", "");
        dialogImg.innerHTML = `<img src="./assets/img/${photos[currentImg].source}" alt="${photos[currentImg].alt}">`;
    }
}

function prevImg() {
    currentImg--;
    
    let dialogTitle = document.getElementById("dialogTitle");
    let dialogImg = document.getElementById("dialogDescr");

    if(currentImg >= 0) {
        dialogTitle.innerHTML = photos[currentImg].source
        .replace(".jpg", "")
        .replace(".png", "");
        dialogImg.innerHTML = `<img src="./assets/img/${photos[currentImg].source}" alt="${photos[currentImg].alt}">`;
    } else {
        currentImg = photos.length - 1;
        dialogTitle.innerHTML = photos[currentImg].source
        .replace(".jpg", "")
        .replace(".png", "");
        dialogImg.innerHTML = `<img src="./assets/img/${photos[currentImg].source}" alt="${photos[currentImg].alt}">`;
    }
}

