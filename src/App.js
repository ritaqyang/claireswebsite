
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import UserPage from './routes/userpage/user-page.component';
import SocialPage from './routes/social-page/social-page.component';

const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        
        <Route path="user-page" element={<UserPage />} />
        <Route path="social-page" element={<SocialPage />} />
        
      </Route>
    </Routes>
  );
};

export default App;
