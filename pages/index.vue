<template>
  <input v-model="text"
         class="w-full">
  <span class="card-container d-grid grid-cols-5 grid-flow-row">
    <a v-for="card in cards"
       class="card"
       href="{{card.href}}">
      {{ card.title }}
      {{ card.content }}
      <span class="card-footer">
        <span v-for="keyword in card.keywords"
              class="keyword">
          {{ keyword }}
        </span>
      </span>
    </a>
  </span>
</template>

<script>
export default {
    data() {
        return {
            text: "",
            cards: [{
                title: "Card 1",
                content: "This is a card",
                href: "https://google.com",
                keywords: ["card", "1"]
            }]
        };
    }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.nice {
    background-color: red;
    font-size: 48px;
}
</style>
