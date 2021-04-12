<template>
  <header class='header'>
    <nav class='navbar' role='navigation' aria-label='main navigation'>
      <div class='navbar-brand'>
        <router-link to='/' class='navbar-item'>
          <img src='' alt='Logo' loading='lazy' decoding='async' />
        </router-link>

        <span role='button' :class="['navbar-burger', showMobileMenu ? 'is-active' : '' ]"
        @click="showMobileMenu = !showMobileMenu"
        aria-label='menu' aria-expanded='false' data-target='main-navbar'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </span>
      </div>
      <div :class="['navbar-menu', showMobileMenu ? 'is-block' : '']" id='main-navbar'>
        <div class='navbar-start'>
          <router-link to='/' class='navbar-item'>
            <span class='icon-text'>
              <span class='icon'>
                <ion-icon name='home' />
              </span>
              <span>Home</span>
            </span>
          </router-link>
        </div>
        <div class='navbar-end'>
          <div class='navbar-item'>
            <div class='buttons'>
              <router-link to='/login' class='button is-link is-light'>
                <span class='icon-text'>
                  <span class='icon'>
                    <ion-icon name='log-in' size='large'></ion-icon>
                  </span>
                  <span>Login</span>
                </span>
              </router-link>
              <router-link to='/register' class='button is-primary'>
                <span class='icon-text'>
                  <span>Register</span>
                </span>
              </router-link>
              <router-link to='/cart' class='button is-info'>
                <span class='icon-text'>
                  <span class='icon'>
                    <ion-icon name='cart' />
                  </span>
                  <span>Cart</span>
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Header',
  setup() {
    const showMobileMenu = ref(false);

    return { showMobileMenu };
  },
};
</script>
<style lang='scss' scoped>
@import url('../../assets/styles/header.scss');
</style>
