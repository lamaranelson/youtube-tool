# YouTube Transcript Tool

## Description

This tool is designed to fetch and improve the transcript of a YouTube video using OpenAI's GPT-4. It provides a web interface where users can enter a YouTube link, retrieve the raw transcript, and after being processed by OpenAI it displays an enhanced version of the transcript as processed by `gpt-4-preview-1106`.

## Features

- Fetch YouTube video transcripts.
- Process and improve transcripts using OpenAI's GPT-4 model.
- Real-time display of AI-enhanced transcripts through a web interface.

## Installation

To set up the project, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/lamaranelson/youtube-tool.git
   ```

2. Navigate to the project directory:

   ```
   cd youtube_tool
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Open a web browser and navigate to `http://localhost:3000` to access the tool.

## Configuration

Create a `.env` file in the root directory and add the following line:

```
OPENAI_API_KEY=your_openai_api_key
```

Replace `your_openai_api_key` with your actual OpenAI API key.

## Structure

```
youtube_tool/
|-- src/
|   |-- app.js
|   |-- public/
|   |   |-- index.html
|   |   |-- script.js
|   |   |-- styles.css
|   |-- scripts/
|       |-- youtube_test.js
|-- package.json
|-- .gitignore
|-- README.md
|-- LICENSE
```

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change or add. You can always fork the repo and raise a PR on a separate branch.

## License

This project is licensed under the ISC License - see the `LICENSE` file for details.

## Author

lamaranelson

## Acknowledgments

- OpenAI for the LLM.
- YouTube for the video content.
- Langchain for the YouTube transcript wrapper.
