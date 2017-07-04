<template>
  <div class="hottest-home">
    <div class="hottest-title">
      <h2>从欧洲直接寄到你家</h2>
      <p>美妆/奶粉/家电</p>
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
  name: 'hottest-home',
  data () {
    return {
      brandsImg: [
        {
          imgs: '//img.haimi.com/FgvH9yLwmKOlgLK2UpOfQXt8o5C6',
          text: '贝德玛粉水',
          content: '¥138'
        },
        {
          imgs: '//img.haimi.com/FjYrzR0WhIioKX4YsKFqS_uPcuVQ',
          text: '爱他美2+两罐',
          content: '¥279'
        },
        {
          imgs: '//img.haimi.com/FtGzo4jjNJVFTbqrd043vPZiLCpy',
          text: 'DW时尚女表',
          content: '¥750'
        },
        {
          imgs: '//img.haimi.com/FqSO5iKRotjMllfCGlyuPxYMTRCB',
          text: 'Biocyte丰胸胶囊',
          content: '¥179'
        },
        {
          imgs: '//img.haimi.com/FuyYRAB4itNjib21z9fZjHzxleib',
          text: '小甘菊4盒',
          content: '¥72'
        },
        {
          imgs: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==',
          text: '美白牙膏2支',
          content: '¥139'
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
.hottest-home{
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
