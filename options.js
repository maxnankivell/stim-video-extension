const input = document.getElementById('url-input');
const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', () => {
    const url = input.value;
    chrome.storage.sync.set({
        url
    })
})

chrome.storage.sync.get(['url'], (res) => {
    input.value = res.name ?? ``;
})