import React from 'react';

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
};

export default Section1Component;