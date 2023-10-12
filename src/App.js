import './App.css';
import ReactDOM from 'react-dom';
//import ReactPDF from '@react-pdf/renderer';
//import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
//import { PDFViewer } from '@react-pdf/renderer';

ReactDOM.render(<App />, document.getElementById('root'));


function App() {
  return (
    <div className="App m-12 text-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 md:mx-36">
        <div className="col-span-1">
        <img className="md:mx-2 md:mx-auto" src={"headshot.jpg"} alt="" />
        <p className="text-lg font-bold">Leo Huang</p>
        <a href="https://scholar.google.com/citations?hl=en&user=KlP7ZhUAAAAJ" target="_blank" className="underline">Google Scholar</a>
        </div>
        <div className="mx-10 text-left col-span-3">
        <p>
          Hi, welcome to my personal website!
        </p>
        <h1 className="text-xl font-bold">About</h1>

        <p>I am interested in applied math, statistics, machine learning, and software development.</p>

        <h1 className="text-xl font-bold">Selected Publications</h1>
        <ol className="space-y-1 list-decimal list-inside text-md">
        <li>Density of States Graph Kernels, L. Huang, A. Graven, D. Bindel, SDM '21 </li>
        <li>Scalable Bayesian Transformed Gaussian Processes, X. Zhu, *L. Huang, *E. Lee, C. Ibrahim, D. Bindel, TMLR '23 </li>
        <li>Scaling Gaussian Processes with Derivative Information Using Variational Inference, M. Padidar, X. Zhu, L. Huang, J. Gardner, D. Bindel, NeurIPS '21</li>
        </ol>
        {/* <h1 className="text-xl font-bold">Presentations and Notes</h1>
        <ul>
        <li>Approximation Methods</li>
        </ul> */}
        <h1 className="text-xl font-bold">Education</h1>
        <ul>
          <li>BA in Computer Science and Math, Cornell University '21</li>
        </ul>
        <h1 className="text-xl font-bold">Teaching Assistant</h1>
        <ul>
          <li>Computational Math for Computer Science (Prof. Damle)</li>
        <li>Numerical Analysis (Prof. Bindel)</li>
        <li><a href="http://www.cs.cornell.edu/courses/cs2802/2020fa/" target="_blank" className="underline">Honors Discrete Structures</a> (Prof. Halpern)</li>
        <li><a href="https://www.cs.cornell.edu/courses/cs4780/2019fa/" target="_blank" className="underline">Machine Learning </a>(Prof. Haghtalab and Prof. Joachims)</li>
        </ul>
        <h1 className="text-xl font-bold">Work Experience</h1>
        <ul>
          <li>Facebook</li>
          <li><a href="https://research.facebook.com/teams/central-applied-science/" target="_blank" className="underline"> Facebook Core Data Science</a></li>
        </ul>
        <p>© Leo Huang 2023</p>
        </div>
      </div>
    </div>
  );
}

export default App;
