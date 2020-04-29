import React, { useEffect, useRef } from 'react'
import './Banner.styl'

export default function Banner() {

    let num = useRef(0);//用于设置图片的序号（key）



    //实现下方指示器样式根据轮播图切换而进行变换
    function showButton() {
        const buttons = document.querySelectorAll("#buttons span") as NodeListOf<HTMLElement>;
        //清除之前的样式
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].className === "on") {
                buttons[i].className = "";
            }
        }
        //添加当前轮播图的指示器的样式
        buttons[num.current].className = "on";
    }
    useEffect(() => {
        const imgsList = document.getElementById("list") as HTMLElement; //获取轮播图的容器
        const screenWidth = document.body.offsetWidth; //获取当前屏幕的分辨率，用于实现轮播图的自适应布局
        const listWidth = 3 * screenWidth; //用于设置轮播图容器的总宽度

        imgsList.style.width = listWidth.toString() + "px"; //设置轮播图容器的总宽度
        //将图片宽度设置为当前屏幕的分辨率，用于实现轮播图的自适应布局
        (function () {
            const imgs = document.querySelectorAll("#list img") as NodeListOf<HTMLElement>;
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].style.width = screenWidth.toString() + "px";
            }
        })()
        
        const timer = setInterval(() => {
            num.current++;
            if (num.current === 3) {
                num.current = 0;
            }
            const offSetWidth = -num.current * screenWidth; //用于轮播图的切换
            imgsList.style.left = offSetWidth.toString() + "px"; //实现轮播图的切换
            showButton(); //实现指示器的切换
        }, 3000);
        //组件卸载或更新时清空定时器
        return () => {
            clearInterval(timer);
        }

    }, [])

    return (
        <div id="container">
            <div id="list" >
                <img src={require('../../assets/images/home_lunbo1.png')} key="0" alt="" />
                <img src={require('../../assets/images/home_lunbo2.png')} key="1" alt="" />
                <img src={require('../../assets/images/home_lunbo3.png')} key="2" alt="" />
            </div>
            <div id="buttons">
                <span key="0" className="on"></span>
                <span key="1"></span>
                <span key="2"></span>
            </div>
        </div>
    )
}
