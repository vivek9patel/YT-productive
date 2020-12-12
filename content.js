var mainSection = document.getElementsByTagName("ytd-rich-item-renderer");
var videos = document.getElementsByTagName("ytd-rich-grid-media");
var sideMenu = document.getElementsByTagName("ytd-guide-section-renderer");
var sideMenuLinks = document.getElementsByTagName("ytd-guide-entry-renderer");
var sideRecommendedSection = document.getElementsByTagName(
  "ytd-compact-video-renderer"
);
var comments = document.getElementsByTagName("ytd-comments");

var hideAllVideos = function () {
  for (var i = 0; i < mainSection.length; i++) {
    mainSection[i].style.cursor = "not-allowed";
  }

  for (var i = 0; i < videos.length; i++) {
    videos[i].style.pointerEvents = "none";
    videos[i].style.textDecoration = "none";
    videos[i].style.filter = "blur(5px)";
  }
  /* side recommended section */
  for (var i = 0; i < sideRecommendedSection.length; i++) {
    sideRecommendedSection[i].style.pointerEvents = "none";
    sideRecommendedSection[i].style.textDecoration = "none";
    sideRecommendedSection[i].style.filter = "blur(5px)";
  }
  //   auto playing videos
  let autoPlayingVideos = document.getElementsByClassName(
    "ytd-compact-autoplay-renderer"
  );
  for (var i = 0; i < autoPlayingVideos.length; i++) {
    if (autoPlayingVideos[i].tagName == "YTD-COMPACT-VIDEO-RENDERER") {
      autoPlayingVideos[i].style.pointerEvents = "auto";
      autoPlayingVideos[i].style.textDecoration = "initial";
      autoPlayingVideos[i].style.filter = "blur(0px)";
    }
  }
};

var productiveModeOn = function () {
  hideAllVideos();

  for (var i = 0; i < sideMenu.length; i++) {
    sideMenu[i].style.cursor = "not-allowed";
  }
  for (var i = 0; i < sideMenuLinks.length; i++) {
    sideMenuLinks[i].style.pointerEvents = "none";
    sideMenuLinks[i].style.textDecoration = "none";
    sideMenuLinks[i].style.filter = "blur(5px)";
  }

  /* comment section */
  for (var i = 0; i < comments.length; i++) {
    comments[i].style.pointerEvents = "none";
    comments[i].style.textDecoration = "none";
    comments[i].style.filter = "blur(5px)";
  }
};

var productiveModeOff = function () {
  for (var i = 0; i < mainSection.length; i++) {
    mainSection[i].style.cursor = "default";
  }

  for (var i = 0; i < videos.length; i++) {
    videos[i].style.pointerEvents = "auto";
    videos[i].style.textDecoration = "initial";
    videos[i].style.filter = "blur(0px)";
  }

  for (var i = 0; i < sideMenu.length; i++) {
    sideMenu[i].style.cursor = "default";
  }
  for (var i = 0; i < sideMenuLinks.length; i++) {
    sideMenuLinks[i].style.pointerEvents = "auto";
    sideMenuLinks[i].style.textDecoration = "initial";
    sideMenuLinks[i].style.filter = "blur(0px)";
  }

  /* side recommended section */
  for (var i = 0; i < sideRecommendedSection.length; i++) {
    sideRecommendedSection[i].style.pointerEvents = "auto";
    sideRecommendedSection[i].style.textDecoration = "initial";
    sideRecommendedSection[i].style.filter = "blur(0px)";
  }
  /* comment section */
  for (var i = 0; i < comments.length; i++) {
    comments[i].style.pointerEvents = "auto";
    comments[i].style.textDecoration = "initial";
    comments[i].style.filter = "blur(0px)";
  }
};

var init = function () {
  chrome.storage.sync.get("hide", function (data) {
    if (data.hide) {
      productiveModeOn();
    } else {
      productiveModeOff();
    }
  });
};

//incoming message from popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command === "hideVids") {
    productiveModeOn();
  } else if (request.command === "showVids") {
    productiveModeOff();
  } else {
    init();
  }
  sendResponse({ result: "success" });
});

window.addEventListener("load", (event) => {
  init();
});

window.addEventListener("scroll", () => {
  init();
});
