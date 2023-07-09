/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require('express')
// const dotenv = require('dotenv')
const cors = require('cors')
// const EasyGpt = require("easygpt")

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// const gpt = new EasyGpt();

dotenv.config({ path: './secret.env' });

// gpt.setApiKey(process.env.OPENAI_API_KEY);

const app = express()
app.use(cors())
app.use(express.json())

app.post('/', async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content: "Hello world"}],
      });
      console.log(completion.data.choices[0].message);

    // Add a prompt you would like to say to ChatGPT.
    // gpt
    //   .addMessage(`${message}`)
    //   // Give some instructions to the AI
    //  // .addRule("Don't give answers. Also, do not specify marks. You are required togive the number of questions as given by the user. Don't give extra number of questions. If the user asks formultiple chapters, the total number of questions must remain constant.");

    // // Get the response from ChatGPT.
    // const response = await gpt.ask();

    // console.log(response.content);

    // res.status(200).json({
    //   message: response.content
    // });

  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})
// exports.app = functions.https.onRequest(app);

exports.app = onRequest(app);