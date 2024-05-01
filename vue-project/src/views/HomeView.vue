<template>
  <body>
    <div class="content">

      <div class="monies">
        <div class = "moniesdiv">
          <img class = "moniespic" src="https://ih0.redbubble.net/image.4988444592.5653/raf,360x360,075,t,fafafa:ca443f4786.jpg">
          20</div>
        <div class = "moniesdiv">
          <img class = "moniespic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJhPUJn3wx3CK5YHMdz7y7kHJGz_K-sR0D38CL6gSJA&s">
          1600
          <button class = "addmorejades" @click="addmorejades">+</button>
        </div>
      </div>

      <div class="buttonstuff">
        <button class="clicky" @click="detailspopup">Details</button>
        <button class="clicky" @click="historypopup">History</button>
      </div>

      <div class = "buttonstuff1">
        <button class="clicky" @click="() => wishrates(NahidaC)">
          <img class="tickets" src="https://ih0.redbubble.net/image.4988444592.5653/raf,360x360,075,t,fafafa:ca443f4786.jpg">
          Warp x1
        </button>
        <button class="clicky" @click="() => multipull(NahidaC)">
          <img class="tickets" src="https://ih0.redbubble.net/image.4988444592.5653/raf,360x360,075,t,fafafa:ca443f4786.jpg">
          Warp x10
        </button>
      </div>

      <div v-if="history" class="poopup">
        <button class="eXit" @click="exitpopup">X</button>
        <h1>Wish History</h1>
        <ul>
            <li v-for="(item, index) in wishHistory.slice().reverse()" :key="index">{{ item }}</li>
      </ul>
      </div>

      <div v-if="details" class="poopup">
        <button class="eXit" @click="exitpopup">X</button>
        <h1>Wish Details</h1>
        <h1 class="grayheader">Boosted Drop Rate</h1>
        <h2 class="tanheader">Drop Rate (out of 5-star entities): 50%</h2>
        <h2 class="tanheader">Drop Rate (out of 4-star entities): 50%</h2>
        <h1 class="grayheader">Details</h1>
        <h3>______ has started</h3>
        <h3>Event Details</h3>
        <h3>During the event, _________, you can use your Star Rail Special Passes for Warps</h3>
        <li>There is a greatly increased Warp sucess rate for the limited 5-star character NAME (type: path), and 4 star characters NAME (type: path), NAME (type: Path), and NAME (type: PATH).</li>
        <li>Among the above characters, the limited character will not be available in the Stellar Warp event</li>
        <h3>※ This Warp is considered a Character Event Warp. The cumulative Warp count for a guarnateed 5-star character in any Character Event Warp will always be carried over to other Character Event Warps, but is independent and unaffected by other types of Warps.</h3>
        <h1 class="grayheader">Entity List</h1>
        <table>
          <tr>
            <th>Characters</th>
          </tr>
          <tr>
            <td>Acheron</td>
            <td>Himeko</td>
            <td>Welt</td>
            <td>Bronya</td>
            <td>Gepard</td>
            <td>Clara</td>
            <td>Yanqing</td>
            <td>Bailu</td>
          </tr>
        </table>
      </div>
    </div>
  </body>
</template>

<script setup>
import { ref } from 'vue';
import { warp } from '@/stores/warp';

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let currentdate = `${month}/${day}/${year}: ${time}`;

const NahidaC = {
   rateupfivestar: "Nahida",
   rateupfourstar: ["Gaming", "Faruzan", "Noelle"],
   regfivestars: ["Jean", "Diluc", "Qiqi", "Mona", "Keqing", "Tignari", "Dehya"],
   regfourstars: ["Lynette", "Sayu", "Shikanoin Heizou", "Sucrose", "Charlotte", "Chongyun", "Diona", "Freminet", "Layla", "Kaeya", "Mika", "Rosaria", "Collei", "Kaveh", "Kirara", "Yaoyao", "Beidou", "Dori", "Fischl", "Kujou Sara", "Kuki Shinobu", "Lisa", "Razor", "Gorou", "Ningguang", "Yunjin", "Barbara", "Candace", "Xingqiu", "Amber", "Bennett", "Chevreuse", "Thoma", "Xiangliang", "Xinyan", "Yanfei", "Eye of Perception", "Sacrificial Bow", "Favonius Warbow", "Favonius Codex", "Favonius Greatsword", "The Bell", "The Flute", "Sacrificial Fragments", "Sacrificial Sword", "Sacrificial Greatsword", "Rainslasher", "Dragon's Bane", "Rust", "Favonius Sword", "The Stringless", "The Widsith", "Favonius Lance", "Lion's Roar"],
   threestars: ["Slingshot", "Raven Bow", "Sharpshooter's Oath", "Ferrous Shadow", "Cool Steel", "Harbinger of Dawn", "Skyrider Sword", "Bloodtainted Greatsword", "Debate Club", "Black Tassel", "Magic Guide", "Thrilling Tales of Dragon Slayers", "Emerald Orb",],
 }

const history = ref(false)
const details = ref(false)
const wishHistory = ref([])

const historypopup = () => {
  history.value = true
}

const detailspopup = () => {
  details.value = true
}

const exitpopup = () => {
  details.value = false
  history.value = false
}


let nofourstar = 0;
const wish = (character) => {

  if (nofourstar === 9) {
    nofourstar = 0;
    const guaranteed = Math.floor(Math.random() * 1000) + 1;

    if (guaranteed <= 6) {
      const rngfivestar = Math.floor(Math.random() * 2) + 1;
      if (rngfivestar === 1) {
        nofourstar = 0;
        return character.rateupfivestar;
      } else {
        nofourstar = 0;
        return character.regfivestars[Math.floor(Math.random() * character.regfivestars.length)];
      }
    } else {
      const rngFourStar = Math.floor(Math.random() * 2) + 1;
      if (rngFourStar === 1) {
        nofourstar = 0;
        return character.rateupfourstar[Math.floor(Math.random() * character.rateupfourstar.length)];
      } else {
        nofourstar = 0;
        return character.regfourstars[Math.floor(Math.random() * character.regfourstars.length)];
      }
    }
  }

  const rng = Math.floor(Math.random() * 1000) + 1;

  if (rng <= 6) {
    const rngfivestar = Math.floor(Math.random() * 2) + 1;
    if (rngfivestar === 1) {
      nofourstar = 0;
      return character.rateupfivestar;
    } else {
      nofourstar = 0;
      return character.regfivestars[Math.floor(Math.random() * character.regfivestars.length)];
    }
  } else if (rng > 6 && rng <= 51) {
    const rngFourStar = Math.floor(Math.random() * 2) + 1;
    if (rngFourStar === 1) {
      nofourstar = 0;
      return character.rateupfourstar[Math.floor(Math.random() * character.rateupfourstar.length)];
    } else {
      nofourstar = 0;
      return character.regfourstars[Math.floor(Math.random() * character.regfourstars.length)];
    }
  } else {
    if (character.threestars && character.threestars.length > 0) {
      const pool = Math.floor(Math.random() * character.threestars.length);
      nofourstar++;
      return character.threestars[pool];
    }
  }
};


const wishrates = (character) => {
  let result = currentdate(); // Get the current date and store it in the result variable
  wishHistory.value.push(result); // Push the result to the wishHistory array
  result = wish(character); // Call the wish function to get the result of the wish
  console.log(result); // Log the result to the console
}

const multipull = (character) => {
  for (let i = 0; i < 10; i++) {
    wishrates(character)
  }
}


</script>

<style scoped>
.background-image {
  width: 100vw;
  height: calc(100vh - 40px);
  object-fit: cover;
}
 .clicky {
  border: 2px solid #E5E9EC;
  background-color: white;
  border-radius: 20px;
  padding: 10px 30px
}

.poopup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  border: 2px solid black;
  border-radius: 2px;
  color: black;
}

.grayheader {
  background-color: gray;
  color: white;
}

.tanheader {
  background: #DBD6D2;
  color: #6E6A6F;
}

.eXit {
  right: 10px;
  top: 5px;
}

.tickets {
  height: 20px;
  width: 20px;
  position: fixed;
}

.moniespic {
  height: 20px;
  width: 20px;
}

.moniesdiv{
  background: white; 
}

.addmorejades{
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, .4); 
}

.monies {
  position: fixed;
}

.buttonstuff {
  position: fixed; 
  bottom: 10px;
  left: 250px;
  z-index: 900;
}

.buttonstuff1 {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 900;
}

</style>