import styled from 'styled-components';

export const HeaderContainer = styled.div`
width : 800px;
	background-color: #e5e5e5;
	padding: 1rem 0 1rem 0;
	display : flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const ProfilImageContainer = styled.div`
width: 100px;
height : 100px ;
border-radius: 95px;
margin : 10px 30px;
`;

export const ProfilImage = styled.img`
width: 100px;
height : 100px ;
border-radius: 95px;
`;

export const Title = styled.div`
font-weight : bold ; 
font-size : 36px;
`;

export default HeaderContainer;