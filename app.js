const express = require('express');
const app = express();

// Define a route that processes the incoming URL
app.get('/:url', async (req, res) => {
    try {
        const videoUrl = decodeURIComponent(req.params.url);
        const thumbnailUrl = `https://x266.mov/images/thumb.jpg`; 
        
        // HTML content with the metadata for Discord embedding
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta property="og:image" content="${thumbnailUrl}">
                <meta property="og:type" content="video.other">
                <meta property="og:video:url" content="${videoUrl}">
                <meta property="og:video:width" content="1920">
                <meta property="og:video:height" content="1080">
            </head>
            <body>
                <h1>Video Embed</h1>
            </body>
            </html>
        `;

        // Set response headers
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(htmlContent);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
