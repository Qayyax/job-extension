console.log("this script is working");

let jobDetail = "";
const interval = setInterval(() => {
  const testing = document.querySelector("#job-details");
  if (testing) {
    // clearInterval(interval);
    jobDetail = testing;
  }
  console.log("..searching");
}, 2000);

if (jobDetail.length > 10) {
  clearInterval(interval);
}

console.log(jobDetail);

//"https://www.linkedin.com/jobs/collections/*",
// so it was  a react problem
// would make a function to run every interval until "testing exist, when testing does, then we continue"
