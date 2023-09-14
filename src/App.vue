<template>
  <div id="app">
    <b-container>
      <b-nav tabs>
        <b-nav-item to="/todos" exact exact-active-class="active"
          >Todos</b-nav-item
        >
        <b-nav-item to="/todos/create" exact exact-active-class="active"
          >Todos Create</b-nav-item
        >
      </b-nav>
    </b-container>
    <router-view />
  </div>
</template>

<style lang="scss"></style>
