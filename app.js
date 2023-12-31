const express = require('express');
const app = express();

// Define a route that processes the incoming URL
app.get('/:url*', async (req, res) => {
    try {
        const videoUrl = decodeURIComponent(req.params.url + req.params[0]);
        const thumbnailUrl = 'https://x266.mov/images/thumb.jpg';

        // HTML content with the metadata for Discord embedding
        const htmlContent = `
            <!DOCTYPE html>
            <html data-lt-installed=true class="gkziwdpsu idc0_350">
            <meta charset=utf-8>
            <meta name=viewport content="width=device-width, initial-scale=1">
            <title>discord embed endpoint</title>
            <meta name=twitter:card content=player>
            <meta name=twitter:site content=@SimuIping>
            <meta name=twitter:creator content=@SimuIping>
            <meta name=twitter:image content=${thumbnailUrl}>
            <meta name=twitter:player:stream content=${videoUrl}>
            <meta name=twitter:player content=${videoUrl}>
            <meta property=og:image content=${thumbnailUrl}>
            <meta property=og:type content=video.other>
            <meta property=og:video:url content=${videoUrl}>
            <meta property=og:video:width content=1920>
            <meta property=og:video:height content=1080>
            <body class=vsc-initialized>
            <h1>You have reached the embedding page for uncannily large and high definition Discord videos</h1>
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
