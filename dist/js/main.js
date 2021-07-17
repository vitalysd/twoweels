// ===== Swiper ===== //
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// FORM
jQuery("#main-form button").click(function () {
  var form = jQuery(this).closest("form");


  var actUrl = form.attr("action");

  jQuery.ajax({
      url: actUrl,
      type: "post",
      dataType: "html",
      data: form.serialize(),
      success: function (data) {
          form.html(data);
      },
      error: function () {},
  });

});

// ======================= Popup-Descr ======================= //
let popupViews = document.querySelectorAll('.popup-view');
let popupBtns = document.querySelectorAll('.desc-btn');
let closeBtns = document.querySelectorAll('.popup-close');

// ===== Popup Open ===== //
let popup = function(popupClick){
  popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i ) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});

// ===== Popup close ==== //
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove('active');
    });
  });
});



// ======================= Form ======================= //
let formViews = document.querySelectorAll('.main-form');
let formBtns = document.querySelectorAll('.open-form-btn');
let closeFormBtns = document.querySelectorAll('.main-form--close');

// ===== Popup Open ===== //
let form = function(formClick){
  formViews[formClick].classList.add('active');
}

formBtns.forEach((formBtn, i ) => {
  formBtn.addEventListener("click", () => {
    form(i);
  });
});

// ===== Popup close ==== //
closeFormBtns.forEach((closeFormBtn) => {
  closeFormBtn.addEventListener("click", () => {
    formViews.forEach((formView) => {
      formView.classList.remove('active');
    });
  });
});



// ======================= Slider ======================= //
let sliderViews = document.querySelectorAll('.slider');
let sliderBtns = document.querySelectorAll('.moto-img');
let closeSliderBtns = document.querySelectorAll('.slider-close');

// ===== Popup Open ===== //
let slider = function(sliderClick){
  sliderViews[sliderClick].classList.add('active');
}

sliderBtns.forEach((sliderBtn, i ) => {
  sliderBtn.addEventListener("click", () => {
    slider(i);
  });
});

// ===== Popup close ==== //
closeSliderBtns.forEach((closeSliderBtn) => {
  closeSliderBtn.addEventListener("click", () => {
    sliderViews.forEach((sliderView) => {
      sliderView.classList.remove('active');
    });
  });
});

