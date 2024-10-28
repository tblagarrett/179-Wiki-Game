// This stores all click 
//events that need to be tracked. 
//When they are added, it adds them to local storage
document.addEventListener("DOMContentLoaded", () => {
    modPage();
});
function modPage(){
    const wikiName = "My Awesome Wiki";
    document.title = wikiName;
    
    

    // Select the <ul> element containing the suggested pages
    const suggestedPages = document.getElementById('suggestedPages');
    if (!suggestedPages){
        return;
    }
    function addLastPage(){
        const extraPage = document.createElement('li'); // Create a new <li> element
        const link = document.createElement('a'); // Create a new <a> element
        
        link.href = "pages/killer/info"; // Set the href attribute
        link.textContent = "Killer"; // Set the text of the link
        
        extraPage.appendChild(link); // Append the <a> to the <li>
        suggestedPages.appendChild(extraPage); // Append the <li> to the <ul>
    }

// Change this to change the requirements to access the murderer info page
    if (localStorage.getItem('v1') == 'complete'&& localStorage.getItem('v2') == 'complete' && localStorage.getItem('v3') == 'complete'){
        console.log("gee")
        addLastPage();
    }
    

    function clearLocalStorage() {
        localStorage.clear(); // Clear all items from local storage
        window.location.href = '/index.html';
    }
    
    // Function to create a clear local storage button
    function createClearStorageButton(parentElement) {
        const button = document.createElement('button'); // Create a new button element
        button.textContent = 'Clear Local Storage (undoes progress)'; // Set button text
        button.addEventListener('click', clearLocalStorage); // Attach click event listener
        parentElement.appendChild(button); // Append button to the specified parent element
    }
    
   
    // Change this to change the requirements to clear the page chache (stores how many corrupted pages the player has visited)
    if (localStorage.getItem('v1') == 'complete'|| localStorage.getItem('v2') == 'complete' || localStorage.getItem('v3') == 'complete'){
        const parentElement = document.querySelector('main'); // Select the parent element where buttons will be added
        createClearStorageButton(parentElement)
    }

}

