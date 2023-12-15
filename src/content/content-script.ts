// console.log("content script start");

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(
//     sender.tab
//       ? "from a content script:" + sender.tab.url
//       : "from the extension"
//   );
//   if (request.greeting === "hello") {
//     sendResponse({ farewell: "goodbye" });
//   }
// });

// (async () => {
//   const response = await chrome.runtime.sendMessage({
//     greeting: "hello",
//   });
//   console.log(response);
// })();
