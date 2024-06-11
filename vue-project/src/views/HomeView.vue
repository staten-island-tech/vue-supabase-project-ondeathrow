<template>
  <div class="content">
  
    <div class="sidebar">
      <button class="sidebarbtn" @click="openpage('Acheron')">Words of Yore</button> 
      <button class="sidebarbtn" @click="openpage('Luocha')">Laic Pursuit</button>
      <button class="sidebarbtn" @click="openpage('LC1')">Brilliant Fixation</button> 
      <button class="sidebarbtn" @click="openpage('LC2')">Bygone Reminiscience</button> 
    </div>
  
    <div v-show="currentpage === 'Acheron'" class="page"> 
      <div>Words of Yore</div>
      <div class="bannerbox">
        <h5>Every 10 Warps guarantees a 4-star or above entity</h5>
        <h5>Featured characters receive a drop rate boost</h5>
      </div>
      <img class = "splash" src="https://starrail.honeyhunterworld.com/img/character/acheron-character_cut_in_front.webp?x91856">
    </div>
  
    <div v-show="currentpage === 'Luocha'" class="page"> 
      <div>Laic Pursuit</div>
      <div class="bannerbox">
        <h5>Every 10 Warps guarantees a 4-star or above entity</h5>
        <h5>Featured characters receive a drop rate boost</h5>
      </div>
      <img class = "splash" src="https://starrail.honeyhunterworld.com/img/character/luocha-character_cut_in_front.webp?x91856">
    </div>
  
    <div v-show="currentpage === 'LC1'" class="page"> 
      <div>Brilliant Fixation</div>
      <div class="bannerbox">
        <h5>Every 10 Warps guarantees a 4-star or above entity</h5>
        <h5>Featured Light Cones receive a drop rate boost</h5>
      </div>
      <img class = "splashlc" src="https://starrail.honeyhunterworld.com/img/item/along-the-passing-shore-item_icon_thumbnail_medium.webp?x91856">
    </div>
  
    <div v-show="currentpage === 'LC2'" class="page"> 
      <div>Bygone Reminiscience</div>
      <div class="bannerbox">
        <h5>Every 10 Warps guarantees a 4-star or above entity</h5>
        <h5>Featured Light Cones receive a drop rate boost</h5>
      </div>
      <img class = "splashlc" src="https://starrail.honeyhunterworld.com/img/item/echoes-of-the-coffin-item_icon_thumbnail_medium.webp?x91856ty">
    </div>
  
    <div v-if="history" class="popup"> 
      <button class="exit" @click="exitpopup">X</button> 
      <h1 class="top">Wish History</h1>
      <div class="tablecontainer">
        <table class=table>
          <tbody>
            <tr>
              <td>Entity Name</td>
            </tr>
          </tbody>
        </table>
      </div>
      <li v-for="(item, index) in wishHistory.slice().reverse()" :key="index">{{ item }}</li>
    </div>
  
    <div v-if="details" class="popup"> 
      <button class="exit" @click="exitpopup">X</button> 
      <h1 class="grayheader">Boosted Drop Rate</h1>
      <h2 class="tanheader">Drop Rate (out of 5-star entities): 50%</h2>
      <h1>ACHERON, LUOCHA, WORDS OF YORE, ECHOES OF THE COFFIN</h1>
      <h2 class="tanheader">Drop Rate (out of 4-star entities): 50%</h2>
      <h1>GALLAGHER, PELA, DAN HENG</h1>
      <h1 class="grayheader">Details</h1>
      <h3>WORDS OF YORE, LAIC PURSUIT, BRILLIANT FIXATION, and BYGONE REMINISCIENCE have started</h3>
      <h3>Event Details</h3>
      <h3>During the event, WORDS OF YORE, LAIC PURSUIT, BRILLIANT FIXATION, and BYGONE REMINISCIENCE, you can use your Star Rail Special Passes for Warps</h3>
      <ul>
        <li>There is a greatly increased Warp success rate for the limited 5-star character ACHERON (NIHILITY: LIGHTNING), LUOCHA (ABUNDANCE: IMAGINARY) and 4-star characters GALLAGHER (ABUNDANCE: FIRE), PELA (NIHILITY: ICE), and DAN HENG (THE HUNT: WIND).</li>
        <li>Among the above characters, the limited character will not be available in the Stellar Warp event</li>
      </ul>
      <h3>※ This Warp is considered a Character Event Warp. The cumulative Warp count for a guaranteed 5-star character in any Character Event Warp will always be carried over to other Character Event Warps, but is independent and unaffected by other types of Warps.</h3>
      <h1 class="grayheader">Entity List</h1> 
      <div class="tablecontainer">
        <table class="table">
          <thead>
            <tr>
              <th colspan="4">Five-Star Characters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ACHERON, LUOCHA/WORDS OF YORE, ECHOES OF THE COFFIN</td>
              <td>Bronya/But the Battle Isn't Over</td>
              <td>Bailu/Time Waits for No One</td>
              <td>Gepard/Moment of Victory</td>
            </tr>
            <tr>
              <td>Welt/In the Name of the World</td>
              <td>Himeko/Night on the Milky Way</td>
              <td>Yanqing/Sleep Like the Dead</td>
              <td>Clara/Something Irreplaceable</td>
            </tr>
          </tbody>
        </table>
        <table class="table">
          <thead>
            <tr>
              <th colspan="4">Characters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gallagher</td>
              <td>Dan Heng</td>
              <td>Pela</td>
              <td>Arlan</td>
            </tr>
            <tr>
              <td>Asta</td>
              <td>Guinaifen</td>
              <td>Hanya</td>
              <td>Herta</td>
            </tr>
            <tr>
              <td>Hook</td>
              <td>Luka</td>
              <td>Lynx</td>
              <td>March 7th</td>
            </tr>
            <tr>
              <td>Misha</td>
              <td>Natasha</td>
              <td>Qingque</td>
              <td>Sampo</td>
            </tr>
            <tr>
              <td>Serval</td>
              <td>Sushang</td>
              <td>Tingyun</td>
              <td>Xueyi</td>
            </tr>
            <tr>
              <td>Yukong</td>
            </tr>
          </tbody>
        </table>
        <table class="table">
          <thead>
            <tr>
              <th colspan="4">Five-Star Light Cones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Today is Another Peaceful Day</td>
              <td>Sleep Like the Dead</td>
              <td>Moment of Victory</td>
              <td>In the Night</td>
            </tr>
            <tr>
              <td>Something Irreplaceable</td>
              <td>In the Name of the World</td>
              <td>Day One of My New Life</td>
              <td>Night on the Milky Way</td>
            </tr>
            <tr>
              <td>Texture of Memories</td>
              <td>Time Waits for No One</td>
              <td>Make the World Clamor</td>
              <td>But the Battle Isn't Over</td>
            </tr>
          </tbody>
        </table>
        <table class="table">
          <thead>
            <tr>
              <th colspan="4">Four-Star Light Cones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Post-Op Conversation</td>
              <td>Resolution Shines As Pearls of Sweat</td>
              <td>Trend of the Universal Market</td>
              <td>Subscribe for More!</td>
            </tr>
            <tr>
              <td>Dance! Dance! Dance!</td>
              <td>Under the Blue Sky</td>
              <td>Geniuses's Repose</td>
              <td>Indelible Promise</td>
            </tr>
            <tr>
              <td>Concert for Two</td>
            </tr>
          </tbody>
        </table>
        <table class="table">
          <thead>
            <tr>
              <th colspan="4">Light Cones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Arrows</td>
              <td>Cornucopia</td>
              <td>Collapsing Sky</td>
              <td>Amber</td>
            </tr>
            <tr>
              <td>Void</td>
              <td>Chorus</td>
              <td>Data Bank</td>
              <td>Darting Arrow</td>
            </tr>
            <tr>
              <td>Fine Fruit</td>
              <td>Shattered Home</td>
              <td>Defense</td>
              <td>Loop</td>
            </tr>
            <tr>
              <td>Meshing Cogs</td>
              <td>Passkey</td>
              <td>Adversarial</td>
              <td>Multipication</td>
            </tr>
            <tr>
              <td>Mutual Demise</td>
              <td>Pioneering</td>
              <td>Hidden Shadow</td>
              <td>Mediation</td>
            </tr>
            <tr>
              <td>Sagacity</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <button class="left" @click="detailspopup">View Details</button>
      <button class="left" @click="historypopup">History</button>
    </div>

    <div>
      <button class="right" @click="() => fin()">x1 | Warp x1</button>
      <button class="right" @click="() => multi()">x10 | Warp x10</button>
    </div>
  
  </div>
</template>

<script setup>

import { ref } from 'vue';
import { acheron, luocha, LC1, LC2, } from '@/stores/warp';
import { characters, lightCones } from '@/components/CharacterList.vue';
let count = 0; 

const history = ref(false);
const details = ref(false);
const wishHistory = ref([]);
const currentpage = ref('Acheron');
const historypopup = () => {
  history.value = true;
};

const detailspopup = () => {
  details.value = true;
};

const exitpopup = () => {
  details.value = false;
  history.value = false;
};

const openpage = (bannername) => {
  currentpage.value = bannername;
};

const pulllogic = () => {
  let result; 

  if (currentpage.value === "Acheron") {
    if (count === 9) {
      const fourfive = Math.floor(Math.random() * 5100) + 1;
      if (fourfive <= 306) {
        const winloss = Math.floor(Math.random() * 2) + 1;
        if (winloss === 1) {
          result = "Acheron";
        } else {
          const lossarr = [...acheron[0].loss];
          const losswho = Math.floor(Math.random() * lossarr.length);
          result = lossarr[losswho];
        }
      } else {
        const rateup = Math.floor(Math.random() * 76) + 1;
        if (rateup <= 38) {
          const allfour = [...acheron[0].fourstarchara, ...acheron[0].fourstarlc];
          const which = Math.floor(Math.random() * allfour.length);
          result = allfour[which];
        } else {
          const whichrate = Math.floor(Math.random() * 3) + 1;
          if (whichrate === 1) {
            result = "Gallagher";
          } else if (whichrate === 2) {
            result = "Pela";
          } else {
            result = "Dan Heng";
          }
        }
      }
      count = 0;  
    } else {
      const reg = Math.floor(Math.random() * 1000) + 1;
      if (reg <= 6) {
  const fourfive = Math.floor(Math.random() * 5100) + 1;
  if (fourfive <= 306) {
    const winloss = Math.floor(Math.random() * 2) + 1;
    if (winloss === 1) {
      result = "Acheron";
    } else {
      const lossarr = [...acheron[0].loss];
      const losswho = Math.floor(Math.random() * lossarr.length);
      result = lossarr[losswho];
    }
  } else {
    const rateup = Math.floor(Math.random() * 76) + 1;
    if (rateup <= 38) {
      const allfour = [...acheron[0].fourstarchara, ...acheron[0].fourstarlc];
      const which = Math.floor(Math.random() * allfour.length);
      result = allfour[which];
    } else {
      const whichrate = Math.floor(Math.random() * 3) + 1;
      if (whichrate === 1) {
        result = "Gallagher";
      } else if (whichrate === 2) {
        result = "Pela";
      } else {
        result = "Dan Heng";
      }
    }
    count = 0; 
  }
} else {
  const allthree = [...acheron[0].threestars];
  const whichthree = Math.floor(Math.random() * allthree.length);
  result = allthree[whichthree];
  count++;
}

    }
  } else if (currentpage.value === "Luocha" ) {
    if (count === 9) {
      const fourfive = Math.floor(Math.random() * 5100) + 1;
      if (fourfive <= 306) {
        const winloss = Math.floor(Math.random() * 2) + 1;
        if (winloss === 1) {
          result = "Luocha";
        } else {
          const lossarr = [...Luocha[0].loss];
          const losswho = Math.floor(Math.random() * lossarr.length);
          result = lossarr[losswho];
        }
      } else {
        const rateup = Math.floor(Math.random() * 76) + 1;
        if (rateup <= 38) {
          const allfour = [...luocha[0].fourstarchara, ...luocha[0].fourstarlc];
          const which = Math.floor(Math.random() * allfour.length);
          result = allfour[which];
        } else {
          const whichrate = Math.floor(Math.random() * 3) + 1;
          if (whichrate === 1) {
            result = "Gallagher";
          } else if (whichrate === 2) {
            result = "Pela";
          } else {
            result = "Dan Heng";
          }
        }
      }
      count = 0;  
    } else {
      const reg = Math.floor(Math.random() * 1000) + 1;
      if (reg <= 6) {
  const fourfive = Math.floor(Math.random() * 5100) + 1;
  if (fourfive <= 306) {
    const winloss = Math.floor(Math.random() * 2) + 1;
    if (winloss === 1) {
      result = "Luocha";
    } else {
      const lossarr = [...luocha[0].loss];
      const losswho = Math.floor(Math.random() * lossarr.length);
      result = lossarr[losswho];
    }
  } else {
    const rateup = Math.floor(Math.random() * 76) + 1;
    if (rateup <= 38) {
      const allfour = [...luocha[0].fourstarchara, ...luocha[0].fourstarlc];
      const which = Math.floor(Math.random() * allfour.length);
      result = allfour[which];
    } else {
      const whichrate = Math.floor(Math.random() * 3) + 1;
      if (whichrate === 1) {
        result = "Gallagher";
      } else if (whichrate === 2) {
        result = "Pela";
      } else {
        result = "Dan Heng";
      }
    }
    count = 0; 
  }
} else {
  const allthree = [...acheron[0].threestars];
  const whichthree = Math.floor(Math.random() * allthree.length);
  result = allthree[whichthree];
  count++;
}
    }
  }
  if (currentpage.value === "LC1") {
    if (count === 9) {
      const fourfive = Math.floor(Math.random() * 5100) + 1;
      if (fourfive <= 306) {
        const winloss = Math.floor(Math.random() * 2) + 1;
        if (winloss === 1) {
          result = "Along the Passing Shore";
        } else {
          const lossarr = [...LC1[0].loss];
          const losswho = Math.floor(Math.random() * lossarr.length);
          result = lossarr[losswho];
        }
      } else {
        const rateup = Math.floor(Math.random() * 76) + 1;
        if (rateup <= 38) {
          const allfour = [...LC1[0].fourstarchara, ...LC1[0].fourstarlc];
          const which = Math.floor(Math.random() * allfour.length);
          result = allfour[which];
        } else {
          const whichrate = Math.floor(Math.random() * 3) + 1;
          if (whichrate === 1) {
            result = "Good Night and Sleep Well";
          } else if (whichrate === 2) {
            result = "Pela";
          } else {
            result = "Dan Heng";
          }
        }
      }
      count = 0;  
    } else {
      const reg = Math.floor(Math.random() * 1000) + 1;
      if (reg <= 6) {
  const fourfive = Math.floor(Math.random() * 5100) + 1;
  if (fourfive <= 306) {
    const winloss = Math.floor(Math.random() * 2) + 1;
    if (winloss === 1) {
      result = "Acheron";
    } else {
      const lossarr = [...acheron[0].loss];
      const losswho = Math.floor(Math.random() * lossarr.length);
      result = lossarr[losswho];
    }
  } else {
    const rateup = Math.floor(Math.random() * 76) + 1;
    if (rateup <= 38) {
      const allfour = [...acheron[0].fourstarchara, ...acheron[0].fourstarlc];
      const which = Math.floor(Math.random() * allfour.length);
      result = allfour[which];
    } else {
      const whichrate = Math.floor(Math.random() * 3) + 1;
      if (whichrate === 1) {
        result = "Good Night and Sleep Well";
      } else if (whichrate === 2) {
        result = "Post-Op Conversation";
      } else {
        result = "Subscribe for More!";
      }
    }
    count = 0; 
  }
} else {
  const allthree = [...LC1[0].threestars];
  const whichthree = Math.floor(Math.random() * allthree.length);
  result = allthree[whichthree];
  count++;
}
  }}
  else {
    if (count === 9) {
      const fourfive = Math.floor(Math.random() * 5100) + 1;
      if (fourfive <= 306) {
        const winloss = Math.floor(Math.random() * 2) + 1;
        if (winloss === 1) {
          result = "Echoes of the Coffin";
        } else {
          const lossarr = [...LC2[0].loss];
          const losswho = Math.floor(Math.random() * lossarr.length);
          result = lossarr[losswho];
        }
      } else {
        const rateup = Math.floor(Math.random() * 76) + 1;
        if (rateup <= 38) {
          const allfour = [...LC2[0].fourstarchara, ...LC2[0].fourstarlc];
          const which = Math.floor(Math.random() * allfour.length);
          result = allfour[which];
        } else {
          const whichrate = Math.floor(Math.random() * 3) + 1;
          if (whichrate === 1) {
            result = "Good Night and Sleep Well";
          } else if (whichrate === 2) {
            result = "Post-Op Conversation";
          } else {
            result = "Subscribe for More!";
          }
        }
      }
      count = 0;  
    } else {
      const reg = Math.floor(Math.random() * 1000) + 1;
      if (reg <= 6) {
        const fourfive = Math.floor(Math.random() * 5100) + 1;
        if (fourfive <= 306) {
          const winloss = Math.floor(Math.random() * 2) + 1;
          if (winloss === 1) {
            result = "Echoes of the Coffin";
          } else {
            const lossarr = [...LC2[0].loss];
            const losswho = Math.floor(Math.random() * lossarr.length);
            result = lossarr[losswho];
          }
        }
      } else if (reg > 6 && reg <= 51) {
        const rateup = Math.floor(Math.random() * 76) + 1;
        if (rateup <= 38) {
          const allfour = [...LC2[0].fourstarchara, ...LC2[0].fourstarlc];
          const which = Math.floor(Math.random() * allfour.length);
          result = allfour[which];
        } else {
          const whichrate = Math.floor(Math.random() * 3) + 1;
          if (whichrate === 1) {
            result = "Good Night and Sleep Well";
          } else if (whichrate === 2) {
            result = "Post-Op Conversation";
          } else {
            result = "Subscribe for More!";
          }
        }
        count = 0; 
      } else {
        const allthree = [...LC2[0].threestars];
        const whichthree = Math.floor(Math.random() * allthree.length);
        result = allthree[whichthree];
        count++; 
      }
    }
  }
  return result
};

const fin = (character) => {
  const ap = pulllogic(character)
  wishHistory.value.push(ap);
  console.log(ap);
  const characterindex = characters.findIndex((char) => char.name === ap);
  if (characterindex !== -1) {
    characters[characterindex].obtained = true;
  }
  const lightconeindex = lightCones.findIndex((char) => char.name === ap)
  if (lightconeindex !== -1) {
    lightCones[lightconeindex].obtained = true; 
  }
}

const multi = (character) => {
  for (let i = 0; i < 10; i++) {
    fin(character)
  }
}

</script>

<style scoped>
.background-image {
  width: 100vw;
  height: calc(100vh - 40px);
  object-fit: cover;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #25233B;
  border: 2px solid black;
  border-radius: 2px;
  height: 80vh;
  width: 80vw;
  overflow: auto;
}

.grayheader {
  background-color: gray;
  color: white;
  width: 250px;
}

.tanheader {
  background: #DBD6D2;
  color: #6E6A6F;
}

.exit {
  position: absolute;
  right: 10px;
  top: 5px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: white;
}

.left, .right {
  border: solid #6a6a6a;
  border-radius: 10px;
  color: black;
}

.top{
  color: white;
}

.table {
  border-collapse: collapse;
  width: 100%;
  color: black;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  color: white;;
}

.sidebar {
  float: left;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  width: 30%;
  height: 350px;
  width: 120px;
}

.sidebar button {
  display: block;
  background-color: inherit;
  color: black; 
  padding: 22px 16px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
}

.sidebar button:hover {
  background-color: #ddd;
}

.sidebar button.active {
  background-color: #ccc;
}

.page {
  float: left;
  padding: 0px 12px;
  width: 70%;
  border-left: none;
  height: 525px;
}

.splash {
  height: 600px;
  width: 600px;
}

.splashlc {
  height: 385.2px;
  width: 477.6;
}

.bannerbox {
  border-radius: 0px 40px 0px 0px;
  background-color: #6a6a6a;
  width: 150px;
  color: white;
}
</style>
