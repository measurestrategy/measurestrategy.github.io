console.log('script added');
// OT
(function (){
  var script = document.createElement('script');
  script.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js";
  script.setAttribute('data-domain-script', "74e36f57-e4c3-4d88-9277-0480c053f26e");
  script.charset = "UTF-8";
  script.setAttribute('data-dLayer-ignore', "true");
  script.setAttribute('data-document-language', "true");
  document.head.appendChild(script);
  window.OptanonWrapper = function(){};
})();
// GTM
(function(w, d, s, l, i) {
	w[l] = w[l] || [];
	w[l].push({'gtm.start':
	new Date().getTime(), event: 'gtm.js'});
	var f = d.getElementsByTagName(s)[0],
	    j = d.createElement(s),
	    dl = l != 'dataLayer' ? '&l=' + l : '';
	j.async = true;
	j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
	f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-MWJRLWVB');
