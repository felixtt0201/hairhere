<template>
  <div>
    <footer class="py-5 bg-main text-accent footer-center">
      <div class="footer-list">
        <p class="mb-1">{{ storeName }}</p>
        <p class="mb-0">{{ englishName }}</p>
      </div>
      <div class="footer-list">
        <div class="d-flex align-items-center">
          <i class="fas fa-phone-square-alt mr-2"></i>
          <p class="mb-1">(07)-{{ basicData.Phone }}</p>
        </div>
        <div class="d-flex align-items-center">
          <i class="fas fa-home mr-2"></i>
          <p class="mb-0">{{ basicData.Address }}</p>
        </div>
      </div>
      <div class="footer-list">
        <div class="d-flex align-items-center">
          <a :href="basicData.Facebook">
            <i class="fab fa-instagram mr-2"></i>
            <p class="mb-1">{{ storeName }} Hair Salon</p></a
          >
        </div>
        <div class="d-flex align-items-center">
          <a :href="basicData.Facebook">
            <i class="fab fa-facebook-square mr-2"></i>
            <p class="mb-0">{{ storeName }} Hair Salon</p></a
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { storeTotalInfo } from '@/js/AppServices';

export default {
  data() {
    return {
      storeName: '',
      englishName: '',
      basicData: {},
    };
  },
  methods: {
    GetStoreInfo() {
      storeTotalInfo().then((res) => {
        this.englishName = res.data.EnglishName;
        this.storeName = res.data.Name;
        this.basicData = res.data.BasicData;
      });
    },
  },
  mounted() {
    this.GetStoreInfo();
  },
};
</script>

<style></style>
