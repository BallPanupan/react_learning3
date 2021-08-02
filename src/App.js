import logo from './logo.svg';
import './App.css';

import form from './components/form';

function App() {
  return (
    <div class="layout">
      <div class="body-content">
        <div className="in-content">
          {form()}
        </div>
      </div>

      <div class="body-content">
      </div>

    </div>
  );
}

export default App;
