const input = document.getElementById('url-input');
const saveButton = document.getElementById('save-button');
const minecraftParkourButton = document.getElementById('minecraft-parkour');
const subwaySurferButton = document.getElementById('subway-surfer');

chrome.storage.sync.get(['url'], (res) => {
    input.value = res.url ?? ``;
})

saveButton.addEventListener('click', () => {
    const url = input.value;
    chrome.storage.sync.set({
        url
    })
})

minecraftParkourButton.addEventListener('click', () => {
    const url = `https://www.youtube.com/watch?v=a5S-YhfjZdI`;
    chrome.storage.sync.set({
        url
    })
})

subwaySurferButton.addEventListener('click', () => {
    const url = `https://www.youtube.com/watch?v=LN_OJIsheyk`;
    chrome.storage.sync.set({
        url
    })
})