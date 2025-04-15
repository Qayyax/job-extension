console.log("this is coming from the service worker");
console.log("no chrome.here");
//
chrome.runtime.oninstalled.addlistener(() => {
  chrome.action.setbadgetext({
    text: "off",
  });
});

const linkedin = "https://www.linkedin.com/jobs";

chrome.action.onclicked.addlister(async (tab) => {
  if (tab.url.startswith(linkedin)) {
    const prevstate = await chrome.action.getbadgetext({ tabid: tab.id });
    const nextstate = prevstate === "on" ? "off" : "on";

    await chrome.action.setbadgetext({
      tabid: tab.id,
      text: nextstate,
    });
    if (nextstate === "on") {
      // I can start the scripting here:
      // I may not need content.js afterall
    }
  }
});

//
// const extensions = "https://developer.chrome.com/docs/extensions";
// const webstore = "https://developer.chrome.com/docs/webstore";
//
// chrome.action.onclicked.addlistener(async (tab) => {
//   if (tab.url.startswith(extensions) || tab.url.startswith(webstore)) {
//     // retrieve the action badge to check if the extension is 'on' or 'off'
//     const prevstate = await chrome.action.getbadgetext({ tabid: tab.id });
//     // next state will always be the opposite
//     const nextstate = prevstate === "on" ? "off" : "on";
//
//     // set the action badge to the next state
//     await chrome.action.setbadgetext({
//       tabid: tab.id,
//       text: nextstate,
//     });
//     if (nextstate === "on") {
//       // insert the css file when the user turns the extension on
//       await chrome.scripting.insertcss({
//         files: ["focus-mode.css"],
//         target: { tabid: tab.id },
//       });
//     } else if (nextstate === "off") {
//       // remove the css file when the user turns the extension off
//       await chrome.scripting.removecss({
//         files: ["focus-mode.css"],
//         target: { tabid: tab.id },
//       });
//     }
//   }
// });
