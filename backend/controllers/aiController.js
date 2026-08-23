const {GoogleGenAI} = require('@google/genai')
const { conceptExplainPrompt } = require('../utils/prompts.js')

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

//@desc     Generate interview questions and answers using Gemini
//@route    POST /api/ai/generate-questions
//@access   Private
const generateInterviewQuestions = async (req,res) => {
    try{
        
    }catch (error) {
        res.status(500).json({
            message: "Failed to generate questions",
            error: error.message
        })
    }
}

//@desc     Generate expalins a interveiw question
//@route    POST /api/ai/generate-explanation
//@access   Private
const generateConceptExplanation = async (req,res) => {

}

module.exports = { generateInterviewQuestions, generateConceptExplanation}