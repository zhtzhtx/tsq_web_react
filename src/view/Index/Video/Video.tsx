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
import { Player, BigPlayButton } from 'video-react'
import "../../../../node_modules/video-react/dist/video-react.css";


export default function Video() {
    //参数部分
    let [showFlag, setShowFlag] = useState(-1)//视频是否显示
    const body = document.querySelector("body") as HTMLElement//获取页面body
    //方法部分
    function videoShow() {
        setShowFlag(showFlag = 1);
        body.style.overflow = "hidden";
    }
    function videoHide() {
        setShowFlag(showFlag = -1);
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
            <div className="home_videoShow" >
                <img src={require("../../../assets/images/home_close_btn.png")} onClick={() => (videoHide())} className="home_btnClose" alt="" />
                <Player
                    fluid={false}
                    width="820"
                    src={require("../../../assets/video/tsq_clip.mp4")}
                >
                    <BigPlayButton position="center" />
                </Player>
            </div>
        )
    }

    //遮罩部分
    function Shade() {
        return (
            <div className="home_shade" ></div>
        )
    }

    return (
        <div>
            <VideoImg />
            {showFlag === 1 ? <VideoMain /> : null}
            {showFlag === 1 ? <Shade /> : null}
        </div>
    )
}
