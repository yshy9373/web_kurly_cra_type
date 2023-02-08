import React from 'react';
import axios from 'axios';
import NewProduct4Component from './NewProduct4Component';

interface ProductType {
    번호 : number;
    제목 : string;
    이미지 : string;
    소개 : string;
}

interface Product {
    특가혜택?: ProductType[];
}

function SubMain4Component({특가혜택: 새상품}: Product){

    const [state, setState] = React.useState(새상품);
    
    const createScriptFn=(imgSrc: any)=>{
        const scriptTag = document.createElement('script');
        scriptTag.src = imgSrc;
        document.body.appendChild( scriptTag );
    }
    React.useEffect(()=>{
        createScriptFn("./js/category.js");
        // createScriptFn("./js/new_product4.js");

        axios({
            url:'./data/product4.json',
            method:'GET'
        })
        .then((res: any)=>{
            setState(res.data.특가혜택); // 데이터를 가져와서 상태변수에 저장한다.
        })
        .catch((err: any)=>{
            console.log(`AXIOS 실패 ${err}`);
        });
    },[]);

    
    return(
        <main id="main" className="main4">
            <section id="purpleWeek">
                <div className="container">
                    <div className="title hide">
                        <h2>KURLY PURPLE WEEK</h2>
                    </div>
                    <div className="content">
                        <ul className="banner-list">
                            <NewProduct4Component 특가혜택={state} />
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default SubMain4Component;

SubMain4Component.defaultProps = {
    새상품 : {
        번호 : 0,
        제목 : '',
        이미지 : '',
        소개 : ''
    }
}