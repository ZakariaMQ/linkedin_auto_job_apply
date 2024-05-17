document.getElementById('startBtn').addEventListener('click', () => {
    const jobKeywords = document.getElementById('jobKeywords').value;
    const location = document.getElementById('location').value;
  
    browser.runtime.sendMessage({
      action: "applyJobs",
      jobKeywords: jobKeywords,
      location: location
    });
  });
  