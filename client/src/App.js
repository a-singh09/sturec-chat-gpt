import { useState } from 'react';
import './App.css';
import { ImSpinner3 } from "react-icons/im";


function App() {
  const [subject, setSubject] = useState('');
  const [chapter, setChapter] = useState('');
  const [shortQuestions, setShortQuestions] = useState('');
  const [longQuestions, setLongQuestions] = useState('');
  const [veryShortQuestions, setVeryShortQuestions] = useState('');
  const [veryLongQuestions, setVeryLongQuestions] = useState('');
  const [std, setStd] = useState('');
  const [level, setLevel] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [additionalReq, setAdditionalReq] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const message = `create total of ${veryShortQuestions} ${level} level very short problems, ${shortQuestions} ${level} level short problems, ${longQuestions} ${level} level long problems and ${veryLongQuestions} ${level}level very long problems of 5 mark from ${chapter} chapters of ${subject} for class ${std} by making headings of very short, short questions, long and very long questions respectively as per cbse syllabus. Don't write topics.  Optional additional requirements: ${additionalReq}`;
    const res = await fetch('http://127.0.0.1:4000/functions/', {
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
      {/* <div className="App container my-5">
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
              Level:
              <select className="form-control"
                type="text"
                value={level}
                onChange={(e) => setLevel(e.target.value)}>
                  
                <option value="">--Please choose an option--</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="tough">Tough</option>
                <option value="complex">Complex</option>

              </select>
            </label>
          </div>

          <div className='mb-3'>
            <label className="form-label">
              Number of very short questions:
              <input
                className="form-control"
                type="text"
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
                type="text"
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
                type="text"
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
                type="text"
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
          {!loading && response && <pre className="text-justify" style={{ 'whiteSpace': 'pre-wrap' }}>
            {response}
          </pre>}

        </div>

      </div> */}






<div className="container">
        <div className="row">
          <div className="booking-form">
            <form>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <span className="form-label">Class</span>
                    <input className="form-control" type="text" placeholder="Enter Class"
                      value={std}
                      onChange={(e) => setStd(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <span className="form-label">Subject</span>
                    <input className="form-control" type="text" placeholder="Enter Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <span className="form-label">Chapter</span>
                    <input className="form-control" placeholder='Enter Chapter'
                      type="text"
                      value={chapter}
                      onChange={(e) => setChapter(e.target.value)}
                      required />
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row">
                    <div className="col-12 col-sm-6 mb-0">
                      <div className="form-group">
                        <span className="form-label">No. of very short questions</span>
                        <input className="form-control" placeholder='Enter No. of very short questions'
                          type="text"
                          value={veryShortQuestions}
                          onChange={(e) => setVeryShortQuestions(e.target.value)}
                          required />
                      </div>
                    </div>

                  </div>
                </div>

                <div className="col-md-3">
                  <div className="row">
                    <div className="col-12 col-sm-6 mb-0">
                      <div className="form-group">
                        <span className="form-label">Level:</span>
                        <select className="form-control"
                          type="text"
                          value={level}
                          onChange={(e) => setLevel(e.target.value)}
                          required >
                          <option value="">--Please choose an option--</option>
                          <option value="easy">Easy</option>
                          <option value="medium">Medium</option>
                          <option value="tough">Tough</option>
                          <option value="complex">Complex</option>

                        </select>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="col-md-2">
                  <div className="form-group">
                    <span className="form-label">No. of short questions</span>
                    <input className="form-control" placeholder='Enter No. of short questions'
                      type="text"
                      value={shortQuestions}
                      onChange={(e) => setShortQuestions(e.target.value)}
                      required />
                    <span className="select-arrow"></span>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <span className="form-label">No. of long questions</span>
                    <input className="form-control" placeholder='Enter No. of long questions'
                      type="text"
                      value={longQuestions}
                      onChange={(e) => setLongQuestions(e.target.value)}
                      required />
                    <span className="select-arrow"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <span className="form-label">No. of very long questions</span>
                    <input className="form-control" placeholder='Enter No. of very long questions'
                      type="text"
                      value={veryLongQuestions}
                      onChange={(e) => setVeryLongQuestions(e.target.value)}
                      required />
                    <span className="select-arrow"></span>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <span className="form-label">Additional Requirements</span>
                    <textarea className="form-control" placeholder='Not satisfied? Provide your additional requirements here.'
                      rows="3"
                      type="text"
                      value={additionalReq}
                      onChange={(e) => setAdditionalReq(e.target.value)}
                      required />
                    <span className="select-arrow"></span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-btn">
                    <button className="submit-btn" type='submit' onClick={handleSubmit}>Generate Questions</button>
                  </div>
                </div>
              </div>
            </form>

            <div className='container results-section'>

              {loading &&
                <>
                  <div className="my-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ImSpinner3 />
                  </div>
                  <div className="my-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    This may take a while...
                  </div>
                </>}
              {!loading && response &&
                <>
                  <h3 className="my-3">Generated Paper:</h3>
                  <pre className="text-justify" style={{ 'whiteSpace': 'pre-wrap' }}>
                    {response}
                  </pre>



                </>
              }

            </div>
          </div>
        </div>
      </div>





    </>
  );
}

export default App;

