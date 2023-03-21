import { useState, useEffect} from 'react';

function App() {
  const [subject, setSubject] = useState('');
  const [chapter, setChapter] = useState('');
  const [shortQuestions, setShortQuestions] = useState(0);
  const [longQuestions, setLongQuestions] = useState(0);
  const [veryShortQuestions, setVeryShortQuestions] = useState(0);
  const [veryLongQuestions, setVeryLongQuestions] = useState(0);
  const [std, setStd] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const message = `create ${veryShortQuestions} tough very short problems, ${shortQuestions} tough short problems, ${longQuestions} tough long problems and ${veryLongQuestions} very long complex problems of 5 mark for ${chapter} of ${subject} for class ${std} by making headings of very short, short questions, long and very long questions respectively as per cbse syllabus`;
    const res = await fetch('http://localhost:5500/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    setResponse(data.message);
    setLoading(false)
  };

  return (
    <>
      <div className="App container my-5">
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className="form-label">
              Class:
              <input
                className="form-control"
                type="text"
                value={std}
                onChange={(e) => setStd(e.target.value)}
              />
            </label>
          </div>

          <div className='mb-3'>
            <label className="form-label">
              Subject:
              <input
                className="form-control"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </label>
          </div>

          <div className='mb-3'>
            <label className="form-label">
              Chapter:
              <input
                className="form-control"
                type="text"
                value={chapter}
                onChange={(e) => setChapter(e.target.value)}
              />
            </label>
          </div>

          <div className='mb-3'>
            <label className="form-label">
              Number of very short questions:
              <input
                className="form-control"
                type="number"
                value={veryShortQuestions}
                onChange={(e) => setVeryShortQuestions(e.target.value)}
              />
            </label>
          </div>

          <div className='mb-3'>
            <label className="form-label">
              Number of short questions:
              <input
                className="form-control"
                type="number"
                value={shortQuestions}
                onChange={(e) => setShortQuestions(e.target.value)}
              />
            </label>
          </div>

          <div className='mb-3'>
            <label className="form-label">
              Number of long questions:
              <input
                className="form-control"
                type="number"
                value={longQuestions}
                onChange={(e) => setLongQuestions(e.target.value)}
              />
            </label>
          </div>

          <div className='mb-3'>
            <label className="form-label">
              Number of very long questions:
              <input
                className="form-control"
                type="number"
                value={veryLongQuestions}
                onChange={(e) => setVeryLongQuestions(e.target.value)}
              />
            </label>
          </div>

          <button type="submit" className='btn btn-primary'>Generate Paper</button>
        </form>
        
          <div className='container'>
            <h3 className="my-3">Generated Paper:</h3>
            {loading && <p>Loading...</p>}
            {!loading && response && <pre className="text-justify" style={{'whiteSpace' : 'pre-wrap'}}>
              {response}
              </pre>}

          </div>
        
      </div>
    </>
  );
}

export default App;
