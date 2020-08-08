import { sendMessage } from "./modules/chrome.mock.js";

(function () {
  const themeForm = document.querySelectorAll('input[name="theme"]');
  themeForm.forEach((x) => {
    x.addEventListener("click", (event) => {
      const theme = event.target.value;
      console.log(theme);
      sendMessage(`theme_${theme}`);
    });
  });
})();
