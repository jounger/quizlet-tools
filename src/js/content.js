(function () {
  console.log("CONTENT!");
  // your page initialization code here
  // the DOM will be available here
  receivedMessage(`changed_theme`, function (message) {
    const theme = message.split("_")[1];
    const root = document.getElementsByTagName("html")[0];
    root.classList.add("class", `quizlet-tools-${theme}`);
    injectCss(`dark-${theme}`);
    console.log(message);
  });
})();

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

function injectCss(file_name) {
  var s = document.createElement("link");
  s.href = chrome.extension.getURL(`css/themes/${file_name}.css`);
  s.rel = "stylesheet";
  s.type = "text/css";
  (document.head || document.documentElement).appendChild(s);
}
