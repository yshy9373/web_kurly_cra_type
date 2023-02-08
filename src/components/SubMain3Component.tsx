import React from 'react';
import axios from 'axios';
import NewProduct3Component from './NewProduct3Component';

interface ProductType {
    상품코드 : string;
    상품이미지 : string;
    카트이미지 : string;
    배송구분 : string;
    제조사 : string;
    상품명 : string;
    할인율 : number;
    정가 : number;
    상품정보 : string;
    판매처 : string;
}

interface Product {
    알뜰쇼핑?: ProductType[];
}

function SubMain3Component({알뜰쇼핑: 새상품}: Product){

    const [state, setState] = React.useState(새상품); 

    const createScriptFn=(imgSrc: any)=>{
        const scriptTag = document.createElement('script');
        scriptTag.src = imgSrc;
        document.body.appendChild( scriptTag );
    }
    React.useEffect(()=>{
        createScriptFn("./js/category.js");
        // createScriptFn("./js/new_product3.js");

        axios({
            url:'./data/product3.json',
            method:'GET'
        })
        .then((res: any)=>{
            setState(res.data.알뜰쇼핑);
        })
        .catch((err: any)=>{
            console.log(`AXIOS 실패 ${err}`);
        });

    },[]);

    const commaRegExp=(z: any)=>{
        let str: string = z.toString();
        const regExp = /(^\d+)(\d{3})/;
        while( regExp.test(str) ){
            str = str.replace(regExp, '$1,$2');
        }
        // 결과를 되돌려 주라 호출한 위치에 리턴해준다.
        return str; // 컴마형식 변환된 스트링 되돌려 준다.
    }

    return(
        <main id="main" className="main3">
            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="title hide">
                            <h2>최저가 도전, 365일 언제나 알뜰하게</h2>
                        </div>
                        <div className="content">
                            <a href="!#"><img src="./img/sub_main3/GvAErq3L5k3bGbGsZSaee8xTQ6Pjkhe7JECgRP7E.jpg" alt="" /></a>
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
                                    <span><svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.78 3.96303C12.504 2.16973 10.4086 1 8.04 1C4.15192 1 1 4.15192 1 8.04C1 11.9281 4.15192 15.08 8.04 15.08C11.9281 15.08 15.08 11.9281 15.08 8.04" stroke="#ddd" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"></path><path d="M14.4933 1L14.4933 4.52H10.9733" stroke="#ddd" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"></path></svg>초기화</span>
                                </div>
                                <div className="col-gap">
                                    <div className="wrap">
                                        <ul className="category">
                                            <li>
                                                <a href="!#" className="category-btn">카테고리<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                            
                                                <div className="category-sub category-sub1">
                                                    <ul>
                                                        <li><label><input type="checkbox" id="category1-01" name="category1-01" className="category1-sub-btn" value="정육·계란" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>정육·계란</label></li>
                                                        <li><label><input type="checkbox" id="category1-02" name="category1-02" className="category1-sub-btn" value="과일·견과·쌀" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>과일·견과·쌀</label></li>
                                                        <li><label><input type="checkbox" id="category1-03" name="category1-03" className="category1-sub-btn" value="베이커리·치즈·델리" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>베이커리·치즈·델리</label></li>
                                                        <li><label><input type="checkbox" id="category1-04" name="category1-04" className="category1-sub-btn" value="샐러드·간편식" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>샐러드·간편식</label></li>
                                                        <li><label><input type="checkbox" id="category1-05" name="category1-05" className="category1-sub-btn" value="생활용품·리빙·캠핑" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>생활용품·리빙·캠핑</label></li>
                                                        <li><label><input type="checkbox" id="category1-06" name="category1-06" className="category1-sub-btn" value="국·반찬·메인요리" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>국·반찬·메인요리</label></li>
                                                        <li><label><input type="checkbox" id="category1-07" name="category1-07" className="category1-sub-btn" value="면·양념·오일" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>면·양념·오일</label></li>
                                                        <li><label><input type="checkbox" id="category1-08" name="category1-08" className="category1-sub-btn" value="간식·과자·떡" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>간식·과자·떡</label></li>
                                                        <li><label><input type="checkbox" id="category1-09" name="category1-09" className="category1-sub-btn" value="생수·음료·우유·커피" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>생수·음료·우유·커피</label></li>
                                                        <li><label><input type="checkbox" id="category1-10" name="category1-10" className="category1-sub-btn" value="수산·해산·건어물" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>수산·해산·건어물</label></li>
                                                        <li><button className="category1-more-view-btn">카테고리 더보기<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-jbgpyq e1frj59j0"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></button></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="!#" className="category-btn">브랜드<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                                
                                                <div className="category-sub category-sub2">
                                                    <div className="category-sub-order">
                                                        <a href="!#">가나다 순</a>
                                                        <i>|</i>
                                                        <a href="!#">상품많은 순</a>
                                                    </div>
                                                    <ul>
                                                        <li><label><input type="checkbox" id="category2-01" name="category2-01" className="category2-sub-btn" value="고기반찬" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>고기반찬</label></li>
                                                        <li><label><input type="checkbox" id="category2-02" name="category2-02" className="category2-sub-btn" value="고베식당" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>고베식당</label></li>
                                                        <li><label><input type="checkbox" id="category2-03" name="category2-03" className="category2-sub-btn" value="곰표x콜린스그린" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>곰표x콜린스그린</label></li>
                                                        <li><label><input type="checkbox" id="category2-04" name="category2-04" className="category2-sub-btn" value="농부의 꽃" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>농부의 꽃</label></li>
                                                        <li><label><input type="checkbox" id="category2-05" name="category2-05" className="category2-sub-btn" value="농협" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>농협</label></li>
                                                        <li><label><input type="checkbox" id="category2-06" name="category2-06" className="category2-sub-btn" value="눋2도씨" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>눋2도씨</label></li>
                                                        <li><label><input type="checkbox" id="category2-07" name="category2-07" className="category2-sub-btn" value="닌텐도" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>닌텐도</label></li>
                                                        <li><label><input type="checkbox" id="category2-08" name="category2-08" className="category2-sub-btn" value="달콤트리" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>달콤트리</label></li>
                                                        <li><label><input type="checkbox" id="category2-09" name="category2-09" className="category2-sub-btn" value="대상" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>대상</label></li>
                                                        <li><label><input type="checkbox" id="category2-10" name="category2-10" className="category2-sub-btn" value="던킨도너츠" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>던킨도너츠</label></li>
                                                        <li><button className="category2-more-view-btn">브랜드 더보기<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-jbgpyq e1frj59j0"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></button></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="!#" className="category-btn">가격<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                            
                                                <div className="category-sub category-sub3">
                                                    <ul>
                                                        <li><label><input type="checkbox" id="category3-01" name="category3-01" className="category3-sub-btn" value="6,282원 미만" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>6,282원 미만</label></li>
                                                        <li><label><input type="checkbox" id="category3-02" name="category3-02" className="category3-sub-btn" value="6,282원 ~ 10,710원" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>6,282원 ~ 10,710원</label></li>
                                                        <li><label><input type="checkbox" id="category3-03" name="category3-03" className="category3-sub-btn" value="10,710원 ~ 19,800원" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>10,710원 ~ 19,800원</label></li>
                                                        <li><label><input type="checkbox" id="category3-04" name="category3-04" className="category3-sub-btn" value="19,800원 이상" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>19,800원 이상</label></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="!#" className="category-btn">혜택<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                            
                                                <div className="category-sub category-sub4">
                                                    <ul>
                                                        <li><label><input type="checkbox" id="category4-01" name="category4-01" className="category4-sub-btn" value="할인상품" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>할인상품</label></li>
                                                        <li><label><input type="checkbox" id="category4-02" name="category4-02" className="category4-sub-btn" value="한정수량" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>한정수량</label></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="!#" className="category-btn">유형<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                            
                                                <div className="category-sub category-sub5">
                                                    <ul>
                                                        <li><label><input type="checkbox" id="category5-01" name="category5-01" className="category5-sub-btn" value="Kurly Only" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>Kurly Only</label></li>
                                                        <li><label><input type="checkbox" id="category5-02" name="category5-02" className="category5-sub-btn" value="선물하기" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>선물하기</label></li>
                                                        <li><label><input type="checkbox" id="category5-03" name="category5-03" className="category5-sub-btn" value="희소가치 프로젝트" /><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z" stroke="#ddd"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#ddd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>희소가치 프로젝트</label></li>
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
                                        <a href="!#">추천순<svg width="14" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.9932 0.700195C8.73506 0.700195 10.3116 1.40557 11.4528 2.54565C12.5943 3.68594 13.3002 5.26111 13.3002 7.0002C13.3002 8.73928 12.5943 10.3145 11.4528 11.4547C10.3116 12.5948 8.73506 13.3002 6.9932 13.3002C5.25512 13.3002 3.68233 12.595 2.54387 11.4554C1.40457 10.315 0.700195 8.73952 0.700195 7.0002C0.700195 5.26087 1.40457 3.68541 2.54387 2.54497C3.68233 1.40537 5.25512 0.700195 6.9932 0.700195Z" stroke="#ccc" strokeWidth="1.4"></path><path d="M4.5 5.21081H5.77027C5.81351 4.55135 6.26216 4.12973 6.95946 4.12973C7.64054 4.12973 8.09459 4.53514 8.09459 5.0973C8.09459 5.58784 7.90383 5.86944 7.35576 6.22524L7.1973 6.32432C6.45135 6.76216 6.13784 7.24865 6.18649 8.05946L6.19189 8.42703H7.44595V8.11892C7.44595 7.58378 7.64595 7.30811 8.35405 6.89189C9.08919 6.45405 9.5 5.87568 9.5 5.04865C9.5 3.85405 8.51081 3 7.02973 3C5.42432 3 4.54324 3.92973 4.5 5.21081ZM6.87838 11.0054C6.33784 11.0054 5.98108 10.6649 5.98108 10.1459C5.98108 9.62162 6.33784 9.28108 6.87838 9.28108C7.42973 9.28108 7.77568 9.62162 7.77568 10.1459C7.77568 10.6649 7.42973 11.0054 6.87838 11.0054Z" fill="#ccc"></path></svg></a>
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
                                   <NewProduct3Component 알뜰쇼핑={state} commaRegExp={commaRegExp} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default SubMain3Component;

SubMain3Component.defaultProps = {
    새상품: {
        상품코드 : '',
        상품이미지 : '',
        카트이미지 : '',
        배송구분 : '',
        제조사 : '',
        상품명 : '',
        할인율 : 0,
        정가 : 0,
        상품정보 : '',
        판매처 : ''
    }
}