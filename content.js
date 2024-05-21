chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startApplying") {
    const numJobs = message.numJobs;
    const delay = message.delay;

    console.log(`Applying to ${numJobs} jobs with a delay of ${delay}ms`);

    scrollAndFindJobs(numJobs, delay);
  }
});

function sleep(t) {
  const seconds = t * 1000
  setTimeout(() => {
      console.info(`Waited for ${seconds} second!`);
    }, seconds);
}

function scrollAndFindJobs(numJobs, delay) {
  const jobsListContainer = document.querySelector('.jobs-search-results-list');

  if (!jobsListContainer) {
      console.log('Job list container not found.');
      return;
  }


  let currentJobIndex = 0;

  const intervalId = setInterval(() => {
      const jobElements = jobsListContainer.querySelectorAll('.display-flex.job-card-container.relative');

      if (currentJobIndex >= jobElements.length) {
          console.log('No more jobs to apply.');
          clearInterval(intervalId);
          return;
      }

      const currentJobElement = jobElements[currentJobIndex];
      currentJobElement.scrollIntoView();
      currentJobElement.click()
      const easyApplyButton = document.getElementsByClassName("jobs-apply-button artdeco-button artdeco-button--3 artdeco-button--primary ember-view")[0];

      if (easyApplyButton) {
          easyApplyButton.click();
          console.log(`Clicked Easy Apply for job ${currentJobIndex + 1}`);
          const res = applyForJobs(numJobs, delay)
          console.log(res)
      } else {
          console.log(`No Easy Apply button found for job ${currentJobIndex + 1}`);
      }

      currentJobIndex++;

      if (currentJobIndex >= numJobs) {
          console.log('Reached the number of jobs to apply.');
          clearInterval(intervalId);
      }

  }, 1000);
}


function applyForJobs() {
  try {
      const box = document.querySelector(".jobs-easy-apply-content");
      let next = box.querySelector("span.artdeco-button__text");
      for (let i = 0; i<=5; i++) {
          next.scrollIntoView()
          next.click();
          sleep(1)
          if (!document.querySelector(".jobs-easy-apply-content")) {
              console.log("Applied successfully!")
              return true;
          }
          next = box.querySelector("span.artdeco-button__text");
          sleep(1)
      };
      return true;

  } catch {
      return false;
  }
}