import React from 'react'
import './Plan.styl'
export default function Plan() {
    return (
        <div>
            <div className="top_img">
                <img src={require("../../assets/images/Sceniclandscape_title.png")} alt=""/>
            </div>
            <div className="top_title">
                <div className="top_title_module">
                    <span>规划建设</span>
                </div>
            </div>
            <div className="plan_main">
                <div className="plan_main_title">
                    <div className="plan_main_title_main">
                        <img src={require("../../assets/images/scenicGuide_traffic.png")} alt=""/>
                        <div className="plan_main_title_right">
                            <span className="plan_main_title_right_title">规划建设</span>
                            <span className="plan_main_title_right_remark">PLAN</span>
                        </div>
                    </div>
                </div>
                <div className="plan_main_content">
                    <p>&emsp;&emsp;为充分挖掘胭脂河天生桥深厚的历史文化底蕴，南京市委、市政府决定从2012年起对胭脂河天生桥遗址公园进行全新打造。该项目总规划面积30平方公里，其中，核心区7平方公里，是南京市重点建设的11个遗址公园之一。未来几年，溧水区委、区政府将以胭脂河天生桥遗址公园保护性发展为契机，立足南京与长三角都市圈，依托南京禄口机场、溧水高铁站、高速网络、轻轨交通等优势交通资源，致力于遗址公园和文化的保护、文化遗产的传承，打造集文化遗址观光、文化展示、游乐、文化体验、农业博览、休闲、商务、度假等产业为一体的国家级综合旅游度假区、文化休闲度假养生胜地。根据项目总体规划，目前，游客服务中心、秦淮源博物馆等项目已启动建设，明年年底前将对游客开放；明代皇家度假酒店、明传家小镇商业街、大明繁会实景秀、明朝皇家园林等一批项目也将于明年年初陆续开工建设，届时以文化遗址为核心，独具文化魅力和历史风情的天生桥风景名胜区将完整的呈现于广大游客面前。</p>
                </div>
                <div className="plan_main_picture">
                    <img className="plan_main_picture_background" src={require("../../assets/images/bg1231231.png")} alt=""/>
                    <div className="plan_main_picture_main">
                        <div className="plan_main_picture_single">
                            <img src={require("../../assets/images/111.png")} alt=""/>
                            <p className="plan_main_picture_single_title">天生桥景区</p>
                        </div>
                        <div className="plan_main_picture_single">
                            <img src={require("../../assets/images/222.png")} alt=""/>
                            <p className="plan_main_picture_single_title">秦淮源博物馆</p>
                        </div>
                        <div className="plan_main_picture_single">
                            <img src={require("../../assets/images/333.png")} alt=""/>
                            <p className="plan_main_picture_single_title">大明文化体验区</p>
                        </div>
                        <div className="plan_main_picture_single">
                            <img src={require("../../assets/images/444.png")} alt=""/>
                            <p className="plan_main_picture_single_title">稻田中的皇家田园酒店</p>
                        </div>
                        <div className="plan_main_picture_single">
                            <img src={require("../../assets/images/555.png")} alt=""/>
                            <p className="plan_main_picture_single_title">胭脂河的景观改造</p>
                        </div>
                        <div className="plan_main_picture_single">
                            <img src={require("../../assets/images/666.png")} alt=""/>
                            <p className="plan_main_picture_single_title">明朝小镇</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
