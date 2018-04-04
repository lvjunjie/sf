<template>
  <div id="bottomInfo">
    <section>
      <div class="list-space">
        <ul class="company">
          <li class="title">Business Ally</li>
          <li>Business</li>
          <li>Earth, Energy & Environmental Sciences</li>
          <li>Education</li>
          <li>Engineering</li>

        </ul>
        <ul class="contact">
          <li class="title">Contact Info</li>
          <li>
            <i class="fa fa-envelope"></i>info@example.com
          </li>
          <li>
            <i class="fa fa-phone"></i>+18044261149
          </li>
          <li>
            <i class="fa fa-home"></i>sed do eiusmod vally New york,U.S.A
          </li>
        </ul>

      </div>
    </section>

    <section class="part-b">
      <div class="Copyright">Copyright © 2018.Company name All rights reserved</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'bottomInfo',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #bottomInfo {
    margin-top: 48px;
  }

  section{
    padding: 20px;
    padding-top: 40px;
    background: #fff;

  }

  .list-space {
    display: flex;
    justify-content: space-around;
  }

  .contact i {
    font-size: 1.5em;
    margin-right: 10px;
    color: #8c1515  ;
  }

  .list-space ul li {
    word-break: break-all;
    word-wrap: break-word;
    font-size: 1em;
    color: #820000;
    padding: 0.25em;
  }

  .list-space .title {
    font-weight: 700;
    margin-bottom: 20px;
    font-size: 1.5em;
  }


  section>div{
    color: #fff;
  }

  section.part-b{
    background-color: #8c1515;
    font-size: 1em;
    padding: 0;
  }

  .Copyright{
    color: #fff;
    padding: 15px 0;
    text-align: center;
  }

  @media screen and (max-width: 800px){

    .list-space {
      display: block;
    }
    .list-space ul {
      margin-bottom: 20px;
    }
    .Copyright{
      font-size: 12px;
      text-align: center;
    }
  }
</style>
