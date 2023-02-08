import React from 'react';

function NewProduct4Component({특가혜택}: any) {
    return (
        <div>
            {
                특가혜택 && 특가혜택.map((item: any,idx: any)=>{
                    return(
                        <li key={idx}>
                            <a href="!#" title={item.제목}>
                                <img src={`./img/sub_main4/${item.이미지}`} alt={item.소개} />
                            </a>
                        </li>
                    )
                })
            }
        </div>
    );
};

export default NewProduct4Component;