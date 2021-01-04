// import $ from 'jquery';
export default function () {
  'use strict'; // Start of use strict
  // Toggle the side navigation
  this.$('#sidebarToggle, #sidebarToggleTop').on('click', () => {
    this.$('body').toggleClass('sidebar-toggled');
    this.$('.sidebar').toggleClass('toggled');
    if (this.$('.sidebar').hasClass('toggled')) {
      this.$('.sidebar .collapse').collapse('hide');
    }
  });

  // Close any open menu accordions when window is resized below 768px
  this.$(window).resize(function() {
    if (this.$(window).width() < 768) {
      this.$('.sidebar .collapse').collapse('hide');
    }

    // Toggle the side navigation when window is resized below 480px
    if (this.$(window).width() < 480 && !this.$('.sidebar').hasClass('toggled')) {
      this.$('body').addClass('sidebar-toggled');
      this.$('.sidebar').addClass('toggled');
      this.$('.sidebar .collapse').collapse('hide');
    }
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  this.$('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(
    e,
  ) {
    if (this.$(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  this.$(document).on('scroll', function() {
    var scrollDistance = this.$(this).scrollTop();
    if (scrollDistance > 100) {
      this.$('.scroll-to-top').fadeIn();
    } else {
      this.$('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  this.$(document).on('click', 'a.scroll-to-top', function(e) {
    var this.$anchor = this.$(this);
    this.$('html, body')
      .stop()
      .animate(
        {
          scrollTop: this.$(this.$anchor.attr('href')).offset().top,
        },
        1000,
        'easeInOutExpo',
      );
    e.preventDefault();
  });
} // End of use strict


// test();
