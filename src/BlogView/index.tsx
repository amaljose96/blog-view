import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CustomThemeProvider } from './pearls/theme/ThemeProvider';
import { Home } from './screens/Home';
import { RecentlyOpenedArticles } from './screens/RecentlyOpenedArticles';
import { SavedArticles } from './screens/SavedArticles';
import { ArticleView } from './screens/ArticleView';
import { Settings } from './screens/Settings';

export function BlogView() {
  return (
    <CustomThemeProvider>
      <Router>
        <Routes>
          <Route
            path="/recently-opened-articles"
            element={<RecentlyOpenedArticles />}
          />
          <Route path="/saved-articles" element={<SavedArticles />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/article/:id" element={<ArticleView />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </CustomThemeProvider>
  );
}
