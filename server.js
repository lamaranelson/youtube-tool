const express = require('express');
const bodyParser = require('body-parser');
const { YoutubeLoader } = require('langchain/document_loaders/web/youtube');
const OpenAI = require('openai');
const dotenv = require('dotenv');
const http = require('http');
const socketIo = require('socket.io');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3000;
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(bodyParser.json());
app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('User connected ');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.post('/get-transcript', async (req, res) => {
  const url = req.body.url;

  try {
    const loader = YoutubeLoader.createFromUrl(url, {
      language: "en",
      addVideoInfo: true,
    });

    const docs = await loader.load();
    const transcript = docs.map(doc => doc.pageContent).join("\n-----\n");
    res.json({ success: true, transcripts: transcript });

    const response = await openai.chat.completions.create({
      model: "gpt-4-1106-preview",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that helps improve the clarity and format of 'transcript' but keep it as complete as the video only summarize if you will not be able to fit the full video into one response. Simply correct the mistakes and make it a coherent transcription for someone that would like to textually analyze the video. Just serve the improved transcript to the user and avoid precedings like: 'e.g. certainly, here is the improved transcript of the video:' "
        },
        {
          role: "user",
          content: transcript
        }
      ],
      temperature: 0.84,
      max_tokens: 4095,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const aiResponse = response.choices[0].message.content;

    if (aiResponse) {
      io.emit('aiResponse', { aiResponse });
    }
  } catch (error) {
    console.error('Error:', error);
    res.json({ success: false, message: error.message });
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});