function menuClick(clickedElement) {                                
    // clear the old active element
    const currentlyActiveElement = document.querySelector('.navbar > .active');
    currentlyActiveElement.className = '';

    // assign this element as the active element
    clickedElement.className = 'active';    
    
    // Read the data-contentId value from the clicked element
    const dataContentIdValue = clickedElement.getAttribute('data-contentId');                

    // clear the active class from the currently active content
    const currentlyActiveContent = document.querySelector('.navContentArea > .active');
    currentlyActiveContent.className = '';

    // find the target element based on the data-contentId value
    const targetContent = document.querySelector('.navContentArea > div#' + dataContentIdValue);
    targetContent.className = 'active';
}