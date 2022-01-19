import React from 'react';
import { Cookies, useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function User() {
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const navigate = useNavigate()

    function logout() {
        removeCookie('jwt')
        navigate("/", { replace: true })
    }
    return (
        <main>
            <button onClick={() => logout()}>Log out</button>
        </main>
    )
}
