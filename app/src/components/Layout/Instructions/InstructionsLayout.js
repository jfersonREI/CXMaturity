import { Link } from "react-router-dom";

function InstructionsLayout() {
    return (
        <div className='d-flex justify-center items-center'>
            <div className="d-flex flex-column question-container bg-white mt-5 p-5 col-lg-6 mx-auto">
                <h3 style={{ marginBottom: '20px' }}>Instructions:</h3> 
                <div>
                    <p>Thank you for participating in our CX Maturity Review. Your insights are crucial in helping us understand and improve the implementation of customer experience (CX) principles across our projects. Please read each statement carefully and indicate your level of agreement by selecting the number that best represents your opinion.</p>
                    <p>Please read each statement carefully and indicate how much it applies to your project by selecting a number from 1 to 5.</p>
                </div>
                <Link to="/questions">
                    <div className='text-end'>
                        <button type='button' className="next-question-btn p-2 mt-4 w-25 s rounded-1 border-0 text-white">
                            Begin
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default InstructionsLayout;