# YouTube Transcript Tool

## Description

This tool is designed to fetch and improve the transcript of a YouTube video using OpenAI's GPT-4. It provides a web interface where users can enter a YouTube link, retrieve the raw transcript, and after being processed by OpenAI it displays an enhanced version of the transcript as processed by `gpt-4-1106-preview`.

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

4. Start the application:

   ```
   npm start
   ```


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
|   |-- extra_scripts/
|       |-- youtube_test.js
|-- package.json
|-- .gitignore
|-- README.md
|-- LICENSE
```

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change or add. You can always fork the repo and raise a PR.


<img width="1232" alt="Screenshot 2023-11-28 at 2 58 56 PM" src="https://github.com/lamaranelson/youtube-tool/assets/65568691/a5a3a33d-8265-4aa8-9a7f-88c0ab25d8ca">

<img width="1680" alt="Screenshot 2023-11-28 at 3 22 28 PM" src="https://github.com/lamaranelson/youtube-tool/assets/65568691/2904fca8-9d5d-45f8-9f72-6837c3fb00e8">

<img width="1680" alt="Screenshot 2023-11-28 at 3 22 41 PM" src="https://github.com/lamaranelson/youtube-tool/assets/65568691/4eed6505-df1f-48ae-ae62-2924f36bfc50">




