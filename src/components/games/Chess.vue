<template>
    <div>
          <div class="vx-card col-6 offset-3 float-left">
      <div class="row">
            <chessboard :free="true"/>
        </div>
        </div>
         
    </div>
</template>
<script>
import {chessboard} from 'vue-chessboard'
import 'vue-chessboard/dist/vue-chessboard.css'
export default {
      mounted() {
      this.board.set({
        movable: { events: { after: this.userPlay()} },
      })
    },
    components:{
        chessboard
    },
    methods: {
              userPlay() {
        return (orig, dest) => {
          if (this.isPromotion(orig, dest)) {
            this.promoteTo = this.onPromotion()
          }
          this.game.move({from: orig, to: dest, promotion: this.promoteTo}) // promote to queen for simplicity
          this.board.set({
            fen: this.game.fen()
          })
          this.calculatePromotions()
          this.aiNextMove()
        };
      },
      aiNextMove() {
        let moves = this.game.moves({verbose: true})
        let randomMove = moves[Math.floor(Math.random() * moves.length)]
        this.game.move(randomMove)
 
        this.board.set({
          fen: this.game.fen(),
          turnColor: this.toColor(),
          movable: {
            color: this.toColor(),
            dests: this.possibleMoves(),
            events: { after: this.userPlay()},
          }
        });
      },
    },
  

}
</script>
<style  scoped>

</style>