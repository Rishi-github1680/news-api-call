// App.js
import React from 'react';
import RegisterApiComponent from './register_query';
import UpdateApiComponent from './update_query';
import FetchApiComponent from './fetch_query';
import FetchQueriesApiComponent from './fetch_queries';
import ArticlesApiComponent from './fetch_articles';
import DeleteApiComponent from './delete_query';
import KeywordsApiComponent from './fetch_keywords';
function App() {
  return (
    <div>
      <h1>API Data</h1>
      <RegisterApiComponent />
      <UpdateApiComponent />
      <FetchApiComponent/>
      <FetchQueriesApiComponent/>
      <ArticlesApiComponent/>
      <DeleteApiComponent/>
      <KeywordsApiComponent/>
      {/* Other components or content */}
    </div>
  );
}

export default App;
