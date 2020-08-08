function sendMessage(input_message) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { message: input_message });
  });
}

function receivedMessage(input_response, callback) {
  chrome.runtime.onMessage.addListener(
    async (request, sender, sendResponse) => {
      if (typeof callback === "function") {
        await callback(request.message);
      }
      chrome.runtime.sendMessage({ message: input_response });
    }
  );
}

export { sendMessage, receivedMessage };
