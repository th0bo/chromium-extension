console.log("service worker script start");

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(
//     sender.tab
//       ? "from a content script:" + sender.tab.url
//       : "from the extension"
//   );
//   if (request.greeting === "hello") {
//     sendResponse({ farewell: "goodbye" });
//   }
//   (async () => {
//     const [tab] = await chrome.tabs.query({
//       active: true,
//       lastFocusedWindow: true,
//     });
//     const response = await chrome.tabs.sendMessage(tab.id as number, {
//       greeting: "hello",
//     });
//     console.log(response);
//   })();
// });

chrome.action.onClicked.addListener((tab) => {
  console.log("tost");
  if (tab.id !== undefined) {
    const message: MyItemMessage = {
      id: "item",
      content: ["raisin", "avoine"],
    };
    chrome.tabs.sendMessage(tab.id, message);
  }
});
