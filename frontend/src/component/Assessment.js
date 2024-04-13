import React from 'react';
import "./styles/nav.css"
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <ul>
          <li><button onClick={() => navigate("/profile")}>Profile</button></li>
          <li><button onClick={() => navigate("/Performance")}>Performance</button></li>
          <li><button onClick={() => navigate("/Assessment")}>Assessments</button></li>
          <li><button onClick={() => navigate("/")}>Logout</button></li>
        </ul>
      </nav>
      <h2 style={{ textAlign: 'center' }}>Online Quiz Links:</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Topic</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Quiz Link</th>
            </tr>
          </thead>
          <tbody>
            {topics.map(topic => (
              <tr key={topic.name}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{topic.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}><a href={topic.quizLink} target="_blank" rel="noopener noreferrer">Take Quiz</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assessment;
