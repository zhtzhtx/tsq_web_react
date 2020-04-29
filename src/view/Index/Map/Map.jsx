import { withMap, APILoader } from '@uiw/react-baidu-map';
import React, { useState } from 'react'



function ExampleMap(props) {
    const { BMap, map } = props;
    let startPointLng = 119.050247;
    let startPointLat = 31.667598;
    map.clearOverlays()
    if (props.mapClickFlag === 0) {
        startPointLng = 119.050247;
        startPointLat = 31.667598;
    } else if (props.mapClickFlag === 1) {
        startPointLng = 119.085505;
        startPointLat = 31.673605;
    } else if (props.mapClickFlag === 2) {
        startPointLng = 119.031409;
        startPointLat = 31.711224;
    }
    const p1 = new BMap.Point(startPointLng, startPointLat);
    const p2 = new BMap.Point(118.9958, 31.651122);

    let driving = new BMap.DrivingRoute(map, { renderOptions: { map: map, autoViewport: true } });
    driving.search(p1, p2);
    return null
}

const CustomWithMap = withMap(ExampleMap);


//景区地图部分
function ScenicMap() {
    let [mapClickFlag, setClickFlag] = useState(0)
    return (
        <div className="home_map_module">
            <div className="home_map_module_head">
                <p className="home_map_module_head_en">MAP</p>
                <p className="home_map_module_head_cn">地图</p>
                <hr className="home_map_module_head_line" />
            </div>
            <div className="home_map_module_main" >
                <div className="home_map_module_left">
                    <ul>
                        <li className="home_map_module_left_main" onClick={() => setClickFlag(0)}>
                            <div className="home_map_module_left_icon">
                                <div className={`home_map_module_left_icon_background ${mapClickFlag === 0 ? "home_map_module_left_icon_background_hover" : null}`}></div>
                                <img src={require("../../../assets/images/home_map_subway.png")} alt='' />
                                <span>地铁</span>
                            </div>
                            <div className="home_map_module_left_route">
                                <div className="home_map_module_left_route_background"></div>
                                <span
                                    className="home_map_module_left_route_span"
                                >S7、S9、游2、游3</span>
                            </div>
                        </li>
                        <li className="home_map_module_left_main" onClick={() => setClickFlag(1)} >
                            <div className="home_map_module_left_icon">
                                <div className={`home_map_module_left_icon_background ${mapClickFlag === 1 ? "home_map_module_left_icon_background_hover" : null}`}></div>
                                <img src={require("../../../assets/images/home_map_subway.png")} alt='' />
                                <span>高铁</span>
                            </div>
                            <div className="home_map_module_left_route">
                                <div className="home_map_module_left_route_background"></div>
                                <span
                                    className="home_map_module_left_route_span"
                                >S7、S9、游2、游3</span>
                            </div>
                        </li>
                        <li className="home_map_module_left_main" onClick={() => setClickFlag(2)}>
                            <div className="home_map_module_left_icon">
                                <div className={`home_map_module_left_icon_background ${mapClickFlag === 2 ? "home_map_module_left_icon_background_hover" : null}`}></div>
                                <img src={require("../../../assets/images/home_map_subway.png")} alt='' />
                                <span>自驾</span>
                            </div>
                            <div className="home_map_module_left_route">
                                <div className="home_map_module_left_route_background" ></div>
                                <span
                                    className="home_map_module_left_route_span"
                                >S7、S9、游2、游3</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="home_map_module_right">
                    <div id="home_map_module_right_map">
                        <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f" >
                            <CustomWithMap zoom={15} enableScrollWheelZoom={true} mapClickFlag={mapClickFlag} />
                        </APILoader>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ScenicMap