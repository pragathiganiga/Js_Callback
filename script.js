// Wait until the entire HTML document is loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    
    // Select the button with ID "downloadBtn" from the HTML document
    const downloadBtn = document.getElementById("downloadBtn");

    // Define the path of the image file to be downloaded
    const imageUrl = "image/pathu.jpg"; 

    // Add a "click" event listener to the download button
    downloadBtn.addEventListener("click", function () {
        
        // Step 1: Log message when the download process starts
        console.log("Downloading file...");

        // Step 2: Simulate a delay before completing the download
        setTimeout(function () {
            
            // Step 3: Log message after the delay (download completed)
            console.log("Download complete!");

            // Step 4: Create a new <a> (anchor) element dynamically
            const link = document.createElement("a");

            // Set the "href" attribute to the image URL
            link.href = imageUrl;

            // Set the "download" attribute with the file name for saving
            link.download = "Pragathi.jpg"; 

            // Append the <a> element to the document body (temporarily)
            document.body.appendChild(link);

            // Simulate a click on the link, triggering the download
            link.click();

            // Remove the <a> element from the document after the click
            document.body.removeChild(link);

        }, 3000); // 3-second delay to simulate the downloading process
    });
});










// A callback function is a function that is passed to another function and runs after an event happens.

// Simple Explanation of the Code
// When the webpage loads, the script waits for everything to be ready.
// It finds the Download button and listens for a click.
// When the button is clicked, it logs "Downloading file..." to show that the process has started.
// Then, it waits for 3 seconds (using setTimeout) to simulate a real download time.
// After 3 seconds, it logs "Download complete!" to indicate the process is finished.
// Now, the script creates a hidden download link and sets it to the image file.
// It then simulates a click on that link to start the download automatically.
// After clicking, it removes the link from the page to keep things clean.