
<template>
  <div>
    <h1>
      {{ name }}
    </h1>

    <div class="card m-3 informationArea">
      <div class="card-header">Information</div>
      <div class="card-body">
        <h5 class="card-title">New information about this site:</h5>
        <p class="card-text">Here is some information.</p>
        <a href="#" class="btn btn-primary">More Info</a>
      </div>
    </div>
    <show-flashcard
      class="m-3"
      v-for="(item,index) in flashcards"
      :front="item.front"
      :back="item.back"
	  :key="index"
    ></show-flashcard>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as qstr from "./qtools/qstr";
import ShowFlashcard from "./components/ShowFlashcard.vue";

export default Vue.extend({
  components: { ShowFlashcard },
  data: function () {
    return {
      name: qstr.capitalizeFirstLetter("testing"),
      flashcards: [
        {
          front: "house",
          back: "das Haus",
        },
        {
          front: "pen",
          back: "der Stift",
        },
        {
          front: "cup",
          back: "die Tasse",
        },
      ],
    };
  },
});
</script>

<style lang="scss">
$primary-color: white;
$bg: darkgreen;
h1 {
  color: $primary-color;
  background-color: $bg;
}
</style>
