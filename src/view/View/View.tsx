import React, { useState, useEffect, useRef, useContext } from 'react'
import './View.styl'

//导入景区风光数据
import Provider, { ViewContext } from '../../store/view/index'



function ViewMain() {
    let imgIndex = useRef(0)
    const [indexFlag, setFlag] = useState(0)
    const [titleFlag, setTitleFlag] = useState(0)
    function imgMove(flag: string) {
        const list = document.querySelector("#view_banner_list") as HTMLElement;
        if (flag === "right" && imgIndex.current < 4) {
            imgIndex.current++;
        } else if (flag === "left" && imgIndex.current > 0) {
            imgIndex.current--;
        }
        switch (imgIndex.current) {
            case 0:
                list.style.left = "0px";
                break;
            case 1:
                list.style.left = "-450px";
                break;
            case 2:
                list.style.left = "-900px";
                break;
            case 3:
                list.style.left = "-1029px";
                break;
            case 4:
                list.style.left = "-1029px";
                break;
        }
        setFlag(imgIndex.current)
    }
    let data = useContext(ViewContext)
    return (
        <div>
            <div className="top_title">
                <div className="top_title_module" onClick={()=>setTitleFlag(0)}>
                    <div className="top_title_module_left">
                        <span>风景</span>
                        <hr className={`${titleFlag!==0?"none":null}`}/>
                    </div>
                    <div className="top_title_module_right">
                        <span>SCENERY</span>
                    </div>
                </div>
                <div className="top_title_module" onClick={()=>setTitleFlag(1)}>
                    <div className="top_title_module_left">
                        <span>游玩</span>
                        <hr className={`${titleFlag!==1?"none":null}`} />
                    </div>
                    <div className="top_title_module_right">
                        <span>PLAY</span>
                    </div>
                </div>
                <div className="top_title_module"  onClick={()=>setTitleFlag(2)}>
                    <div className="top_title_module_left">
                        <span>美食</span>
                        <hr className={`${titleFlag!==2?"none":null}`}/>
                    </div>
                    <div className="top_title_module_right">
                        <span>FOOD</span>
                    </div>
                </div >
            </div >
            <div className="view_banner">
                <div className="view_banner_btnLeft" onClick={() => imgMove('left')}>
                    <img src={require("../../assets/images/leftBtn.png")} alt="" />
                </div>
                <div id="view_banner_main">
                    <div id="view_banner_list">
                        {
                            data.list.map((value, index) => {
                                return <div className={`view_banner_list_single ${indexFlag === index ? "img_on" : null}`} key={index}>
                                    <span>{value.title}</span>
                                    <img src={value.img} alt="" />
                                </div>
                            })
                        }

                    </div>
                </div >
                <div className="view_banner_btnRight" onClick={() => imgMove('right')} >
                    <img src={require("../../assets/images/rightBtn.png")} alt="" />
                </div >
            </div >
            <div className="view_logo">
                <img src={require("../../assets/images/fengguanglogo.png")} alt="" />
            </div>
            <div className="view_content">
                <div className="view_content_main">
                    <div className="view_content_title" >{data.list[indexFlag] ? data.list[indexFlag].title : ''}</div>
                    <div className="view_content_content" dangerouslySetInnerHTML={{ __html: data.list[indexFlag] ? data.list[indexFlag].content : '' }}></div>
                </div>
            </div>
            <div className="view_img">
                <div className="view_img_main">
                    <div className="view_img_single">
                        <img src={require("../../assets/images/contentfengguang1.png")} alt="" />
                        <img src={require("../../assets/images/contentfengguang2.png")} style={{ marginTop: '2.5rem' }} alt="" />
                    </div>
                    <div className="view_img_single">
                        <img src={require("../../assets/images/contentfengguang3.png")} alt="" />
                        <div className="view_img_slogan">
                            <p className="view_img_slogan_title">凝脂沉霞</p>
                            <p className="view_img_slogan_content">两岸险峻、陡峭、秀丽、幽深，又素有“江南小三峡”之称</p>
                        </div>
                        <img src={require("../../assets/images/contentfengguang4.png")} style={{ marginTop: '2.5rem' }} alt="" />
                    </div>
                    <div className="view_img_single">
                        <img src={require("../../assets/images/contentfengguang5.png")} alt="" />
                        <img src={require("../../assets/images/contentfengguang6.png")} style={{ marginTop: '2.5rem' }} alt="" />
                        <div className="view_img_slogan">
                            <p className="view_img_slogan_title">凝脂沉霞</p>
                            <p className="view_img_slogan_content">两岸险峻、陡峭、秀丽、幽深，又素有“江南小三峡”之称</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function View() {
    useEffect(() => {
        document.documentElement.scrollTop = 0
    })
    return (
        <Provider>
            <div className="top_img">
                <img src={require("../../assets/images/Sceniclandscape_title.png")} alt="" />
            </div>
            <ViewMain />
            <div className="view_map">
                <img src={require("../../assets/images/fengguangditu.png")} alt="" />
            </div>
        </Provider >
    )
}
