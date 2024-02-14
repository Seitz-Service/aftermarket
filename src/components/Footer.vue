<template>
  <footer>
    <div class="footer">
      <div>
        <h4>Reorder product here</h4>
      </div>
    </div>
    <div class="footer-links">
      <div>
        <span>2024 Eugen Seitz AG</span>
        <ul>
          <li>Contact</li>
          <li>Imprint</li>
          <li>Disclaimer</li>
          <li>Private Policy</li>
          <li>GTC</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  height: 200px;
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

.footer-links {
  background-color: #3b5e5d;
  color: white;

  div {
    max-width: 1240px;
    margin: 0 auto;

    @media (min-width: 1250px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    @media (max-width: 1250px) {
      padding: 20px;
    }
  }

  ul {
    list-style: none;

    @media (min-width: 1250px) {
      display: flex;
    }

    @media (max-width: 1250px) {
      padding: 0;
      margin-top: 20px;
      margin-bottom: 0;
    }

    li {
      padding: 0 10px;

      @media (max-width: 1250px) {
        padding: 0;
      }
    }
  }
}
</style>
<script setup lang="ts">
</script>