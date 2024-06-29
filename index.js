document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('pageTitle').innerHTML = 'Bringing innovation to your screen';
        document.getElementById('pageTitle').style.opacity = 1; 

        setTimeout(function() {
            document.getElementById('pageTitle').innerHTML = 'Explore My Work';

            setTimeout(function() {

                const helloButton = document.getElementById('hello');
                helloButton.classList.toggle('invisible');

                
            }, 2000); 

        }, 2000); 

    }, 1000); 
});


function navigateToPage() {
    // Navigate to another page (e.g., content.html)
    window.location.href = 'content.html';
}



