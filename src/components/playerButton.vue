<template>
    <div>
        <!-- <h1>{{diceNum}}</h1> -->
        <div id='dice1' :class="'dice dice-one show-'+diceNum">
        <div id="dice-one-side-one" class='side one'>
          <div class="dot one-1"></div>
        </div>
        <div id="dice-one-side-two" class='side two'>
          <div class="dot two-1"></div>
          <div class="dot two-2"></div>
        </div>
        <div id="dice-one-side-three" class='side three'>
          <div class="dot three-1"></div>
          <div class="dot three-2"></div>
          <div class="dot three-3"></div>
        </div>
        <div id="dice-one-side-four" class='side four'>
          <div class="dot four-1"></div>
          <div class="dot four-2"></div>
          <div class="dot four-3"></div>
          <div class="dot four-4"></div>
        </div>
        <div id="dice-one-side-five" class='side five'>
          <div class="dot five-1"></div>
          <div class="dot five-2"></div>
          <div class="dot five-3"></div>
          <div class="dot five-4"></div>
          <div class="dot five-5"></div>
        </div>
        <div id="dice-one-side-six" class='side six'>
          <div class="dot six-1"></div>
          <div class="dot six-2"></div>
          <div class="dot six-3"></div>
          <div class="dot six-4"></div>
          <div class="dot six-5"></div>
          <div class="dot six-6"></div>
        </div>
      </div>
        <button @click="Clicked(player)" :disabled=disable >Roll {{player}}</button>
    </div>
</template>

<script>
    export default{
        name:'playerButton',
        props:{
            player: String,
            disable:Boolean,
            playerColor: String,
        },
        data(){
            return{
                diceNum:1,
            }
        },
        methods:{
            Clicked(name){
                // console.log(name +" has Clicked!")
                // var randomNumber = Math.floor(Math.random() * 6) + 1;
                //var elDiceOne = document.getElementById('dice1');
                var diceOne   = Math.floor((Math.random() * 6) + 1);
                // for(var i = 1; i <= 6; i++) {
                //     elDiceOne.classList.remove('show-' + i);
                // if (diceOne === i) {
                //     elDiceOne.classList.add('show-' + i);
                // }
                // }
                ///
                this.diceNum = diceOne;
                if(diceOne == 6){
                    this.$emit('go-forward')
                }
                this.$emit('next-turn')
            },
        }
    }
</script>
<style scoped>
h1{
    color: white;
}
button{
  font-family: 'Mukta', sans-serif;
  font-weight: bold;
  background-color: v-bind(playerColor);
  border-radius: 5px;
  padding: 4px 10px;
}
button:disabled{
  opacity: 50%;
}
.dice {
  position: relative;
  width: 60px;
  height: 60px;
  transform-style: preserve-3d;
  transition: transform 1s; 
}

.dot {
  position: absolute;
  width: 12px;
  height: 12px;
  margin: -6px 5px 5px -6px;
  border-radius: 20px;
  background-color: v-bind(playerColor);
  box-shadow: inset 0px 0px 5px rgba(0,0,0,0.3);
}

.dice-one {
  position: absolute;
  left: 150px; 
}

.dice-two {
  position: absolute;
  left: -50px;
  
}

.side {
  position: absolute;
  background-color: #ffF;
  border-radius:5px;
  width: 60px;
  height: 60px;
  border: 1px solid #e5e5e5;
  text-align: center;
  line-height: 2em;
}

.side:nth-child(1) {
  transform: translateZ(2em); }

.side:nth-child(6) {
  transform: rotateY(90deg) translateZ(2em); }

.side:nth-child(3) {
  transform: rotateY(-90deg) translateZ(2em); }

.side:nth-child(4) {
  transform: rotateX(90deg) translateZ(2em); }

.side:nth-child(5) {
  transform: rotateX(-90deg) translateZ(2em); }

.side:nth-child(2) {
  transform: rotateY(-180deg) translateZ(2em); }

.show-1 {
  transform: rotateX(720deg) rotateZ(-720deg); }

.show-2 {
  transform: rotateX(-900deg) rotateZ(1080deg); }

.show-6 {
  transform: rotateY(-450deg) rotateZ(-1440deg); }

.show-3 {
  transform: rotateY(810deg) rotateZ(720deg); }

.show-4 {
  transform: rotateX(-810deg) rotateZ(-1080deg); }

.show-5 {
  transform: rotateX(450deg) rotateZ(-720deg); }

.two-1, .three-1, .four-1, .five-1, .six-1 {
  top: 20%;
  left: 20%; 
}

.four-3, .five-3, .six-4 {
  top: 20%;
  left: 80%; }

.one-1, .three-2, .five-5 {
  top: 50%;
  left: 50%; }

.four-2, .five-2, .six-3 {
  top: 80%;
  left: 20%; }

.two-2, .three-3, .four-4, .five-4, .six-6 {
  top: 80%;
  left: 80%; }

.six-2 {
  top: 50%;
  left: 20%; }

.six-5 {
  top: 50%;
  left: 80%; 
}
</style>