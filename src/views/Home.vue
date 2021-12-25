<template>
  <div class="home">
    <div class="home-adv">
      <div class="home-adv-desc">&lt;广告&gt;</div>
    </div>
    <div class="home-href">
      <ul class="home-href-desc-list">
        <li v-for="item of hrefList" :key="item.id" class="home-href-desc-list-item">
          <img class="home-href-desc-list-item-img" :src="item.imgUrl" v-if="item.imgUrl" />
          <div class="home-href-desc-list-item-tit" v-if="item.tit">{{item.tit}}</div>
          <i class="home-href-desc-list-item-icon" :class="item.icon" v-if="item.icon"></i>
        </li>
        </ul>
    </div>
    <div class="home-word">
      <span>在线选购</span>，享受免费送货、Specialist专家支持、免息分期等服务。
    </div>
    <div class="home-img">
      <div class="home-img-img1">
        <img
          src="https://www.apple.com.cn/v/home/ai/images/logos/holiday-2021/logo__dcojfwkzna2q_medium.png"
          alt=""
        />
      </div>
      <div class="home-img-img2">
        <p>及时好礼，人见人爱 <br/></p>
      </div>
      <div class="home-img-img3">
        <span>选购好礼 ></span>
      </div>
      <div class="home-img-img4">
        <div class="home-img-img4-1">
          <img
            src="@/assets/img1.png"
            alt=""
          />
        </div>
        <div class="home-img-img4-2">
          <img
            src="@/assets/img2.png"
            alt=""
          />
        </div>
        <div class="home-img-img4-3">
          <img
            src="@/assets/img3.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="home-title">
      <div class="home-title-1"></div>
      <div class="home-title-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data () {
    return {
      hrefList: [
        {
          url: "https://www.apple.com.cn/",
          imgUrl: 'https://www.apple.com.cn/ac/globalnav/7/zh_CN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg',
          id: 0,
        },
        {
          tit: "商店",
          url: "https://www.apple.com.cn/store",
          id: 1,
        },
        {
          tit: "Mac",
          url: "https://www.apple.com.cn/mac/",
          id: 2,
        },
        {
          tit: "iPad",
          url: "https://www.apple.com.cn/ipad/",
          id: 3,
        },
        {
          tit: "iPhone",
          url: "https://www.apple.com.cn/iPhone/",
          id: 4,
        },
        {
          tit: "Watch",
          url: "https://www.apple.com.cn/Watch/",
          id: 5,
        },
        {
          tit: "AirPods",
          url: "https://www.apple.com.cn/AirPods/",
          id: 6,
        },
        {
          tit: "家居",
          url: "/apple-home/",
          id: 7,
        },
        {
          tit: "APPle独家",
          url: "/services/",
          id: 8,
        },
        {
          tit: "配件",
          url: "/cn/shop/goto/buy_accessories",
          id: 9,
        },
        {
          tit: "技术支持",
          url: "https://support.apple.com/zh-cn",
          id: 10,
        },
        {
          icon: 'el-icon-search',
          url: "#",
          id: 11,
        },
        {
          icon: 'el-icon-goods',
          url: "#",
          id: 12,
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  &-adv {
    width: 100%;
    height: 40px;
    background: #444;
    display: flex;
    justify-content: center;
    &-desc {
      height: 40px;
      line-height: 40px;
      width: 976px;
      text-align: right;
      color: #a8a8aa;
      font-size: 12px;
    }
  }
  &-href {
    width: 100%;
    display: flex;
    background: #000;
    justify-content: center;
    height: 44px;
    align-items: center;
    &-desc-list {
      width: 976px;
      display: flex;
      justify-content: space-between;
      height: 44px;
      color: #f5f5f7;
      &-item {
        line-height: 44px;
        list-style-type: none;
        font-size: 12px;
      }
    }
  }
  &-word {
    font-size: 14px;
    text-align: center;
    background: #f5f5f7;
    height: 45px;
    line-height: 45px;
    span {
      color: #06c;
      cursor: pointer;
    }
    span:hover {
      text-decoration: underline;
    }
  }
  &-img {
    width: 100%;
    height: 590px;
    background-color: #eeeffe;
    &-img1 {
      width: 100%;
      padding-top: 30px;
      display: flex;
      justify-content: center;
      box-sizing: border-box;
    }
    &-img2 {
      font-size: 50px;
      text-align: center;
      padding-top: 20px;
    }
    &-img3 {
      font-size: 20px;
      text-align: center;
      padding-top: 20px;
      color: #06c;
      span {
        color: #06c;
        cursor: pointer;
      }
      span:hover {
        text-decoration: underline;
      }      
    }
    &-img4 {
      width: 100%;
      height: 594px;
      display: flex;
      justify-content: center;
      box-sizing: border-box;
    }
  }
  &-title {
    width: 100%;
    overflow: hidden;
    &-1 {
      width: 50%;
      flex: left;
    }
  }
}
</style>