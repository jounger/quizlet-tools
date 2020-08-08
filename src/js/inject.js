import { receivedMessage } from "./modules/chrome.mock.js";

(function () {
  console.log("CONTENT!");
  // your page initialization code here
  // the DOM will be available here
  chrome.extension.onMessage.addListener(
    async (request, sender, sendResponse) => {
      console.log(request.message)
      chrome.runtime.sendMessage({ message: input_response });
    }
  );
})();