<template>
  <div class="nav">
    <div class="nav__logo">Frontend Overflow</div>
    <div class="nav__search">
      <input type="text" class="nav__input" placeholder="Search">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="nav__input-icon" />
    </input>
    </div>
    <div class="nav__user">
      <div class="nav__theme">
        <font-awesome-icon :icon="['fas', 'sun']" class="nav__theme-icon"/>
      </div>
      <div class="nav__profile">
        <font-awesome-icon :icon="['fas', 'user']" class="nav__profile-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./nav.scss";

export const Nav = {
  name: "Nav",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped></style>
