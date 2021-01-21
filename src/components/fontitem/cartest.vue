<template>
  <div>
    <!-- Main slider -->
    <template class="d-flex">
      <splide :options="primaryOptions" ref="primary">
        <template v-slot:controls>
          <div>
            <h4>超級飄飄卷</h4>
            <p class="mb-5 border-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, laborum?
            </p>
            <ul class="d-flex justify-content-center p-0 mb-4">
              <li class="designer-tag">
                護髮
              </li>
              <li class="designer-tag">
                護髮
              </li>
            </ul>
          </div>
        </template>
        <splide-slide v-for="slide in slides" :key="slide.src">
          <img :src="slide.src" />
        </splide-slide>
      </splide>
    </template>
    <!-- Thumbnail slider -->
    <splide :options="secondaryOptions" ref="secondary">
      <splide-slide v-for="slide in slides" :key="slide.src">
        <img :src="slide.src" />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      // classes: {
      //   arrows: 'splide__arrows my-class-arrows',
      //   arrow: 'splide__arrow your-class-arrow',
      //   prev: 'splide__arrow--prev your-class-prev',
      //   next: 'splide__arrow--next your-class-next',
      // },
      slides: [
        {
          src:
            'https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        },
        {
          src:
            'https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        },
        {
          src:
            'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        },
      ],
      primaryOptions: {
        type: 'loop',
        width: 800,
        pagination: false,
        arrows: false,
      },
      secondaryOptions: {
        type: 'slide',
        rewind: true,
        width: 800,
        gap: '1rem',
        pagination: false,
        fixedWidth: 110,
        fixedHeight: 70,
        cover: true,
        focus: 'center',
        isNavigation: true,
      },
    };
  },
  mounted() {
    // Set the sync target.
    this.$refs.primary.sync(this.$refs.secondary.splide);
  },
};
</script>
<style>
.splide__slide img {
  width: 200px;
  height: 200px;
}
.my-class-arrows {
  color: pink !important;
  background-color: pink !important;
}
.splide__arrow--next,
.splide__arrow--prev {
  background-color: transparent;
}
#splide01 {
  display: flex;
}
#splide01-track {
  width: 60%;
}
</style>
