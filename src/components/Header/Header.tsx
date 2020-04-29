import React, { useState } from 'react'
import { Link, withRouter  } from 'react-router-dom'
import './Header.styl'
import { Props} from './type'

 function Header(prop:Props) {
    let [showFlag, setShowFlag] = useState(-1)
    return (
        <div className="header">
            <div className="title">
                <div className="title_logo">
                    <img className="home_logo" src={require('../../assets/images/head_logo.png')} alt="" />
                </div>
                <div className="head_main">
                    <div className="title_head" onMouseOver={() => setShowFlag(showFlag = 0)} onMouseLeave={() => setShowFlag(showFlag = -1)}>
                        <Link to="/" className={`first_title ${showFlag === 0 || prop.location.pathname==="/" ? "first_title_hover" : null}`}>网站首页</Link>
                    </div>
                    <div className="title_head" onMouseOver={() => setShowFlag(showFlag = 1)} onMouseLeave={() => setShowFlag(showFlag = -1)}>
                        <span className={`first_title ${showFlag === 1 || prop.location.pathname==="/introduction" || prop.location.pathname==="/view"? "first_title_hover" : null}`}>景区介绍</span>
                        {
                            showFlag === 1 ?
                                <div className="guide_down" >
                                    <Link to="/introduction" className="second_title">景点介绍</Link>
                                    <Link to="/view" className="second_title" >景点风光</Link>
                                </div>
                                : null
                        }
                    </div >
                    <div className="title_head" onMouseOver={() => setShowFlag(showFlag = 2)} onMouseLeave={() => setShowFlag(showFlag = -1)}>
                        <Link to="/news" className={`first_title ${showFlag === 2 || prop.location.pathname==="/news"? "first_title_hover" : null}`}>景区动态</Link>
                    </div >
                    <div className="title_head" onMouseOver={() => setShowFlag(showFlag = 3)} onMouseLeave={() => setShowFlag(showFlag = -1)}>
                        <Link to="/guide" className={`first_title ${showFlag === 3 || prop.location.pathname==="/guide" ? "first_title_hover" : null}`}>游园指南</Link>
                    </div >
                    <div className="title_head" onMouseOver={() => setShowFlag(showFlag = 4)} onMouseLeave={() => setShowFlag(showFlag = -1)}>
                        <span className={`first_title ${showFlag === 4 || prop.location.pathname==="/company" || prop.location.pathname==="/plan"? "first_title_hover" : null}`}>关于我们</span>
                        {
                            showFlag === 4 ?
                                <div className="guide_down" >
                                    <Link to="/company" className="second_title" >企业风采</Link>
                                    <Link to="/plan" className="second_title" >景区规划</Link>
                                </div>
                                : null
                        }
                    </div >
                    <div className="title_head" onMouseOver={() => setShowFlag(showFlag = 5)} onMouseLeave={() => setShowFlag(showFlag = -1)}>
                        <span className={`first_title ${showFlag === 5 || prop.location.pathname==="/question" ? "first_title_hover" : null}`}>客服服务</span>
                        {
                            showFlag === 5 ?
                                <div className="guide_down" >
                                    <Link to="/question" className="second_title">常见问题</Link>
                                    <Link to="/" className="second_title" >意见建议</Link>
                                    <Link to="/" className="second_title" >旅游投诉</Link>
                                </div>
                                : null
                        }
                    </div >
                </div >
                <div className="title_version">
                    <span>EN</span>
                </div>
            </div >
        </div >
    )
}

export default withRouter(Header)