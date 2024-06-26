chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, { action: "download_image" });
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.imageUrl && request.filename) {
      //
      chrome.downloads.download({
        url: request.imageUrl,
        filename: request.filename
      });
    }
  });  