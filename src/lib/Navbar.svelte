<script lang="ts">
</script>

<nav id="nav">
  <div class="nav__container">
    <ul class="nav__list">
      <li class="nav__item nav__item--logo">
        <img
          class="nav__item__img"
          src="/src/assets/ravenidle-logo.png"
          alt=""
        />
      </li>

      <li class="nav__item">Character</li>
    </ul>
  </div>
</nav>

<style lang="scss">
  #nav {
    background: #131416;
    border-right: 1px solid #1f1f20;
    overflow: hidden;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    z-index: 30;
  }

  .nav {
    &__container {
      padding: 24px 0px 24px 0px;
      display: flex;
      flex-direction: row;
      max-width: 284px;
      height: 100%;
    }

    &__list {
      list-style: none;
    }

    &__item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: stretch;
      padding: 8px 32px 8px 32px;

      &--logo {
        padding: 8px 24px 8px 24px;
        margin: 0px 0px 24px 0px;
      }

      &__img {
        display: inline-block;
        width: 100%;
      }
    }
  }
</style>
