//1. 최상위 컴포넌트
function WrapComponent(props) {
    // 변수 값이 참(true)이면 모달이 보인다. show
    // 변수 값이 거짓(false)이면 모달이 숨긴다. hide
    // 변수 값을 변경한다. 상태(state)관리 => 유즈 스테이트 훅을 사용한다.
    const [isTopModal, setIsTopModal]   = React.useState(true); // 탑모달     변경할 변수
    const [isMainModal, setIsMainModal] = React.useState(true); // 메인 모달
    const [isIntroMain, setIsIntroMain] = React.useState(true); // 인트로 메인
    const [isSubMain1, setIsSubMain1]   = React.useState(false); // 서브 메인1
    const [isSubMain2, setIsSubMain2]   = React.useState(false); // 서브 메인2
    const [isSubMain3, setIsSubMain3]   = React.useState(false); // 서브 메인3
    const [isSubMain4, setIsSubMain4]   = React.useState(false); // 서브 메인4
    const [isMemberSignUp, setIsMemberSignUp]   = React.useState(false); // 회원가입폼 


    // state=true 변수
    // setState() 변수값 변경함수

    // 탑모달을 변경하는 함수 => 닫기버튼 클릭해서 호출 실행
    const topModalState=()=>{
        setIsTopModal(false);
    }

    // 메인 모달 상태관리 변경하는 함수
    const mainModalState=()=>{
        setIsMainModal(false);
    } 

    // 로딩시 탑모달 쿠키 이름과 쿠키값이 존재하면 탑모달 숨기기
    const topModalFn=()=>{
        // console.log(document.cookie); // 쿠키 가져오기
        // 1. 쿠키가 없으면 리턴문 수행
        if(document.cookie==='') return;

        // 2. 모든 쿠키 split(';') 세미콜론 구분 단위로 가져와서 변수에 배열로 저장
        let result = document.cookie.split(';');  // split은 어떤 단위로 쪼갤때 배열로 저장함 
        // console.log(result);
        
        // 3. 쿠키이름, 쿠키값 저장할 객체 생성 
        //    배열로 저장된 모든 쿠키를 이름, 값 두개로 나누어 split('=') 등호 문자 단위로 분리(배열=>반복문)
        let obj = [];
        result.map((item, idx)=>{
            // console.log( idx, item);
            obj[idx] = {   //[줄번호]
                쿠키이름: item.split('=')[0].trim(), // .trim() 앞뒤 공백제거
                쿠키값: item.split('=')[1].trim()
            }
        });
        // console.log(obj);

        // 4. 쿠키이름, 쿠키값 체크(비교검사)
        // 만약 쿠키이름과 쿠키값이 모두 존재하면 탑모달 숨기기
        // 아니면 탑모달 보이기
        obj.map((item)=>{
            // console.log(item.쿠키이름,item.쿠키값);
            if(item.쿠키이름==='HYTOPMODAL' && item.쿠키값==='topmodalclose1day'){
                // console.log( '찾았다 found' );
                setIsTopModal(false); //탑모달 숨기기
            }
            else{
                // console.log( '못찾았다 not found' );
                setIsTopModal(true); //탑모달 보이기
            }
        });
    }

    // 로딩시 로컬스토레이지에 메인모달 키가 존재하면 메인모달 숨기기
    const mainModalFn=()=>{
        // 메인모달
        // 키 HYKURLYMAINMODAL
        // 키값 모달이름 mainModal
        let result = null;
        for(let i=0; i<localStorage.length; i++){
            // console.log(i,localStorage.getItem(localStorage.key(i)));
            result = JSON.parse(localStorage.getItem('HYKURLYMAINMODAL')); // 메인모달 키
        }

        if(result===null || result==='') return;

        // console.log(result);
        if(result.모달이름==='mainModal'){
            setIsMainModal(false); // 메인모달 숨기기
        }
        else{
            setIsMainModal(true); // 메인모달 보이기
        }     
    }    

    // 리액트 유즈 이팩트 훅 실행
    // 로딩시 실행
    React.useEffect(()=>{
        topModalFn(); // 탑모달 로딩시 체크함수(쿠키 이름 검사)
        mainModalFn(); // 메인모달 로딩시 체크함수(로컬스토레이지 키 검사)
    },[]); // 로딩시 1회만 실행 버블링 막아준다

    // 인트로 메인 상태관리 변경 함수
    const introMainFn=()=>{
        setIsIntroMain(true); // 인트로 메인 보인다.
        setIsSubMain1(false); // 서브 메인1 숨긴다.
        setIsMemberSignUp(false); // 회원가입폼 숨긴다.
    }

    // 서브 메인1 상태관리 변경 함수
    const subMain1Fn=()=>{
        setIsSubMain1(true); // 서브 메인1 보인다.
        setIsIntroMain(false); // 인트로 메인 숨긴다.
        setIsSubMain2(false);
        setIsSubMain3(false);
        setIsSubMain4(false);
        setIsMemberSignUp(false); // 회원가입폼 숨긴다.
    }

    // 서브 메인2 상태관리 변경 함수
    const subMain2Fn=()=>{
        setIsSubMain2(true);
        setIsIntroMain(false);
        setIsSubMain1(false);
        setIsSubMain3(false);
        setIsSubMain4(false);
    }

    // 서브 메인3 상태관리 변경 함수
    const subMain3Fn=()=>{
        setIsSubMain3(true);
        setIsIntroMain(false);
        setIsSubMain1(false);
        setIsSubMain2(false);
        setIsSubMain4(false);
    }

    // 서브 메인4 상태관리 변경 함수
    const subMain4Fn=()=>{
        setIsSubMain4(true);
        setIsIntroMain(false);
        setIsSubMain1(false);
        setIsSubMain2(false);
        setIsSubMain3(false);
    }

    // 회원가입폼
    const memberSignUpFn=()=>{
        setIsMemberSignUp(true); // 회원가입폼 보인다.
        setIsIntroMain(false);
        setIsSubMain1(false);
        setIsSubMain2(false);
        setIsSubMain3(false);
        setIsSubMain4(false);
    }


    return (
        <div id='wrap'>
            {
                isTopModal && <ModalComponent topModalState={topModalState} $path={props.$path} />
            }

            <HeaderComponent 
            $path={props.$path} 
            introMainFn={introMainFn} 
            subMain1Fn={subMain1Fn} 
            subMain2Fn={subMain2Fn} 
            subMain3Fn={subMain3Fn} 
            subMain4Fn={subMain4Fn} 
            memberSignUpFn={memberSignUpFn}
            />
            
            {   // 인트로 메인 컴포넌트
                isIntroMain && <IntroMainComponent $path={props.$path} />
            }
            {   //서브 메인1(신상품) 컴포넌트 : 제이쿼리 => AJAX / 리액트 => AXIOS  
                isSubMain1 && <SubMain1Component />
            }

            {   // 서브 메인2
                isSubMain2 && <SubMain2Component />
            }
            {   // 서브 메인3
                isSubMain3 && <SubMain3Component />
            }
            {   // 서브 메인4
                isSubMain4 && <SubMain4Component />
            }
            { 
                isMemberSignUp && <MemberSignUpComponent />
            }
            <FooterComponent $path={props.$path} />
            {
                isMainModal && <MainModalComponent mainModalState={mainModalState} />
            }
            <QuickMenuComponent $path={props.$path} />
            <GoTopComponent $path={props.$path} />
        </div>
    );
};
WrapComponent.defaultProps = { //변경 안 할 변수
    $path: './'
}

        // 탑모달 컴포넌트
        function ModalComponent({$path, topModalState}){

            // 반드시 화살표 함수 사용
            // 닫기 하면서 쿠키 설정 1일동안 안열림
            // 쿠키     setDate() 날짜 새롭게 설정한다.
            const onClickTopModalClose=(e)=>{
                e.preventDefault();
                topModalState();
                let newDate = new Date();
                newDate.setDate(newDate.getDate()+1); // 오늘날짜+1
                // document.cookie = `쿠키이름=쿠키값; path=/; expires=만료일;`;
                document.cookie = `HYTOPMODAL=topmodalclose1day; path=/; expires=${newDate.toUTCString()};`;
            }

            return(
                <div id="modal">
                    <div className="container">
                        <h1><a href="!#" title="지금 가입하고 인기상품 100원에 받아가세요!">지금 가입하고 인기상품 <strong>100원</strong>에 받아가세요!</a></h1>
                        <button onClick={onClickTopModalClose} className="modal-close-btn" title="하루동안 열리지 않음"><img src={`${$path}img/ico_close_fff_84x84.png`} alt=""/></button>
                    </div>
                </div>
            )
        }

        // 헤더 컴포넌트
        function HeaderComponent({$path, introMainFn, subMain1Fn, subMain2Fn, subMain3Fn, subMain4Fn, memberSignUpFn}){

            const onClickIntroMain=(e)=>{
                e.preventDefault();
                introMainFn();
            }

            const onClickSubMain1=(e)=>{
                e.preventDefault();
                subMain1Fn();
            }

            const onClickSubMain2=(e)=>{
                e.preventDefault();
                subMain2Fn();
            }

            const onClickSubMain3=(e)=>{
                e.preventDefault();
                subMain3Fn();
            }

            const onClickSubMain4=(e)=>{
                e.preventDefault();
                subMain4Fn();
            }

            const onClickSignUp=(e)=>{
                e.preventDefault();
                memberSignUpFn();
            }

            return(
                <header id="header">
                    <div className="row1">
                        <div className="row1-1">
                            <span><a href='!#' onClick={onClickSignUp} className="on">회원가입</a></span>
                            <span><i>|</i></span>
                            <span><a href='!#'>로그인</a></span>
                            <span><i>|</i></span>
                            <span><a href='!#'>고객센터</a></span>
                        </div>
                        <div className="row1-2">
                            <div className="left">
                                <ul>
                                    <li>
                                        <h1><a href="!#" onClick={onClickIntroMain} title="Kurly Home"><img src={`${$path}img/logo_kurly.svg`} alt="Logo Kurly" /> <span>마켓컬리</span></a></h1>
                                    </li>
                                    <li>
                                        <i>|</i>
                                    </li>
                                    <li>
                                        <a href="!#" title="뷰티컬리">뷰티컬리<img src={`${$path}img/n.svg`} alt=""/></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="center">
                                <input type="text" id="search" name="search" placeholder="검색어를 입력해주세요" />
                                <a href="!#" title="search" className="search-btn"><img src={`${$path}img/search.svg`} alt=""/></a>
                            </div>
                            <div className="right">
                                {/* <!-- 속성 어트리뷰트 Attribute(attr()) == 속성 프로퍼티 Property(prop) --> */}
                                {/* <!-- parent(부모) => children(자식) source(이미지 소스) --> */}
                                <a href="!#" title="map"  className="map-btn"><img src={`${$path}img/map.svg`} alt=""/></a>
                                <a href="!#" title="heart"  className="heart-btn"><img src={`${$path}img/heart.svg`} alt=""/></a>
                                <a href="!#" title="cart"  className="cart-btn"><img src={`${$path}img/cart.svg`} alt=""/></a>
                            </div>
                        </div>
                    </div>

                    {/* <!--햄버거 메뉴바 카테고리 & 네비게이션(메인메뉴) --> */}
                    <div className="row2">
                        <div className="row2-container">
                            <div className="left">
                                <a href="!#" title="카테고리" className="ham-bar-btn"><img src={`${$path}img/menu_bar.svg`} alt=""/> <span>카테고리</span></a>
                            </div>
                            <div className="center">
                                <nav id="nav">
                                    <span><a href='!#' onClick={onClickSubMain1} className="main-btn" title="신상품">신상품</a></span>
                                    <span><a href='!#' onClick={onClickSubMain2} className="main-btn" title="베스트">베스트</a></span>
                                    <span><a href='!#' onClick={onClickSubMain3} className="main-btn" title="알뜰쇼핑">알뜰쇼핑</a></span>
                                    <span><a href='!#' onClick={onClickSubMain4} className="main-btn" title="특가/혜택">특가/혜택</a></span>
                                </nav>
                            </div>
                            <div className="right">
                                <a href="!#">
                                    <strong>샛별・낮</strong>
                                    <span>배송안내</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            )
            
        }

        // 인트로 메인 컴포넌트
        function IntroMainComponent({$path}){
            return(
                <main id="main">
                    <Section1Component /> 
                    <Section2Component /> 
                    <Section3Component /> 
                    <Section4Component /> 
                    <Section5Component /> 
                    <Section6Component /> 
                    <Section7Component /> 
                </main>
            )
        }
                // 섹션1 컴포넌트
                function Section1Component(){
                    return(
                        <section id="section1">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        <li className="slide slide11 last"><img src="./img/s1_slide_11.jpg" alt=""/></li>                        
                                        <li className="slide slide1"><img src="./img/s1_slide_1.jpg" alt=""/></li>
                                        <li className="slide slide2"><img src="./img/s1_slide_2.jpg" alt=""/></li>
                                        <li className="slide slide3"><img src="./img/s1_slide_3.jpg" alt=""/></li>
                                        <li className="slide slide4"><img src="./img/s1_slide_4.jpg" alt=""/></li>
                                        <li className="slide slide5"><img src="./img/s1_slide_5.jpg" alt=""/></li>
                                        <li className="slide slide6"><img src="./img/s1_slide_6.jpg" alt=""/></li>
                                        <li className="slide slide7"><img src="./img/s1_slide_7.jpg" alt=""/></li>
                                        <li className="slide slide8"><img src="./img/s1_slide_8.jpg" alt=""/></li>
                                        <li className="slide slide9"><img src="./img/s1_slide_9.jpg" alt=""/></li>
                                        <li className="slide slide10"><img src="./img/s1_slide_10.jpg" alt=""/></li>
                                        <li className="slide slide11"><img src="./img/s1_slide_11.jpg" alt=""/></li>
                                        <li className="slide slide1 first"><img src="./img/s1_slide_1.jpg" alt=""/></li>
                                    </ul>
                                </div>
                
                                
                                <a href="!#" className="prev-btn" title="preview"><img src="./img/arrow_gray.svg" alt=""/></a>
                                <a href="!#" className="next-btn" title="next"><img src="./img/arrow_gray.svg" alt=""/></a>
                
                                
                                <span className="page-number">
                                    <em className="count-number"></em>
                                    <i>/</i>
                                    <em className="total-number"></em>
                                </span>
                
                
                            </div>
                        </section>
                    )
                }
                // 섹션2 컴포넌트
                function Section2Component(){
                    return(
                        <section id="section2" className="section-public">
                            <div className="container">
                                <div className="gap">
                                    <div className="title">
                                        <h2>이 상품 어때요?</h2>
                                    </div>
                                    <div className="content">
                                        <div className="slide-container">
                                            <div className="slide-view">
                                                <ul className="slide-wrap">
                                                    <li className="slide slide1">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_1.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide2">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_2.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide3">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_3.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide4">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_4.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide5">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_5.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide6">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_6.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide7">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_7.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide8">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_8.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide9">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_9.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide10">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_10.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide11">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_11.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide12">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_12.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide13">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_13.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide14">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_14.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide15">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_15.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide16">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_16.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide17">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_17.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide18">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_18.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide19">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_19.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide20">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec2/slide_20.jpg" alt=""/>
                                                                <span><img src="./img/sec2/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                
                                            <a href="!#" className="arrow-btn prev-btn"><img src="./img/sec2/arrow_white.svg" alt=""/></a>
                                            <a href="!#" className="arrow-btn next-btn"><img src="./img/sec2/arrow_white.svg" alt=""/></a>
                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
                // 섹션3 컴포넌트
                function Section3Component(){
                    return(
                        <section id="section3">
                            <div className="container">
                                <div className="gap">
                                    <div className="title hide">인기 마스크 최대 31% 할인</div>
                                    <div className="content">
                                        <a href="!#"><img src="./img/sec2/56207a13-a8e9-41f3-8af9-cda3ef85d458.jpg" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
                // 섹션4 컴포넌트
                function Section4Component(){
                    return(
                        <section id="section4" className="section-public">
                            <div className="container">
                                <div className="gap">
                                    <div className="title">
                                        <h2>놓치면 후회할 가격</h2>
                                    </div>
                                    <div className="content">
                                        <div className="slide-container">
                                            <div className="slide-view">
                                                <ul className="slide-wrap">
                                                    <li className="slide slide1">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_1.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide2">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_2.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide3">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_3.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide4">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_4.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide5">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_5.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide6">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_6.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide7">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_7.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide8">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_8.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide9">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_9.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide10">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_10.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide11">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_11.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide12">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_12.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide13">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_13.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide14">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_14.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide15">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_15.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide16">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_16.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide17">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_17.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide18">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_18.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide19">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_19.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide20">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec4/slide_20.jpg" alt=""/>
                                                                <span><img src="./img/sec4/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                
                                            <a href="!#" className="arrow-btn prev-btn"><img src="./img/sec4/arrow_white.svg" alt=""/></a>
                                            <a href="!#" className="arrow-btn next-btn"><img src="./img/sec4/arrow_white.svg" alt=""/></a>
                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
                // 섹션5 컴포넌트
                function Section5Component(){
                    return(
                        <section id="section5" className="section-public">
                            <div className="container">
                                <div className="gap">
                                    <div className="title">
                                        <h2>이거 사려고 컬리에 가입했다!</h2>
                                    </div>
                                    <div className="content">
                                        <div className="slide-container">
                                            <div className="slide-view">
                                                <ul className="slide-wrap">
                                                    <li className="slide slide1">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_1.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide2">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_2.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide3">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_3.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide4">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_4.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide5">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_5.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide6">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_6.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide7">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_7.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide8">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_8.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide9">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_9.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide10">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_10.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide11">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_11.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide12">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_12.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide13">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_13.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide14">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_14.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide15">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_15.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide16">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_16.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide17">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_17.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide18">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_18.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide19">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_19.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide20">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec5/slide_20.jpg" alt=""/>
                                                                <span><img src="./img/sec5/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                
                                            <a href="!#" className="arrow-btn prev-btn"><img src="./img/sec5/arrow_white.svg" alt=""/></a>
                                            <a href="!#" className="arrow-btn next-btn"><img src="./img/sec5/arrow_white.svg" alt=""/></a>
                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
                // 섹션6 컴포넌트
                function Section6Component(){
                    return(
                        <section id="section6" className="section-public">
                            <div className="container">
                                <div className="gap">
                                    <div className="title">
                                        <h2>알뜰하게 장바구니 채우기</h2>
                                    </div>
                                    <div className="content">
                                        <div className="slide-container">
                                            <div className="slide-view">
                                                <ul className="slide-wrap">
                                                    <li className="slide slide1">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_1.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide2">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_2.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide3">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_3.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide4">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_4.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide5">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_5.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide6">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_6.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide7">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_7.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide8">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_8.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide9">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_9.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide10">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_10.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide11">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_11.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide12">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_12.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide13">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_13.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide14">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_14.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide15">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_15.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide16">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_16.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide17">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_17.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide18">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_18.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide19">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_19.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide20">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec6/slide_20.jpg" alt=""/>
                                                                <span><img src="./img/sec6/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                
                                           
                                            <a href="!#" className="arrow-btn prev-btn"><img src="./img/sec6/arrow_white.svg" alt=""/></a>
                                            <a href="!#" className="arrow-btn next-btn"><img src="./img/sec6/arrow_white.svg" alt=""/></a>
                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
                // 섹션7 컴포넌트
                function Section7Component(){
                    return(
                        <section id="section7" className="section-public">
                            <div className="container">
                                <div className="gap">
                                    <div className="title">
                                        <h2>지금 가장 핫한 상품</h2>
                                    </div>
                                    <div className="content">
                                        <div className="slide-container">
                                            <div className="slide-view">
                                                <ul className="slide-wrap">
                                                    <li className="slide slide1">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_1.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide2">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_2.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide3">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_3.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide4">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_4.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide5">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_5.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide6">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_6.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide7">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_7.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide8">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_8.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide9">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_9.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide10">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_10.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide11">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_11.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide12">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_12.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide13">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_13.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide14">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_14.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide15">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_15.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide16">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_16.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide17">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_17.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide18">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_18.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide19">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_19.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="slide slide20">
                                                        <div className="gap">
                                                            <div className="img-box">
                                                                <img src="./img/sec7/slide_20.jpg" alt=""/>
                                                                <span><img src="./img/sec7/cart_fill.svg" alt=""/></span>
                                                            </div>
                                                            <div className="caption-box">
                                                                <h3>[가농바이오] 오메가에그 무항생제 1+등급 특란 20구</h3>
                                                                <h4><strong>10%</strong><em>14,850 원</em></h4>
                                                                <h5><s>16,500 원</s></h5>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                
                                            
                                            <a href="!#" className="arrow-btn prev-btn"><img src="./img/sec7/arrow_white.svg" alt=""/></a>
                                            <a href="!#" className="arrow-btn next-btn"><img src="./img/sec7/arrow_white.svg" alt=""/></a>
                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }

        // 서브 메인1 컴포넌트
        function SubMain1Component(){

            // 서브 메인1이 로딩시 실행 => React.useEffect(); 훅 사용
            // 제이쿼리 구현 되어야 body 요소에 스크립트를 바인딩하여 ajax가 실행되도록 한다.
            // <script type="text/babel" src="./js/new_product.js"></script>
            // <script type="text/babel" src="./js/category.js"></script>
            // 매개변수 활용하여 두개의 제이쿼리 스크립트를 생성 실행한다.
            const createScriptFn=(imgSrc)=>{ // 파라미터 (매개변수)
                const scriptTag = document.createElement('script'); // 웹 문서 안에 스크립트 태그요소 만들기
                scriptTag.src = imgSrc; // 만들어진 태그요소에 소스속성 넣기   
                document.body.appendChild( scriptTag ); // 만들어진 태그요소를 본문 body 자식요소로 붙이기
            }
            React.useEffect(()=>{ // 함수에 아규먼트 전달해서 두개의 스크립트 생성 실행
                createScriptFn("./js/category.js"); // 아규먼트 (전달인자)
                createScriptFn("./js/new_product1.js");
            },[]);

            return(
                <main id='main' className='main1'>
                    <section id="section1">
                        <div className="container">
                            <div className="gap">
                                <div className="title hide">
                                    <h2>이주의 신상 랭킹</h2>
                                </div>
                                <div className="content">
                                    <a href="!#"><img src="./img/sub_main1/QwAyaGZHzmHErgidNg01maHWb2l07ie67fE0Pa9d.jpg" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section2">
                        <div className="container">
                            <div className="gap">
                                <div className="title">
                                    <h2>신상품</h2>
                                </div>
                                <div className="content">
                                    <div className="left">
                                        <div className="title-filter">
                                            <span>필터</span>
                                            <span>초기화</span>
                                        </div>
                                        <div className="col-gap">
                                            <div className="wrap">
            
                                                {/* <!-- 카테고리 메뉴 --> */}
                                                <ul className='category'>
                                                    <li>
                                                        <a href="!#" className='category-btn'>카테고리 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                        <div className='catagory-sub catagory-sub1'>
                                                            <ul>
                                                                <li><label><input type="checkbox" id='category1-01' name='category1-01' className='category1-sub-bnt' value='국·반찬·메인요리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>국·반찬·메인요리</label></li>
                                                                <li><label><input type="checkbox" id='category1-02' name='category1-02' className='category1-sub-bnt' value='샐러드·간편식'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>샐러드·간편식</label></li>
                                                                <li><label><input type="checkbox" id='category1-03' name='category1-03' className='category1-sub-bnt' value='생활용품·리빙·캠핑'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생활용품·리빙·캠핑</label></li>
                                                                <li><label><input type="checkbox" id='category1-04' name='category1-04' className='category1-sub-bnt' value='간식·과자·떡'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>간식·과자·떡</label></li>
                                                                <li><label><input type="checkbox" id='category1-05' name='category1-05' className='category1-sub-bnt' value='베이비·키즈·완구'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>베이비·키즈·완구</label></li>
                                                                <li><label><input type="checkbox" id='category1-06' name='category1-06' className='category1-sub-bnt' value='베이커리·치즈·델리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>베이커리·치즈·델리</label></li>
                                                                <li><label><input type="checkbox" id='category1-07' name='category1-07' className='category1-sub-bnt' value='면·양념·오일'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>면·양념·오일</label></li>
                                                                <li><label><input type="checkbox" id='category1-08' name='category1-08' className='category1-sub-bnt' value='생수·음료·우유·커피'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생수·음료·우유·커피</label></li>
                                                                <li><label><input type="checkbox" id='category1-09' name='category1-09' className='category1-sub-bnt' value='헤어·바디·구강'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>헤어·바디·구강</label></li>
                                                                <li><label><input type="checkbox" id='category1-10' name='category1-10' className='category1-sub-bnt' value='국·반찬·메인요리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>국·반찬·메인요리</label></li>
                                                                <li><button className='category1-more-view-btn'>카테고리 더보기<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-jbgpyq e1frj59j0"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></button></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#" className='category-btn'>브랜드 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                        <div className='catagory-sub catagory-sub2'>
                                                            <ul>
                                                                <li><label><input type="checkbox" id='category2-01' name='category2-01' className='category2-sub-bnt' value='국·반찬·메인요리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>국·반찬·메인요리</label></li>
                                                                <li><label><input type="checkbox" id='category2-02' name='category2-02' className='category2-sub-bnt' value='샐러드·간편식'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>샐러드·간편식</label></li>
                                                                <li><label><input type="checkbox" id='category2-03' name='category2-03' className='category2-sub-bnt' value='생활용품·리빙·캠핑'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생활용품·리빙·캠핑</label></li>
                                                                <li><label><input type="checkbox" id='category2-04' name='category2-04' className='category2-sub-bnt' value='간식·과자·떡'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>간식·과자·떡</label></li>
                                                                <li><label><input type="checkbox" id='category2-05' name='category2-05' className='category2-sub-bnt' value='베이비·키즈·완구'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>베이비·키즈·완구</label></li>
                                                                <li><label><input type="checkbox" id='category2-06' name='category2-06' className='category2-sub-bnt' value='베이커리·치즈·델리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>베이커리·치즈·델리</label></li>
                                                                <li><label><input type="checkbox" id='category2-07' name='category2-07' className='category2-sub-bnt' value='면·양념·오일'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>면·양념·오일</label></li>
                                                                <li><label><input type="checkbox" id='category2-08' name='category2-08' className='category2-sub-bnt' value='생수·음료·우유·커피'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생수·음료·우유·커피</label></li>
                                                                <li><label><input type="checkbox" id='category2-09' name='category2-09' className='category2-sub-bnt' value='헤어·바디·구강'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>헤어·바디·구강</label></li>
                                                                <li><label><input type="checkbox" id='category2-10' name='category2-10' className='category2-sub-bnt' value='국·반찬·메인요리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>국·반찬·메인요리</label></li>
                                                                <li><button className='category2-more-view-btn'>카테고리 더보기<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-jbgpyq e1frj59j0"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></button></li>
                                                            </ul>
                                                        </div>                                            
                                                    </li>
                                                    <li>
                                                        <a href="!#" className='category-btn'>가격 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                        <div className='catagory-sub catagory-sub3'>
                                                            <ul>
                                                                <li><label><input type="checkbox" id='category3-01' name='category3-01' className='category3-sub-bnt' value='국·반찬·메인요리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>국·반찬·메인요리</label></li>
                                                                <li><label><input type="checkbox" id='category3-02' name='category3-02' className='category3-sub-bnt' value='샐러드·간편식'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>샐러드·간편식</label></li>
                                                                <li><label><input type="checkbox" id='category3-03' name='category3-03' className='category3-sub-bnt' value='생활용품·리빙·캠핑'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생활용품·리빙·캠핑</label></li>
                                                                <li><label><input type="checkbox" id='category3-04' name='category3-04' className='category3-sub-bnt' value='간식·과자·떡'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>간식·과자·떡</label></li>
                                                                <li><label><input type="checkbox" id='category3-05' name='category3-05' className='category3-sub-bnt' value='베이비·키즈·완구'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>베이비·키즈·완구</label></li>
                                                                <li><label><input type="checkbox" id='category3-06' name='category3-06' className='category3-sub-bnt' value='베이커리·치즈·델리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>베이커리·치즈·델리</label></li>
                                                                <li><label><input type="checkbox" id='category3-07' name='category3-07' className='category3-sub-bnt' value='면·양념·오일'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>면·양념·오일</label></li>
                                                                <li><label><input type="checkbox" id='category3-08' name='category3-08' className='category3-sub-bnt' value='생수·음료·우유·커피'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생수·음료·우유·커피</label></li>
                                                                <li><label><input type="checkbox" id='category3-09' name='category3-09' className='category3-sub-bnt' value='헤어·바디·구강'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>헤어·바디·구강</label></li>
                                                                <li><label><input type="checkbox" id='category3-10' name='category3-10' className='category3-sub-bnt' value='국·반찬·메인요리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>국·반찬·메인요리</label></li>
                                                                <li><button className='category3-more-view-btn'>카테고리 더보기<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-jbgpyq e1frj59j0"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></button></li>
                                                            </ul>
                                                        </div>                                            
                                                    </li>
                                                    <li>
                                                        <a href="!#" className='category-btn'>헤택 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                        <div className='catagory-sub catagory-sub4'>
                                                            <ul>
                                                                <li><label><input type="checkbox" id='category4-01' name='category4-01' className='category4-sub-bnt' value='국·반찬·메인요리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>국·반찬·메인요리</label></li>
                                                                <li><label><input type="checkbox" id='category4-02' name='category4-02' className='category4-sub-bnt' value='샐러드·간편식'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>샐러드·간편식</label></li>
                                                                <li><label><input type="checkbox" id='category4-03' name='category4-03' className='category4-sub-bnt' value='생활용품·리빙·캠핑'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생활용품·리빙·캠핑</label></li>
                                                                <li><label><input type="checkbox" id='category4-04' name='category4-04' className='category4-sub-bnt' value='간식·과자·떡'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>간식·과자·떡</label></li>
                                                                <li><label><input type="checkbox" id='category4-05' name='category4-05' className='category4-sub-bnt' value='베이비·키즈·완구'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>베이비·키즈·완구</label></li>
                                                                <li><label><input type="checkbox" id='category4-06' name='category4-06' className='category4-sub-bnt' value='베이커리·치즈·델리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>베이커리·치즈·델리</label></li>
                                                                <li><label><input type="checkbox" id='category4-07' name='category4-07' className='category4-sub-bnt' value='면·양념·오일'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>면·양념·오일</label></li>
                                                                <li><label><input type="checkbox" id='category4-08' name='category4-08' className='category4-sub-bnt' value='생수·음료·우유·커피'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생수·음료·우유·커피</label></li>
                                                                <li><label><input type="checkbox" id='category4-09' name='category4-09' className='category4-sub-bnt' value='헤어·바디·구강'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>헤어·바디·구강</label></li>
                                                                <li><label><input type="checkbox" id='category4-10' name='category4-10' className='category4-sub-bnt' value='국·반찬·메인요리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>국·반찬·메인요리</label></li>
                                                                <li><button className='category4-more-view-btn'>카테고리 더보기<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-jbgpyq e1frj59j0"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></button></li>
                                                            </ul>
                                                        </div>                                            
                                                    </li>
                                                    <li>
                                                        <a href="!#" className='category-btn'>유형 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                        <div className='catagory-sub catagory-sub5'>
                                                            <ul>
                                                                <li><label><input type="checkbox" id='category5-01' name='category5-01' className='category5-sub-bnt' value='국·반찬·메인요리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>국·반찬·메인요리</label></li>
                                                                <li><label><input type="checkbox" id='category5-02' name='category5-02' className='category5-sub-bnt' value='샐러드·간편식'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>샐러드·간편식</label></li>
                                                                <li><label><input type="checkbox" id='category5-03' name='category5-03' className='category5-sub-bnt' value='생활용품·리빙·캠핑'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생활용품·리빙·캠핑</label></li>
                                                                <li><label><input type="checkbox" id='category5-04' name='category5-04' className='category5-sub-bnt' value='간식·과자·떡'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>간식·과자·떡</label></li>
                                                                <li><label><input type="checkbox" id='category5-05' name='category5-05' className='category5-sub-bnt' value='베이비·키즈·완구'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>베이비·키즈·완구</label></li>
                                                                <li><label><input type="checkbox" id='category5-06' name='category5-06' className='category5-sub-bnt' value='베이커리·치즈·델리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>베이커리·치즈·델리</label></li>
                                                                <li><label><input type="checkbox" id='category5-07' name='category5-07' className='category5-sub-bnt' value='면·양념·오일'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>면·양념·오일</label></li>
                                                                <li><label><input type="checkbox" id='category5-08' name='category5-08' className='category5-sub-bnt' value='생수·음료·우유·커피'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생수·음료·우유·커피</label></li>
                                                                <li><label><input type="checkbox" id='category5-09' name='category5-09' className='category5-sub-bnt' value='헤어·바디·구강'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>헤어·바디·구강</label></li>
                                                                <li><label><input type="checkbox" id='category5-10' name='category5-10' className='category5-sub-bnt' value='국·반찬·메인요리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>국·반찬·메인요리</label></li>
                                                                <li><button className='category5-more-view-btn'>카테고리 더보기<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-jbgpyq e1frj59j0"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></button></li>
                                                            </ul>
                                                        </div>                                            
                                                    </li>
                                                    <li>
                                                        <a href="!#" className='category-btn'>특정상품제외 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                        <div className='catagory-sub catagory-sub6'>
                                                            <ul>
                                                                <li><label><input type="checkbox" id='category6-01' name='category6-01' className='category6-sub-bnt' value='국·반찬·메인요리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>국·반찬·메인요리</label></li>
                                                                <li><label><input type="checkbox" id='category6-02' name='category6-02' className='category6-sub-bnt' value='샐러드·간편식'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>샐러드·간편식</label></li>
                                                                <li><label><input type="checkbox" id='category6-03' name='category6-03' className='category6-sub-bnt' value='생활용품·리빙·캠핑'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생활용품·리빙·캠핑</label></li>
                                                                <li><label><input type="checkbox" id='category6-04' name='category6-04' className='category6-sub-bnt' value='간식·과자·떡'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>간식·과자·떡</label></li>
                                                                <li><label><input type="checkbox" id='category6-05' name='category6-05' className='category6-sub-bnt' value='베이비·키즈·완구'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>베이비·키즈·완구</label></li>
                                                                <li><label><input type="checkbox" id='category6-06' name='category6-06' className='category6-sub-bnt' value='베이커리·치즈·델리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>베이커리·치즈·델리</label></li>
                                                                <li><label><input type="checkbox" id='category6-07' name='category6-07' className='category6-sub-bnt' value='면·양념·오일'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>면·양념·오일</label></li>
                                                                <li><label><input type="checkbox" id='category6-08' name='category6-08' className='category6-sub-bnt' value='생수·음료·우유·커피'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생수·음료·우유·커피</label></li>
                                                                <li><label><input type="checkbox" id='category6-09' name='category6-09' className='category6-sub-bnt' value='헤어·바디·구강'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>헤어·바디·구강</label></li>
                                                                <li><label><input type="checkbox" id='category6-10' name='category6-10' className='category6-sub-bnt' value='국·반찬·메인요리'/><svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" ></path><path d="M7 12.6667L10.3846 16L18 8.5"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>국·반찬·메인요리</label></li>
                                                                <li><button className='category6-more-view-btn'>카테고리 더보기<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-jbgpyq e1frj59j0"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></button></li>
                                                            </ul>
                                                        </div>                                            
                                                    </li>
                                                </ul>
            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">                            
                                        <div className="order-filter">
                                            <span>
                                                총 866건
                                            </span>
                                            <span>
                                                <a href="!#">추천순</a>
                                                <a href="!#">신상품순</a>
                                                <a href="!#">판매량순</a>
                                                <a href="!#">혜택순</a>
                                                <a href="!#">낮은가격순</a>
                                                <a href="!#">높은가격순</a>
                                            </span>
                                        </div>
                                        <ul id='newProduct'>
            
                                            {/* <!-- JSON DATA : AJAX 구현     --> */}
            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            )
        }

        // 서브 메인2 컴포넌트
        function SubMain2Component(){
            const createScriptFn=(imgSrc)=>{
                const scriptTag = document.createElement('script');
                scriptTag.src = imgSrc;
                document.body.appendChild( scriptTag );
            }
            React.useEffect(()=>{
                createScriptFn("./js/category.js");
                createScriptFn("./js/new_product2.js");
            },[]);

            return(
                <main id="main" className="main2">
                    <section id="section1">
                        <div className="container">
                            <div className="gap">
                                <div className="title">
                                    <h2>베스트</h2>
                                </div>
                                <div className="content">
                                    <div className="left">
                                        <div className="title-filter">
                                            <span>필터</span>
                                            <span><svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.78 3.96303C12.504 2.16973 10.4086 1 8.04 1C4.15192 1 1 4.15192 1 8.04C1 11.9281 4.15192 15.08 8.04 15.08C11.9281 15.08 15.08 11.9281 15.08 8.04" stroke="#ddd" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="round"></path><path d="M14.4933 1L14.4933 4.52H10.9733" stroke="#ddd" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="round"></path></svg>초기화</span>
                                        </div>
                                        <div className="col-gap">
                                            <div className="wrap">
                                                <ul className="category">
                                                    <li>
                                                        <a href="!#" className="category-btn">카테고리<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                    
                                                        <div className="category-sub category-sub1">
                                                            <ul>
                                                                <li><label><input type="checkbox" id="category1-01" name="category1-01" className="category1-sub-btn" value="샐러드·간편식"/><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>샐러드·간편식</label></li>
                                                                <li><label><input type="checkbox" id="category1-02" name="category1-02" className="category1-sub-btn" value="국·반찬·메인요리" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>국·반찬·메인요리</label></li>
                                                                <li><label><input type="checkbox" id="category1-03" name="category1-03" className="category1-sub-btn" value="정육·계란" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>정육·계란</label></li>
                                                                <li><label><input type="checkbox" id="category1-04" name="category1-04" className="category1-sub-btn" value="과일·견과·쌀" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>과일·견과·쌀</label></li>
                                                                <li><label><input type="checkbox" id="category1-05" name="category1-05" className="category1-sub-btn" value="간식·과자·떡" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>간식·과자·떡</label></li>
                                                                <li><label><input type="checkbox" id="category1-06" name="category1-06" className="category1-sub-btn" value="생수·음료·우유·커피" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생수·음료·우유·커피</label></li>
                                                                <li><label><input type="checkbox" id="category1-07" name="category1-07" className="category1-sub-btn" value="수산·해산·건어물" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>수산·해산·건어물</label></li>
                                                                <li><label><input type="checkbox" id="category1-08" name="category1-08" className="category1-sub-btn" value="베이커리·치즈·델리" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>베이커리·치즈·델리</label></li>
                                                                <li><label><input type="checkbox" id="category1-09" name="category1-09" className="category1-sub-btn" value="생활용품·리빙·캠핑" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생활용품·리빙·캠핑</label></li>
                                                                <li><label><input type="checkbox" id="category1-10" name="category1-10" className="category1-sub-btn" value="건강식품" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>건강식품</label></li>
                                                                <li><button className="category1-more-view-btn">카테고리 더보기<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-jbgpyq e1frj59j0"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></button></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#" className="category-btn">브랜드<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
            
                                                        <div className="category-sub category-sub2">
                                                            <div className="category-sub-order">
                                                                <a href="!#">가나다 순</a>
                                                                <i>|</i>
                                                                <a href="!#">상품많은 순</a>
                                                            </div>
                                                            <ul>
                                                                <li><label><input type="checkbox" id="category2-01" name="category2-01" className="category2-sub-btn" value="감자밭" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>감자밭</label></li>
                                                                <li><label><input type="checkbox" id="category2-02" name="category2-02" className="category2-sub-btn" value="강남면옥" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>강남면옥</label></li>
                                                                <li><label><input type="checkbox" id="category2-03" name="category2-03" className="category2-sub-btn" value="거대곰탕" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>거대곰탕</label></li>
                                                                <li><label><input type="checkbox" id="category2-04" name="category2-04" className="category2-sub-btn" value="경복궁" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>경복궁</label></li>
                                                                <li><label><input type="checkbox" id="category2-05" name="category2-05" className="category2-sub-btn" value="고디바" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>고디바</label></li>
                                                                <li><label><input type="checkbox" id="category2-06" name="category2-06" className="category2-sub-btn" value="고래사" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>고래사</label></li>
                                                                <li><label><input type="checkbox" id="category2-07" name="category2-07" className="category2-sub-btn" value="고온어다이어트" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>고온어다이어트</label></li>
                                                                <li><label><input type="checkbox" id="category2-08" name="category2-08" className="category2-sub-btn" value="교토마블" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>교토마블</label></li>
                                                                <li><label><input type="checkbox" id="category2-09" name="category2-09" className="category2-sub-btn" value="국내산 100%" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>국내산 100%</label></li>
                                                                <li><label><input type="checkbox" id="category2-10" name="category2-10" className="category2-sub-btn" value="굽네" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>굽네</label></li>
                                                                <li><button className="category2-more-view-btn">브랜드 더보기<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-jbgpyq e1frj59j0"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></button></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#" className="category-btn">가격<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                    
                                                        <div className="category-sub category-sub3">
                                                            <ul>
                                                                <li><label><input type="checkbox" id="category3-01" name="category3-01" className="category3-sub-btn" value="6,900원 미만" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>6,900원 미만</label></li>
                                                                <li><label><input type="checkbox" id="category3-02" name="category3-02" className="category3-sub-btn" value="6,900원 ~ 9,990원" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>6,900원 ~ 9,990원</label></li>
                                                                <li><label><input type="checkbox" id="category3-03" name="category3-03" className="category3-sub-btn" value="9,990원 ~ 14,900원" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>9,990원 ~ 14,900원</label></li>
                                                                <li><label><input type="checkbox" id="category3-04" name="category3-04" className="category3-sub-btn" value="14,900원 이상" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>14,900원 이상</label></li>    
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#" className="category-btn">혜택<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                    
                                                        <div className="category-sub category-sub4">
                                                            <ul>
                                                                <li><label><input type="checkbox" id="category4-01" name="category4-01" className="category4-sub-btn" value="할인상품" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>할인상품</label></li>
                                                                <li><label><input type="checkbox" id="category4-02" name="category4-02" className="category4-sub-btn" value="한정수량" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>한정수량</label></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#" className="category-btn">유형<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                    
                                                        <div className="category-sub category-sub5">
                                                            <ul>
                                                                <li><label><input type="checkbox" id="category5-01" name="category5-01" className="category5-sub-btn" value="Kurly Only" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>Kurly Only</label></li>
                                                                <li><label><input type="checkbox" id="category5-02" name="category5-02" className="category5-sub-btn" value="선물하기" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>선물하기</label></li>
                                                                <li><label><input type="checkbox" id="category5-03" name="category5-03" className="category5-sub-btn" value="희소가치 프로젝트" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>희소가치 프로젝트</label></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#" className="category-btn">특정상품 제외<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                    
                                                        <div className="category-sub category-sub6">
                                                            <ul>
                                                                <li><label><input type="checkbox" id="category6-01" name="category6-01" className="category6-sub-btn" value="반려동물 상품" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>반려동물 상품</label></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="order-filter">
                                            <span>총 277건</span>
                                            <div className="order-menu">
                                                <a href="!#">추천순<svg width="14" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.9932 0.700195C8.73506 0.700195 10.3116 1.40557 11.4528 2.54565C12.5943 3.68594 13.3002 5.26111 13.3002 7.0002C13.3002 8.73928 12.5943 10.3145 11.4528 11.4547C10.3116 12.5948 8.73506 13.3002 6.9932 13.3002C5.25512 13.3002 3.68233 12.595 2.54387 11.4554C1.40457 10.315 0.700195 8.73952 0.700195 7.0002C0.700195 5.26087 1.40457 3.68541 2.54387 2.54497C3.68233 1.40537 5.25512 0.700195 6.9932 0.700195Z" stroke="#ccc" stroke-width="1.4"></path><path d="M4.5 5.21081H5.77027C5.81351 4.55135 6.26216 4.12973 6.95946 4.12973C7.64054 4.12973 8.09459 4.53514 8.09459 5.0973C8.09459 5.58784 7.90383 5.86944 7.35576 6.22524L7.1973 6.32432C6.45135 6.76216 6.13784 7.24865 6.18649 8.05946L6.19189 8.42703H7.44595V8.11892C7.44595 7.58378 7.64595 7.30811 8.35405 6.89189C9.08919 6.45405 9.5 5.87568 9.5 5.04865C9.5 3.85405 8.51081 3 7.02973 3C5.42432 3 4.54324 3.92973 4.5 5.21081ZM6.87838 11.0054C6.33784 11.0054 5.98108 10.6649 5.98108 10.1459C5.98108 9.62162 6.33784 9.28108 6.87838 9.28108C7.42973 9.28108 7.77568 9.62162 7.77568 10.1459C7.77568 10.6649 7.42973 11.0054 6.87838 11.0054Z" fill="#ccc"></path></svg></a>
                                                <i>|</i>
                                                <a href="!#">신상품순</a>
                                                <i>|</i>
                                                <a href="!#">판매량순</a>
                                                <i>|</i>
                                                <a href="!#">혜택순</a>
                                                <i>|</i>
                                                <a href="!#">낮은 가격순</a>
                                                <i>|</i>
                                                <a href="!#">높은 가격순</a>
                                            </div>
                                        </div>
                                        <ul id="newProduct">
                                            {/* <!-- JSON DATA : AJAX 구현 --> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            )
        }

        // 서브 메인3 컴포넌트
        function SubMain3Component(){
            const createScriptFn=(imgSrc)=>{
                const scriptTag = document.createElement('script');
                scriptTag.src = imgSrc;
                document.body.appendChild( scriptTag );
            }
            React.useEffect(()=>{
                createScriptFn("./js/category.js");
                createScriptFn("./js/new_product3.js");
            },[]);

            return(
                <main id="main" className="main3">
                    <section id="section1">
                        <div className="container">
                            <div className="gap">
                                <div className="title hide">
                                    <h2>최저가 도전, 365일 언제나 알뜰하게</h2>
                                </div>
                                <div className="content">
                                    <a href="!#"><img src="./img/GvAErq3L5k3bGbGsZSaee8xTQ6Pjkhe7JECgRP7E.jpg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="section2">
                        <div className="container">
                            <div className="gap">
                                <div className="title">
                                    <h2>알뜰쇼핑</h2>
                                </div>
                                <div className="content">
                                    <div className="left">
                                        <div className="title-filter">
                                            <span>필터</span>
                                            <span><svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.78 3.96303C12.504 2.16973 10.4086 1 8.04 1C4.15192 1 1 4.15192 1 8.04C1 11.9281 4.15192 15.08 8.04 15.08C11.9281 15.08 15.08 11.9281 15.08 8.04" stroke="#ddd" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="round"></path><path d="M14.4933 1L14.4933 4.52H10.9733" stroke="#ddd" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="round"></path></svg>초기화</span>
                                        </div>
                                        <div className="col-gap">
                                            <div className="wrap">
                                                <ul className="category">
                                                    <li>
                                                        <a href="!#" className="category-btn">카테고리<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                    
                                                        <div className="category-sub category-sub1">
                                                            <ul>
                                                                <li><label><input type="checkbox" id="category1-01" name="category1-01" className="category1-sub-btn" value="정육·계란" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>정육·계란</label></li>
                                                                <li><label><input type="checkbox" id="category1-02" name="category1-02" className="category1-sub-btn" value="과일·견과·쌀" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>과일·견과·쌀</label></li>
                                                                <li><label><input type="checkbox" id="category1-03" name="category1-03" className="category1-sub-btn" value="베이커리·치즈·델리" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>베이커리·치즈·델리</label></li>
                                                                <li><label><input type="checkbox" id="category1-04" name="category1-04" className="category1-sub-btn" value="샐러드·간편식" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>샐러드·간편식</label></li>
                                                                <li><label><input type="checkbox" id="category1-05" name="category1-05" className="category1-sub-btn" value="생활용품·리빙·캠핑" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생활용품·리빙·캠핑</label></li>
                                                                <li><label><input type="checkbox" id="category1-06" name="category1-06" className="category1-sub-btn" value="국·반찬·메인요리" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>국·반찬·메인요리</label></li>
                                                                <li><label><input type="checkbox" id="category1-07" name="category1-07" className="category1-sub-btn" value="면·양념·오일" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>면·양념·오일</label></li>
                                                                <li><label><input type="checkbox" id="category1-08" name="category1-08" className="category1-sub-btn" value="간식·과자·떡" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>간식·과자·떡</label></li>
                                                                <li><label><input type="checkbox" id="category1-09" name="category1-09" className="category1-sub-btn" value="생수·음료·우유·커피" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>생수·음료·우유·커피</label></li>
                                                                <li><label><input type="checkbox" id="category1-10" name="category1-10" className="category1-sub-btn" value="수산·해산·건어물" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>수산·해산·건어물</label></li>
                                                                <li><button className="category1-more-view-btn">카테고리 더보기<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-jbgpyq e1frj59j0"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></button></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#" className="category-btn">브랜드<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                        
                                                        <div className="category-sub category-sub2">
                                                            <div className="category-sub-order">
                                                                <a href="!#">가나다 순</a>
                                                                <i>|</i>
                                                                <a href="!#">상품많은 순</a>
                                                            </div>
                                                            <ul>
                                                                <li><label><input type="checkbox" id="category2-01" name="category2-01" className="category2-sub-btn" value="고기반찬" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>고기반찬</label></li>
                                                                <li><label><input type="checkbox" id="category2-02" name="category2-02" className="category2-sub-btn" value="고베식당" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>고베식당</label></li>
                                                                <li><label><input type="checkbox" id="category2-03" name="category2-03" className="category2-sub-btn" value="곰표x콜린스그린" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>곰표x콜린스그린</label></li>
                                                                <li><label><input type="checkbox" id="category2-04" name="category2-04" className="category2-sub-btn" value="농부의 꽃" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>농부의 꽃</label></li>
                                                                <li><label><input type="checkbox" id="category2-05" name="category2-05" className="category2-sub-btn" value="농협" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>농협</label></li>
                                                                <li><label><input type="checkbox" id="category2-06" name="category2-06" className="category2-sub-btn" value="눋2도씨" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>눋2도씨</label></li>
                                                                <li><label><input type="checkbox" id="category2-07" name="category2-07" className="category2-sub-btn" value="닌텐도" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>닌텐도</label></li>
                                                                <li><label><input type="checkbox" id="category2-08" name="category2-08" className="category2-sub-btn" value="달콤트리" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>달콤트리</label></li>
                                                                <li><label><input type="checkbox" id="category2-09" name="category2-09" className="category2-sub-btn" value="대상" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>대상</label></li>
                                                                <li><label><input type="checkbox" id="category2-10" name="category2-10" className="category2-sub-btn" value="던킨도너츠" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>던킨도너츠</label></li>
                                                                <li><button className="category2-more-view-btn">브랜드 더보기<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-jbgpyq e1frj59j0"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></button></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#" className="category-btn">가격<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                    
                                                        <div className="category-sub category-sub3">
                                                            <ul>
                                                                <li><label><input type="checkbox" id="category3-01" name="category3-01" className="category3-sub-btn" value="6,282원 미만" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>6,282원 미만</label></li>
                                                                <li><label><input type="checkbox" id="category3-02" name="category3-02" className="category3-sub-btn" value="6,282원 ~ 10,710원" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>6,282원 ~ 10,710원</label></li>
                                                                <li><label><input type="checkbox" id="category3-03" name="category3-03" className="category3-sub-btn" value="10,710원 ~ 19,800원" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>10,710원 ~ 19,800원</label></li>
                                                                <li><label><input type="checkbox" id="category3-04" name="category3-04" className="category3-sub-btn" value="19,800원 이상" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>19,800원 이상</label></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#" className="category-btn">혜택<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                    
                                                        <div className="category-sub category-sub4">
                                                            <ul>
                                                                <li><label><input type="checkbox" id="category4-01" name="category4-01" className="category4-sub-btn" value="할인상품" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>할인상품</label></li>
                                                                <li><label><input type="checkbox" id="category4-02" name="category4-02" className="category4-sub-btn" value="한정수량" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>한정수량</label></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#" className="category-btn">유형<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path></svg></a>
                                                    
                                                        <div className="category-sub category-sub5">
                                                            <ul>
                                                                <li><label><input type="checkbox" id="category5-01" name="category5-01" className="category5-sub-btn" value="Kurly Only" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>Kurly Only</label></li>
                                                                <li><label><input type="checkbox" id="category5-02" name="category5-02" className="category5-sub-btn" value="선물하기" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>선물하기</label></li>
                                                                <li><label><input type="checkbox" id="category5-03" name="category5-03" className="category5-sub-btn" value="희소가치 프로젝트" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>희소가치 프로젝트</label></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="order-filter">
                                            <span>총 129건</span>
                                            <div className="order-menu">
                                                <a href="!#">추천순<svg width="14" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.9932 0.700195C8.73506 0.700195 10.3116 1.40557 11.4528 2.54565C12.5943 3.68594 13.3002 5.26111 13.3002 7.0002C13.3002 8.73928 12.5943 10.3145 11.4528 11.4547C10.3116 12.5948 8.73506 13.3002 6.9932 13.3002C5.25512 13.3002 3.68233 12.595 2.54387 11.4554C1.40457 10.315 0.700195 8.73952 0.700195 7.0002C0.700195 5.26087 1.40457 3.68541 2.54387 2.54497C3.68233 1.40537 5.25512 0.700195 6.9932 0.700195Z" stroke="#ccc" stroke-width="1.4"></path><path d="M4.5 5.21081H5.77027C5.81351 4.55135 6.26216 4.12973 6.95946 4.12973C7.64054 4.12973 8.09459 4.53514 8.09459 5.0973C8.09459 5.58784 7.90383 5.86944 7.35576 6.22524L7.1973 6.32432C6.45135 6.76216 6.13784 7.24865 6.18649 8.05946L6.19189 8.42703H7.44595V8.11892C7.44595 7.58378 7.64595 7.30811 8.35405 6.89189C9.08919 6.45405 9.5 5.87568 9.5 5.04865C9.5 3.85405 8.51081 3 7.02973 3C5.42432 3 4.54324 3.92973 4.5 5.21081ZM6.87838 11.0054C6.33784 11.0054 5.98108 10.6649 5.98108 10.1459C5.98108 9.62162 6.33784 9.28108 6.87838 9.28108C7.42973 9.28108 7.77568 9.62162 7.77568 10.1459C7.77568 10.6649 7.42973 11.0054 6.87838 11.0054Z" fill="#ccc"></path></svg></a>
                                                <i>|</i>
                                                <a href="!#">신상품순</a>
                                                <i>|</i>
                                                <a href="!#">판매량순</a>
                                                <i>|</i>
                                                <a href="!#">혜택순</a>
                                                <i>|</i>
                                                <a href="!#">낮은 가격순</a>
                                                <i>|</i>
                                                <a href="!#">높은 가격순</a>
                                            </div>
                                        </div>
                                        <ul id='newProduct'>
                                            {/* <!-- JSON DATA : AJAX 구현 --> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            )
        }

        // 서브 메인4 컴포넌트
        function SubMain4Component(){
            const createScriptFn=(imgSrc)=>{
                const scriptTag = document.createElement('script');
                scriptTag.src = imgSrc;
                document.body.appendChild( scriptTag );
            }
            React.useEffect(()=>{
                createScriptFn("./js/category.js");
                createScriptFn("./js/new_product4.js");
            })
            return(
                <main id="main" className="main4">
                    <section id="purpleWeek">
                        <div className="container">
                            <div className="title hide">
                                <h2>KURLY PURPLE WEEK</h2>
                            </div>
                            <div className="content">
                                <ul className="banner-list">
                                    <li data-num="1"><a href="!#" title="Banner Image"><img src="./img/banner_img1.jpg" alt="banner_img1" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            )
        }

        // 멤버 회원가입 : 회원가입폼 & 컨펌모달
        function MemberSignUpComponent(){
            // 컨펌모달 상태관리


            const createScriptFn=(imgSrc)=>{ // 파라미터 (매개변수)
                const scriptTag = document.createElement('script'); // 웹 문서 안에 스크립트 태그요소 만들기
                scriptTag.src = imgSrc; // 만들어진 태그요소에 소스속성 넣기   
                document.body.appendChild( scriptTag ); // 만들어진 태그요소를 본문 body 자식요소로 붙이기
            }
            React.useEffect(()=>{ // 함수에 아규먼트 전달해서 두개의 스크립트 생성 실행
                createScriptFn("./js/sign_up.js"); // 아규먼트 (전달인자)
            },[]);

            // yshy9373.dothome.co.kr/react_cdn_kurly_5/
            // yshy9373.dothome.co.kr/myadmin/

            return(
                <>  
                    {
                        /* 빈태그 플래그먼트(Flagment) : 
                        div 태그를 사용하면 중간에 태그요소가 삽입되어 스타일이나 경로에 영향을 끼칠 수 있다
                        그래서 가상태그요소인 빈태그를 이용 하나로 묶는 용도로 사용 */
                    }
                    <SignUpComponent />
                    <ConfirmModalComponent /> 
                </>
            )
        }
                function SignUpComponent(){
                    return(
                        <main id="main">
                            <section id="signUp">
                                <div className="container">
                                    <div className="title">
                                        <div className="main-title">
                                            <h2>회원가입</h2>
                                        </div>
                                        <div className="sub-title">
                                            <span><i>*</i>필수입력사항</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <form name="form_sign_up" autoComplement="off" id="formSignUp" method="post" action="./member_sign_up.php">
                                            <ul>
                                                <li>
                                                    <div className="left">
                                                        <div className="left-wrap">
                                                            <label htmlFor="inputId"><strong>아이디</strong><i>*</i></label>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="right-wrap">
                                                            <input type="text" maxlength="16" name="input_id" id="inputId" placeholder="아이디를 입력해주세요"/>
                                                            <button type="button" className="id-ok-btn">중복확인</button>
                                                            <p className="error-message">6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="left">
                                                        <div className="left-wrap">
                                                            <label htmlFor="inputId"><strong>비밀번호</strong><i>*</i></label>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="right-wrap">
                                                            <input type="password" name="input_pw1" id="inputPw1" placeholder="비밀번호를 입력해주세요"/>
                                                            <p className="error-message"></p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="left">
                                                        <div className="left-wrap">
                                                            <label htmlFor="inputId"><strong>비밀번호확인</strong><i>*</i></label>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="right-wrap">
                                                            <input type="password" name="input_pw2" id="inputPw2" placeholder="비밀번호를 한번 더 입력해주세요"/>
                                                            <p className="error-message"></p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="left">
                                                        <div className="left-wrap">
                                                            <label htmlFor="inputId"><strong>이름</strong><i>*</i></label>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="right-wrap">
                                                            <input type="text" maxlength="20" name="input_name" id="inputName" placeholder="이름을 입력해주세요"/>
                                                            <p className="error-message"></p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="left">
                                                        <div className="left-wrap">
                                                            <label htmlFor="inputId"><strong>이메일</strong><i>*</i></label>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="right-wrap">
                                                            <input type="text" name="input_email" id="inputEmail" placeholder="예: marketkurly@kurly.com"/>
                                                            <button type="button" className="email-ok-btn">중복확인</button>
                                                            <p className="error-message"></p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="left">
                                                        <div className="left-wrap">
                                                            <label htmlFor="inputId"><strong>휴대폰</strong><i>*</i></label>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="right-wrap">
                                                            <input type="text" maxLength="11" name="input_hp" id="inputHp" placeholder="숫자만 입력해주세요."/>
                                                            <button disabled type="button" className="hp-num-btn">인증번호 받기</button>
                                                            <button type="button" className="hp-num2-btn">다른번호 인증</button>
                                                            <p className="error-message hp-error-message"></p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className='hp-ok-box'>
                                                    <div className="left">
                                                        <div className="left-wrap">
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="right-wrap">
                                                            <input type="text" maxLength="6" name="input_hp_ok" id="inputHpOk"/>
                                                            <span className='time-count'></span>
                                                            <button disabled type="button" className="hp-num-ok-btn">인증번호 확인</button>
                                                            <p className="info-message hp-info-message">
                                                                인증번호가 오지 않는다면, 통신사 스팸 차단 서비스 혹은 휴대폰 번호 차단 여부를 확인해주세요. (마켓컬리 1644-1107)
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="left">
                                                        <div className="left-wrap">
                                                            <label htmlFor="inputId"><strong>주소</strong><i>*</i></label>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="right-wrap">
                                                            <input type="text" className="addr-hide" name="input_addr1" id="inputAddr1" placeholder="카카오 주소 검색 API"/>
                                                            <button type="button" className="addr-hide addr-re-btn"><img src="./img/sign_up/ico_search.svg" alt=""/>재검색</button>
                                                            <button type="button" className="addr-api-btn"><img src="./img/sign_up/ico_search.svg" alt=""/>주소검색</button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="addr-hide">
                                                    <div className="left">
                                                        <div className="left-wrap">
                                                        
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="right-wrap">
                                                            <input type="text" name="input_addr2" id="inputAddr2" placeholder="나머지 주소를 입력해주세요"/>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="addr-hide">
                                                    <div className="left">
                                                        <div className="left-wrap">
                                                        
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="right-wrap">
                                                            <em className="addr-map-area">샛별배송</em>
                                                            <p className="addr-info addr-info2">배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="left">
                                                        <div className="left-wrap">
                                                            <label htmlFor="inputId"><strong>성별</strong></label>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="right-wrap gender">
                                                            <label htmlFor="male"><input type="radio" name="gender" id="male" className="gender-btn" value="남자"/>남자</label>
                                                            <label htmlFor="female"><input type="radio" name="gender" id="female" className="gender-btn" value="여자"/>여자</label>
                                                            <label htmlFor="unselect"><input type="radio" name="gender" id="unselect" className="gender-btn" value="선택안함"/>선택안함</label>  
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="left">
                                                        <div className="left-wrap">
                                                            <label htmlFor="inputId"><strong>생년월일</strong></label>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="right-wrap birth">
                                                            <div className="birth-box">
                                                                <ul>
                                                                    <li><input type="text" maxLength='4' name="year" id="year" placeholder="YYYY"/></li>
                                                                    <li><i>/</i></li>
                                                                    <li><input type="text" maxLength='2' name="month" id="month" placeholder="MM"/></li>
                                                                    <li><i>/</i></li>
                                                                    <li><input type="text" maxLength='2' name="date" id="date" placeholder="DD"/></li>
                                                                </ul>
                                                            </div>
                                                            <p className="error-message birth-error-message"></p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="left">
                                                        <div className="left-wrap">
                                                            <label htmlFor="inputId"><strong>추가입력 사항</strong></label>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="right-wrap add-input-box1">
                                                            <label htmlFor="addInput1"><input type="radio" name="addInput" id="addInput1" className="add-input-btn" value="친구초대 추천인 아이디"/>친구초대 추천인 아이디</label>
                                                            <label htmlFor="addInput2"><input type="radio" name="addInput" id="addInput2" className="add-input-btn" value="참여 이벤트명"/>참여 이벤트명</label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="add-input-box-list">
                                                    <div className="left">
                                                        <div className="left-wrap"></div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="right-wrap add-input-box2">
                                                            <input type="text" name="add-input-text" id="add-input-text" placeholder="추천인 아이디를 입력해 주세요."/>
                                                            <p className="add-input-guide-text"></p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="hor-line">
                                                    <hr/>
                                                </li>
                                                <li>
                                                    <div className="left">
                                                        <div className="left-wrap">
                                                            <label htmlFor="inputId"><strong>이용약관동의</strong><i>*</i></label>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="right-wrap service">
                                                            <ul>
                                                                <li>
                                                                    <label htmlFor="allChk"><input type="checkbox" name="all_chk" id="allChk" value=""/>전체 동의합니다.</label>
                                                                    <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                                                                </li>
                                                                <li>
                                                                    <label htmlFor="chk1"><input type="checkbox" name="chk1" id="chk1" className="chk-btn" value="이용약관 동의(필수)"/>이용약관 동의(필수)</label>
                                                                    <button><span>약관보기</span><img src="./img/sign_up/arrow_right.svg" alt=""/></button>
                                                                </li>
                                                                <li>
                                                                    <label htmlFor="chk2"><input type="checkbox" name="chk2" id="chk2" className="chk-btn" value="개인정보 수집∙이용 동의(필수)"/>개인정보 수집∙이용 동의(필수)</label>
                                                                    <button><span>약관보기</span><img src="./img/sign_up/arrow_right.svg" alt=""/></button>
                                                                </li>
                                                                <li>
                                                                    <label htmlFor="chk3"><input type="checkbox" name="chk3" id="chk3" className="chk-btn" value="개인정보 수집∙이용 동의(선택)"/>개인정보 수집∙이용 동의(선택)</label>
                                                                    <button><span>약관보기</span><img src="./img/sign_up/arrow_right.svg" alt=""/></button>
                                                                </li>
                                                                <li>
                                                                    <label htmlFor="chk4"><input type="checkbox" name="chk4" id="chk4" className="chk-btn" value="무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)"/>무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)</label>
                                                                </li>
                                                                <li className='sns-email-box'>
                                                                    <label htmlFor="chk5"><input type="checkbox" name="chk5" id="chk5" className="chk-btn" value="SMS(선택)"/>SMS(선택)</label>
                                                                    <label htmlFor="chk6"><input type="checkbox" name="chk6" id="chk6" className="chk-btn" value="이메일(선택)"/>이메일(선택)</label>
                                                                </li>
                                                                <li>
                                                                    <p>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                                                                </li>
                                                                <li>
                                                                    <label htmlFor="chk7"><input type="checkbox" name="chk7" id="chk7" className="chk-btn" value="본인은 만 14세 이상입니다.(필수)"/>본인은 만 14세 이상입니다.(필수)</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="button-box">
                                                <button type="submit" className="submit-btn">가입하기</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </main>
                    )
                }

                function ConfirmModalComponent(){
                    return(
                        <div id="confirmModal">
                            <div className="wrap">
                                <div className="container">
                                    <div className="content">
                                        <h2></h2>
                                    </div>
                                    <div className="button-box">
                                        <button className="modal-ok-btn">확인</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }


        // 푸터 컴포넌트
        function FooterComponent({$path}){
            return(
                <footer id="footer">
                    <div className="row1">
                        <div className="container">
                            <div className="row1-1">
                                <div className="left">
                                    <ul>
                                        <li>
                                            <h2>고객행복센터<em>365일 오전 7시 - 오후 7시</em></h2>
                                        </li>
                                        <li>
                                            <h1>
                                                <a href="tel:1644-1107">1644-1107</a>
                                            </h1>
                                        </li>
                                        <li>
                                            <a href="!#">카카오톡 문의</a>
                                            <a href="!#">1:1 문의</a>
                                            <a href="!#">대량주문 문의</a>
                                        </li>
                                        <li>
                                            <p>비회원 문의 : <a href="mailto:help@kurlycorp.com">help@kurlycorp.com</a></p>
                                            <p>비회원 대량주문 문의 : <a href="mailto:kurlygift@kurlycorp.com">kurlygift@kurlycorp.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right">
                                    <ul>
                                        <li>
                                            <a href="!#">컬리소개</a>
                                            <i>|</i>
                                            <a href="!#">컬리소개영상</a>
                                            <i>|</i>
                                            <a href="!#">인재채용</a>
                                            <i>|</i>
                                            <a href="!#">이용약관</a>
                                            <i>|</i>
                                            <a href="!#">개인정보처리방침</a>
                                            <i>|</i>
                                            <a href="!#">이용안내</a>
                                        </li>
                                        <li>
                                            <div>
                                                법인명 (상호) : 주식회사 컬리<i>|</i>사업자등록번호 : 261-81-23567<a href="!#">사업자정보 확인</a><br/>
                                                통신판매업 : 제 2018-서울강남-01646 호<i>|</i>개인정보보호책임자 : 이원준<br/>
                                                <address>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)<i>|</i>대표이사 : 김슬아</address>
                                                입점문의 : <a href="!#">입점문의하기</a><i>|</i>제휴문의 : <a href="mailto:recruit@kurlycorp.com">recruit@kurlycorp.com</a><br/>
                                                채용문의 : <a href="mailto:recruit@kurlycorp.com">recruit@kurlycorp.com</a><br/>
                                                팩스: 070 - 7500 - 6098
                                            </div>
                                        </li>
                                        <li>
                                            <a href="!#"><img src={`${$path}img/ico_instagram.png`} alt=""/></a>
                                            <a href="!#"><img src={`${$path}img/ico_fb.png`} alt=""/></a>
                                            <a href="!#"><img src={`${$path}img/ico_blog.png`} alt=""/></a>
                                            <a href="!#"><img src={`${$path}img/ico_naverpost.png`} alt=""/></a>
                                            <a href="!#"><img src={`${$path}img/ico_youtube.png`} alt=""/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row1-2">
                                <a href="!#">
                                    <img src={`${$path}img/logo_isms.svg`} alt=""/>
                                    <span>
                                        [인증범위] 마켓컬리 쇼핑몰 서비스 개발·운영<br/>
                                        (심사받지 않은 물리적 인프라 제외)<br/>
                                        [유효기간] 2022.01.19 ~ 2025.01.18
                                    </span>
                                </a>
                                <a href="!#">
                                    <img src={`${$path}img/logo_privacy.svg`} alt=""/>
                                    <span>
                                        개인정보보호 우수 웹사이트 ·<br/>
                                        개인정보처리시스템 인증 (ePRIVACY PLUS)
                                    </span>
                                </a>
                                <a href="!#">
                                    <img src={`${$path}img/logo_tosspayments.svg`} alt=""/>
                                    <span>
                                        토스페이먼츠 구매안전(에스크로)<br/>
                                        서비스를 이용하실 수 있습니다.<br/>
                                    </span>
                                </a>
                                <a href="!#">
                                    <img src={`${$path}img/logo_wooriBank.svg`} alt=""/>
                                    <span>
                                        고객님이 현금으로 결제한 금액에 대해 우리은행과<br/>
                                        채무지급보증 계약을 체결하여 안전거래를 보장하고<br/>
                                        있습니다.
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="container">
                            <p>
                                마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.<br/>
                                마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
                            </p>
                            <p>
                                &copy; KURLY CORP. ALL RIGHTS RESERVED
                            </p>
                        </div>
                    </div>
                </footer>
            )
        }

        // 메인 모달 컴포넌트
        function MainModalComponent({mainModalState}){

            const onClickMainModalClose=(e)=>{
                e.preventDefault();
                mainModalState(); // 상위 컴포넌트 모달닫기 함수 호출 실행
            }

            const onClickMainModalClose2=(e)=>{
                e.preventDefault();
                mainModalState(); // 상위 컴포넌트 모달닫기 함수 호출 실행
                // 다시 안보기 하기 위해서
                // 로컬스토레이지에 객체 형태로 저장하기
                let newDate = new Date();
                let obj = { // 형식 마음대로 지정
                    모달이름: 'mainModal',
                    날짜: newDate.toUTCString()
                }
                localStorage.setItem('HYKURLYMAINMODAL', JSON.stringify(obj));
            }



            return(
                <div id='mainModal'>
                    <div className='wrap'>
                        <div className='container'>
                            <div className='img-box'>
                                <a href='!#'>
                                    <img src='./img/main_modal.jpg' alt='' />
                                </a>
                            </div>
                            <div className='button-box'>
                                <button onClick={onClickMainModalClose2}>다시 안 보기</button>
                                <button onClick={onClickMainModalClose}>닫기</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        // 퀵메뉴 컴포넌트
        function QuickMenuComponent({$path}){
            return(
                <div id="quickMenu">
                    <div className="row1">
                        <a href="!#" className="info-btn">
                            <img src={`${$path}img/deliveryInfo_20220701-a7b19dac069402e4b2aea7edbed0f6e0.png`} alt=""/>
                        </a>
                    </div>
                    <div className="row2">
                        <ul>
                            <li><a href="!#" className="row2-btn1">등급별 혜택</a></li>
                            <li><a href="!#" className="row2-btn2">레시피</a></li>
                            <li><a href="!#" className="row2-btn3">베스트 후기</a></li>
                        </ul>
                    </div>
                    <div className="row3">
                        <div className="up-box">
                            <a href="!#" className="up-btn"><img src={`${$path}img/arrow_up.png`} alt=""/></a>
                            <h2>최근 본 상품</h2>
                        </div>
                        <div className="view-box">
                            <ul>
                                <li>
                                    <div className="gap"><a href="!#"><img src={`${$path}img/1597040781844l0.jpg`} alt=""/></a></div>
                                </li>
                                <li>
                                    <div className="gap"><a href="!#"><img src={`${$path}img/1587024018623l0.jpg`} alt=""/></a></div>
                                </li>
                                <li>
                                    <div className="gap"><a href="!#"><img src={`${$path}img/1612414380722l0.jpg`} alt=""/></a></div>
                                </li>
                            </ul>
                        </div>
                        <div className="down-box">
                            <a href="!#" className="down-btn"><img src={`${$path}img/arrow_down.png`} alt=""/></a>
                        </div>
                    </div>
                </div>
            )
        }
        // 고탑 컴포넌트
        function GoTopComponent({$path}){
            return(
                <div id="goTop">
                    <a href="!#" className="go-top-btn">
                        <img src={`${$path}img/go_top.png`} alt=""/>
                    </a>
                </div>
            )
        }



//2. 리액트돔 => 돔컨테이너(#root)와 최상위 컴포넌트(WrapComponent) 연결
ReactDOM.render(
    <WrapComponent />,
    document.getElementById('root')
);