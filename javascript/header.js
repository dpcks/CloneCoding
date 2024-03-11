$(function(){
    // pc gnb
    $("#header #pc_gnb>ul>li>a").on("mouseover", function(){
		var target = $(this).closest("li");
		target.addClass("active");
	});
	$("#header #pc_gnb>ul>li").on("mouseleave", function(){
		$(this).removeClass("active");
	});

    // 화면 resize

    // 모바일 메뉴바 클릭
    $(".btn_mobile_gnb").click(function(){
        $(".mobile_gnb_wrap").removeClass("active").fadeIn("fast");
        $("#wrapper").addClass("gnb_on");
    });
    $(".btn_mobile_gnb_close").click(function(){
        $(".mobile_gnb_wrap").removeClass("active").fadeOut("fast");
        $("#wrapper").removeClass("gnb_on");
    })
});