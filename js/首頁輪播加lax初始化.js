//  // function on
//  jQuery(document).ready(function () {
//     slider3dInit();
// });
var w = $(window).width();
window.onload=function(){

    if(window.innerWidth>1400){
        slider3dInit()
        lax.setup() // init

            const updateLax = () => {
                lax.update(window.scrollY)
                window.requestAnimationFrame(updateLax)
            }

            window.requestAnimationFrame(updateLax)
      
    }else if(window.innerWidth > 1150){
        slider3dInit2()
        lax.setup() // init

            const updateLax = () => {
                lax.update(window.scrollY)
                window.requestAnimationFrame(updateLax)
            }

            window.requestAnimationFrame(updateLax)
       
    }else if(window.innerWidth > 990){
        slider3dInit3()
        lax.setup() // init

            const updateLax = () => {
                lax.update(window.scrollY)
                window.requestAnimationFrame(updateLax)
            }

            window.requestAnimationFrame(updateLax)
       
    }else if(window.innerWidth > 850){
        slider3dInit4()
        lax.setup() // init

            const updateLax = () => {
                lax.update(window.scrollY)
                window.requestAnimationFrame(updateLax)
            }

            window.requestAnimationFrame(updateLax)
    }else if(window.innerWidth > 650){
        slider3dInit5()
        lax.setup() // init

            const updateLax = () => {
                lax.update(window.scrollY)
                window.requestAnimationFrame(updateLax)
            }

            window.requestAnimationFrame(updateLax)
    }else if(window.innerWidth > 430){
        slider3dInit6()
        lax.setup() // init

            const updateLax = () => {
                lax.update(window.scrollY)
                window.requestAnimationFrame(updateLax)
            }

            window.requestAnimationFrame(updateLax)
    }else{
        slider3dInit7()
        lax.setup() // init

            const updateLax = () => {
                lax.update(window.scrollY)
                window.requestAnimationFrame(updateLax)
            }

            window.requestAnimationFrame(updateLax)
    }
}
window.onresize=function(){
    if(window.innerWidth > 1600){
        slider3dInit()
       
    }else if(window.innerWidth > 1250){
        slider3dInit2()
        
    }else if(window.innerWidth > 900){
        slider3dInit3()
        
    }else if(window.innerWidth > 850){
        slider3dInit4()
    }else if(window.innerWidth > 650){
        slider3dInit5()
    }else if(window.innerWidth > 430){
        slider3dInit6()
    }else{
        slider3dInit7()
    }
}
// function init  初始化
// 有設初始化的值所以預設值會被蓋過，所以要改東西從這裡改
function slider3dInit() {
    jQuery('.slider3d').carousel({
        num: 5,
        maxWidth: 550,
        maxHeight: 400,
        // 後面兩個物件的距離，數字越大兩物件水平距離越遠
        distance: 280,
        // 後面兩物件與中央物件的前後距離
        scale: 0.6,
        animationTime: 800,
        autoPlay: false,
        showTime: 4000
    });
}
function slider3dInit2() {
    jQuery('.slider3d').carousel({
        num: 5,
        maxWidth: 400,
        maxHeight: 320,
        // 後面兩個物件的距離，數字越大兩物件水平距離越遠
        distance: 230,
        // 後面兩物件與中央物件的前後距離
        scale: 0.6,
        animationTime: 800,
        autoPlay: false,
        showTime: 4000
    });
}

function slider3dInit3() {
    jQuery('.slider3d').carousel({
        num: 5,
        maxWidth: 370,
        maxHeight: 300,
        // 後面兩個物件的距離，數字越大兩物件水平距離越遠
        distance: 180,
        // 後面兩物件與中央物件的前後距離
        scale: 0.6,
        animationTime: 800,
        autoPlay: false,
        showTime: 4000
    });
}
function slider3dInit4() {
    jQuery('.slider3d').carousel({
        num: 5,
        maxWidth: 370,
        maxHeight: 300,
        // 後面兩個物件的距離，數字越大兩物件水平距離越遠
        distance: 180,
        // 後面兩物件與中央物件的前後距離
        scale: 0.6,
        animationTime: 800,
        autoPlay: false,
        showTime: 4000
    });
}
function slider3dInit5() {
    jQuery('.slider3d').carousel({
        num: 5,
        maxWidth: 370,
        maxHeight: 300,
        // 後面兩個物件的距離，數字越大兩物件水平距離越遠
        distance: 80,
        // 後面兩物件與中央物件的前後距離
        scale: 0.6,
        animationTime: 800,
        autoPlay: false,
        showTime: 4000
    });
}
function slider3dInit6() {
    jQuery('.slider3d').carousel({
        num: 5,
        maxWidth: 370,
        maxHeight: 300,
        // 後面兩個物件的距離，數字越大兩物件水平距離越遠
        distance: 10,
        // 後面兩物件與中央物件的前後距離
        scale: 0,
        animationTime: 800,
        autoPlay: false,
        showTime: 4000
    });
}
function slider3dInit7() {
    jQuery('.slider3d').carousel({
        num: 5,
        maxWidth: 260,
        maxHeight: 180,
        // 後面兩個物件的距離，數字越大兩物件水平距離越遠
        distance: 10,
        // 後面兩物件與中央物件的前後距離
        scale: 0,
        animationTime: 800,
        autoPlay: false,
        showTime: 4000
    });
}
/**
* Created by tingyuan on 15/12/29.
*/
;
(function ($) {
    if ($ === undefined) {
        return;
    }

    // defaultConfig 預設值
    // 如果把初始化的值都拿掉，網頁會呈現預設值的東西
    var defaultConfig = {
        num: 3,
        maxWidth: 250,
        maxHeight: 150,
        autoPlay: true,
        showTime: 1000,
        animationTime: 300,
        scale: 0.8,
        distance: 50
    };


    function getzIndexValue(num, direction) {
        var zIndexs = [];
        for (var i = 0; i < num; i++) {
            if (i <= (num - 1) / 2) {
                zIndexs.push(i);
            } else {
                zIndexs.push((num - 1) / 2 - i);
            }
        }
        if (direction === 'left') {
            zIndexs.reverse();
            return zIndexs;
        }
        if (direction === 'right') {
            return zIndexs;
        }

    }

    function scroll($container, direction) {
        if ($container.data('isanimating')) {
            return;
        }
        var config = $container.data('config');
        var halfShowNum = (config.num - 1) / 2;
        
        var scales, i, newIndex;
        var totalNum = $container.data('totalNum');
        var targetCss;
        var firstIndexBeforeScroll, lastIndexBeforeScroll;
        if (direction === 'left') {
            newIndex = ($container.data('index') - 1 + totalNum) % totalNum;
        } else if (direction === 'right') {
            newIndex = ($container.data('index') + 1) % $container.data('totalNum');
        } else {
            return;
        }
        // $container.find('ul li').stop(true, true);
        var tempIndexsInfo = getShowIndexs($container);
        firstIndexBeforeScroll = tempIndexsInfo.indexs[0];
        lastIndexBeforeScroll = tempIndexsInfo.indexs[config.num - 1];
        $container.data('index', newIndex);
        var showIndexsInfo = getShowIndexs($container);
        var zIndexs = getzIndexValue(config.num, direction);
        if (totalNum === config.num) {
            animationTimeForEdge = 0
        } else if (totalNum - config.num === 2) {
            animationTimeForEdge = config.animationTime / 2;
        } else {
            animationTimeForEdge = config.animationTime;
        }

        /*
         showIndexsInfo = {
         indexs: [5, 6, 0, 1, 2]
         hashIndexs: {
         '5': 0,
         '6': 1,
         '0': 2,
         '1': 3,
         '2': 4
         }
         }
         */
        $container.find('ul li').each(function (index, element) {

            i = showIndexsInfo.hashIndexs[index];

            // scales
            if (i !== undefined) {
                scales = Math.pow(config.scale, Math.abs(i - halfShowNum));
                // scale1 = Math.pow(0, Math.abs(i - halfShowNum));
                $container.data('isanimating', true);
                $(element).css({
                    display: 'block',
                    'z-index': zIndexs[i] + 3
                    // 動畫按了按鈕後的動畫
                }).animate({
                    opacity: scales,
                    width: scales * config.maxWidth,
                    height: scales * config.maxHeight,
                    left: i * config.distance + (1 - scales) * config.maxWidth * Number(i > halfShowNum),
                    // 後方兩物件按了左右按鈕後的水平高度，以/6為基準，設成/2的話水營高度會變高
                    top: -((1 - scales) * config.maxHeight / 6)
                }, config.animationTime, function () {
                    $container.data('isanimating', false);
                });

            } else {
                scales = Math.pow(config.scale, halfShowNum);
                //if(direction === 'right' && index === firstIndexBeforeScroll){
                //    console.log('right' + index);
                //} else if(direction === 'left' && index === lastIndexBeforeScroll) {
                //    console.log('left' + index);
                //}

                targetCss = {
                    display: 'none',
                    left: halfShowNum * config.distance + (1 - scales) * config.maxWidth / 2,
                    top: 0
                };
                if (direction === 'left' && index === lastIndexBeforeScroll) {

                    $(element).css('z-index', -1).animate({
                        left: "-=" + config.distance + "px"
                    }, config.animationTime, function () {
                        $(element).css(targetCss);
                    });
                } else if (direction === 'right' && index === firstIndexBeforeScroll) {

                    $(element).css('z-index', -1).animate({
                        left: "+=" + config.distance + "px"
                    }, config.animationTime, function () {
                        $(element).css(targetCss);
                    });
                } else {
                    $(element).css({
                        display: 'none',
                        width: scales * config.maxWidth,
                        height: scales * config.maxHeight,
                        left: halfShowNum * config.distance + (1 - scales) * config.maxWidth / 2,
                        top: 0,
                    });
                }
            }

        });
    }

    function getConfig(newConfig) {
        var config = null;
        if (typeof newConfig === 'object' && newConfig !== null) {
            config = {};
            for (var prop in defaultConfig) {
                if (defaultConfig.hasOwnProperty(prop)) {
                    config[prop] = defaultConfig[prop];
                }
            }
            for (prop in newConfig) {
                if (newConfig.hasOwnProperty(prop) && config.hasOwnProperty(prop)) {
                    config[prop] = newConfig[prop];
                }
            }
        }
        return config;
    }

    function getShowIndexs($container) {
        var showIndexs = [];
        var temp;
        var halfShowNum = ($container.data('config').num - 1) / 2;
        var currentIndex = $container.data('index') || 0;
        var totalNum = $container.data('totalNum') || 0;
        for (var i = -halfShowNum; i <= halfShowNum; i++) {
            temp = currentIndex + i;
            showIndexs.push((temp < 0 ? (temp + totalNum) : temp) % totalNum);
        }
        var hashIndexs = {};
        for (i = 0; i < showIndexs.length; i++) {
            hashIndexs[showIndexs[i]] = i;
        }
        return {
            indexs: showIndexs,
            hashIndexs: hashIndexs
        };
    }

    // 調整按鈕的地方
    function initStyle($container) {
        var showIndexsInfo = getShowIndexs($container);

        var zIndex = 3;
        var scales;
        var config = $container.data('config');
        var halfShowNum = (config.num - 1) / 2;
        var listWidth = halfShowNum * config.distance * 2 + config.maxWidth;
        var containerWidth = $container.width();
        var containerHeight = $container.height();


        if (containerWidth < listWidth) {
            $container.width(listWidth);
        }
        if (containerHeight < config.maxHeight) {
            $container.height(config.maxHeight);
        }

        // 調整img大小
        $container.find('ul li img').css({
            width: "100%",
            height: "100%"
        });
        $container.find('ul').css({
            position: 'relative',
            width: listWidth,
            height: config.maxHeight,
            'list-style': 'none',
            padding: 0,
            margin: 0,
            marginLeft: '50%',
            left: -listWidth / 2,
            // top: ($container.height() - config.maxHeight) / 2
        });
        function btn_left(){
            $container.find('.left').css({
                position: 'absolute',
                // 調整左邊按鈕水平距離
                left: -100,
                // 調整左邊按鈕高度
                top: '70%',
                'z-index': 3 + $container.data('totalNum') + 1
            });
        }
        function btn_left1_2(){
            $container.find('.left').css({
                position: 'absolute',
                // 調整左邊按鈕水平距離
                left: "30%",
                // 調整左邊按鈕高度
                top: '140%',
                'z-index': 3 + $container.data('totalNum') + 1
            });
        }
        function btn_left2(){
            $container.find('.left').css({
                position: 'absolute',
                // 調整左邊按鈕水平距離
                left: "30%",
                // 調整左邊按鈕高度
                top: '140%',
                'z-index': 3 + $container.data('totalNum') + 1
            });
        }
        function btn_left3(){
            $container.find('.left').css({
                position: 'absolute',
                // 調整左邊按鈕水平距離
                left: "15%",
                // 調整左邊按鈕高度
                top: '140%',
                'z-index': 3 + $container.data('totalNum') + 1
            });
        }function btn_left4(){
            $container.find('.left').css({
                position: 'absolute',
                // 調整左邊按鈕水平距離
                left: "15%",
                // 調整左邊按鈕高度
                top: '175%',
                'z-index': 3 + $container.data('totalNum') + 1
            });
        }
        // btn_left()
               
        
        

        function btn_right(){
            $container.find('.right').css({
                position: 'absolute',
                // 調整右邊按鈕水平距離
                right: -100,
                // 調整右邊按鈕高度
                top: '70%',
                'z-index': 3 + $container.data('totalNum') + 1
            });
        }
        
        function btn_right1_2(){
            $container.find('.right').css({
                position: 'absolute',
                // 調整右邊按鈕水平距離
                right: "30%",
                // 調整右邊按鈕高度
                top: '140%',
                'z-index': 3 + $container.data('totalNum') + 1
            });
        }
        function btn_right2(){
            $container.find('.right').css({
                position: 'absolute',
                // 調整右邊按鈕水平距離
                right: "30%",
                // 調整右邊按鈕高度
                top: '140%',
                'z-index': 3 + $container.data('totalNum') + 1
            });
        }
        function btn_right3(){
            $container.find('.right').css({
                position: 'absolute',
                // 調整右邊按鈕水平距離
                right: "15%",
                // 調整右邊按鈕高度
                top: '140%',
                'z-index': 3 + $container.data('totalNum') + 1
            });
        }

        function btn_right4(){
            $container.find('.right').css({
                position: 'absolute',
                // 調整右邊按鈕水平距離
                right: "15%",
                // 調整右邊按鈕高度
                top: '175%',
                'z-index': 3 + $container.data('totalNum') + 1
            });
        }
        if(window.innerWidth >1300){
            btn_left()
            btn_right()
        }
        else if(window.innerWidth > 990){
            btn_left1_2()
            btn_right1_2()
           
        }else if(window.innerWidth > 850){
            btn_left2()
            btn_right2()
        }else if(window.innerWidth > 430){
            btn_left3()
            btn_right3()
        }else{
            btn_left4()
            btn_right4()
        }
       


        // btn_right()
        
        // 點開分頁後未點擊左右按鈕頁面呈現的樣式
        $container.find('ul li').each(function (index, element) {
            var i = showIndexsInfo.hashIndexs[index];
            if (i !== undefined) {
                scales = Math.pow(config.scale, Math.abs(i - halfShowNum));
                zIndex = 3 + (i > halfShowNum ? (config.num - 1 - i) : i);
                $(element).css({
                    display: 'block',
                    position: 'absolute',
                    'z-index': zIndex,
                    // overflow: 'hidden',
                    width: scales * config.maxWidth,
                    height: scales * config.maxHeight,
                    left: i * config.distance + (1 - scales) * config.maxWidth * Number(i > halfShowNum),
                    opacity: scales,
                    // 後方兩物件原始的水平高度(一進頁面看到的畫面)，以/6為基準，設成/2的話水營高度會變高
                    top: -((1 - scales) * config.maxHeight / 6)
                });
            } else {
                scales = Math.pow(config.scale, halfShowNum);
                $(element).css({
                    display: 'none',
                    position: 'absolute',
                    // overflow: 'hidden',
                    width: scales * config.maxWidth,
                    height: scales * config.maxHeight,
                    left: halfShowNum * config.distance + (1 - scales) * config.maxWidth / 2,
                    top: 0
                });
            }

        });
    }
   
    










    $.fn.carousel = function (param) {
        var config;
        var totalNum;
        var $target;
        $(this).each(function (index, target) {
            $target = $(target);
            if (typeof param === 'object' && param !== null) {
                config = getConfig(param);
                totalNum = $target.find('ul li').length;
                if (totalNum <= 0 || totalNum % 2 === 0) {
                    return;
                }
                if (config.num <= 0 || config.num > totalNum) {
                    config.num = totalNum;
                }
                $target.data('config', config);
                $target.data('index', 0);
                $target.data('totalNum', totalNum);
                initStyle($target);

                $target.find('.left').off('click').on('click', (function ($target) {
                    return function () {
                        scroll($target, 'left');
                    }
                })($target));
                $target.find('.right').off('click').on('click', (function ($target) {
                    return function () {
                        scroll($target, 'right');
                    }
                })($target));

                (function ($target) {
                    var autoPlay;
                    clearInterval($target.data('auto'));
                    if ($target.data('config').autoPlay) {
                        autoPlay = setInterval(function () {
                            scroll($target, 'right');
                        }, $target.data('config').showTime);
                        $target.data('auto', autoPlay);
                        $target.find('ul').off('mouseenter').on('mouseenter', function () {
                            clearInterval($target.data('auto'));
                        }).off('mouseleave').on('mouseleave', function () {
                            autoPlay = setInterval(function () {
                                scroll($target, 'right');
                            }, $target.data('config').showTime);
                            $target.data('auto', autoPlay);
                        });
                    } else {
                        $target.find('ul').off('mouseenter').off('mouseleave');
                    }
                })($target);
            }

        });

    };

})(jQuery);