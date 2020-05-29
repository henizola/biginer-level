import React from 'react';
import { AppContainer } from './app.style';
import BorderRadious from './Apps/border-radious/borderRadious.component';
import { Route, Link } from 'react-router-dom';
function App() {
	return (
		<AppContainer>
			<Link to='/radius'>Border Radious</Link>
			<Route path='/radius' component={BorderRadious} />
		</AppContainer>
	);
}

export default App;
