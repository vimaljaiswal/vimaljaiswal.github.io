$(function () {
	//Set image src according to the category present in URL
	var availableCategories = ['lifestyle', 'auto', 'culture', 'electronics', 'finance', 'food', 'health', 'home_improvement', 'kids', 'music_entertainment', 'news', 'science_chemistry', 'sports', 'travel'];

	var urlStr = window.location.search,
		queryParamStr = urlStr.substr(1, urlStr.length - 1),
		queryParamArr = queryParamStr.split(','),
		queryParamObject = {};

	for (var i = 0; i < queryParamArr.length; i++) {
		var qParam = queryParamArr[i].split('=');
		queryParamObject[qParam[0]] = qParam[1];
	}
	var category = queryParamObject['category'];

	//Setting default category to lifestyle
	if (availableCategories.indexOf(category) === -1) {
		category = 'lifestyle';
	}

	$('img').each(function () {
		var imgName = $(this).attr('data-src');
		if (imgName) {
			$(this).attr('src', '../common/images/category/' + category + imgName);
		}
	});

	$('#publisher-wrap a, #publisher-wrap p, #publisher-wrap small, #publisher-wrap h1, #publisher-wrap h2, #publisher-wrap h3, #publisher-wrap h4, #publisher-wrap h5, #publisher-wrap h6').html(function (i, v) {
		if ($(this).parents('.banner-container').length != 0) return v;
		return v.replace(/[0-9A-Za-z]+/g, '<span class="z-word">$&</span>');
	});

	$(document).ready(function () {
		var adDiv,
			defaultDiv,
			leftDiv,
			rightDiv;

		var toggleAdDivWithDefault = function (adElement, defaultElement) {
			//Hide default Div
			if (!($(defaultElement).hasClass('hide'))) {
				$(defaultElement).addClass('hide');
			}

			//Show Ad div
			if ($(adElement).hasClass('hide')) {
				$(adElement).removeClass('hide');
			}
		};
		switch (e9.size) {
		case '160x600':
			//hide default row and show row for 160x600
			adDiv = $('.SHOW_WHEN_160x600_IS_VISIBLE').get(0);
			defaultDiv = $('.HIDE_WHEN_160x600_IS_VISIBLE').get(0);
			$('#HIDE_WHEN_160x600_IS_VISIBLE').addClass('hide');
			toggleAdDivWithDefault(adDiv, defaultDiv);
			break;
		case '300x250':
			//hide default row and show row for 300x250
			adDiv = $('.SHOW_WHEN_300x250_IS_VISIBLE').get(0);
			defaultDiv = $('.HIDE_WHEN_300x250_IS_VISIBLE').get(0);

			toggleAdDivWithDefault(adDiv, defaultDiv);
			break;
		case '300x600':
			//hide default row and show row for 300x600
			adDiv = $('.SHOW_WHEN_300x600_IS_VISIBLE').get(0);
			defaultDiv = $('.HIDE_WHEN_300x600_IS_VISIBLE').get(0);
			$("img[data-src='/transport.jpg']").addClass('hide');
			$('.EXPAND_WHEN_300x600_IS_VISIBLE>p').removeClass('hide');
			leftDiv = $('.EXPAND_WHEN_300x600_IS_VISIBLE').get(0);
			leftDiv.className = 'col-sm-8';
			toggleAdDivWithDefault(adDiv, defaultDiv);
			break;
		case '1x10':
			//hide default row and show row for instream
			$("img[data-src='/transport.jpg']").addClass('hide');
			$('.EXPAND_WHEN_INSTREAM_IS_VISIBLE>p').removeClass('hide');
			rightDiv = $('.SHRINK_WHEN_INSTREAM_IS_VISIBLE').get(0);
			rightDiv.className = 'col-sm-4';
			leftDiv = $('.EXPAND_WHEN_INSTREAM_IS_VISIBLE').get(0);
			leftDiv.className = 'col-sm-8';
			$('#video').addClass('text-center');
			break;
		}
	});
});