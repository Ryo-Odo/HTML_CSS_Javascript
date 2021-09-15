$(document).ready(function () {
  $("#btn").click(function () {
    let inputText = [$("#name").val(),
    $("#renraku").val(),
    $("#naiyou").val()
  ];
    $("#output_1").text(`お名前：　${inputText[0]}`);
    $("#output_2").text(`ご連絡先：　${inputText[1]}`);
    $("#output_3").text(`お問い合わせ内容：　${inputText[2]}`);
    $("#output_4").text("お問い合わせありがとうございます！");

  })
})
