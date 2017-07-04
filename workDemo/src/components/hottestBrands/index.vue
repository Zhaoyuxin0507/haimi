<template>
  <div class="hottest-things">
    <div class="hottest-title">
      <h2>日本顶级护肤品牌</h2>
      <p>护肤不只是表面</p>
    </div>
    <div class="hottest-image">
      <dl v-for="hottest in brandsImg">
        <dt><img :src="hottest.imgs"/></dt>
        <dd>
          <h3>{{hottest.text}}</h3>
          <p>{{hottest.content}}</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hottest-things',
  data () {
    return {
      brandsImg: [
        {
          imgs: '//img.haimi.com/Fv3CwkNiVJGtRoh7zMnbkq0EEcWA',
          text: 'POLA 美白丸',
          content: '¥1049'
        },
        {
          imgs: '//img.haimi.com/FiGoKtYAfC9rreUIJgTGe4lxrRhV',
          text: 'POLA抗糖丸',
          content: '¥1198'
        },
        {
          imgs: '//img.haimi.com/FsFxq7eu-Pr2VRg6WgbvFLKQP8ok',
          text: 'POLA健美三泉',
          content: '¥2699'
        },
        {
          imgs: '//img.haimi.com/FjpcLNuuVi3Ax8SC-meYPWfOAKle',
          text: 'POLA燃脂丸',
          content: '¥795'
        },
        {
          imgs: '//img.haimi.com/FgyU_0Kztme1-WmRsSUAyUqPSw77',
          text: 'POLA胶原蛋白粉',
          content: '¥745'
        },
        {
          imgs: '//img.haimi.com/Fvd2EvRMP4AXF9g8G11k6z1lYKDU',
          text: 'POLA抗糖化口服液',
          content: '¥699'
        },
        {
          imgs: '//img.haimi.com/FkStRoG3uDotMgB7_xEZnTTwK6eN'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hottest-things{
  margin-top: 8px;
  background: #fff;
  .hottest-title{
    height: 54px;
    text-align: center;
    padding-top: 12px;
    box-sizing: border-box;
    h2{
      font-size: 14px;
    }
    p{
      font-size: 10px;
      color: #ccc;
    }
  }
}
.hottest-image{
  width: 100%;
  overflow:hidden;
  display:flex;
  padding-bottom: 6px;
  box-sizing: border-box;
  white-space:nowrap;
  overflow-x: auto;
  dl{
    width: 30%;
    dt{
      width: 90px;
      height: 90px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    dd{
      padding-left: 10px;
      bix-sizing: border-box;
      h3{
        font-size: 12px;
        font-weight: 100;
        width: 90%;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p{
        font-size: 10px;
        color: #ccc;
        text-align: center;
      }
    }
  }
}

</style>
