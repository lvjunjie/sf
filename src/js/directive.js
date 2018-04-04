/**
 * Created by junji on 2017/10/8.
 */
import Vue from 'vue'



Vue.directive('center-img',{
  inserted:function (el) {

   const pw = $(el).parent().width();
   const ph = $(el).parent().height();

    console.log(pw,ph)
  }
});
