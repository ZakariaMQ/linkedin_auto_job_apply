document.getElementById('startBtn').addEventListener('click', () => {
  const numJobs = document.getElementById('numJobs').value;
  const delay = document.getElementById('delay').value;
  
  let messageDiv = document.getElementById('messageDiv');
  if (!messageDiv) {
    messageDiv = document.createElement('div');
    messageDiv.id = 'messageDiv';
    document.body.appendChild(messageDiv);
  }
  messageDiv.textContent = `You are going to apply for ${numJobs} Jobs with a delay of ${delay} ms`;

  browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    browser.tabs.sendMessage(tabs[0].id, {
      action: "startApplying",
      numJobs: parseInt(numJobs),
      delay: parseInt(delay)
    });
  });
});
