document.addEventListener('DOMContentLoaded', function() {
  const socket = io();

  document.getElementById('getTranscriptBtn').addEventListener('click', function() {
    const url = document.getElementById('youtubeLink').value;
    const transcriptOutput = document.getElementById('transcriptOutput');
    const aiResponseOutput = document.getElementById('aiResponseOutput');
    
    transcriptOutput.innerHTML = '';
    aiResponseOutput.textContent = '';

    const loadingText = document.createTextNode('Loading transcript...');
    transcriptOutput.appendChild(loadingText);
    
    fetch('/get-transcript', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        transcriptOutput.innerHTML = '';

        const strongElement = document.createElement('strong');
        strongElement.textContent = "Raw transcript:\n";

        const transcriptText = document.createTextNode(data.transcripts);

        transcriptOutput.appendChild(strongElement); 
        transcriptOutput.appendChild(transcriptText);
      } else {
        transcriptOutput.textContent = 'Error: ' + data.message;
      }
    })
    .catch(error => {
      transcriptOutput.textContent = 'Error: ' + error;
    });

    socket.on('aiResponse', (data) => {
      transcriptOutput.innerHTML = '';

      const strongElement = document.createElement('strong');
      strongElement.textContent = "OpenAI improvement:\n";

      const responseText = document.createTextNode(data.aiResponse);

      aiResponseOutput.innerHTML = ''; 
      aiResponseOutput.appendChild(strongElement);
      aiResponseOutput.appendChild(responseText); 
    });
  });
});