document.addEventListener("DOMContentLoaded", function () {
  var hideVideos = document.getElementById("hideVideos");
  chrome.storage.sync.get("hide", function (data) {
    hideVideos.checked = data.hide;
  });
  hideVideos.onchange = function (element) {
    let value = this.checked;
    chrome.storage.sync.set({ hide: value }, function () {
      console.log("The value is" + value);
    });
    if (value) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { command: "hideVids", hide: value }, // message to be sent
          function (response) {
            console.log(response.result);
          }
        );
      });
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { command: "showVids", hide: value }, // message to be sent
          function (response) {
            console.log(response.result);
          }
        );
      });
    }
  };
});
