import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/auth/authSlice'
import { Link, useParams } from 'react-router-dom'

export function VerificatingPage() {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { id } = useParams()

    useEffect(() => {
        dispatch(registerUser(id))
    }, [dispatch, id])

    return (
        <div>
            {
                user ? <Link
                    to={'/'}
                >
                    {'http://localhost:3000'}
                </Link> : <div>
                    {'Відбулась помилка активації акаунту'}
                </div>
            }
        </div>
    )
}