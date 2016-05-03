$(function (){
  chrome.runtime.sendMessage({action: "getSelection"}, function(msg){
    $("#barcode1").JsBarcode(msg.selection);
  });
});
