<script>

;( function() { 

    document.addEventListener( 'DOMContentLoaded', unfold_content );
	
    function unfold_content() {
			
			let the_unfolds = gsap.utils.toArray( '.yair_gsap-unfold' ); 
			
			the_unfolds.forEach( ( yair_gsap, i ) => { 
				
				yair_gsap.state = "opened";
				
				let the_content = yair_gsap.querySelector( '.yair_gsap-content' );
				let the_blanket = yair_gsap.querySelector( '.yair_gsap-blanket' );
				
				let content_rsults = yair_gsap.querySelector( '.content_rsults' );
				
				let the_content_child = the_content.querySelector( '.yair_gsap-content > div' );
				let the_blanket_object = '';
				let original_text = '';
				let closed_height = 0;
								
				
				gsap.set( the_content, { height: 221.5 } );
				gsap.set( content_rsults, { paddingTop: 241.5 } );
				
				the_blanket.addEventListener( 'click', ( e ) => { 
					
					e.preventDefault();
					
					if( "closed" === yair_gsap.state ) {
						gsap.to( the_content, { 
							height: 221.5, 
							duration: 0.3, 
							ease: 'power2.inOut', 
							onComplete: () => {
								yair_gsap.state = "opened";
							} 
						} );
						
						gsap.to( content_rsults, { 
							paddingTop: 241.5,
							duration: 0.3, 
							ease: 'power2.inOut',
							
						} );
						
					} else {
						gsap.to( the_content, { 
							height: closed_height, 
							duration: 0.3, 
							ease: 'power2.inOut', 
							onComplete: () => {
								yair_gsap.state = "closed";
							} 
						} );						
						
						gsap.to( content_rsults, { 
							paddingTop: 25,
							duration: 0.3, 
							ease: 'power2.inOut'							
						} );						
						
					}

				} );
				
			} );
			
    }
  
} )();

</script>
