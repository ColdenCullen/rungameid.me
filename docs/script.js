var gameId = window.location.href.split("?")[1];
window.location = "steam://rungameid/" + gameId;
document.write('<meta http-equiv="refresh" content="0;url=' + window.location + '">');