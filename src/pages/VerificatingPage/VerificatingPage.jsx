import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/auth/authSlice'
import { Link, useParams } from 'react-router-dom'

export function VerificatingPage() {
    const dispatch = useDispatch()
    const { userCreated } = useSelector(state => state.auth)
    const { id } = useParams()
    console.log(id)
    console.log(userCreated)

    useEffect(() => {
        dispatch(registerUser(id))
    }, [dispatch, id])

    return (
        <div>
            {
                userCreated ? <Link
                    to={'/'}
                >
                    {'http://localhost:3000'}
                </Link> : <div>
                    {id}
                </div>
            }
        </div>
    )
}