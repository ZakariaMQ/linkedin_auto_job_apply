chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startApplying") {
    const numJobs = message.numJobs;
    const delay = message.delay;

    console.log(`Applying to ${numJobs} jobs with a delay of ${delay}ms`);

    scrollAndFindJobs(numJobs, delay);
  }
});

function scrollAndFindJobs(numJobs, delay) {
  const jobsListContainer = document.querySelector('.jobs-search-results-list');

  if (!jobsListContainer) {
      console.log('Job list container not found.');
      return;
  }

  let lastHeight = jobsListContainer.scrollHeight;
  let jobElements = [];

  const intervalId = setInterval(() => {
      jobsListContainer.scrollTop = jobsListContainer.scrollHeight;

      setTimeout(() => {
          const newJobElements = jobsListContainer.querySelectorAll('.display-flex.job-card-container.relative');
          jobElements = Array.from(newJobElements);
          console.log(`Found ${jobElements.length}`);

          con newHeight = jobsListContainer.scrollHeight;

          if (newHeight === lastHeight || jobElements.length >= numJobs) {
              clearInterval(intervalId);
              console.log('Finished scrolling and loading jobs.');

          } else {
              lastHeight = newHeight;
          }
      }, 200);
  }, 1000);

}

function applyForJobs(numJobs, delay, jobElements) {

}