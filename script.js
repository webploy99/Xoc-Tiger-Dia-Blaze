// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/xoc-tiger-dia-blaze/id6479574140";
}

// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d4/6d/2c/d46d2c1a-ad29-dabd-fcf2-1cd1e1e91f42/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
};
var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;

// ======== get img url ========
imgUrl ({
  img1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  img2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  img3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  img4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  img5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/14/51/a8/1451a84d-0363-d849-c7c7-9d4eb25aa85c/c5c7e0f1-bbf6-4928-b768-86a3b0cf31c4_Description-IOS_10.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/2c/6d/58/2c6d585d-be91-32bf-37e5-6712320f6d8d/592b71b9-8763-4926-b33d-53e569b4ac11_Description-IOS_11.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/cd/a6/2e/cda62eb3-c1b6-4b6f-c86f-07a4c7ae8c8a/87cbe361-5d1a-40c9-a166-861dda12f4e5_Description-IOS_12.jpg/434x0w.webp",
})

function imgUrl ({img1, img2, img3, img4, img5, appImg1, appImg2, appImg3}) {
  document.getElementById('img1').src = img1
  document.getElementById('img2').src = img2
  document.getElementById('img3').src = img3
  document.getElementById('img4').src = img4
  document.getElementById('img5').src = img5
  document.getElementById('pic1').src = appImg1
  document.getElementById('pic2').src = appImg2
  document.getElementById('pic3').src = appImg3
}