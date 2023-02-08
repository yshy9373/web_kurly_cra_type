(($)=>{

    const NewProduct = {
        init(){
            this.mainFn();
        },
        mainFn(){
            let txt = '';

            $.ajax({
                url:'./data/product2.json',
                dataType:'JSON',
                success( res ){
                    function commaRegExp(z){
                        let str = z.toString();
                        const regExp = /(^\d+)(\d{3})/;
                        while( regExp.test(str) ){
                            str = str.replace(regExp,'$1,$2');
                        }
                        return str;
                    }

                    res.베스트.map(function(item,idx){
                        
                        const {상품코드,상품이미지,카트이미지,배송구분,제조사,상품명,할인율,정가,상품정보,판매처,후기} = item;

                        txt += `<li data-key=${상품코드}>`;
                        txt += `    <div class="col-gap">`;
                        txt += `        <div class="wrap">`;
                        txt += `            <div class="img-box">`;
                        txt += `                <img src="./img/sub_main2/${상품이미지}" alt="">`;
                        txt += `                <a href="#" class="cart-btn"><img src="./img/sub_main2/${카트이미지}" alt=""></a>`;
                        txt += `            </div>`;
                        txt += `            <div class="caption">`;
                        txt += `                <h6>${배송구분}</h6>`;
                        txt += `                <h5>${상품정보}</h5>`;
                        txt += `                <h2><strong>${제조사}</strong><em>${상품명}</em></h2>`;
                        txt += `                <h3>
                                                    ${할인율 > 0 ? `<strong>${Math.round(할인율*100)}%</strong>` : ``}
                                                    <em>${commaRegExp(Math.round(정가*(1-할인율)))}</em>
                                                </h3>`;
                        할인율 > 0 && (txt += `<h3><s>${commaRegExp(정가)}</s></h3>`);
                        후기 > 0 && (txt += `<span><svg width="100%" height="100%" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_1513_17755" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C1.89543 2 1 2.89543 1 4V8.67201C1 9.77658 1.89543 10.672 3 10.672H5.11212L6.33682 12.7653C6.5299 13.0954 7.00688 13.0954 7.19995 12.7653L8.42465 10.672H10.5C11.6046 10.672 12.5 9.77658 12.5 8.67201V4C12.5 2.89543 11.6046 2 10.5 2H3Z"></path></mask><path fill="#999" d="M5.11212 10.672L5.97526 10.167L5.68564 9.67201H5.11212V10.672ZM6.33682 12.7653L5.47369 13.2703L5.47369 13.2703L6.33682 12.7653ZM7.19995 12.7653L6.33682 12.2604L6.33682 12.2604L7.19995 12.7653ZM8.42465 10.672V9.67201H7.85113L7.56152 10.167L8.42465 10.672ZM2 4C2 3.44772 2.44772 3 3 3V1C1.34315 1 0 2.34315 0 4H2ZM2 8.67201V4H0V8.67201H2ZM3 9.67201C2.44772 9.67201 2 9.22429 2 8.67201H0C0 10.3289 1.34315 11.672 3 11.672V9.67201ZM5.11212 9.67201H3V11.672H5.11212V9.67201ZM7.19995 12.2604L5.97526 10.167L4.24899 11.177L5.47369 13.2703L7.19995 12.2604ZM6.33682 12.2604C6.5299 11.9304 7.00688 11.9304 7.19995 12.2604L5.47369 13.2703C6.05291 14.2604 7.48386 14.2604 8.06309 13.2703L6.33682 12.2604ZM7.56152 10.167L6.33682 12.2604L8.06309 13.2703L9.28779 11.177L7.56152 10.167ZM10.5 9.67201H8.42465V11.672H10.5V9.67201ZM11.5 8.67201C11.5 9.22429 11.0523 9.67201 10.5 9.67201V11.672C12.1569 11.672 13.5 10.3289 13.5 8.67201H11.5ZM11.5 4V8.67201H13.5V4H11.5ZM10.5 3C11.0523 3 11.5 3.44772 11.5 4H13.5C13.5 2.34315 12.1569 1 10.5 1V3ZM3 3H10.5V1H3V3Z" mask="url(#path-1-inside-1_1513_17755)"></path><circle fill="#999" cx="4.34998" cy="6.17871" r="0.75"></circle><circle fill="#999" cx="6.75" cy="6.17871" r="0.75"></circle><circle fill="#999" cx="9.15002" cy="6.17871" r="0.75"></circle></svg>후기 ${후기}</span>`);
                        판매처!=='' && (txt += `<h4>${판매처}</h4>`);
                        txt += `            </div>`;
                        txt += `        </div>`;
                        txt += `    </div>`;
                        txt += `</li>`;
                    });

                    $('#newProduct').append( txt );
                },
                error( err ){
                    console.log( 'AJAX 실패!' +  err );
                }
            });
        }
    }
    NewProduct.init();

})(jQuery);