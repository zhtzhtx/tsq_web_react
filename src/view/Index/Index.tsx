import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Index.styl'
//引入轮播图组件
import Banner from '../../components/Banner/Banner'
//引入宣传视频组件
import Video from './Video/Video'
//导入景区动态数据
import Provider, { NewsContext } from '../../store/news/index'
//引入百度地图
import ScenicMap from './Map/Map'
//首页组件部分
//轮播图上的导航
function ServiceEntrance() {
    return (
        <div className="home_service_entrance">
            <div className="home_service_entrance_lunbo">
                <img src={require("../../assets/images/ticket_entrance.png")} alt="" />
                <div className="home_service_entrance_text">
                    <div className="home_service_entrance_title">景点门票</div>
                    <div className="home_service_entrance_content">享受最优质的游览体验</div>
                </div>
            </div>
            <div className="home_service_entrance_lunbo">
                <img src={require("../../assets/images/service_entrance.png")} alt="" />
                <div className="home_service_entrance_text">
                    <div className="home_service_entrance_title">配套服务</div>
                    <div className="home_service_entrance_content">享受最优质的游览体验</div>
                </div>
            </div>
            <div className="home_service_entrance_lunbo">
                <img src={require("../../assets/images/travel_entrance.png")} alt="" />
                <div className="home_service_entrance_text">
                    <div className="home_service_entrance_title">出行指南</div>
                    <div className="home_service_entrance_content">享受最优质的游览体验</div>
                </div>
            </div>
            <div className="home_service_entrance_lunbo">
                <img src={require("../../assets/images/link_entrance.png")} alt="" />
                <div className="home_service_entrance_text">
                    <div className="home_service_entrance_title">友情链接</div>
                    <div className="home_service_entrance_content">享受最优质的游览体验</div>
                </div>
            </div>
        </div>
    )
}

//关于景区部分
function ScenicAbout() {
    return (
        <div className="home_scenic_about">
            <div className="home_scenic_left">
                <img src={require("../../assets/images/home_scenic_about.png")} alt="" />
            </div>
            <div className="home_scenic_right">
                <div className="home_scenic_title_en">SCENIC GENERAL</div>
                <div className="home_scenic_title_cn">景区概况</div>
                <hr className="home_scenic_line" />
                <hr className="home_scenic_green" />
                <div className="home_scenic_content">
                    <span>素有“江南三峡"之称的胭脂河——天生桥位于宁高高速公路西侧，距南京48公里，禄口国际机场18公里，这里重岗叠岚，草木茂盛，是南京郊县新开辟的旅游胜地。目前，南京天生桥风景名胜区规划为四个功能区，胭脂河——天生桥景观游赏区、凤凰井景区、休闲度假区、旅游服务区。</span>
                </div>
                <Link to="/introduction" className="home_scenic_more">
                    <img src={require("../../assets/images/home_more.png")} alt="" />
                </Link>
            </div>
        </div>
    )
}

//景区风光部分
function Scenery() {
    let [showFlag, setShowFlag] = useState(-1)
    return (
        <div className="home_scenery">
            <div className="home_scenery_title">
                <span className="home_scenery_title_en">SCENERY</span>
                <span className="home_scenery_title_cn">景区风光</span>
            </div>
            <hr className="home_scenery_title_line" />
            <hr className="home_scenery_title_line_green" />
            <div className="home_scenery_main">
                <div className="home_scenery_content">
                    <div className="home_scenery_spot">
                        <div className="home_scenery_spot_scenic" onMouseOver={() => (setShowFlag(0))} onMouseLeave={() => (setShowFlag(-1))}>
                            <img className="home_scenery_spot_img" src={require("../../assets/images/home_scenery_spot1.png")} alt="" />
                            {showFlag === 0 ?
                                <div className="home_scenery_spot_scenic_hide" >
                                    <div className="home_scenery_spot_scenic_main">
                                        <span className="home_scenery_spot_scenic_title">秦淮之源</span>
                                        <span className="home_scenery_spot_scenic_title">天生桥</span>
                                        <span className="home_scenery_spot_scenic_title">天生桥博物馆</span>
                                    </div>
                                </div>
                                : null}
                        </div>
                        <div className="home_scenery_spot_scenic_introduction">
                            <span className="home_scenery_spot_introduction_title">风景</span>
                            <span className="home_scenery_spot_introduction_content">江南水乡，枕水人家。在溧水享受精神和身体的完全放松</span>
                            <Link to="/view" className="home_scenery_spot_introduction_more">查看更多</Link>
                            <hr className="home_scenery_introduction_more_line" />
                            <hr className="home_scenery_introduction_more_green" />
                        </div>
                    </div>
                    <div className="home_scenery_spot">
                        <div className="home_scenery_spot_scenic" onMouseOver={() => (setShowFlag(1))} onMouseLeave={() => (setShowFlag(-1))}>
                            <img className="home_scenery_spot_img" src={require("../../assets/images/home_scenery_spot2.png")} alt="" />
                            {showFlag === 1 ?
                                <div className="home_scenery_spot_scenic_hide" >
                                    <div className="home_scenery_spot_scenic_main">
                                        <span className="home_scenery_spot_scenic_title">秦淮之源</span>
                                        <span className="home_scenery_spot_scenic_title">天生桥</span>
                                        <span className="home_scenery_spot_scenic_title">天生桥博物馆</span>
                                    </div>
                                </div>
                                : null}
                        </div>
                        <div className="home_scenery_spot_scenic_introduction">
                            <span className="home_scenery_spot_introduction_title">游玩</span>
                            <span className="home_scenery_spot_introduction_content">江南水乡，枕水人家。在溧水享受精神和身体的完全放松</span>
                            <Link to="/view" className="home_scenery_spot_introduction_more">查看更多</Link>
                            <hr className="home_scenery_introduction_more_line" />
                            <hr className="home_scenery_introduction_more_green" />
                        </div>
                    </div>
                    <div className="home_scenery_spot">
                        <div className="home_scenery_spot_scenic" onMouseOver={() => (setShowFlag(2))} onMouseLeave={() => (setShowFlag(-1))}>
                            <img className="home_scenery_spot_img" src={require("../../assets/images/home_scenery_spot3.png")} alt="" />
                            {showFlag === 2 ?
                                <div className="home_scenery_spot_scenic_hide" >
                                    <div className="home_scenery_spot_scenic_main">
                                        <span className="home_scenery_spot_scenic_title">秦淮之源</span>
                                        <span className="home_scenery_spot_scenic_title">天生桥</span>
                                        <span className="home_scenery_spot_scenic_title">天生桥博物馆</span>
                                    </div>
                                </div>
                                : null}
                        </div>
                        <div className="home_scenery_spot_scenic_introduction">
                            <span className="home_scenery_spot_introduction_title">美食</span>
                            <span className="home_scenery_spot_introduction_content">江南水乡，枕水人家。在溧水享受精神和身体的完全放松</span>
                            <Link to="/view" className="home_scenery_spot_introduction_more">查看更多</Link>
                            <hr className="home_scenery_introduction_more_line" />
                            <hr className="home_scenery_introduction_more_green" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//景区动态部分
function Dynamics() {
    let data = useContext(NewsContext)
    return (
        <div className="home_dynamics">
            <div className="home_dynamics_title">
                <span className="home_dynamics_title_en">JOURNALISM</span>
                <span className="home_dynamics_title_cn">景区动态</span>
            </div>
            <hr className="home_dynamics_title_line" />
            <hr className="home_dynamics_title_line_green" />
            <div className="home_dynamics_main">
                <div className="home_dynamics_content">
                    <ul className="home_dynamics_list">
                        {
                            data.list.map((value, index) => {
                                return <Link to={`/newsDetail/${index}`} className="home_dynamics_list_li" key={value.id} >
                                    <div className="home_dynamics_left">
                                        <span className="home_dynamics_content_date">07-02</span>
                                        <hr className="home_dynamics_content_line" />
                                        <img className="home_dynamics_content_img"
                                            src={require("../../assets/images/home_scenery_dynamics.png")}
                                            alt=""
                                        />
                                        <p className="home_dynamics_type">景区动态</p>
                                    </div>
                                    <div className="home_dynamics_center">
                                        <span className="home_dynamics_content_title">{value.title}</span>
                                        <span className="home_dynamics_content_content">{value.textContent.substring(0, 80) + '...'}</span>
                                    </div>
                                    <div className="home_dynamics_right">
                                        <img src={value.titleImgPath} alt="" />
                                    </div>
                                </Link>
                            })
                        }
                    </ul>
                </div>
                <Link to="/news" className="home_dynamics_more">
                    <img src={require("../../assets/images/home_more.png")} alt="" />
                </Link>
            </div>
        </div>
    )
}



export default function Index() {
    return (
        <div>
            <Banner />
            <ServiceEntrance />
            <ScenicAbout />
            <Video />
            <Scenery />
            <Provider>
                <Dynamics />
            </Provider>
            <ScenicMap />
        </div>
    )
}
