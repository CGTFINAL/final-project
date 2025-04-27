import style from '../styles/authform.module.css';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const AuthForm = ({ isRegisterForm = false }) => {

    const { login } = useAuth();

    const [data, setData] = useState({ username: '', password: '', email: '' });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
    };

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.currentTarget);
        formData.append('action', isRegisterForm ? 'register' : 'login');
        if (isRegisterForm) formData.append('email', data.email.trim());
        formData.append('username', data.username.trim());
        formData.append('password', data.password.trim());

        try {
            const response = await fetch(
                'https://web.ics.purdue.edu/~skroot/cgt-390/public/final/auth.php',
                {
                    method: 'POST',
                    body: formData,
                }
            );
            const data = await response.json();
            if (data.success) {
                login();
                setData({ username: '', password: '', email: '' });
                setSuccessMsg(data.success);
                setError('');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form
            className={`${style['login-form']}`}
            onSubmit={handleSubmit}
        >
            {isRegisterForm && (
                <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    required
                    value={data.email}
                    onChange={handleChange}
                ></input>
            )}
            {isRegisterForm && <hr />}
            <input
                type='text'
                name='username'
                placeholder='Username'
                required
                value={data.username}
                onChange={handleChange}
            ></input>
            <input
                type='password'
                name='password'
                placeholder='Password'
                required
                minLength={8}
                value={data.password}
                onChange={handleChange}
            ></input>
            {error &&
                <p>{error}</p>
            }
            <button
                type='submit'
                disabled={
                    submitting ||
                    data.username.trim() === '' ||
                    data.password.trim() === '' ||
                    (isRegisterForm && data.email.trim() === '')
                }
            >
                Submit
            </button>
            {successMsg && 
                <p>{successMsg}</p>
            }
        </form>
    );
};

export default AuthForm;