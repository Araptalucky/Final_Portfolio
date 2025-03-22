import {RESULTS} from '../Util/ResultsData.js';

function ResultsComponent(){
    console.log("MY Results", RESULTS);
    
    const ResultTable = ({results}) => (
        <table className="results-table">
            <thead>
                <tr>
                    <th>Course Title</th>
                    <th>MAR</th>
                    <th>CU</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result, index) => (
                    <tr key={index}>
                        <td>{result["Course Title"]}</td>
                        <td>{result["MAR"]}</td>
                        <td>{result["CU"]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="results-container">
            <section>
                <h1>Year 1 Results</h1>
                
                <div>
                    <h2>Semester 1</h2>
                    <ResultTable results={RESULTS.year1.semester1} />
                </div>

                <div>
                    <h2>Semester 2</h2>
                    <ResultTable results={RESULTS.year1.semester2} />
                </div>
            </section>

            <section>
                <h1>Year 2 Results</h1>
                
                <div>
                    <h2>Semester 1</h2>
                    <ResultTable results={RESULTS.year2.semester1} />
                </div>
            </section>
        </div>
    );
}

export default ResultsComponent;