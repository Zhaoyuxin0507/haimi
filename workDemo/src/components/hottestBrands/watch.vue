<template>
  <div class="hottest-watch">
    <div class="hottest-title">
      <h2>instagram最火时尚腕表</h2>
      <p>Daniel Wellington</p>
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
  name: 'hottest-watch',
  data () {
    return {
      brandsImg: [
        {
          imgs: '//img.haimi.com/FpeZ6Lt2McWSC2KzxLe5pK0rR5Mi',
          text: 'DW经典男表',
          content: '¥899'
        },
        {
          imgs: '//img.haimi.com/FpYJKbmAf1VJ_Av119-5QAT1IMN1',
          text: 'DW尼龙腕表',
          content: '¥750'
        },
        {
          imgs: '//img.haimi.com/FrPcYYRhkz5r20X-yDF0RfX8SQuS',
          text: 'DW时尚女表',
          content: '¥750'
        },
        {
          imgs: '//img.haimi.com/Fg1on7rlm49tYiXx8iW__AUkdBu7',
          text: 'DW蓝针男表',
          content: '¥850'
        },
        {
          imgs: '//img.haimi.com/Fo-XW55cvAVpZX3a03E5TozcTXYr',
          text: 'DW镶钻女表',
          content: '¥850'
        },
        {
          imgs: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==',
          text: 'DW百搭女表',
          content: '¥750'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hottest-watch{
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
