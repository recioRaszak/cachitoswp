jQuery(function($){

    $('.lettergrid').each(function (index) {
      var characters = $(this).text().split("");
        $this = $(this);
        $this.empty();
        $.each(characters, function (i, el) {
          $this.append('<div class="square"><span class="letter letter-' + i + '">' + el + '</span></div>');
        });
    });

    const taglines = [
        'Compartiendo experiencia desde 1930',
        'Aprendamos juntos cosas raras',
        'Learn to be spectacular',
        'From zeroes to heroes, just for one day',
        'Se prohibe Elementor bajo sanción',
        'Le ponemos !important hasta a los scripts',
        'Por otro plugin mas no pasa nada',
        'Me acuerdo yo de cuando sacaron el border-radius',
        'Soy tan veterano que sé lo que fué Netscape',
        'Si Docker ni te suena, necesitas puesta al día urgente',
        'Te enseñaré a poner !important en todo'
                    ];

    const randomNumber = Math.floor(Math.random()*taglines.length);

    $('.tagline').text(taglines[randomNumber]);

    function blurPostImage () {
		if ( $('.single-header .wp-post-image').length ) {
			const postPicUrl = $('.single-header img.wp-post-image').attr('data-src');
			$('.single-header').append('<div class="single-header-bg" style="background-image:url('+postPicUrl+')"></div>');
		}
	}
    blurPostImage();
	
	
	/*
	baguetteBox.run('a[data-bbox]');
	
	$('.chained-quiz-choice').bind('click',function(){
		setTimeout(baguetteBox.run('a[data-bbox]'),1000);
		setTimeout(baguetteBox.run('a[data-bbox]'),2000);
		setTimeout(baguetteBox.run('a[data-bbox]'),3000);
	});
  */



  // casos estudio
  if (CURRENT_LANG_URL=="" || CURRENT_LANG_URL=="undefined") CURRENT_LANG_URL = "https://cachitoswp.com/";

  if ( ('.logogrid').length && $(window).width()>768 ) {
    let modal = $('#story');
    $('.logogrid a[data-toggle]').bind('click',function(e){
      let thiss = $(this);
      $(thiss).css({'filter':'brightness(0.5)','transition':'200ms'});
      e.preventDefault();
      let story = $(this).attr('data-toggle');
      console.log(story);
      modal.hide();
      $('#story-content').empty();
      console.log ("loading "+CURRENT_LANG_URL+'/casos_estudio/'+story+'/ #case');
      $('#story-content').load(CURRENT_LANG_URL+'/casos_estudio/'+story+'/ #case', function() {
        modal.show();
        console.log('modal shown');
        let slider = tns({
          container: '.pictures',
          items: 1,
          mode: 'gallery',
          slideBy: 'page',
          autoplay: false,
          controls: false,
          arrowKeys: true,
          speed: 800,
          //autoWidth: true,
          navPosition: 'bottom'
        });
        $(thiss).css({'filter':'brightness(1)','transition':'200ms'});
      });
    });
    $('.uk-modal-close').bind('click',function(e){
      e.preventDefault();
      modal.hide();
    });
  }


});

