Lighhouse:


#Performance: 96pkt
Avoid chaining critical requests by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.LCPUnscored
Maximum critical path latency: 493 ms
Initial Navigation
http://localhost:4321 - 405 ms, 7.21 KiB
…fonts/0a20a03174360df3.woff2(localhost) - 493 ms, 18.56 KiB
…fonts/5d53c06df822aa6e.woff2(localhost) - 493 ms, 19.12 KiB
…fonts/e714b15c1070f5ec.woff2(localhost) - 492 ms, 18.62 KiB
…fonts/2701dee1102c1bc3.woff2(localhost) - 491 ms, 18.58 KiB
…fonts/349…fcb.woff2(localhost) - 490 ms, 18.65 KiB
/_astro/index@_@astro.CSd9-vUX.css(localhost) - 404 ms, 2.91 KiB


Render-blocking requests
Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests out of the critical path.FCPLCPUnscored
URL
Transfer Size
Duration
localhost 1st party
2.9 KiB	150 ms
/_astro/index@_@astro.CSd9-vUX.css(localhost)
2.9 KiB
150 ms


Reduce JavaScript execution time 1.4 s
Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. Learn how to reduce Javascript execution time.TBTUnscored
URL
Total CPU Time
Script Evaluation
Script Parse
localhost 1st party
2,011 ms	911 ms	523 ms
http://localhost:4321
2,011 ms
911 ms
523 ms
Unattributable
250 ms	6 ms	0 ms
Unattributable
250 ms
6 ms
0 ms


Minimize main-thread work 2.4 s
Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. Learn how to minimize main-thread workTBTUnscored
Category
Time Spent
Script Evaluation
981 ms
Script Parsing & Compilation
543 ms
Style & Layout
399 ms
Other
348 ms
Parse HTML & CSS
74 ms
Garbage Collection
14 ms
Rendering
11 ms


Minify JavaScript Est savings of 67 KiB
Minifying JavaScript files can reduce payload sizes and script parse time. Learn how to minify JavaScript.FCPLCPUnscored
URL
Transfer Size
Est Savings
chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/globals-front.js
65.7 KiB
29.1 KiB
chrome-extension://bfbameneiokkgbdmiekhjnmfkcnldhhm/content/content.js
21.0 KiB
8.2 KiB
chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/polyfill.js
10.6 KiB
5.7 KiB
chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/polyfill.js
10.6 KiB
5.7 KiB
chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/vendor/@eyeo/webext-ad-filtering-solution/content-main.js
30.8 KiB
5.6 KiB
chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/cookie-banner-detection.preload.js
10.0 KiB
5.3 KiB
chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/adblock-picreplacement.js
9.1 KiB
3.8 KiB
chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/adblock-functions.js
6.9 KiB
3.2 KiB


Reduce unused JavaScript Est savings of 512 KiB
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. Learn how to reduce unused JavaScript.FCPLCPUnscored
URL
Transfer Size
Est Savings
chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/scripts/contentscript.js
554.8 KiB
277.8 KiB
chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/scripts/inpage.js
178.2 KiB
98.5 KiB
chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/installHook.js
57.6 KiB
53.1 KiB
chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/globals-front.js
65.7 KiB
32.7 KiB
chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/vendor/@eyeo/webext-ad-filtering-solution/content-main.js
30.8 KiB
26.8 KiB
chrome-extension://gighmmpiobklfepjocnamgkkbiglidom/vendor/@eyeo/webext-ad-filtering-solution/content.js
37.3 KiB
22.6 KiB


#Best pracises: 96pkt
General
Issues were logged in the Issues panel in Chrome Devtools
Issues logged to the Issues panel in Chrome Devtools indicate unresolved problems. They can come from network request failures, insufficient security controls, and other browser concerns. Open up the Issues panel in Chrome DevTools for more details on each issue.
Issue type
Content security policy