$(function (){
  chrome.runtime.sendMessage({action: "getSelection"}, function(msg){
    try {
      $("#barcode1").JsBarcode(msg.selection);
    }
    catch(err) {
      $("#error").text("Sorry, there was an error generating the barcode, please check your selection!")
    }
  });
});
