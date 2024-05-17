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
  