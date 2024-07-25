import React, { useEffect, useState } from 'react';
import { ReportDescriptions } from '../../../constants/ReportDescriptions/ReportDescription';
import { useSelector } from 'react-redux';

function ReportLayout() {
  const assessment = useSelector(state => state.assessment);
  const [categoryData, setCategoryData] = useState([]);
  const [overallAverage, setOverallAverage] = useState(null); // State for overall average score
  const [totalUniqueCategories, setTotalUniqueCategories] = useState(0); // State for number of unique categories

  useEffect(() => {
    console.log(ReportDescriptions);
    if (assessment) {
      const categories = [...new Set(assessment.questions.map(question => question.category))]; // Extract subcategories
      const data = categories.map(category => {
        const categoryQuestions = assessment.questions.filter(question => question.category === category);
        const totalQuestions = categoryQuestions.length;

        if (totalQuestions > 0) {
          const selectedOptionsSum = categoryQuestions.reduce((accumulator, question) => {
            return accumulator + question.selectedOption;
          }, 0);
          const averageScore = selectedOptionsSum / totalQuestions;

          return {
            category,
            averageScore,
            totalQuestions
          };
        } else {
          return {
            category,
            averageScore: null,
            totalQuestions: 0
          };
        }
      });

      // Calculate overall average score
      let totalScoreSum = 0;
      let totalQuestionsCount = 0;

      data.forEach(category => {
        if (category.averageScore !== null) {
          totalScoreSum += category.averageScore * category.totalQuestions;
          totalQuestionsCount += category.totalQuestions;
        }
      });

      const overallAverageScore = totalScoreSum / totalQuestionsCount;

      setCategoryData(data);
      setTotalUniqueCategories(categories.length);
      setOverallAverage(overallAverageScore);
    }
  }, [assessment]);

  return (
    assessment.isAssessmentTaken &&(
    <div className=' bg-white mx-auto  d-flex col-10 flex-column p-5' >
      <h1 className='mb-4'  >{ReportDescriptions.title}</h1>
      {overallAverage !== null && (
        <h2 className='my-3 fw-bold' >Overall Average Score: {overallAverage.toFixed(2)}/{totalUniqueCategories.toFixed(2)}</h2>
      )}
      <h3 className='mb-1' >{ReportDescriptions.overallScore[Math.max(0, parseInt(Math.round(overallAverage)) - 1)].name}</h3>
      <p>{ReportDescriptions.overallScore[Math.max(0, parseInt(Math.round(overallAverage)) - 1)].description}</p>
      <hr className='mt-3' />
      <div >
        {categoryData.map(category => (
          <div  className='my-4' key={category.category} >
            <h3  className='my-1'>
              {ReportDescriptions.formattedCategoriesNames[category.category]}:{' '}
              {category.averageScore !== null ? (
                <span>
                  {category.averageScore.toFixed(2)}/{category.totalQuestions.toFixed(2)}
                </span>
              ) : (
                <span>No questions found for this category</span>
              )}
            </h3>
            <p>{ReportDescriptions[category.category][parseInt(Math.round(parseFloat(category.averageScore)) - 1)]}</p>

          </div>
        ))}
      </div>
    </div>)
  );
}

export default ReportLayout;
