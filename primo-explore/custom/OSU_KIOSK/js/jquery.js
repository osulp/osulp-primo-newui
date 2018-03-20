/* Adds jQuery */ 

function loadScript(urls, callback)
{
    var head = document.getElementsByTagName('head')[0];
        for(var url in urls) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.onreadystatechange = callback;
      script.onload = callback;
      head.appendChild(script);
        }
}

function jquery_keyboard_loaded() {
    var options = {};
    var target_input = '#searchBar';
    $(target_input).keyboard(options);
}