<template>
  <body>
    <div class="content">
      <div>
        <button class="left" @click="detailspopup">View Details</button>
        <button class="left" @click="historypopup">History</button>
      </div>
    </div>

      <div>
        <button class="right"> x1  | Warp x1</button>
        <button class="right"> x10 | Warp x10</button>
      </div>

      <div class="sidebar">
        <button class="sidebarbtn" onclick="openpage(event, 'Acheron')">Words of Yore</button>
        <button class="sidebarbtn" onclick="openpage(event, 'Luocha')">Laic Pursuit</button>
        <button class="sidebarbtn" onclick="openpage(event, 'LC1')">Brilliant Fixation</button>
        <button class="sidebarbtn" onclick="openpage(event, 'LC2')">Bygone Reminiscience</button>
        <button class="sidebarbtn" onclick="openpage(event, 'Standard')">Stellar Warp</button>
      </div>

      <div class="page" id="Acheron">
        <div>Words of Yore</div>
        <div class="bannerbox">
          <h5>Every 10 Warps gurantees a 4-star or above entity</h5>
          <h5>Featured characters receive a drop rate boost</h5>
        </div>
        <img src="https://starrail.honeyhunterworld.com/img/character/acheron-character_cut_in_front.webp?x91856">
      </div>

      <div class="page" id="Luocha">
        <div>Laic Pursuit</div>
        <div class="bannerbox">
          <h5>Every 10 Warps gurantees a 4-star or above entity</h5>
          <h5>Featured characters receive a drop rate boost</h5>
        </div>
        <img src="https://starrail.honeyhunterworld.com/img/character/luocha-character_cut_in_front.webp?x91856">
      </div>

      <div class="page" id="LC1">
        <div>Brilliant Fixation</div>
        <div class="bannerbox">
          <h5>Every 10 Warps gurantees a 4-star or above entity</h5>
          <h5>Featured Light Cones receive a drop rate boost</h5>
        </div>
         <img src="https://starrail.honeyhunterworld.com/img/item/along-the-passing-shore-item_icon_thumbnail_medium.webp?x91856">
      </div>

      <div class="page" id="LC2">
        <div>Bygone Reminscience</div>
        <div class="bannerbox">
          <h5>Every 10 Warps gurantees a 4-star or above entity</h5>
          <h5>Featured Light Cones receive a drop rate boost</h5>
        </div>
        <img src="https://starrail.honeyhunterworld.com/img/item/echoes-of-the-coffin-item_icon_thumbnail_medium.webp?x91856ty">
      </div>

      <div class="page" id="Standard">
        <div>Stellar Warp</div>
        <div class="bannerbox">
          <h5>Every 10 Warps gurantees a 4-star or above entity</h5>
          <h5>Permanent</h5>
        </div>
      </div>

      <div v-if="history" class="popup">
        <button class="exit" @click="exitpopup">X</button>
        <h1>Wish History</h1>
        <ul>
            <li v-for="(item, index) in wishHistory.slice().reverse()" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div v-if="details" class="popup">
        <button class="exit" @click="exitpopup">X</button>
        <h1>BANNER NAME</h1>
        <h1 class="grayheader">Boosted Drop Rate</h1>
        <h2 class="tanheader">Drop Rate (out of 5-star entities): 50%</h2>
        <h1>IMAGE OF FEATURED FIVE STAR GOES HERE</h1>
        <h2 class="tanheader">Drop Rate (out of 4-star entities): 50%</h2>
        <h1>IMAGE OF FEATURED FOUR STARS GO HERE</h1>
        <h1 class="grayheader">Details</h1>
        <h3>BANNER NAME has started</h3>
        <h3>Event Details</h3>
        <h3>During the event, BANNER NAME, you can use your Star Rail Special Passes for Warps</h3>
        <ul>
          <li>There is a greatly increased Warp success rate for the limited 5-star character NAME (type: path), and 4-star characters NAME (type: path), NAME (type: Path), and NAME (type: PATH).</li>
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
                <td>FEATURED FIVE STAR</td>
                <td>Bronya</td>
                <td>Bailu</td>
                <td>Gepard</td>
              </tr>
              <tr>
                <td>Welt</td>
                <td>Himeko</td>
                <td>Yanqing</td>
                <td>Clara</td>
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
                <td>Dan Heng</td>
                <td>Pela</td>
                <td>Gallagher</td>
                <td>Sampo</td>
              </tr>
              <tr>
                <td>March 7th</td>
                <td>Asta</td>
                <td>Arlan</td>
                <td>Herta</td>
              </tr>
              <tr>
                <td>Natasha</td>
                <td>Serval</td>
                <td>Hook</td>
                <td>Sushang</td>
              </tr>
              <tr>
                <td>Qingque</td>
                <td>Tingyun</td>
                <td>Yukong</td>
                <td>Luka</td>
              </tr>
              <tr>
                <td>Qingque</td>
                <td>Tingyun</td>
                <td>Hanya</td>
                <td>Xueyi</td>
              </tr>
              <tr>
                <td>Misha</td>
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
                <td>Post-Op Conversation</td>
                <td>Good Night and Sleep Well</td>
                <td>Day One of My New Life</td>
                <td>Only Silence Remains</td>
              </tr>
              <tr>
                <td>Memories of the Past</td>
                <td>The Moles Welcome You</td>
                <td>The Birth of the Self</td>
                <td>Shared Feeling</td>
              </tr>
              <tr>
                <td>Eyes of the Prey</td>
                <td>Landau's Choice</td>
                <td>Swordplay</td>
                <td>Planetary Rendezvous</td>
              </tr>
              <tr>
                <td>A Secret Vow</td>
                <td>Make the World Clamor</td>
                <td>Perfect Timing</td>
                <td>Resolution Shines As Pearls of Sweat</td>
              </tr>
              <tr>
                <td>Trend of the Universal Market</td>
                <td>Subscribe for More!</td>
                <td>Dance! Dance! Dance!</td>
                <td>Under the Blue Sky</td>
              </tr>
              <tr>
                <td>Geniuses' Repose</td>
                <td>Indelible Promise</td>
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

const history = ref(false);
const details = ref(false);
const wishHistory = ref([]);

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

function openpage(evt, bannername) {
  var i, sidebarbtn, page;
  sidebarbtn = document.getElementsByClassName('sidebarbtn');
  for (i = 0; i < sidebarbtn.length; i++) {
    sidebarbtn[i].classList.remove("active");
  }
  page = document.getElementsByClassName("page");
  for (i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  document.getElementById(bannername).style.display = "block";
  evt.currentTarget.classList.add("active");
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
  background-color: white;
  border: 2px solid black;
  border-radius: 2px;
  color: black;
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
}

.left {
  border: solid #6a6a6a;
  border-radius: 10px;
}

.table {
  border-collapse: collapse;
  width: 100%;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.sidebar{
  float: left;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  width: 30%;
  height: 300px;
  width: 120px;
}

.bannerbox{
  border-radius: 0px 40px 0px 0px;
  background-color: #6a6a6a;
}
</style>  