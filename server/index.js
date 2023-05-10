import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import EasyGpt from "easygpt"

const gpt = new EasyGpt();

dotenv.config({ path: './secret.env' });

gpt.setApiKey(process.env.OPENAI_API_KEY);

const app = express()
app.use(cors())
app.use(express.json())

app.post('/', async (req, res) => {
  try {
    const { message } = req.body;

    // Add a prompt you would like to say to ChatGPT.
    gpt
      .addMessage(`${message}`)
      // Give some instructions to the AI
     // .addRule("Don't give answers. Also, do not specify marks. You are required togive the number of questions as given by the user. Don't give extra number of questions. If the user asks formultiple chapters, the total number of questions must remain constant.");

    // Get the response from ChatGPT.
    const response = await gpt.ask();

    console.log(response.content);

    // const response = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: `${message}`,
    //   temperature: 0.9, // Higher values means the model will take more risks.
    //   max_tokens: 4000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
    //   top_p: 1, // alternative to sampling with temperature, called nucleus sampling
    //   frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
    //   presence_penalty: 0 // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    // });

    res.status(200).json({
      message: response.content
    });

  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})

const PORT = process.env.PORT || 8000;

if ( process.env.NODE_ENV == "production"){
    app.use(express.static("../client/build"));
    import path from 'path;
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "..", 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})
