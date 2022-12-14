import React from 'react';
import './CurrentBug.css'

function CurrentBug() {
    // const [ CurrentBug, setCurrentBug ] = useState();
  
    return (
      <div className="current-bug">
        <div className='current-bug-form'>
            <p className='close-bug'>Close Bug</p>
            <p>
                Assigned <span>Username</span>
            </p>
            <p>
                Priority <span>High</span>
            </p>
            <p>Description</p>
            <p className='description-text'>
                If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app or yarn global remove create-react-app to ensure that npx always uses the latest version.
            </p>
            <hr />
            <div className='current-bug-form'>
            <p className='close-bug'>Close Bug</p>
            <p>
                Assigned <span>Username</span>
            </p>
            <p>
                Priority <span>High</span>
            </p>
            <p>Description</p>
            <p className='description-text'>
                If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app or yarn global remove create-react-app to ensure that npx always uses the latest version.
            </p>
            <hr />
        </div>
        <div className='current-bug-form'>
            <p className='close-bug'>Close Bug</p>
            <p>
                Assigned <span>Username</span>
            </p>
            <p>
                Priority <span>High</span>
            </p>
            <p>Description</p>
            <p className='description-text'>
                If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app or yarn global remove create-react-app to ensure that npx always uses the latest version.
            </p>
            <hr />
            <div class="scrollbar" id="style-8">
                <div class="force-overflow"></div>
            </div>
        </div>
        </div>
      </div>
    );
  }
  
  export default CurrentBug;