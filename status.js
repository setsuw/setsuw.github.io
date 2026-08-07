document.writeln('<div id="statuscafe"><div id="statuscafe-username"></div><div id="statuscafe-content"></div></div>');
fetch("https://status.cafe/users/suwa/status.json")
  .then( r => r.json() )
  .then( r => {
    if (!r.content.length) {
      document.getElementById("statuscafe-content").innerHTML = "No status yet."
      return
    }
    document.getElementById("statuscafe-username").innerHTML = r.face + ' ' + r.content
    document.getElementById("statuscafe-content").innerHTML = r.timeAgo + ' &#8226; <a href="https://status.cafe/users/suwa" target="_blank">status.cafe</a>'
  })
