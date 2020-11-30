<template>
  <div class="showArea">
    <div @click="toggleShow()" class="showInfo">{{ front }}</div>
    <div v-show="isShowing" class="info">{{ back }}</div>
  </div>
</template>
<script>
export default {
  props: {
    front: String,
    back: String,
  },
  data() {
    return {
      info: "This is the info.",
      isShowing: false,
    };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    },
  },
};
</script>

<style lang="scss">
.showArea {
  width: 300px;
  .showInfo {
    background-color: #ccc;
    cursor: pointer;
	padding: 3px;
  }
  .info {
    background-color: #eee;
	padding: 3px;
  }
}
</style>