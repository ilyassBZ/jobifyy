import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
import styled from 'styled-components';

const Error = () => {
	return (
		<Wrapper className='full-page'>
			<ErrorPage>
				<img src={img} alt='not found' />
				<p>Error Not found</p>
				<Link to='/'>Back home</Link>
			</ErrorPage>

		</Wrapper>

	)

}
const ErrorPage = styled.div`
img{
	width:100%;
}
@media (min-width: 992px) {
	img{
	width:100%;
	}
}

`
export default Error 