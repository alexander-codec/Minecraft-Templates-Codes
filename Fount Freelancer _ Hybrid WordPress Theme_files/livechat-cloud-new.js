function clickdesk_load_static_file(){try{if(!document.body){clearInterval(cd_body_load_interval_timer);cd_body_load_interval_timer=setInterval(function(){clickdesk_load_static_file()},100);return}clearInterval(cd_body_load_interval_timer);var d=window.navigator&&window.navigator.appVersion.split("MSIE");if(parseFloat(d[1])){d=parseFloat(d[1])}var b=(_glc.version)?(glcpath+"/min/"):"https://d1gwclp1pmzk26.cloudfront.net/widget-js-v1.135/browser/min/";var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src=b+"livechat-v2.js"+((d&&d==10)?"?t="+new Date().getTime():"");document.getElementsByTagName("body")[0].appendChild(a)}catch(c){}}var cd_body_load_interval_timer;(function(){clickdesk_load_static_file()})();