import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './News.styl'
//导入景区动态数据
import Provider, { NewsContext } from '../../store/news/index'

function NewsMain() {
    let data = useContext(NewsContext)
    
    return (
        <div className="news_main">
            <ul className="home_dynamics_list">
                {
                    data.list.map((value, index) => {
                        return <Link to={`/newsDetail/${index}`} className="home_dynamics_list_li" key={index}>
                            <div className="home_dynamics_left">
                                <span className="home_dynamics_content_date">07-02</span>
                                <hr className="home_dynamics_content_line" />
                                <img className="home_dynamics_content_img" src="../../assets/images/home_scenery_dynamics.png" alt="" />
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
            <div className="home_dynamics_list_page">
                <div className="home_dynamics_list_page_text page_last page_text_hover">
                    <span>上一页</span>
                </div>
                <div className="home_dynamics_list_page_text">
                    <span>1</span>
                </div>
                <div className="home_dynamics_list_page_text">
                    <span>2</span>
                </div>
                <div className="home_dynamics_list_page_text">
                    <span>3</span>
                </div>
                <div className="home_dynamics_list_page_text" >
                    <span>..</span>
                </div>
                <div className="home_dynamics_list_page_text">
                    <span></span>
                </div>
                <div className="home_dynamics_list_page_text page_next page_text_hover">
                    <span>下一页</span>
                </div>
            </div>
        </div>
    )
}
export default function News() {
    useEffect(() => {
        document.documentElement.scrollTop = 0
    })
    return (
        <div>
            <div className="top_img">
                <img src={require("../../assets/images/Sceniclandscape_title.png")} alt="" />
            </div>
            <div className="top_title">
                <div className="top_title_module">
                    <span>景区动态</span>
                </div>
            </div>
            <Provider>
                <NewsMain />
            </Provider>
        </div>
    )
}
