document.addEventListener("DOMContentLoaded", () => {
    modPage();
});

function modPage(){
    const wikiName = "The House Killer Rampage";
    document.title = wikiName;

    // Select the <ul> element containing the suggested pages
    const suggestedPages = document.getElementById('suggestedPages');
    if (!suggestedPages) {
        return;
    }

    // Function to add an extra page if all victims are complete
    function addLastPage(){
        const extraPage = document.createElement('li'); // Create a new <li> element
        const link = document.createElement('a'); // Create a new <a> element
        
        link.href = "pages/victim4/info.html"; // Set the href attribute with .html extension
        link.textContent = "Person Doe"; // Set the text of the link
        
        extraPage.appendChild(link); // Append the <a> to the <li>
        suggestedPages.appendChild(extraPage); // Append the <li> to the <ul>
    }

    // Check local storage to add extra page if all victims are complete
    if (localStorage.getItem('v1') === 'complete' &&
        localStorage.getItem('v2') === 'complete' &&
        localStorage.getItem('v3') === 'complete') {
        addLastPage(); // Add the extra page only if all conditions are met
    }

    // Function to modify specific links based on respective completion status
    function modifyLinks() {
        const links = document.querySelectorAll("#suggestedPages a");

        links.forEach(link => {
            const href = link.getAttribute("href");
            
            // Check if link corresponds to victim 1 and update if v1 is complete
            if (href.includes("victim1") && localStorage.getItem('v1') === 'complete') {
                link.href = href.replace("info.html", "corrupted.html");
            }
            // Check if link corresponds to victim 2 and update if v2 is complete
            else if (href.includes("victim2") && localStorage.getItem('v2') === 'complete') {
                link.href = href.replace("info.html", "corrupted.html");
            }
            // Check if link corresponds to victim 3 and update if v3 is complete
            else if (href.includes("victim3") && localStorage.getItem('v3') === 'complete') {
                link.href = href.replace("info.html", "corrupted.html");
            }
        });
    }

    // Call modifyLinks to change individual links based on completion status
    modifyLinks();

    // Clear local storage and return to home page
    function clearLocalStorage() {
        localStorage.clear(); // Clear all items from local storage
        window.location.href = './index.html';
    }

    // Function to create a clear local storage button
    function createClearStorageButton(parentElement) {
        const button = document.createElement('button'); // Create a new button element
        button.textContent = 'Clear Local Storage (undoes progress)'; // Set button text
        button.addEventListener('click', clearLocalStorage); // Attach click event listener
        parentElement.appendChild(button); // Append button to the specified parent element
    }

    // Conditionally add the clear storage button if any progress is present
    if (localStorage.getItem('v1') === 'complete' ||
        localStorage.getItem('v2') === 'complete' ||
        localStorage.getItem('v3') === 'complete') {
        
        const parentElement = document.querySelector('main'); // Select the parent element where the button will be added
        if (parentElement) {
            createClearStorageButton(parentElement);
        }
    }
}
