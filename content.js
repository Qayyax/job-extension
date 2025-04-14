console.log("this script is working");

setInterval(() => {
  const jobDetails = document.querySelector("#job-details");
  if (jobDetails) {
    console.log(jobDetails.textContent);
  }
  console.log("searching...");
}, 2000);

//
//"https://www.linkedin.com/jobs/collections/*",
// so it was  a react problem
// would make a function to run every interval until "testing exist, when testing does, then we continue"
