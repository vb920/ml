let totalPagesToDownload = prompt("Enter the total number of pages you want to download:");

// Convert the input into a usable number
totalPagesToDownload = parseInt(totalPagesToDownload, 10);

if (isNaN(totalPagesToDownload) || totalPagesToDownload <= 0) {
    console.error("Invalid page count entered. Please run the script again and enter a valid number.");
} else {
    console.log(`Script started. It will stop automatically after downloading ${totalPagesToDownload} pages.`);
    
    // Set up a counter to track progress
    let pagesDownloaded = 0;

    function scrapeCanvasToImage() {
        // Stop condition: Check if we've hit our target count
        if (pagesDownloaded >= totalPagesToDownload) {
            console.log(`✅ Finished! Successfully downloaded ${totalPagesToDownload} pages. Stopping script.`);
            clearInterval(scraperInterval);
            return;
        }

        // 1. Target the canvas and page number
        const canvas = document.querySelector('#pdfCanvas');
        const pageNumInput = document.querySelector('#page_num');
        const currentPage = pageNumInput ? pageNumInput.value : (pagesDownloaded + 1);

        if (canvas) {
            // Extract and download the image
            const imgDataUrl = canvas.toDataURL("image/png");
            
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = imgDataUrl;
            a.download = `Document_Page_${currentPage}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a); 
            
            pagesDownloaded++; 
            console.log(`Page ${currentPage} downloaded. (${pagesDownloaded} of ${totalPagesToDownload})`);
        } else {
            console.warn("No canvas found on this page.");
        }

        // 2. Click Next Button (only if we still have pages left to download)
        if (pagesDownloaded < totalPagesToDownload) {
            const nextButton = document.querySelector('#next');
            
            if (nextButton && !nextButton.disabled) {
                nextButton.click();
                console.log("Moving to the next page...");
            } else {
                console.warn("Next button not found or disabled. Stopped early.");
                clearInterval(scraperInterval); 
            }
        }
    }

    // Set up the loop (adjust 3000ms if your internet is slow and pages load blank)
    const scraperInterval = setInterval(scrapeCanvasToImage, 750);
}
