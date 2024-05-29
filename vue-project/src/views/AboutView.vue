<template>
  <h1>Pick a minigame to get monies</h1>
  <h2>delete popup game, trivia, hitting the button at exactly the right time 
  </h2>
  <button>Pop up precision</button>
  <button>Mr. Callahan Style Jeopardy</button>
  <button class="three">Button Accuracy</button>
</template>

<script setup>



const timer = Math.floor(Math.random() * 100) + 1; //make between 3 and 12 secs ig 
console.log(timer) 

</script>