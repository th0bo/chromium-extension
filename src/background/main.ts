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

let itemList: string[] = [];

chrome.action.onClicked.addListener((tab) => {
  if (tab.id !== undefined) {
    if (itemList.length === 0) {
      itemList = ["cacao", "quinoa"];
      console.log(itemList);
    } else {
      try {
        const message: MyItemMessage = {
          id: "item",
          content: itemList,
        };
        console.log(message);
        chrome.tabs.sendMessage(tab.id, message);
      } catch(e) {
        console.error(e);
      }
    }
  }
});
