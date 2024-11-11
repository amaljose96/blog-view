import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CustomThemeProvider } from './pearls/theme/ThemeProvider';
import { Home } from './screens/Home';

export function BlogView() {
  return (
    <CustomThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/article/:id" element={<ArticleView />} /> */}
        </Routes>
      </Router>
    </CustomThemeProvider>
  );
}
