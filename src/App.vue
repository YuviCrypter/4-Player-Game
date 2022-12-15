<template>
  <!-- <header>
  </header> -->
  <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">

  <div class="main">
    <div class="inputs">
    <div v-for="player in players" :key="player.id">
      <Player @next-turn="NextTurn" @go-forward="Move(player.id)" :player="player.name" :disable="player.disabled" :playerColor="player.color"/>
      <!-- <Player player="1"/>
      <Player player="2"/>
      <Player player="3"/>
      <Player player="4"/> -->
    </div>
  </div>
  <div class="board">
  </div>
  <div class="object">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="100%" ><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"/></svg>
  </div>
</div>
<div class="fade">
  <h1>The Winner is {{this.winner}} !</h1>
  <p>Reload the page to Restart</p>
</div>
</template>

<script>
import Player from "./components/playerButton.vue"
  export default{
    name:'App',
    components:{
    Player
  },
    data(){
      return{
        currentPlayer:0,
        up:0,
        down:0,
        left:0,
        right:0,
        players:[
          {id:0,name:"Player1",disabled:false ,color:"#00EBE5"},
          {id:1,name:"Player2",disabled:true ,color:"#EB2800"},
          {id:2,name:"Player3",disabled:true ,color:"#1EEB00"},
          {id:3,name:"Player4",disabled:true ,color:"#EBE101"},
        ],
        color:"white",
        gameover:"hidden",
        winner: "",
      }
    },
    methods:{
      NextTurn(){
        var index = this.currentPlayer%4;
        this.players[index].disabled=true;
        this.currentPlayer++;
        index = this.currentPlayer%4;
        console.log(this.currentPlayer);
        this.players[index].disabled=false;
      },
      Move(index){
        if(index == 0){
          this.up+=22;
          this.color ="#00EBE5";
        }else if(index == 1){
          this.right+=22;
          this.color = "#EB2800";
        }else if(index == 2){
          this.down+=22;
          this.color = "#1EEB00";
        }else if(index == 3){
          this.left+=22;
          this.color = "#EBE101";
        }
        console.log("up"+this.up+"down "+this.down+"left "+this.left+"right "+this.right)
        if(this.up - this.down == 176){
          console.log(this.players[0].name+" Wins!");
          this.winner = this.players[0].name;
          this.gameover = "visible";
        }else if(this.up - this.down == -176){
          console.log(this.players[2].name+" Wins!");
          this.winner = this.players[2].name;
          this.gameover = "visible";
        }else if(this.left - this.right == 176){
          console.log(this.players[3].name+" Wins!");
          this.winner = this.players[3].name;
          this.gameover = "visible";
        }else if(this.left - this.right == -176){
          console.log(this.players[1].name+" Wins!");
          this.winner = this.players[1].name;
          this.gameover = "visible";
        }

      }
    }
  }
  
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.main{
  background-color: red;
  height: auto;
  width: auto;
}
.inputs{
  transform: translateX(-50%) translateY(-50%);
}
.inputs>div:nth-child(2){
  transform: rotateZ(90deg)
  translateY(25vw);
}
.inputs>div:nth-child(3){
  transform: rotateZ(180deg)
  translateY(25vh);
}
.inputs>div:nth-child(4){
  transform: rotateZ(-90deg)
  translateY(25vw);
}
.inputs> div{
  transform-origin: top center;
  transform: translateY(25vh);
  position: absolute;
}

.object{
  height: 30px;
  width: 30px;
  /* background-color: white; */
  position: absolute;
  /* border-radius: 5px; */
  text-align: center;
  fill: v-bind(color);
  transform: translateX(-50%) translateY(-50%);
  translate: v-bind((right-left)+"px "+(down-up)+"px");
  transition: 3s;
}
.board{
  position: absolute;
  /* background-image: repeating-linear-gradient(90deg, hsla(178,0%,66%,0.05) 0px, hsla(178,0%,66%,0.05) 1px,transparent 1px, transparent 104px),repeating-linear-gradient(0deg, hsla(178,0%,66%,0.05) 0px, hsla(178,0%,66%,0.05) 1px,transparent 1px, transparent 104px),repeating-linear-gradient(0deg, hsla(178,0%,66%,0.07) 0px, hsla(178,0%,66%,0.07) 1px,transparent 1px, transparent 26px),repeating-linear-gradient(90deg, hsla(178,0%,66%,0.07) 0px, hsla(178,0%,66%,0.07) 1px,transparent 1px, transparent 26px),linear-gradient(0deg, rgb(20,20,20),rgb(20,20,20));
   */
  border: 1px solid white;
  background-image: repeating-linear-gradient(white 1px,transparent 2px,transparent 14.5%),repeating-linear-gradient(90deg,white 1px,transparent 2px,transparent 14.5%);
  height: 313px;
  width: 313px;
  transform: translateX(-50%) translateY(-50%);
}
@media (max-width: 740px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  .inputs{
  transform: translateX(-50%) translateY(-50%);
}
.inputs>div:nth-child(2){
  transform: translateY(25vh) translateX(-40vw) scale(70%);
}
.inputs>div:nth-child(3){
  transform: rotateZ(180deg)
  scale(70%)
  translateY(35vh)
  translateX(20vw);
}
.inputs>div:nth-child(4){
  transform: rotateZ(180deg)
  scale(70%)
  translateY(35vh)
  translateX(-35vw);
}
.inputs> div{
  transform-origin: top center;
  transform: translateY(25vh) scale(70%);
  position: absolute;
}
}

h1{
  font-family: 'Unbounded', cursive;
  color: white;
}
.fade{
  position: absolute;
  height: 100%;
  width: 100%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.7);
  visibility: v-bind(gameover);
}
</style>
