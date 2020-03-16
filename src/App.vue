<template>
  <div id="app">
    <div id="cspio-page">
      <div id="cspio-content">
        <img
          id="cspio-logo"
          src="./logo-black-color.png"
        >
                    
        <h1 id="cspio-headline">
          Website Coming Soon!
        </h1>			    				
        
        <div id="cspio-description">
          Our new website will be launching very soon! Sign up below to be notified when it's live. Until then, follow along on our social accounts below.
        </div>			    				
        
        <form
          id="cspio-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <div id="cspio-field-wrapper">
            <div class="row">
              <div class="col-md-12 seperate">
                <div class="input-group">
                  <p class="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field"></label>
                  </p>
                  <input
                    id="cspio-email"
                    name="EMAIL"
                    class="form-control input-lg form-el"
                    type="email"
                    placeholder="Email"
                    required
                  >
                  <span class="input-group-btn">
                    <button
                      id="cspio-subscribe-btn"
                      type="submit"
                      class="btn btn-lg btn-primary form-el noglow"
                    >Notify Me</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
        
        <span id="cspio-privacy-policy-txt">We promise to never spam you.</span>
        <div id="cspio-socialprofiles">
          <a
            href=""
            target="_blank"
          ><i class="fa fa-facebook-official fa-2x" /></a>						
        </div>
      </div><!-- end of #cspio-content -->
    </div>
  
  
    <script>
      // Animate Delay
      setTimeout(function(){ jQuery("#cspio-content").show().addClass('animated fadeIn'); }, 250);
  
      // Reseize	
      function resize(){
      $('head').append("<style id='form-style' type='text/css'></style>");
      $('#form-style').html('.cspio .input-group-btn, .cspio .input-group{display:block;width:100%;}.cspio #cspio-subscribe-btn{margin-left:0;width:100%;display:block;}.cspio .input-group .form-control:first-child, .cspio .input-group-addon:first-child, .cspio .input-group-btn:first-child>.btn, .cspio .input-group-btn:first-child>.dropdown-toggle, .cspio .input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle) {border-bottom-right-radius: 4px;border-top-right-radius: 4px;}.cspio .input-group .form-control:last-child, .cspio .input-group-addon:last-child, .cspio .input-group-btn:last-child>.btn, .cspio .input-group-btn:last-child>.dropdown-toggle, .cspio .input-group-btn:first-child>.btn:not(:first-child) {border-bottom-left-radius: 4px;border-top-left-radius: 4px;}');
      }
      
      $('#cspio-content').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
      function(){
      var width = $('#cspio-field-wrapper').width();
      if(width < 480 && width != 0){
      resize();
      }
      }
      );
    </script>
    <!-- <Header />
    <Hero />
    <Home msg="Welcome to Your Vue.js App" />
    <Footer /> -->
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Hero,
    Home,
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
