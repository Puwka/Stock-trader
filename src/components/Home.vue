<template>
  <div>
    <h1>Торгуйте на Бирже</h1>
    <h6>Вы можете Сохранять и Загружать свои данные</h6>
    <h6>Нажмите "Закончить День", для того, чтобы начать новый день торгов</h6>
    <hr>
    <p>Ваш Баланс: {{ funds | currency }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      funds() {
        return this.$store.getters.funds
      }
    }
  }
</script>
