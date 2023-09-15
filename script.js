const accordions = document.querySelectorAll( '.accordion' );
  
accordions.forEach( ( acc, i ) => {

    let faqQuestion = acc.querySelector( '.faq-question' );

    faqQuestion.addEventListener( "click", () => {

        let faqTitle = faqQuestion.querySelector( '.faq-title' ); 
        let iconArrow = faqQuestion.querySelector( 'img' );
        let faqDesc = acc.querySelector( '.faq-desc' );

        if ( acc.hasAttribute( 'target' ) ){

            acc.removeAttribute( 'target' );
            faqTitle.classList.remove( 'selected' );
            iconArrow.classList.remove( 'open' );
            faqDesc.classList.remove( 'show' );

            return;
        } else {

            acc.setAttribute( 'target', true );
            faqTitle.classList.add( 'selected' );
            iconArrow.classList.add( 'open' );
            faqDesc.classList.add( 'show' );
        };

        removeOpenedContent( i ); 
    } );

} );
  
function removeOpenedContent( index ) {

    accordions.forEach( ( acc2, i2 ) => {

        let faqQuestion = acc2.querySelector( '.faq-question' );

        if ( index != i2 ) {

            let faqTitle = faqQuestion.querySelector( '.faq-title' ); 
            let iconArrow = faqQuestion.querySelector( 'img' );
            let faqDesc = acc2.querySelector( '.faq-desc' );

            acc2.removeAttribute( 'target' );
            faqTitle.classList.remove( 'selected' );
            iconArrow.classList.remove( 'open' );
            faqDesc.classList.remove( 'show' );             
        };
    } );
};