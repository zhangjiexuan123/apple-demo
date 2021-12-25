<template>
  <div class="home">
    <div class="adv">
      <div>&lt;广告&gt;</div>
    </div>
    <div class="nav">
      <ul id="nav">
        <li>
          <a href="https://www.apple.com.cn/" />
          <img
            src="https://www.apple.com.cn/ac/globalnav/7/zh_CN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
            alt=""
          />
        </li>
        <li v-for="item in nav" :key="item.id">
          <a :href="item.url">{{ item.tit }}</a>
        </li>
        <li>
          <a href="#"><i class="el-icon-search" /></a>
        </li>
        <li>
          <a href="#"><i class="el-icon-goods" /></a>
        </li>
      </ul>
    </div>
    <div class="git">
      <div><a href="">在线选购</a>，享受免费送货、Specialist
        专家支持、免息分期等服务。</div>
    </div>
    <div class="main">
      <div class="mainLogo">
        <img
          src="https://www.apple.com.cn/v/home/ai/images/logos/holiday-2021/logo__dcojfwkzna2q_medium.png"
          alt=""
        />
      </div>
      <div class="mainTeix">
        及时好礼，人见人爱 <br /><a
          href="https://www.apple.com.cn/cn/shop/goto/gifts"
          >选购好礼 ></a
        >
      </div>
      <div class="mainPic">
        <div class="picA">
          <img
            src="https://www.apple.com.cn/home/heroes/holiday-gift-finch/images/set-a/iphone__cyamwsdph26a_medium.png"
            alt=""
          />
        </div>
        <div class="picB">
          <img
            src="https://www.apple.com.cn/v/home/ai/images/heroes/holiday-2021/set-c/ipadmini__f0pd6cilwaie_medium.png"
            alt=""
          />
        </div>
        <div class="picC">
          <a
            href="https://www.apple.com.cn/v/home/ai/images/heroes/holiday-2021/set-c/ipadair__fkr21evsr6a2_medium.png"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>                                                                                                                 
export default {
  name: "home",
  data() {
    return {
      nav: [
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
      ],
    };
  },
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.adv {
  width: 100%;
  height: 50px;
  background-color: #444;
  font-family: 12px;
}
.adv div {
  color: aliceblue;
  width: 10%;
  height: 50px;
  line-height: 50px;
  float: right;
}
.nav {
  width: 100%;
  background: #000;
  height: 47px;
  line-height: 47px;
}
#nav {
  width: 70%;
  margin-left: 15%;
}
#nav li {
  float: left;
  list-style: none;
  width: 7.69%;
  text-align: center;
  list-style: 50px;
  height: 50px;
  color: beige;
}
#nav li a {
  color: #f5f5f7;
  text-emphasis: none;
  font-size: 12px;
  font-weight: 200;
}
#nav > li > a > img {
  height: 50px;
  line-height: 50px;
}
.git,
.git > p {
  background: rgb(255, 116, 116);
  width: 100%;
  height: 50px;
}
.git > span {
  color: #f5f5f7;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
}
.git > span > a {
  color: #f5f5f7;
  text-decoration: none;
}
.git > span > a:hover {
  text-decoration: underline;
}
.main {
  width: 100%;
  height: 75%;
  background-color: #eeeffe;
}
.mainLogo {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainTeix {
  width: 100%;
  height: 20%;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
}
.mainTeix > a {
  color: #06c;
  font-weight: 200px;
  font-size: 20px;
}
.mainTeix > a:hover {
  text-decoration: underline;
}
.mainPic {
  width: 70%;
  height: 60%;
  margin-left: 15%;
}
.picA,
.picB,
.picC {
  width: 33%;
  height: 80%;
}
.picB,
.picC {
  margin-left: 0.5%;
}
</style>
