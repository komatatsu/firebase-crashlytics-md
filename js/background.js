var tabId;

chrome.tabs.onUpdated.addListener(function(tab){
  tabId = tab;
  chrome.pageAction.show(tabId);
});

chrome.pageAction.onClicked.addListener(function(){
  chrome.tabs.executeScript(
    tabId,
    {file: "js/copy.js"},
    function(result){
      var textArea = document.getElementById("text");
      textArea.value = result;
      textArea.select();
      document.execCommand("copy");
    });
});

