async function registerScript(matches, script) {
  return await browser.contentScripts.register({
    matches: [matches],
    js: [{file: "/content_scripts/" + script}],
    runAt: "document_idle"
  });
}

registerScript("*://*.vk.com/*", "vk.js");
registerScript("*://radio.yandex.ru/*", "radioyandex.js");

/*function logTabs(tabs) {
	for (let tab of tabs) {
	  // tab.url requires the `tabs` permission
	  console.log(tab.url);
	}
  }
  
  function onError(error) {
	console.log(`Error: ${error}`);
  }
  
  var querying = browser.tabs.query({});
  querying.then(logTabs, onError);*/