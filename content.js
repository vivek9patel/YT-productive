var mainSection = document.getElementsByTagName("ytd-rich-item-renderer");
var videos = document.getElementsByTagName("ytd-rich-grid-media");
var shorts = document.getElementsByTagName("ytd-rich-grid-slim-media");
var shortsAfterVideo = document.getElementsByTagName("ytd-reel-item-renderer");
var shortsVideo = document.getElementsByTagName("ytd-reel-video-renderer");
var posts = document.getElementsByTagName("ytd-post-renderer");
var sideMenu = document.getElementsByTagName("ytd-guide-section-renderer");
var sideMenuLinks = document.getElementsByTagName("ytd-guide-entry-renderer");
var sideRecommendedSection = document.getElementsByTagName(
  "ytd-compact-video-renderer"
);
var comments = document.getElementsByTagName("ytd-comments");

var endscreen = document.getElementsByClassName("ytp-endscreen-content");

var hideAllVideos = function () {
  for (let i = 0; i < mainSection.length; i++) {
    mainSection[i].style.cursor = "not-allowed";
  }

  for (let i = 0; i < videos.length; i++) {
    videos[i].style.pointerEvents = "none";
    videos[i].style.textDecoration = "none";
    videos[i].style.filter = "blur(5px)";
  }

  for (let i = 0; i < shortsAfterVideo.length; i++) {
    shortsAfterVideo[i].style.pointerEvents = "none";
    shortsAfterVideo[i].style.textDecoration = "none";
    shortsAfterVideo[i].style.filter = "blur(5px)";
  }

  for (let i = 0; i < shorts.length; i++) {
    shorts[i].style.pointerEvents = "none";
    shorts[i].style.textDecoration = "none";
    shorts[i].style.filter = "blur(5px)";
  }

  for (let i = 0; i < posts.length; i++) {
    posts[i].style.pointerEvents = "none";
    posts[i].style.textDecoration = "none";
    posts[i].style.filter = "blur(5px)";
  }

  /* side recommended section */
  for (let i = 0; i < sideRecommendedSection.length; i++) {
    sideRecommendedSection[i].style.pointerEvents = "none";
    sideRecommendedSection[i].style.textDecoration = "none";
    sideRecommendedSection[i].style.filter = "blur(5px)";
  }
  //   auto playing videos
  let autoPlayingVideos = document.getElementsByClassName(
    "ytd-compact-autoplay-renderer"
  );
  for (let i = 0; i < autoPlayingVideos.length; i++) {
    if (autoPlayingVideos[i].tagName == "YTD-COMPACT-VIDEO-RENDERER") {
      autoPlayingVideos[i].style.pointerEvents = "auto";
      autoPlayingVideos[i].style.textDecoration = "initial";
      autoPlayingVideos[i].style.filter = "blur(0px)";
    }
  }
  //shorts video
  for (let i = 0; i < shortsVideo.length; i++) {
    shortsVideo[i].style.pointerEvents = "none";
    shortsVideo[i].style.textDecoration = "none";
    shortsVideo[i].style.filter = "blur(10px)";
    let video = shortsVideo[i].getElementsByTagName("video");
    if (video.length>0) {
      video[0].pause();
      video[0].setAttribute("onplay","pause()");
    }
  }

  //endscreen recommended videos
  if (endscreen.length>0) {
    endscreen[0].style.pointerEvents = "none";
    endscreen[0].style.textDecoration = "none";
    endscreen[0].style.filter = "blur(5px)";
  }

};

var productiveModeOn = function () {
  hideAllVideos();

  for (let i = 0; i < sideMenu.length; i++) {
    sideMenu[i].style.cursor = "not-allowed";
  }
  for (let i = 0; i < sideMenuLinks.length; i++) {
    sideMenuLinks[i].style.pointerEvents = "none";
    sideMenuLinks[i].style.textDecoration = "none";
    sideMenuLinks[i].style.filter = "blur(5px)";
  }

  /* comment section */
  for (let i = 0; i < comments.length; i++) {
    comments[i].style.pointerEvents = "none";
    comments[i].style.textDecoration = "none";
    comments[i].style.filter = "blur(5px)";
  }
};

var productiveModeOff = function () {
  for (let i = 0; i < mainSection.length; i++) {
    mainSection[i].style.cursor = "default";
  }

  for (let i = 0; i < videos.length; i++) {
    videos[i].style.pointerEvents = "auto";
    videos[i].style.textDecoration = "initial";
    videos[i].style.filter = "blur(0px)";
  }

  for (let i = 0; i < shortsAfterVideo.length; i++) {
    shortsAfterVideo[i].style.pointerEvents = "auto";
    shortsAfterVideo[i].style.textDecoration = "initial";
    shortsAfterVideo[i].style.filter = "blur(0px)";
  }
  
  for (let i = 0; i < shorts.length; i++) {
    shorts[i].style.pointerEvents = "auto";
    shorts[i].style.textDecoration = "initial";
    shorts[i].style.filter = "blur(0px)";
  }

  for (let i = 0; i < posts.length; i++) {
    posts[i].style.pointerEvents = "auto";
    posts[i].style.textDecoration = "initial";
    posts[i].style.filter = "blur(0px)";
  }

  for (let i = 0; i < sideMenu.length; i++) {
    sideMenu[i].style.cursor = "default";
  }
  for (let i = 0; i < sideMenuLinks.length; i++) {
    sideMenuLinks[i].style.pointerEvents = "auto";
    sideMenuLinks[i].style.textDecoration = "initial";
    sideMenuLinks[i].style.filter = "blur(0px)";
  }

  /* side recommended section */
  for (let i = 0; i < sideRecommendedSection.length; i++) {
    sideRecommendedSection[i].style.pointerEvents = "auto";
    sideRecommendedSection[i].style.textDecoration = "initial";
    sideRecommendedSection[i].style.filter = "blur(0px)";
  }
  /* comment section */
  for (let i = 0; i < comments.length; i++) {
    comments[i].style.pointerEvents = "auto";
    comments[i].style.textDecoration = "initial";
    comments[i].style.filter = "blur(0px)";
  }

  for (let i = 0; i < shortsVideo.length; i++) {
    shortsVideo[i].style.pointerEvents = "auto";
    shortsVideo[i].style.textDecoration = "initial";
    shortsVideo[i].style.filter = "blur(0px)";
    let video = shortsVideo[i].getElementsByTagName("video");
    if (video.length>0) {
      video[0].removeAttribute("onplay");
    }
  }

  //endscreen recommended videos
  if (endscreen.length>0) {
    endscreen[0].style.pointerEvents = "auto";
    endscreen[0].style.textDecoration = "initial";
    endscreen[0].style.filter = "blur(0px)";
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
