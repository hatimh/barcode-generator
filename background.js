// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Get barcode for selection";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

var sText;
function onClickHandler(info, tab) {
  sText = info.selectionText;
  chrome.tabs.create({'url': 'barcode.html'}, function(tab) {
  });
};
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  var output = {selection: sText};
  response(output);
});
