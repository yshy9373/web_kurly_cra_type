import React from 'react';

function HeaderComponent({$path, introMainFn, subMain1Fn, subMain2Fn, subMain3Fn, subMain4Fn, memberSignUpFn, memberSignInFn}: any){

    const onClickIntroMain=(e: any)=>{
        e.preventDefault();
        introMainFn();
    }

    const onClickSubMain1=(e: any)=>{
        e.preventDefault();
        subMain1Fn();
    }

    const onClickSubMain2=(e: any)=>{
        e.preventDefault();
        subMain2Fn();
    }

    const onClickSubMain3=(e: any)=>{
        e.preventDefault();
        subMain3Fn();
    }

    const onClickSubMain4=(e: any)=>{
        e.preventDefault();
        subMain4Fn();
    }

    const onClickSignUp=(e: any)=>{
        e.preventDefault();
        memberSignUpFn();
    }

    const onClickSignIn=(e: any)=>{
        e.preventDefault();
        memberSignInFn();
    }

    return(
        <header id="header">
            <div className="row1">
                <div className="row1-1">
                    <span><a href='!#' onClick={onClickSignUp} className="on">회원가입</a></span>
                    <span><i>|</i></span>
                    <span><a href='!#' onClick={onClickSignIn}>로그인</a></span>
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
    
};

export default HeaderComponent;