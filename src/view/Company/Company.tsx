import React from 'react'
import './Company.styl'

export default function Company() {
    return (
        <div>
            <div className="top_img">
                <img src={require("../../assets/images/Sceniclandscape_title.png")} alt=""/>
            </div>
            <div className="top_title">
                <div className="top_title_module">
                    <span>企业风采</span>
                </div>
            </div>
            <div className="company_main">
                <div className="company_main_box">
                    <div className="company_main_box_left">
                        <img src={require("../../assets/images/company_content1.png")} alt=""/>
                        <div className="company_main_aim">
                            <img src={require("../../assets/images/company_content3.png")} alt=""/>
                            <p className="company_main_aim_title">公司企业目标</p>
                            <p className="company_main_aim_content">打造一流环境、提供一流服务、创建一流景区</p>
                            <div className="company_main_aim_background"></div>
                        </div>
                        <div className="company_main_ideaDevelopment_idea">
                            <img src={require("../../assets/images/company_content4.png")} alt=""/>
                            <p className="company_main_ideaDevelopment_idea_title">公司经营理念</p>
                            <p className="company_main_ideaDevelopment_idea_content">以人为本、文明诚信</p>
                        </div>
                        <div className="company_main_ideaDevelopment_development">
                            <img src={require("../../assets/images/company_content6.png")} alt=""/>
                            <p className="company_main_ideaDevelopment_development_title">公司发展思路</p>
                            <p className="company_main_ideaDevelopment_development_content">以桥为体、以河为魂</p>
                        </div>
                        <div className="company_main_advertising">
                            <p className="company_main_advertising_title">景区广告词</p>
                            <p className="company_main_advertising_content">北有燕子矶 南有天生桥 长江有个大三峡 天生桥有个小三峡</p>
                        </div>
                    </div>
                    <div className="company_main_box_right">
                        <div className="company_main_spirit">
                            <p className="company_main_spirit_title">公司精神</p>
                            <p className="company_main_spirit_content">真情待客、严格律己、团结奉献、自强不息</p>
                        </div>
                        <img src={require("../../assets/images/company_content2.png")} alt=""/>
                        <div className="company_main_purpose">
                            <img src={require("../../assets/images/company_content5.png")} alt=""/>
                            <p className="company_main_purpose_title">公司企业宗旨</p>
                            <p className="company_main_purpose_content">发展与贡献同步</p>
                            <div className="company_main_purpose_background"></div>
                        </div>
                        <img src={require("../../assets/images/company_content7.png")} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
