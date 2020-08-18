<template>
  <header class="header">
    <div class="top-bar" />
    <nav>
      <router-link to="/">
        <img
          src="@/assets/logo-black-color.png"
          alt="Strip Church Dayton Logo"
        />
      </router-link>
      <ul>
        <li>
          <router-link to="team">
            Gem Team
          </router-link>
        </li>
        <li>
          <router-link to="outreach">
            Outreach
          </router-link>
        </li>
        <li>
          <router-link to="mission">
            Our Mission
          </router-link>
        </li>
        <li>
          <router-link to="support">
            How to Support
          </router-link>
        </li>
        <li>
          <router-link to="dancers">
            For Dancers
          </router-link>
        </li>
        <li>
          <a href="https://www.instagram.com/stripchurchdayton">
            <img src="@/assets/instagram-logo.svg" alt="Instagram Logo" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/stripchurchdayton/">
            <img src="@/assets/facebook-logo.svg" alt="Facebook Logo" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.top-bar {
  background: rgb(56, 183, 151);
  background: linear-gradient(
    90deg,
    rgba(56, 183, 151, 1) 0%,
    rgba(44, 117, 138, 1) 47%,
    rgba(89, 78, 134, 1) 91%
  );
  height: 40px;
  width: 100%;
}

nav {
  display: flex;
  align-items: center;
  background: rgba(56, 183, 151, 0.37);
  /* background: linear-gradient(180deg, rgba(56,183,151,1) 0%, rgba(44,117,138,1) 47%, rgba(89,78,134,0.4962184702982756) 91%); */
  height: 100px;
  width: 100%;

  img {
    margin-left: 50px;
    max-width: 210px;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    width: 55vw;
    li {
      font-size: 1.25rem;
      list-style: none;
    }
  }
}
</style>
