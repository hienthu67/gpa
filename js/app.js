var ct = $('.wp-content');
var gpa = $('#gpa');
var kq = $('.kq').hide();


function tong() {
  var tongTinchi = 0;
  var sum = 0;
  $(".unit").each(function () {
    var $this = $(this);
    if (!isNaN($this.val()) && !isNaN($this.parent().find('.diemchu').val())) {
      sum += parseFloat($this.val() || 0) * parseFloat($this.parent().find('.diemchu').val() || 0);
      tongTinchi += parseFloat($this.val() || 0)
    }
  });
  return (sum / tongTinchi).toFixed(2);
}
$('.btn').click(function () {
  $('.form').last().clone().children().val("").parent().appendTo($('.content'));
});

ct.on('keyup', '.unit', function () {
  gpa.text(tong());
});

ct.on("change", ".diemchu", function () {
  gpa.text(tong());
  kq.is(":hidden") && kq.show();
});

$(".btn").on("click", function () {

  $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
  return false;
});