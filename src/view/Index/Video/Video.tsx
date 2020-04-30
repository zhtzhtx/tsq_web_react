import React, { useState } from 'react'
import './Video.styl'

/*
    这里需要注意的是react无法直接使用<video>标签直接播放视频，所以需要安装'video-react'模块(官网：https://video-react.js.org/),
可以通过'npm install --save video-react'进行安装。
    值得注意的是，我们所使用的是typescript，需要对安装的模块进行类型声明，一些第三方厂商，在了解TS的趋势后，在代码库编写了‘类型声
明文件’, 默认安装的时候不下载。但是可以通过@types/[module]的方式去代码库主动下载。
    但'video-react'并没有编写‘类型声明模块’，不能直接通过@types/[module]下载，所以我们需自己声明该模块，方式为在react-app-env.d.ts
文件中加入 "declare module 'video-react'"
*/
/*
    第二次修改时发现这里抱错：
    Warning: Legacy context API has been detected within a strict-mode tree.
    The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.
    Please update the following components: Player

    Warning: Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug 
    in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the
    desired state in the Bezel component.

    起初我以为是我自己的问题，检测了好久，后来把整个useState删除后依然报错，说明是video-react的问题，希望官方尽快维护更新吧
*/
import { Player, BigPlayButton } from 'video-react'
import "../../../../node_modules/video-react/dist/video-react.css";


export default function Video() {
    //参数部分
    let [showFlag, setShowFlag] = useState({ display: "none" })//视频是否显示
    const body = document.querySelector("body") as HTMLElement//获取页面body
    //方法部分
    function videoShow() {
        setShowFlag({ display: "inline" });
        body.style.overflow = "hidden";
    }
    function videoHide() {
        setShowFlag({ display: "none" });
        body.style.overflow = "";
    }
    //景区宣传视频部分
    function VideoImg() {
        return (
            <div className="home_video" onClick={() => (videoShow())} >
                <img className="home_video_img" src={require("../../../assets/images/home_video.png")} alt="" />
                <img className="home_video_icon" src={require("../../../assets/images/home_video_icon.png")} alt="" />
                <div className="home_video_mask"></div>
            </div >
        )
    }

    //视频弹窗部分
    function VideoMain() {
        return (
            <div className="home_videoShow" style={showFlag}>
                <img src={require("../../../assets/images/home_close_btn.png")} onClick={() => (videoHide())} className="home_btnClose" alt="" />
                <Player
                    fluid={false}
                    width="820"
                    src="http://www.njtsq.com/uploadFile/video/tsq_clip.mp4"
                >
                    <BigPlayButton position="center" />
                </Player>
            </div>
        )
    }

    //遮罩部分
    function Shade() {
        return (
            <div className="home_shade" style={showFlag}></div>
        )
    }

    return (
        <div>
            <VideoImg />
            <VideoMain />
            <Shade />
        </div>
    )
}
