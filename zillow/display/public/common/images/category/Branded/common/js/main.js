$(function() {
  $('#publisher-wrap a, #publisher-wrap p, #publisher-wrap small, #publisher-wrap h1, #publisher-wrap h2, #publisher-wrap h3, #publisher-wrap h4, #publisher-wrap h5, #publisher-wrap h6').html(function(i, v) {
  	if ($(this).parents('.banner-container').length != 0) return v;
    return v.replace(/[0-9A-Za-z]+/g, '<span class="z-word">$&</span>');
  });
});


