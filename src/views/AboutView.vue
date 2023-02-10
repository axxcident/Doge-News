<script setup>
import FooterBar from '../components/FooterBar.vue'
</script>

<template>
  <main>
    <div class="about">
      <h2>Your trusted news from a Good boi</h2>
      <p class="woof">
        Arf! Welcome to Doge News, the place where good boys and girls come to stay up to date on the latest news and
        trends!

        I'm the chief editor and lead investigative reporter here at Doge News, and let me tell you, I take my job very
        seriously. As a good boy, I always make sure to sniff out the most important stories and bring them to you, my
        loyal followers.

        Doge News values accuracy, honesty, and unconditional love. We believe that just like a good boy should always
        be by his owner's side, we should always be by your side, providing the latest and greatest news.

        I may be a dog, but I'm no mutt when it comes to journalism. I'll chase down the toughest stories and fetch the
        most interesting headlines for you. And don't worry, I may bark a little, but I promise to never bite.

        So sit, stay, and enjoy the latest news from Doge News. WOOF!
      </p>
    </div>

    <FooterBar class="bg-white foten" />
  </main>

</template>

<script>
export default {

}
</script>


<style>
.about {
  margin-top: 20vh;
  padding: 20px;
}

.about h2 {
  line-height: 1.4em;
  text-align: center;
  font-family: var(--headline);
}

.about .woof {
  line-height: 2em;
  padding: 20px;
  font-family: var(--teaxter);
  font-size: 1.5em;
}

.foten {
  position: fixed;
  bottom: 0;
}
</style>
