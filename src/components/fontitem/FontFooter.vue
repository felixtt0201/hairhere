<template>
  <div>
    <footer class="py-5 bg-main text-accent">
      <div class="footer-groups">
        <div class="footer-list">
          <p class="mb-1">{{ storeName }}</p>
          <p class="mb-0">{{ englishName }}</p>
        </div>

        <div class="footer-list">
          <div class="d-flex align-items-center">
            <i class="fas fa-phone-square-alt mr-2"></i>
            <p class="mb-0">(07)-{{ basicData.Phone }}</p>
          </div>
          <div class="d-flex align-items-center">
            <i class="fas fa-home mr-2"></i>
            <p class="mb-0">{{ basicData.Address }}</p>
          </div>
        </div>
        <div class="footer-list">
          <div>
            <a
              :href="basicData.Facebook"
              class="d-flex align-items-center follow-icon"
            >
              <i class="fab fa-instagram mr-2"></i>
              <p class="m-0">{{ storeName }} Hair Salon</p></a
            >
          </div>
          <div class="d-flex align-items-center">
            <a
              :href="basicData.Facebook"
              class="d-flex align-items-center follow-icon"
            >
              <i class="fab fa-facebook-square mr-2"></i>
              <p class="mb-0">{{ storeName }} Hair Salon</p></a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { getStoreTotalInfo } from '@/js/FontAppServices';

export default {
  data() {
    return {
      storeName: '',
      englishName: '',
      basicData: {},
    };
  },
  methods: {
    getInfoHandler() {
      getStoreTotalInfo().then((res) => {
        this.englishName = res.data.EnglishName;
        this.storeName = res.data.Name;
        this.basicData = res.data.BasicData;
      });
    },
  },
  mounted() {
    this.getInfoHandler();
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
  .footer-list:last-child {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    p {
      display: none;
    }
  }
}
</style>
