chrome.runtime.onConnect.addListener((function(e){e.onMessage.addListener((function(e,t,r){return!0}))}));const backendUrl="https://replai-new.onrender.com";chrome.runtime.onMessage.addListener(((e,t,r)=>{const{message:n,body:o}=e;console.log("message",n),console.log("bodyRequest",o);const{token:a,...i}=o;if("replai-old"===n){if(i.text&&i.style)return fetch(backendUrl+"/replai-old",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...i})}).then((e=>e.json())).then((e=>{r(e)})).catch((e=>{r("Error occurred, please try again")})),!0}else if("replai"===n){if(i.text&&i.style)return fetch(backendUrl+"/replai",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({...i})}).then((e=>e.json())).then((e=>{r(e)})).catch((e=>{r("Error occurred, please try again")})),!0}else{if("getUsageLimits"===n)return fetch(backendUrl+"/getUsageLimits",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+a}}).then((e=>e.json())).then((e=>{console.log("direct response from getUsageLimits",e),r(e)})).catch((e=>{r("Error occurred, please try again")})),!0;if("migrateUsageLimit"===n)return fetch(backendUrl+"/migrateUsageLimit",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+a},body:JSON.stringify({...i})}).then((e=>e.json())).then((e=>{console.log("direct response from migrateUsageLimit",e),r(e)})).catch((e=>{r("Error occurred, please try again")})),!0}})),chrome.runtime.onInstalled.addListener((e=>{chrome.runtime.setUninstallURL("https://replai.notion.site/We-re-sorry-to-see-you-go-5d2bf111f15e4e958f486c47f1d0b60c"),"install"===e.reason&&chrome.tabs.create({url:"https://app.replai.so/signin"})})),chrome.runtime.onMessage.addListener((e=>{"openUpgradePage"===e.type&&chrome.tabs.create({url:"ui/index.html"})}));