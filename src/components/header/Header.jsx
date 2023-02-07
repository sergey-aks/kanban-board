import { useState } from 'react'

import userImage from '../../assets/img/user-avatar.png'

const Header = (props) => {
	const [isLogVisible, setLogVisible] = useState(false)

	const handleClick = () => {
        setLogVisible(!isLogVisible)
    }

	return (
		<header className='header'>
			<div className='logo'>
				<div className='logo-text'>Awesome Kanban Board</div>
			</div>
			<div className={isLogVisible ? 'user active' : 'user'}>
				<div className='user-image' style={{ backgroundImage: `url(${userImage})` }} onClick={handleClick}>
				</div>
				<div className='user-datails'>
					<div>
						Profile
					</div>
					<div>
						Log Out
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header