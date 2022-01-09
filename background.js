chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
        if (changeInfo.url.includes("twitter")) {
            let url = chrome.runtime.getURL("focus.html");
            let tab = chrome.tabs.create({ url });
        }
    }
})