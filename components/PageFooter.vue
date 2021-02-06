<template>
    <div class="footer-wrapper">
        <div class="footer">
            <el-row class="info-list">
                <el-col :span="6" :offset="1">
                    <h5>闲云旅游旅游网</h5>
                    <p>上亿旅行者共同打造的"旅行神器"</p>
                    <p><span>60,000</span> 多个全球旅游目的地</p>
                    <p><span>600,000</span> 个细分目的地新玩法</p>
                    <p><span>760,000,000</span> 次攻略下载</p>
                    <p><span>38,000</span> 家旅游产品供应商</p>
                </el-col>
                 <el-col :span="5">
                    <h5>关于我们</h5>
                    <p>隐私政策 商标声明</p>
                    <p>服务协议 游记协议</p>
                    <p>商城平台服务协议</p>
                    <p>网络信息侵权通知指引</p>
                    <p>闲云旅游旅游网服务监督员</p>
                    <p>网站地图加入闲云旅游</p>
                </el-col>
                <el-col :span="5">
                    <h5>旅行服务</h5>
                    <p>旅游攻略 酒店预订</p>
                    <p>旅游特价 国际租车</p>
                    <p>旅游问答 旅游保险</p>
                    <p>旅游指南 订火车票</p>
                    <p>旅游资讯 APP下载</p>
                </el-col>
                <el-col :span="6" class="scan">
                    <p>
                        <img src="data:image/png;base64,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" alt="">
                    </p>
                    关注我们
                </el-col>
            </el-row>

            <div class="licence">
                京ICP备08001421号 京公网安备110108007702 Copyright © 2019-2021 闲云 All Rights Reserved
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="less">
    .footer-wrapper{
        background:#333;
        color:#ccc;
        min-width:1000px;
    }

    .footer{
        padding-top:30px;
        margin:0 auto;
        width:1000px;
    }

    .info-list{
        h5{
            font-weight: normal;
            font-size:16px;
            margin-bottom:10px;
        }

        p{
            font-size:12px;
            line-height: 1.8;
            span{
                color:orange;
            }
        }
    }

    .scan{
        text-align: center;

        img{
            width:140px;
            height:140px;;
        }

        font-size:12px;
    }

    .licence{
        border-top:1px #666 solid;
        margin-top:20px;
        padding:50px 0;
        text-align: center;
        font-size:12px;
    }
</style>