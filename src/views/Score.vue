<template>
  <div class="score">
    <h1>成績</h1>
    <button v-on:click="gamereset">成績リセット</button>
    <p>{{ score }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    gamereset() {
      this.$store.commit("gamereset");
    },

    memo() {
      let tamesi = this.$store.getters.score;
      let tamesi2 = tamesi.length;

      let victory = "";
      this.$store.commit("memo", victory);
      if (tamesi == 0) {
        victory = tamesi2 + "回目は負け";
      } else if (tamesi === 1) {
        victory = tamesi2 + "回目は勝ち";
      } else if (tamesi == 2) {
        victory = tamesi2 + "回目は引き分け";
      }
      return victory;
    }
  },
  computed: {
    score() {
      return this.$store.getters.score;
    },
    score_victory() {
      return this.$store.getters.score_victory;
    }
  }
};
</script>