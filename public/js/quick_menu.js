(function($, window, document){

    const Kurly = {
        init: function(){
            this.quickMenu();
        },
        quickMenu: function(){
            // 퀵메뉴 탑위치 정하기
            // 섹션2 슬라이드 컨테이너박스 탑값 위치
            // const headerTop = $('#header').offset().top;
            // const sec1Top = $('#section1').offset().top; //197
            // const sec2Top = $('#section2').offset().top; 
            // const sec3Top = $('#section3').offset().top; 
          

           // $('#quickMenu').stop().animate({top:600 }, 600);
           // 퀵메뉴 탑값이 스크롤시 항상 현재 스크롤 탑값 + ((윈도우화면 높이 - 퀵메뉴높이)/2)
           // console.log ($('#quickMenu').height() ); //554
        //    console.log ($(window).height() ); //937
        //    console.log ($('#quickMenu').height() ); //554
        //    (383)=937-554
        //    (383/2)+현재스크롤탑값

        let quickTop = 0;

        function quickMenuFn() {

            // 섹션2의 슬라이드 컨테이너가 없으면 오류발생
            // 예외처리
            try{ //트라이 실행하고 오류가 발생하면 아래 캣치에서 잡는다.

                if( $(window).scrollTop() >= $('#section2 .slide-container').offset().top ){
                    quickTop = ($(window).height()-554)/2 + $(window).scrollTop();
                    $('#quickMenu').stop().animate({top:quickTop }, 300, 'easeOutExpo');
                }
                else {
                    $('#quickMenu').stop().animate({top: $('#section2 .slide-container').offset().top }, 300, 'easeOutExpo');
                }
            }
            catch(e) {

                if( $(window).scrollTop() >= 248 ){
                    quickTop = ($(window).height()-554)/2 + $(window).scrollTop();
                    $('#quickMenu').stop().animate({top:quickTop }, 300, 'easeOutExpo');
                }
                else {
                    $('#quickMenu').stop().animate({top: 248 }, 300, 'easeOutExpo');
                }
            }
            
        }
        quickMenuFn(); //한번만 실행

        $(window).scroll(function(){
            quickMenuFn(); //스크롤 할 때마다 실행
        });


        }
        
    }
    Kurly.init();


})(jQuery, window, document);