chrome.tabs.getSelected(function(tab) {
  chrome.runtime.sendNativeMessage('com.farseer.youplayer',
    { text: tab.url },
    function(response) {
      console.log("Received " + response);
    });
});
