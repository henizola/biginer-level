import styled from 'styled-components';
export const RadiousContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 450px;
	height: 450px;
	margin: auto;
	margin-top: 85px;
`;
export const Folder = styled.div`
	width: 400px;
	height: 400px;
	border: 1px solid black;
	margin: auto;

	border-top-left-radius: ${props => props.topLeft}px;
	border-top-right-radius: ${props => props.topRight}px;
	border-bottom-right-radius: ${props => props.bottomRight}px;
	border-bottom-left-radius: ${props => props.bottomLeft}px;
	justify-items: center;
`;

export const TextContainer = styled.div`
	border: 1px solid black;
	width: 70%;
	height: 70%;
	margin: auto;
	margin-top: 55px;
	background-color: white;
`;

export const Text = styled.h4`
	margin-left: 45px;
	margin-top: 20px;
`;
export const Input = styled.input`
	width: 50px;
	background-color: transparent;
	border: 1px solid black;
`;
export const InputContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
