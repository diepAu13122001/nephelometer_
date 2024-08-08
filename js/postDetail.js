// Photo Credit
// https://unsplash.com/kimberlyrichards
const $ = document.querySelector.bind(document);

var comments = $(".comment-card");
var btnClose = $(".btn-close");
$(".comment-link").addEventListener("click", onCommentClick);
$(".btn-close").addEventListener("click", onCloseClick);

function onCommentClick(event) {
  TweenLite.to(comments, 0.8, { top: "60px", ease: Power4.easeOut });
  TweenLite.to(btnClose, 0.8, { alpha: 1 });
}
function onCloseClick(event) {
  TweenLite.to(comments, 0.8, { top: "500px", ease: Power4.easeOut });
  TweenLite.to(btnClose, 0.8, { alpha: 0 });
}
