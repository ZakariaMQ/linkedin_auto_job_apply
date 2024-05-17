document.getElementById('startBtn').addEventListener('click', () => {
    const numJobs = document.getElementById('numJobs').value;
    const delay = document.getElementById('delay').value;
  
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {
        action: "startApplying",
        numJobs: parseInt(numJobs),
        delay: parseInt(delay)
      });
    });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "displayMessage") {
      const messageDiv = document.createElement('div');
      messageDiv.id = 'message';
      messageDiv.textContent = message.message;
  
      document.body.appendChild(messageDiv);
    }
  });
  