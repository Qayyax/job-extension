console.log("this script is working");

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
    }, 1000);
  });
};

// getData().then((data) => console.log("FINALLY:", data));
(async () => {
  const data = await getData();
  console.log(data);
})();

//
//"https://www.linkedin.com/jobs/collections/*",
// so it was  a react problem
// would make a function to run every interval until "testing exist, when testing does, then we continue"
