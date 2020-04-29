import React, { useEffect, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './NewsDetail.styl'
import { Props, NewsData } from './type'
//导入景区动态数据
import Provider, { NewsContext } from '../../store/news/index'



function NewsDetailMain(props: NewsData) {
    let data = useContext(NewsContext)
    const dataIndex = parseInt(props.state.match.params.index)
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
            <div className="news_detail_model">
                <div className="news_detail_model_main">
                    <div className="news_detail_model_title">
                        <span>{data.list[dataIndex] ? data.list[dataIndex].title : null}</span>
                    </div>
                    <div className="news_detail_model_content">
                        <span dangerouslySetInnerHTML={{ __html: data.list[dataIndex] ? data.list[dataIndex].htmlContent : '' }}></span>
                    </div>
                </div>
                <ul className="home_dynamics_list" >
                    {
                        data.list.slice(0, 3).map((value, index) => {
                            return <Link to={`/newsDetail/${index}`} className="home_dynamics_list_li" key={index}>
                                <div className="home_dynamics_left">
                                    <span className="home_dynamics_content_date">07-02</span>
                                    <hr className="home_dynamics_content_line" />
                                    <img className="home_dynamics_content_img" src={require("../../assets/images/home_scenery_dynamics.png")} alt="" />
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
                <div className="home_dynamics_more">
                    <img src={require("../../assets/images/home_more.png")} alt="" />
                </div>
            </div>
        </div>
    )
}

function NewsDetail(props: Props) {
    useEffect(() => {
        document.documentElement.scrollTop = 0
    })
    return (
        <Provider>
            <NewsDetailMain state={props} />
        </Provider>
    )
}
export default withRouter(NewsDetail)