import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="box">
      <div className="box-son">
        <div className="appTitle">
          <h3>Buttons</h3> 
        </div>

        <div className='textContainer'>
          <h4>Variants</h4>

          <div className="container">
            <Button text="Default" />

            <Button text="Outline" variant="outline" />

            <Button text="Text" variant='text' />
          </div>

          <h4>Other Variations</h4>

          <div className="container">
            <Button text="Disable Shadow" disableShadow />

            <Button text="Disabled" disabled />
          </div>


          <h4>Icons</h4>

          <div className="container">
            <Button text='Start' startIcon='local_grocery_store' />

            <Button text="End" endIcon='local_grocery_store' />
          </div>

          <h4>Sizing</h4>
          <div className="container">
            <Button size="sm" text="Small" color='primary' />

            <Button size="md" text="Medium" color='primary' />

            <Button size="lg" text="Large" color='primary' />
          </div>

          <h4>Colors</h4>
          <div className='container'>
            <Button color="default" />

            <Button text='Primary' color="primary" />

            <Button text='Secondary' color='secondary' />

            <Button text="Danger" color='danger' />
          </div>
        </div>

        <footer className="footerContainer">
          <span>Made by Julio Negri Mirandola</span>   
          <div>
            <a 
              className='linkStyle'
              href='https://github.com/julionm'
              target={'_blank'}
              rel='noreferrer'>
                GitHub
            </a>
            <span className='linkDivisor'>|</span>
            <a
              className='linkStyle'
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/julio-mirandola/"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
