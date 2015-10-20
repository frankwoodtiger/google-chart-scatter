# google-chart-scatter
This is a demo for how to use the Google visualization library for basic plotting.

<p>UI</p>
<img src='/img/init.png?raw=true' alt="1" height="400px" width='400'>

<img src='/img/none.png?raw=true' alt="1" height="400px" width='400'>

<img src='/img/linear.png?raw=true' alt="2" height="400px" width='400'>

<img src='/img/polynomial.png?raw=true' alt="6" height="400px" width='400'>

<img src='/img/exponential.png?raw=true' alt="6" height="400px" width='400'>

<ol><b>This webapp consists of two major parts as shown below</b>
  <li>UI logic
    <ol>
      <li>index.html - the actual UI in HTML</li>
      <li>custom-logic.js - handling basic front-end logic</li>
    </ol>
  </li>
  <li>Python CGI script to handle the neural network for recognizing handwritten digit
    <ol>
      <li>*-ubyte - actual training set of size 50,000  and test sample set of size 10,000 with total 60,000 28x28 images used by the neural network</li>
      <li>thetas.mat - the actual trained weight matrix used for prediction</li>
      <li>feedforward-prediction-cgi.py - loads the matrix in thetas.mat, and perform feedfoward prediction using the matrix.</li>
      <li>train-handwritten-digit-cgi.py - trains the weight matrix and save it to thetas.mat</li>
      <li>imshow-grayscale-mat.py - saves the raw pixel data under the CGI dir for debugging purpose.</li>
    </ol>
  </li>
</ol>

<ul><b>Proof of concept</b>
  <li>Use of JQuery to achieve rich interaction interface.</li>
  <li>Use of Google Visualization Library</li>
</ul>
