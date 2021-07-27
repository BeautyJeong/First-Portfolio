$(document).ready(function () {
  $('#notice').on('click', function () {
    window.open('../popup/popup.html', 'popup1', 'width=700, height=300, top=300, left=500');
  });

  $(".btn_top").on('click', function () {
		$("html, body").stop().animate({scrollTop: 0});
		return false;
	});

  $('#btnClose').on('click', function () {
    window.close();
  });

  const clockEle = $('.clock');
  function clock () {
    const now = new Date();
    const yy = now.getFullYear();
    const mm = now.getMonth() + 1;
    const dd = now.getDate();
    const day = now.getDay();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    console.log(now, yy);
  }

});