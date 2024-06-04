var steamUrl = window.location.href.split("?")[1];

if (steamUrl != undefined) {
  var gameId = steamUrl.split("/")[0];

  var og_image = document.createElement("meta");
  og_image.setAttribute("property", "og:image");
  og_image.content = `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${gameId}/header.jpg`;
  document.head.appendChild(og_image);

  window.location = "steam://rungameid/" + steamUrl;
  document.write(
    `<meta http-equiv="refresh" content="0;url=${window.location}">`
  );
}
