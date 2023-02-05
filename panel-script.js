sizeTheVideo();
window.onresize = () => {
    sizeTheVideo();
}

function sizeTheVideo() {
    const videoWrapper = document.getElementById("iframe-wrapper");

    videoWrapper.style.height = `${window.innerHeight}px`
    videoWrapper.style.width = `${window.innerWidth}px`
}

chrome.storage.onChanged.addListener((changes, _namespace) => {
    const video = document.getElementById("iframe");

    if (!changes.url.newValue) {
        video.src = "https://www.youtube.com/embed/a5S-YhfjZdI?playlist=a5S-YhfjZdI&autoplay=1&mute=1&loop=1&showinfo=0&controls=1&vq=hd1080"
        return;
    }

    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const url = changes.url.newValue

    var match = url.match(regExp);
    if (match && match[7].length == 11) {
        video.src = `https://www.youtube.com/embed/${match[7]}?playlist=${match[7]}&autoplay=1&mute=1&loop=1&showinfo=0&controls=1&vq=hd1080`
    } else {
        video.src = "https://www.youtube.com/embed/a5S-YhfjZdI?playlist=a5S-YhfjZdI&autoplay=1&mute=1&loop=1&showinfo=0&controls=1&vq=hd1080"
    }
});