# Discord Chatbot with CodeGPTPlus

This is a simple chatbot that uses the CodeGPTPlus API to generate responses to user messages in a Discord server.

## Project Setup

To use this chatbot, you will need to have a Discord bot set up and a CodeGPTPlus API key.

1. Create a Discord bot and get the bot token.
2. Invite the bot to your server.
3. Get your Discord Token.
4. Get your Discord Channel ID.
5. Create an account in [CodeGPT Plus](https://plus.codegpt.co)
6. Get your CodeGPT Plus API key.
7. Get your CodeGPT Plus Agent ID.
8. Clone this repository and install the dependencies:
    ```
    git clone https://github.com/davila7/codegpt-discord.git
    cd codegpt-discord
    npm install
    ```
9. Create a .env file in the root directory of the project and add the following variables:
    ```
    DISCORD_TOKEN=<your_discord_bot_token>
    DISCORD_CHANNEL_ID=<your_discord_channel_id>
    CODEGPT_API_KEY=<your_codegpt_api_key>
    CODEGPT_AGENT_ID=<your_codegpt_agent_id>
    ```
## Usage
To start the chatbot, run the following command:
```
node index.js
```

The chatbot will listen for messages in the Discord channel specified in the DISCORD_CHANNEL_ID variable. When a user sends a message, the chatbot will generate a response using the CodeGPTPlus API and send it back to the user in the same channel.