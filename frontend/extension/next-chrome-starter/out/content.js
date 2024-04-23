// var array = [];
// var links = document.getElementsByTagName("a");
// for(var i=0; i<links.length; i++) {
//     array.push(links[i].href);
// }
// chrome.runtime.sendMessage({links: array}, function(response) {
//     console.log(response);
// }
// );

// // on load of the popup, send a message to the content script
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     const url = tabs[0].url;
//     var result;
//     // fetch from the server
//     fetch('http://localhost:5000/predict', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ url: url })
//     })
//     .then((response) => response.json())
//     .then((json) => result = json)
//     .catch((error) => console.error(error))
//     .finally(() => console.log('done'));

//     if(result === -1){
//         chrome.browserAction.setBadgeText({text: "Phishing website detected!"});
//     }
//     // else{
//     //     chrome.browserAction.setBadgeText({text: "0"});
//     // }
//     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
// });