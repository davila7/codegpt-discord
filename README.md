# Discord Chatbot with CodeGPT Plus

This is a simple chatbot that uses the CodeGPTPlus API to generate responses to user messages in a Discord server.
<p align="center">
    <img width="654" alt="Discord CodeGPT" src="https://github.com/davila7/codegpt-discord/assets/6216945/d6e683e5-53ba-4c86-8e40-bd4165ac4dee">
</p>

## Project Setup

To use this chatbot, you will need to have a Discord bot set up and a CodeGPTPlus API key.

1. Create a Discord bot and get the bot token.
    - Go to the Discord Developer Portal.
    - Click on "New Application" and give it a name.
    - Go to the "Bot" tab and click "Add Bot".
    - Under the "Token" section, click "Copy" to get your bot token.
2. Invite the bot to your server.
    - Go to the "OAuth2" tab in your application.
    - Under "Scopes", select "bot".
    - Under "Bot Permissions", select the appropriate permissions.
    - Copy the generated URL and open it in your web browser to invite the bot to your server.
3. Get your Discord Token and Channel ID.
    - Open Discord and go to your server.
    - Right-click on the channel you want the bot to operate in and click "Copy ID" to get your Channel ID.
    - To get your Discord Token, refer to the steps above.
4. Create an account in [CodeGPT Plus](https://plus.codegpt.co)
    - Go to the CodeGPT Plus website https://plus.codegpt.co
    - Sign up for an account and navigate to your dashboard.
    - Copy your API key and Agent ID.
5. Clone this repository and install the dependencies:
    ```
    git clone https://github.com/davila7/codegpt-discord.git
    cd codegpt-discord
    npm install
    ```
6.  Create a .env file in the root directory of the project and add the following variables:
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
