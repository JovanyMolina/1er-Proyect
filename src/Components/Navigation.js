import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavigationMenu from './NavigationMenu';

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    });

    return (
        <nav>
            <span className="text-xl" onClick={() => setShowMenu(!showMenu)}>
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            {menuTransitions((styles, item) =>
                item ? (
                    <animated.div style={styles} className="fixed bg-white top-0 left-0 w-4/5 md:w-64 h-full z-50 shadow p-3">
                        <span className="font-bold">This is the menu</span>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                        </ul>
                    </animated.div>
                ) : null
            )}
        </nav>
    );
}

export default Navigation;
