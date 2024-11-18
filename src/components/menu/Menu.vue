<template>
  <div class="menu">
    <div class="menu__wrapper">
      <ul class="menu__list">
        <li class="menu__list-item">Home</li>
        <li class="menu__list-item">Community</li>
        <li class="menu__list-item">Collections</li>
        <li class="menu__list-item">Tags</li>
        <li class="menu__list-item">Ask a question</li>
      </ul>

      <div class="menu__auth">
        <button>Login</button>
        <button>Sign in</button>
      </div>
    </div>
  </div>
</template>

<script>
import "./menu.scss";
export const Menu = {
  name: "Menu",
};
</script>

<style></style>
