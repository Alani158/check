// import logo from './logo.svg';
import './App.css';
import {Amplify} from 'aws-amplify'
import awsconfig from './aws-exports'
import {Table, Authenticator} from '@aws-amplify/ui-react'

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <p>jjdjdjdj</p>
      <Table/>
      <h2>nyapp</h2>
    </div>
  );
}

export default Authenticator(App);
