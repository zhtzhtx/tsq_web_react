import React, { useContext, useEffect } from 'react'
import './Introduction.styl'
//导入景区动态数据
import Provider, { IntroductionContext } from '../../store/introduction/index'

function IntroductionList(){
    let data = useContext(IntroductionContext)
    return(
        <div className="introduction_main">
                <ul>
                    {
                        data.list.map((value,index) => {
                            return <li className={`introduction_main_list_li ${index%2===0?"li_odd":"li_double"}`} key={index}>
                                <div className={`introduction_main_list_li_main ${index%2===0?"li_main_odd":"li_main_double"}`} >
                                    <div className="introduction_main_list_li_main_left">
                                        <img src={value.titleImgPath} alt="" />
                                    </div>
                                    <div className="introduction_main_list_li_main_right">
                                        <span className="introduction_main_list_li_title">{value.title}</span>
                                        <hr className="introduction_main_list_li_line" />
                                        <span className="introduction_main_list_li_content">{value.content}</span>
                                    </div>
                                </div>
                            </li>
                        })
                    }

                </ul >
            </div >
    )
}

export default function Introduction() {
    useEffect(() => {
        document.documentElement.scrollTop = 0
    })
    return (
        <div>
            <div className="top_img">
                <img src={require("../../assets/images/Sceniclandscape_title.png")} alt="" />
            </div>
            <Provider>
                <IntroductionList/>
            </Provider>
        </div >
    )
}
