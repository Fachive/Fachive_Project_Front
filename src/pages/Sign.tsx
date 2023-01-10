import React from 'react';
import { Link } from 'react-router-dom';

const Sign = () => {
	return (
		<div>
			<form>
				<label htmlFor="signEmail">user email</label>
				<input id="signEmail" type="email" placeholder="이메일을 입력하세요" />
				<label htmlFor="signPassword">password</label>
				<input id="signPassword" type="password" placeholder="8자리 이상의 비밀번호를을 입력하세요" />
				<label htmlFor="signPasswordCheck">Password Check</label>
				<input id="signPasswordCheck" type="password" />
				<label htmlFor="signNickname">Nickname</label>
				<input id="signNickname" type="text" />
				<button>sign in</button>
				<Link to={'/'}>log in</Link>
			</form>
		</div>
	);
};

export default Sign;
