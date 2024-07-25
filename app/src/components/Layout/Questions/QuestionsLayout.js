import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuestions, updateStatus } from '../../../features/assessment/assessmentSlice';
import './style.scss';

function QuestionsLayout() {
    const assessment = useSelector(state => state.assessment);
    const [selectedOption, setSelectedOption] = useState(assessment.questions[0].selectedOption);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [comment, setComment] = useState(assessment.questions[0].comment);
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOptionClick = (index) => {
        setSelectedOption(index + 1);
        if (showError) {
            setShowError(false); // Hide error if it was shown previously
        }
    };
    useEffect(() => {
        if (currentQuestion > 0 && currentQuestion <= assessment.questions.length) {
            setSelectedOption(assessment.questions[currentQuestion - 1]?.selectedOption || null);
            setComment(assessment.comment || '');
        }
    }, [currentQuestion,assessment.comment,assessment.questions]);
    const handleNextClick = () => {
        if (selectedOption !== null) {
            // Update the selected option for the current question in assessment.questions
            const updatedQuestions = assessment.questions.map((question, index) => {
                if (index === currentQuestion - 1) {
                    return {
                        ...question,
                        selectedOption: selectedOption,
                    };
                }
                return question;
            });

            // Dispatch an action to update assessment.questions in Redux store
            dispatch(updateQuestions(updatedQuestions));

            // Move to the next question or navigate to the report page if all questions are answered
            if (currentQuestion < assessment.questions.length) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedOption(null); // Reset selected option
            } else {
                setCurrentQuestion(null)
                dispatch(updateStatus(true))
                navigate('/report');
            }
        } else {
            // Show error if no option is selected
            setShowError(true);
        }
    };

    const optionItems = [1, 2, 3, 4, 5]; // Assuming these are your option numbers

    return (
        <div className='d-flex justify-center items-center'>
            <div className="d-flex flex-column question-container bg-white mt-5 p-5 col-lg-6 mx-auto">
                <h6 className="question-index text-info">Question {currentQuestion} of {assessment.questions.length}</h6>
                <h3>Please read each statement carefully and indicate how much it applies to your project by selecting a number from 1 to 5.</h3>

                <hr className='shadow-lg' />
                <p className="question-text">{assessment.questions[currentQuestion - 1].question}</p>
                <div className="d-flex justify-content-between">
                    {optionItems.map((option, optionIndex) => (
                        <div
                            key={optionIndex}
                            className={`numeric-scale-option mt-5 mb-2 shadow-sm text-center border rounded p-1 text-sm ${selectedOption === optionIndex + 1 ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(optionIndex)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-between align-item-center">
                    <small className="rating-label text-center"> { assessment.questions[currentQuestion-1]?.type === 'type1'?'strongly disagree':'never' }  </small>
                    <small className="rating-label text-center"> { assessment.questions[currentQuestion-1]?.type === 'type1'? 'disagree':'rarely'}</small>
                    <small className="rating-label text-center"> { assessment.questions[currentQuestion-1]?.type === 'type1'? 'neutral':'sometimes'}</small>
                    <small className="rating-label text-center"> { assessment.questions[currentQuestion-1]?.type === 'type1'?'agree': 'often'}</small>
                    <small className="rating-label text-center "> { assessment.questions[currentQuestion-1]?.type === 'type1'?'strongly agree':'always'}</small>
                </div>
                <hr className='my-4 shadow-sm' />
                {(currentQuestion === assessment.questions.length) &&
                    <div className="comment-container">
                        <p>Additional comment (optional)</p>
                        <textarea className='w-100 p-1' placeholder='Enter text' value={comment} onChange={(e) => setComment(e.target.value)} />
                    </div>}
                {showError && <p className="error-message text-danger">Please select an option.</p>}
                <div className='text-end'>
                    <button type='button' className="next-question-btn p-2 mt-4 w-25 s rounded-1 border-0 text-white" onClick={handleNextClick}>
                        {currentQuestion === assessment.questions.length ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default QuestionsLayout;
