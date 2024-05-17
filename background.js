browser.runtime.onInstalled.addListener(() => {
    alert("LinkedIn auto Job Apply add-on installed");
  });
  
browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.executeScript(tab.id, {
      file: 'content.js'
    });
  });
  
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "applyJobs") {
      browser.tabs.create({ url: "https://www.linkedin.com/jobs/" }, (newTab) => {
        browser.tabs.executeScript(newTab.id, {
          file: 'applyJobs.js'
        });
      });
    }
  });
  