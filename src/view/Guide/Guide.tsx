import React, { useState } from 'react'
import './Guide.styl'
export default function Guide() {
    const data = [
        {
            title: "入口",
            remark: "购票",
            img: "/images/scenicGuide_main_guidemap1.png"
        },
        {
            title: "农趣园",
            remark: "摸\\钓鱼",
            img: "/images/scenicGuide_main_guidemap2.png"
        },
        {
            title: "动物园",
            remark: "百鸟\\猴\\鸵鸟园",
            img: "/images/scenicGuide_main_guidemap3.png"
        },
        {
            title: "儿童乐园",
            remark: "水上步行球",
            img: "/images/scenicGuide_main_guidemap4.png"
        },
        {
            title: "乘船浏览",
            remark: "胭脂河\\天生峡... ",
            img: "/images/scenicGuide_main_guidemap5.png"
        },
        {
            title: "索桥\\天生桥",
            remark: "浏览参观",
            img: "/images/scenicGuide_main_guidemap6.png"
        },
        {
            title: "休闲广场",
            remark: "特产、农家餐饮",
            img: "/images/scenicGuide_main_guidemap7.png"
        },
        { title: "出口", remark: "", img: "/images/scenicGuide_main_guidemap8.png" }
    ];
    const fare = [
        { title: "淡季：20元/人", remark: "12月1日至次年2月28日、6月1日至8月31日" },
        { title: "旺季：30元/人", remark: "3月1日至5月31日、9月1日至11月30日" },
        { title: "游船：20元/人", remark: "游船：20元/人" },
        { title: "悬索桥：5元/人", remark: "观光车：5元/人（4人起步）" }
    ]
    const [guideIndex, setGuideIndex] = useState(0)
    return (
        <div>
            <div className="top_img">
                <img src={require("../../assets/images/Sceniclandscape_title.png")} alt="" />
            </div>
            <div className="top_title">
                <div className="top_title_module">
                    <span>景区导览</span>
                </div>
            </div>
            <div className="guide_main">
                <div className="guide_main_map">
                    <div className="guide_main_map_title">
                        {
                            data.map((value, index) => {
                                return <div className="guide_main_map_title_single" onClick={() => setGuideIndex(index)} key={index}>
                                    <span className={`guide_main_map_title_single_span ${guideIndex === index ? "guide_main_map_title_single_span_hover" : null}`}>{index + 1}</span>
                                    <p className={`guide_main_map_title_single_p1 ${guideIndex === index ? "guide_main_map_title_single_p_hover" : null}`}>{value.title}</p>
                                    <p className={`guide_main_map_title_single_p2 ${guideIndex === index ? "guide_main_map_title_single_p_hover" : null}`}>{value.remark}</p>
                                </div>
                            })
                        }

                    </div >
                    <div className="guide_main_map_img">
                        <img src={data[guideIndex].img} alt="" />
                    </div>
                </div >
                <div className="guide_main_ticket">
                    <div className="guide_main_title">
                        <div className="guide_main_title_main">
                            <img src={require("../../assets/images/scenicGuide_ticket.png")} alt="" />
                            <div className="guide_main_title_right">
                                <span className="guide_main_title_right_title">门票价格</span>
                                <span className="guide_main_title_right_remark">PRICE</span>
                            </div>
                        </div>
                    </div>
                    <div className="guide_main_ticket_content">
                        <img src={require("../../assets/images/scenicGuide_ticket_position.png")} alt="" />
                        <div className="guide_main_ticket_content_right">
                            <ul >
                                {
                                    fare.map((value, index) => {
                                        return<li className="guide_main_ticket_content_right_li" key={index}>
                                            <div className="guide_main_ticket_content_right_li_block"></div>
                                            <div className="guide_main_ticket_content_right_li_content">
                                                <span className="guide_main_ticket_content_right_li_title">{value?value.title:''}</span>
                                                <span className="guide_main_ticket_content_right_li_remark">{value?value.remark:''}</span>
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div >
                <div className="guide_main_traffic">
                    <div className="guide_main_title">
                        <div className="guide_main_title_main">
                            <img src={require("../../assets/images/scenicGuide_traffic.png")} alt="" />
                            <div className="guide_main_title_right">
                                <span className="guide_main_title_right_title">交通路线</span>
                                <span className="guide_main_title_right_remark">TRAFFIC</span>
                            </div>
                        </div>
                    </div>
                    <div className="guide_main_traffic_content">
                        <div className="guide_main_traffic_content_subway">
                            <img src={require("../../assets/images/traffic_routes_railway.png")} alt="" />
                            <p>运营时间：6:00-23:00(每15分钟一班)</p>
                        </div>
                        <div className="guide_main_traffic_content_bus">
                            <img src={require("../../assets/images/traffic_routes_bus.png")} alt="" />
                            <p>6:00-23:00(每30分钟一班)</p>
                        </div>
                    </div>
                    <div className="guide_main_traffic_content">
                        <div className="guide_main_traffic_content_busYou2">
                            <img src={require("../../assets/images/scenicGuide_traffic_bus_you2.png")} alt="" />
                        </div>
                    </div>
                    <div className="guide_main_traffic_content">
                        <div className="guide_main_traffic_content_platform">
                            <p className="guide_main_traffic_content_platform_title">沿途主要站点</p>
                            <p
                                className="guide_main_traffic_content_platform_content"
                            >天生桥公园—凤凰井—凤凰小镇—悦居广场—金蛙新村—南方新城—实验幼儿园—广成花园—党校—弯子口南—农贸市场—通济街—交通客运公司—中山桥—三高中北门—S7溧水站—天利广场—水保路口—十里变电站—十里牌—门神岗—门神岗加油站（原临时停靠点)—王武村—宁杭高铁溧水站—屏溪佳苑—东山村委会—观音寺—乌龙禅寺—王家边—交河—神墩—共和集镇—周园（到达）</p>
                            <p className="guide_main_traffic_content_platform_title">天生桥景区（周园）：每30分钟一班;</p>
                            <p
                                className="guide_main_traffic_content_platform_title"
                            >天生桥景区发车时间：7:30 —14:30；周园发班时间： 9:30—16:30</p>
                        </div>
                    </div>
                    <div className="guide_main_traffic_content">
                        <div className="guide_main_traffic_content_busYou3">
                            <img src={require("../../assets/images/scenicGuide_traffic_bus_you3.png")} alt="" />
                        </div>
                    </div>
                    <div className="guide_main_traffic_content">
                        <div className="guide_main_traffic_content_platform">
                            <p className="guide_main_traffic_content_platform_title">沿途主要站点</p>
                            <p
                                className="guide_main_traffic_content_platform_content"
                            >S7溧水站—金山公寓—阳光佳苑—S7中山湖站—城建集团—水岸新都西—水岸康城—水岸康城东—水岸康城南—体育公园北—广电局—南方新城—金蛙新村—悦居广场—凤凰小镇—凤凰井—天生桥公园—太阳岛—新村—九塘社区—上方社区—山口—社东—石湫便民服务中心—石湫街道办事处—S9石湫站—浦江学院—小村上—臧村头—杨甸村—洪曹—翟家—王家—光明大队部—左山村—环山河景区（到达） ）</p>
                            <p className="guide_main_traffic_content_platform_title">S7溧水站-S9石湫站：每30分钟一班;</p>
                            <p
                                className="guide_main_traffic_content_platform_title"
                            >S7溧水站发车时间：5:50—18:10；环山河站发车时间：7:10—18:20</p>
                        </div>
                    </div>
                    <div className="guide_main_traffic_content">
                        <div className="guide_main_traffic_content_car">
                            <img src={require("../../assets/images/traffic_routes_self_bus.png")} alt="" />
                        </div>
                        <div className="guide_main_traffic_content_trafficBus">
                            <img src={require("../../assets/images/traffic_routes_travel_bus.png")} alt="" />
                        </div>
                    </div>
                    <div className="guide_main_title">
                        <div className="guide_main_title_main">
                            <img src={require("../../assets/images/scenicGuide_traffic.png")} alt="" />
                            <div className="guide_main_title_right">
                                <span className="guide_main_title_right_title">其他服务</span>
                                <span className="guide_main_title_right_remark">ADDITION</span>
                            </div>
                        </div>
                    </div>
                    <div className="guide_main_traffic_content">
                        <div className="guide_main_traffic_content_addition">
                            <ul>
                                <li className="guide_main_traffic_content_addition_right_li">
                                    <div className="guide_main_traffic_content_addition_right_li_block"></div>
                                    <div className="guide_main_traffic_content_addition_right_li_content">
                                        <span className="guide_main_traffic_content_addition_right_li_title">电瓶车服务</span>
                                        <span
                                            className="guide_main_traffic_content_addition_right_li_remark"
                                        >电瓶游览车：可按游客要求全园游览，随叫随停，也可包车</span>
                                    </div>
                                </li>
                                <li className="guide_main_traffic_content_addition_right_li">
                                    <div className="guide_main_traffic_content_addition_right_li_block"></div>
                                    <div className="guide_main_traffic_content_addition_right_li_content">
                                        <span className="guide_main_traffic_content_addition_right_li_title">游客中心</span>
                                        <span
                                            className="guide_main_traffic_content_addition_right_li_remark"
                                        >位于景区入口处，主要设有休息座椅、触摸屏、电视机、医务室、开水间等，为游客提供便利服务</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
