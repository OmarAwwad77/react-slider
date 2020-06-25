import React from 'react';
import Slider from './components/slider';

function App() {
	return (
		<div className='App'>
			<Slider
				urls={[
					'https://picsum.photos/500/300',
					'https://picsum.photos/id/1/500/300',
				]}
				width={'500px'}
				height={'300px'}
			/>
		</div>
	);
}

export default App;
