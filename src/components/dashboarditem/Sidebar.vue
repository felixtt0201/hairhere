<template>
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="#"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
    </a>
    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">
      內容
    </div>
    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Designers' }">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>設計師管理</span></router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Information' }">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>店家資訊管理</span></router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Portfolio' }">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>作品集管理</span></router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'Checkout' }">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>結帳管理</span></router-link
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i class="fas fa-fw fa-cog"></i>
        <span>表單管理</span>
      </a>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" :to="{ name: 'Reservation' }"
            >預約表
          </router-link>
          <router-link class="collapse-item" :to="{ name: 'Vaction' }"
            >休假表
          </router-link>
          <router-link class="collapse-item" :to="{ name: 'Performance' }"
            >業績表
          </router-link>
          <router-link class="collapse-item" :to="{ name: 'HistoricalOrders' }"
            >歷史訂單
          </router-link>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
  </ul>
  <!-- End of Sidebar -->
</template>

<script>
import $ from 'jquery';

export default {
  methods: {
    hide() {
      console.log('close');
      document.querySelector('body').classList.toggle('sidebar-toggled');
      //  (!document.querySelector('.sidebar').classList.contains('toggled'))
      document.querySelector('.sidebar').classList.toggle('toggled');
      // $('#sidebarToggle, #sidebarToggleTop').on('click', () => {
      //   console.log('aaaaa');
      //   $('body').toggleClass('sidebar-toggled');
      //   $('.sidebar').toggleClass('toggled');
      //   if ($('.sidebar').hasClass('toggled')) {
      //     $('.sidebar .collapse').collapse('hide');
      //   }
      // });
    },
  },
  mounted() {
    // Toggle the side navigation
    $('#sidebarToggle, #sidebarToggleTop').on('click', () => {
      $('body').toggleClass('sidebar-toggled');
      $('.sidebar').toggleClass('toggled');
      if ($('.sidebar').hasClass('toggled')) {
        $('.sidebar .collapse').collapse('hide');
      }
    });

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(() => {
      if ($(window).width() < 768) {
        $('.sidebar .collapse').collapse('hide');
      }

      // Toggle the side navigation when window is resized below 480px
      if ($(window).width() < 480 && !$('.sidebar').hasClass('toggled')) {
        $('body').addClass('sidebar-toggled');
        $('.sidebar').addClass('toggled');
        $('.sidebar .collapse').collapse('hide');
      }
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', (e) => {
      if ($(window).width() > 768) {
        const e0 = e.originalEvent;
        const delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });

    // Scroll to top button appear
    $(document).on('scroll', () => {
      const scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', (e) => {
      const $anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top,
          },
          1000,
          'easeInOutExpo',
        );
      e.preventDefault();
    });
  },
};
</script>

<style lang="scss">
// @import 'src/assets/scss/sb-admin-2.scss';
</style>
