chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ hide: true }, function () {
    console.log("Hide YT-Video is on");
  });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { command: "init" }, // message to be sent
      function (response) {
        console.log(response.result);
      }
    );
  });
});
