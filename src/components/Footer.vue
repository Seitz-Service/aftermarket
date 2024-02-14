<template>
  <footer>
    <div>
      <h4>Reorder product here</h4>
    </div>
  </footer>
</template>

<style>
footer {
  height: 30vh;
  background-color: #122a40;
  padding-top: 100px;

  div {
    max-width: 1240px;
    margin: 0 auto;

    @media (max-width: 1250px) {
      padding: 0 20px;
    }
  }

  h4 {
    color: #87c69e;
    font-size: 3em;
    display: inline;
    margin: 0;
    box-shadow: inset 0 -0.5em 0 rgba(61, 153, 212, 0.3), 0 0 0 rgba(61, 153, 212, 0.3);
  }
}
</style>