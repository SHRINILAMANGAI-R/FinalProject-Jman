import React from 'react';

const topics = [
  { name: 'UI/UX', quizLink: 'https://thedesignquiz.com/' },
  { name: 'Node', quizLink: 'https://www.tutorialspoint.com/nodejs/nodejs_online_quiz.htm' },
  { name: 'React', quizLink: 'https://reactjsquiz.com/quizzes/basic' },
  { name: 'Testing', quizLink: 'https://www.vskills.in/practice/software-testing-professional-mock-test' },
  { name: 'DBT', quizLink: 'https://www.getdbt.com/dbt-learn' },
  { name: 'Data Engineering', quizLink: 'https://networkingfunda.com/introduction-to-data-engineering-coursera-quiz-answers/' },
  { name: 'Data Warehouse', quizLink: 'https://www.flexiquiz.com/SC/N/d46af006-4d16-45a4-8432-186542375e25' },
  { name: 'PBI', quizLink: 'https://www.freshersnow.com/power-bi-mcqs-and-answers-with-explanation/' }
];

const Assessment = () => {
  return (
    <div>
      <h2>Online Quiz Links:</h2>
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Quiz Link</th>
          </tr>
        </thead>
        <tbody>
          {topics.map(topic => (
            <tr key={topic.name}>
              <td>{topic.name}</td>
              <td><a href={topic.quizLink} target="_blank" rel="noopener noreferrer">Take Quiz</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assessment;
