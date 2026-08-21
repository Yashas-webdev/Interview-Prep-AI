const Session = require("../models/Session.js");
const Question = require("../models/Question.js");

// Create a new session and questions
//@desc    Create a new session and liked questions
//@route   POST /api/sessions/create
//@access  Private
exports.createSession = async (req, res) => {
    try {
        const {
            role,
            experience,
            topicsToFocus,
            description,
            questions
        } = req.body;

        const userId = req.user._id;

        // Create session
        const session = await Session.create({
            user: userId,
            role,
            experience,
            topicsToFocus,
            description,
        });

        // Create questions
        const questionDocs = await Promise.all(
            questions.map(async (q) => {
                const question = await Question.create({
                    session: session._id,
                    question: q.question,
                    answer: q.answer,
                });

                return question._id;
            })
        );

        // Add question IDs to session
        session.questions = questionDocs;

        // Save session
        await session.save();

        res.status(201).json({
            success: true,
            session
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
};


// Get all sessions for logged-in user
//@desc    Get all sessions for the logged-in user
//@route   POST /api/sessions/my-sessions
//@access  Private
exports.getMySessions = async (req, res) => {
    try{
        const sessions = await Session.find({
            user: req.user._id
        })
          .sort({createAt: -1})
          .populate("questions");
        res.status(200).json(sessions);
    }catch (error){
        res.status(500).json({
            success:false,
            message:"Server Error",
            error: error.message
        })
    }
};


// Get session by ID
//@desc    Get a session by ID with populated questions
//@route   POST /api/sessions/my-sessions
//@access  Private
exports.getSessionById = async (req, res) => {

};


// Delete session
//@desc    Delete a session and its questions
//@route   DELETE /api/sessions/:id
//@access  Private
exports.deleteSession = async (req, res) => {

};


