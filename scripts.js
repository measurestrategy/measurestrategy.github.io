(function (){
  console.log('script added');
  
  // OT
  var script = document.createElement('script');
  script.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js";
  script.setAttribute('data-domain-script', "74e36f57-e4c3-4d88-9277-0480c053f26e");
  script.charset = "UTF-8";
  script.setAttribute('data-dLayer-ignore', "true");
  script.setAttribute('data-document-language', "true");
  document.head.appendChild(script);
  window.OptanonWrapper = function(){};
  
})();
