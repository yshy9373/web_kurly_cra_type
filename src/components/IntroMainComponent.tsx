import React from 'react';
import Section1Component from './intro_main/Section1Component';
import Section2Component from './intro_main/Section2Component';
import Section3Component from './intro_main/Section3Component';
import Section4Component from './intro_main/Section4Component';
import Section5Component from './intro_main/Section5Component';
import Section6Component from './intro_main/Section6Component';
import Section7Component from './intro_main/Section7Component';

function IntroMainComponent({$path}: any) {
    const createScriptFn=(imgSrc: any)=>{ // 파라미터 (매개변수)
        const scriptTag = document.createElement('script'); // 웹 문서 안에 스크립트 태그요소 만들기
        scriptTag.src = imgSrc; // 만들어진 태그요소에 소스속성 넣기   
        document.body.appendChild( scriptTag ); // 만들어진 태그요소를 본문 body 자식요소로 붙이기
    }
    React.useEffect(()=>{ // 함수에 아규먼트 전달해서 두개의 스크립트 생성 실행
        createScriptFn("./js/intro_main.js"); // 아규먼트 (전달인자)
    },[]);
    
    return (
        <main id='main'>
            <Section1Component />
            <Section2Component />
            <Section3Component />
            <Section4Component />
            <Section5Component />
            <Section6Component />
            <Section7Component />
        </main>
    );
};

export default IntroMainComponent;