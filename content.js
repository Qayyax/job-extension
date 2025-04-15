console.log("From Content.js");

const getData = async () => {
  return new Promise((resolve, reject) => {
    let interval;
    let counter = 0;
    interval = setInterval(() => {
      const jobDetails = document.querySelector("#job-details");
      counter++;
      if (jobDetails) {
        clearInterval(interval);
        resolve(jobDetails.textContent);
      }
      console.log("searching...");
      if (counter > 50) {
        clearInterval(interval);
        reject("Timeout....");
      }
    }, 3000);
  });
};

(async () => {
  const data = await getData();
  console.log(data);
  // would pass this data to js
})();

// given up on the other part for now, would update later
// want to make the extension only work when we click it and not at the beginning
