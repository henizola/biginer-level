import React, { useState } from 'react';
import {
	AppContainer,
	Folder,
	Text,
	TextContainer,
	Input,
	InputContainer,
} from './app.style';
function App() {
	const [topRight, setTopRight] = useState(0);
	const [topLeft, setTopLeft] = useState(0);
	const [bottomRight, setBottomRight] = useState(0);
	const [bottomLeft, setBottomLeft] = useState(0);
	return (
		<AppContainer>
			<InputContainer>
				<Input
					type='number'
					onChange={event => setTopLeft(event.target.value)}
					min='0'
					value={topLeft}
				/>
				<Input
					type='number'
					onChange={event => setTopRight(event.target.value)}
					min='0'
					value={topRight}
				/>
			</InputContainer>

			<Folder
				topLeft={topLeft}
				topRight={topRight}
				bottomRight={bottomRight}
				bottomLeft={bottomLeft}
			>
				<TextContainer>
					<Text>border-top-left-radius:{topLeft} px</Text>
					<Text>border-top-right-radius:{topRight} px</Text>
					<Text> border-bottom-right-radius:{bottomRight} px</Text>
					<Text>border-bottom-left-radius: {bottomLeft} px</Text>
				</TextContainer>
			</Folder>
			<InputContainer>
				<Input
					type='number'
					onChange={event => setBottomLeft(event.target.value)}
					min='0'
					value={bottomLeft}
				/>
				<Input
					type='number'
					onChange={event => setBottomRight(event.target.value)}
					min='0'
					value={bottomRight}
				/>
			</InputContainer>
		</AppContainer>
	);
}

export default App;
