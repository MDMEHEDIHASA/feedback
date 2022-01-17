import Header from "./components/Header";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import FeedbackList from "./components/FeedbackList";

import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
    

  return (
    <FeedbackProvider>
    <Router>
    <Header ></Header>
    <div className="container">
      <Route exact path='/'>
      <FeedbackForm  />
      <FeedbackStats />
      <FeedbackList  />
      </Route>
      <AboutIconLink/>
      <Route exact path='/about'  component={AboutPage}/>
      <Route exact path='/post/:id/:name'  component={Post}/>
    </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
