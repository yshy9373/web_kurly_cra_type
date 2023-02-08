import React from 'react';

function MainModalComponent({mainModalState}: any){

    const onClickMainModalClose=(e: any)=>{
        e.preventDefault();
        mainModalState(); // 상위 컴포넌트 모달닫기 함수 호출 실행
    }

    const onClickMainModalClose2=(e: any)=>{
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
};

export default MainModalComponent;