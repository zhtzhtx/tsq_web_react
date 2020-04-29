import React from 'react'
import './Foot.styl'
export default function Foot() {
    return (
        <div className="foot">
            <div className="foot_main">
                <div className="foot_contact_us">
                    <div className="foot_contact_us_main">
                        <span className="foot_contact_us_title">联系我们</span>
                        <span className="foot_contact_us_phone">025-57204511</span>
                    </div>
                    <div className="foot_vertical_line_box">
                        <hr className="foot_vertical_line" />
                    </div>
                    <div className="foot_address_main">
                        <span className="foot_contact_us_small foot_contact_us_address">南京市溧水区天生桥景区（溧水天生桥路500号）</span>
                        <span className="foot_contact_us_small foot_contact_us_email">E-mail：nj_tsq@163.com</span>
                    </div>
                </div>
                <hr className="foot_line" />
                <div className="foot_menu">
                    <div className="foot_menu_first">
                        <span>网站首页</span>
                    </div>
                    <div className="foot_menu_first">
                        <span>景区介绍</span>
                        <div className="foot_menu_second">
                            <span>景点介绍</span>
                            <span>景区风光</span>
                            <span>游园指南</span>
                        </div>
                    </div>
                    <div className="foot_menu_first">
                        <span>景区动态</span>
                    </div>
                    <div className="foot_menu_first">
                        <span>景区票务</span>
                    </div>
                    <div className="foot_menu_first">
                        <span>关于我们</span>
                        <div className="foot_menu_second">
                            <span>历史沿革</span>
                            <span>景区规划</span>
                        </div>
                    </div>
                    <div className="foot_menu_first">
                        <span>客服服务</span>
                        <div className="foot_menu_second">
                            <span>常见问题</span>
                            <span>投诉建议</span>
                        </div>
                    </div>
                    <div className="foot_wx_code">
                        <div className="foot_wx_code_img">
                            <img src={require('../../assets/images/foot_wx_code.png')} alt=""/>
                        </div>
                        <div className="foot_wx_code_title">微信公众号</div>
                    </div>
                </div>
                <hr className="foot_line" />
                <div
                    className="foot_other"
                >南京溧水商贸旅游集团天生桥文化旅游发展有限公司版权所有&emsp;&emsp;苏ICP备18055678号&emsp;&emsp;技术支持：南京xxxx公司</div>
            </div>
        </div>
    )
}
