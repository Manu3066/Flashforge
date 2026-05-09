const http = require('http');
const fs = require('fs');
const path = require('path');

const API_KEY = 'YOUR_GEMINI_KEY'; // ← paste your Gemini key here

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
    const file = fs.readFileSync(path.join(__dirname, 'index.html'));
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(file);
    return;
  }

  if (req.method === 'POST' && req.url === '/api/generate') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        // Extract the prompt text from the request
        const parsed = JSON.parse(body);
        const prompt = parsed.messages[0].content;

        // Call Gemini API
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: { temperature: 0.7, maxOutputTokens: 4000 }
            })
          }
        );

        const geminiData = await response.json();

        // Check for errors from Gemini
        if (geminiData.error) {
          throw new Error(geminiData.error.message);
        }

        // Extract text from Gemini response
        const text = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '[]';

        // Send back in Anthropic-style format so index.html works without changes
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ content: [{ text }] }));

      } catch (e) {
        console.error('Error:', e.message);
        res.writeHead(500);
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(3000, () => {
  console.log('✅ FlashForge running at http://localhost:3000');
  console.log('📌 Open your browser and go to: http://localhost:3000');
});