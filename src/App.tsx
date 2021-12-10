import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <>
      <div className="appTitle">
        <h3>Buttons</h3> 
      </div>
      <div className="App">
        <div className="btnContainer">
          <span>Button Padrão</span>
          <Button />
        </div>
        <div className="btnContainer">
          <span>Button Focused</span>
          <Button />
        </div>

        <div className="btnContainer">
          <span>Button Outlined</span>
          <Button variant="outline" />
        </div>
        <div className="btnContainer">
          <span>Button Outlined Focused</span>
          <Button variant="outline" />
        </div>

        <div className="btnContainer">
          <span>Button Text</span>
          <Button variant="text" />
        </div>
        <div className="btnContainer">
          <span>Button Text Focused</span>
          <Button variant="text"/>
        </div>

        <div className="btnContainer">
          <span>Button Disable Shadow</span>
          <Button disableShadow />
        </div>
        <div className="btnContainer">
          <span>Button Disable Shadow Focused</span>
          <Button disableShadow/>
        </div>

        <div className="btnContainer">
          <span>Button Disabled</span>
          <Button disabled />
        </div>
        <div className="btnContainer">
          <span>Button Disabled Text</span>
          <Button variant="text" disabled />
        </div>
      </div>
    </>
  );
}

export default App;
