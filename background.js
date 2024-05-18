browser.runtime.onInstalled.addListener(() => {
  alert("LinkedIn auto Job Apply add-on installed successfully!");
});

browser.browserAction.onClicked.addListener((tab) => {
  browser.tabs.executeScript(tab.id, {
    file: 'content.js'
  });
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "startApplying") {
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {
        action: "startApplying",
        numJobs: request.numJobs,
        delay: request.delay
      });
    });
  }
});
