import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const SideNavStyles = styled.nav`
    position: absolute;
    width: 250px;
    top: 0;
    left: 0;
`


const SideNav = () => {
    return (
        <SideNavStyles>
            <ul>
                <li><Link to="/">Homessss</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>Blog</li>
                <li>Schedule</li>
                <li>Contact</li>
            </ul>
        </SideNavStyles>
    )
}

export default SideNav