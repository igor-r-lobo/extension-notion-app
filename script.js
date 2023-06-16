chrome.runtime.onInstalled.addListener(()=>{
  chrome.windows.create({
    url: "https://notion.so",
    type: "popup",
  });
  console.log("Abriu.")
});

chrome.action.onClicked.addListener((tab) => { 
  chrome.windows.create({
    url: "https://notion.so",
    type: "popup",
  });
  console.log("Abriu.")
});