<template>
  <div class="main">
    <div class="main--container">
      <h1 class="heading">{{name}}</h1>
      <div class="image--container">
        <img class="image--item" src="../assets/mainlady.png" alt="">
      </div>
      <ul class="list--container">
        <li class="list--item">Home</li>
        <li class="list--item about">About</li>
        <li class="list--item list__image--container">
          <img class="list__image--item" src="../assets/icon.png" alt="">
        </li>
        <li class="list--item">Gallery</li>
        <li class="list--item">Contact</li>

      </ul>
    </div>

    <ul class="link--container">
          <li class="link--item"><a class="link--item__link" :href="`https://instagram.com/${links.instagram}`"
              target="blank">
              <i class="fab fa-instagram"></i>
            </a></li>
          <li class="link--item"><a class="link--item__link" :href="`https://twitter.com/${links.twitter}`"
              target="blank">
              <i class="fab fa-twitter-square"></i>
            </a></li>
          <li class="link--item"><a class="link--item__link" :href="`mailto:${links.email}`">
              <i class="fas fa-envelope-square"></i>
            </a></li>
          <li class="link--item"><a class="link--item__link" :href="`https://snapchat.com/${links.snapchat}`"
              target="blank">
              <i class="fab fa-snapchat-square"></i>
            </a></li>
        </ul>
  </div>
</template>
<script>
export default {
    props: {
      name:{
        required: true,
        type: String
      },
      links: {
        required: true,
        
      }
    }
}
</script>
<style scoped>
.main {
  width: 100%;
  height: 100vh;
  position: relative;
}

.main--container {
  background: linear-gradient(to right, #bd0f4d 50%, #cb2964 50%);
  color: #ffffff;
  text-align: center;
  min-height: calc(100% - 4rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0px;
}

.heading {
  letter-spacing: 0.5rem;
}

.items--center {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  justify-content: center;
}

.image--container {
  justify-self: end;
  /* margin: 0 auto; */
  background-color: #cb2964;
  box-shadow: rgb(0 0 0 / .3) 2px 1px 40px 0px;
  width: 50%;
  height: 100%;
  position: relative;
  margin-bottom: -50px;
}

.image--item {
  width: 100%;
  margin-bottom: -14%;
}

.list--container {
  display: flex;
  margin-top: 2rem;
  list-style-type: none;
  justify-content: center;
  align-items: center;
}

.list--item {
  margin: 0rem .75rem;
  font-size: 1rem;
  text-transform: uppercase;
}

.list__image--container {
  width: 5rem;
  margin-left: -0.5rem;
}

.list__image--item {
  width: 100%;
}

.link--item__link {
  text-decoration: none;
  font-size: 1.5rem;
  padding: 1rem;
  color: #fff;
}

.about {
  margin-right: 1rem;
}

.link--container {
  padding-right: 2rem;
  display: grid;
  list-style-type: none;
  align-self: center;
  justify-self: end;
  top: 50%;
  right: 10px;
  position: absolute;
  transform: translateY(-50%);
  display: grid;
  row-gap: 12px;
}
</style>