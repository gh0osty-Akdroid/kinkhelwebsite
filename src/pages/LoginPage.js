import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { fetchTokenSuccess } from '../action/Token';
import { useDispatch, useSelector } from 'react-redux';
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { Box, Button, Input, PasswordInput, TextInput } from '@mantine/core';
import OTPInput, { ResendOTP } from "otp-input-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { fetchSiteSuccess } from '../action/SiteSetting';
import { AiOutlineLeft } from 'react-icons/ai';
import { ErrorHandler, ErrorNotification, SuccessNotification } from '../components/ErrorNotification';
import { Title } from '../components/Header';
import { Url } from '../Url';





const LoginPage = () => {
    const [mode, setMode] = useState(1)


    return (
        <div style={{
            backgroundColor: "grey",
            justifyContent: "center",
            flexDirection: "row",
            display: "flex",
            width: "100%",
            alignItems: "center", height: "120vh"
        }}>
            {mode === 1 ? <LoginMode setMode={setMode} /> : <RegisterMode setMode={setMode} />}

        </div>
    );

}

export default LoginPage

const Image = styled.img`
height: 100px;
width: 200px;
margin: -50px auto 50px auto;
`;

const H1 = styled.h1`
text-align: center;
text-size:40px;
font-weight:700;
`;


const Buttons = styled(Button)`
color:black;
`;


const Links = styled(Link)`
color:black;
text-decoration:none
`;



const LoginMode = ({ setMode }) => {
    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()
    const [log_phone, setPhone] = useState("")
    const [log_password, setPassword] = useState("")
    const [OTP, setOTP] = useState("")
    const [success, setSuccess] = useState(false)
    const token = useSelector(p => p.authToken?.authToken)

    const handleLogin = (e) => {
        e.preventDefault()
        const body = {
            phone: log_phone,
            password: log_password
        }
        Url().post(`/login`, body).then((res) => {
            setSuccess(true)
        }).catch(err => {
            ErrorHandler(err)
        })
    }
    const handleBackLogin = () => {
        setSuccess(false)
    }



    const renderTime = () => React.Fragment;
    const renderButton = (buttonProps) => {
        return (
            <button {...buttonProps}>
                {buttonProps.remainingTime !== 0 ? `Please wait for ${buttonProps.remainingTime} sec to resend code.` : "Resend"}
            </button>
        );
    };

    const handleOtp = (e) => {
        e.preventDefault()
        const body = {
            token: OTP,
        }
        Url().post(`/login-verify/${log_phone}`, body).then((res) => {
            dispatch(fetchTokenSuccess(res?.data?.data?.token))
            dispatch(fetchSiteSuccess(res?.data?.data?.user?.site))
            SuccessNotification({ title: "Welcome!!", message: "You have been Logged in." })
        }).catch(err => {
            ErrorHandler(err)
        })
    }
    useEffect(() => {
        if (token) {
            const from = location.state?.from?.pathname || "/";
            history(from)
        }
        Title("Login")
    }, [token])


    const ResendOtp = (e) => {
        Url().post(`/resend-login-code/${log_phone}`).then((res) => {
            SuccessNotification({ title: "Succeed", message: "Your OTP has been sent. Please wait a while..." })
        }).catch(err => {
            ErrorHandler(err)
        })
    }


    return (
        window.innerWidth < 600 ?
            <div style={{
                width: "90%"

            }}>
                <div className="p-5 text-gray-200 bg-secondary-dark-bg rounded-3xl h-full">
                    <div className="mt-8 text-gray-200 bg-secondary-dark-bg">
                        <div classNaPawas Store NEwme="rounded-lg dark:bg-secondary-dark-bg">
                            <div className="mt-8 dark:text-gray-200 dark:bg-secondary-dark-bg">
                                <div className="rounded-lg bg-secondary-dark-bg">
                                    {!success ?
                                        <>
                                            <H1>Login!</H1>
                                            <form onSubmit={handleLogin}>
                                                <h3 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                                                    Phone
                                                </h3>
                                                <ReactPhoneInput
                                                    className="ml-5 mb-3 justify-between  white  rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    defaultCountry="pl"
                                                    searchclassName="search-class"
                                                    value={log_phone}
                                                    onChange={(e) => setPhone(`+${e}`)}
                                                    enableSearchField
                                                    disableSearchIcon
                                                />
                                                <h3 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                                                    Password
                                                </h3>
                                                <PasswordInput
                                                    className="ml-5  mb-3 justify-between shadow appearance-none border rounded text-gray-700 leading-tight "
                                                    placeholder="Password"
                                                    value={log_password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <Buttons className='ml-5' color="green" uppercase type='submit'>
                                                        Login
                                                    </Buttons>
                                                    <p onClick={() => setMode(2)}>Don't have an account ? Register</p>

                                                </div>

                                            </form>


                                        </>
                                        : <>
                                            <div className='flex mb-5'>
                                                <AiOutlineLeft />
                                                <Button variant='outline' onClick={handleBackLogin}>Back To Login</Button>
                                            </div>
                                            <form onSubmit={handleOtp}>
                                                <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} className="ml-5  mb-3 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                                <Buttons className='ml-5' color="yellow" uppercase type='submit'>
                                                    Verify
                                                </Buttons>
                                                <ResendOTP className='p-2' onResendClick={ResendOtp} maxTime={150} renderButton={renderButton} renderTime={renderTime} />
                                            </form>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <Box sx={(theme) => ({
                textAlign: 'left',

                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
                cursor: 'pointer'
            })}>
                <div className="p-5 text-gray-200 bg-secondary-dark-bg rounded-3xl h-full">
                    <div className="mt-8 text-gray-200 bg-secondary-dark-bg">
                        <div classNaPawas Store NEwme="rounded-lg dark:bg-secondary-dark-bg">
                            <div className="mt-8 dark:text-gray-200 dark:bg-secondary-dark-bg">
                                <div className="rounded-lg bg-secondary-dark-bg">
                                    {!success ?
                                        <>
                                            <H1>Login!</H1>
                                            <form onSubmit={handleLogin}>
                                                <h3 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                                                    Phone
                                                </h3>
                                                <ReactPhoneInput
                                                    className="ml-5 mb-3 justify-between  white  rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    defaultCountry="pl"
                                                    searchclassName="search-class"
                                                    value={log_phone}
                                                    onChange={(e) => setPhone(`+${e}`)}
                                                    enableSearchField
                                                    disableSearchIcon
                                                />
                                                <h3 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                                                    Password
                                                </h3>
                                                <PasswordInput
                                                    className="ml-5  mb-3 justify-between shadow appearance-none border rounded text-gray-700 leading-tight "
                                                    placeholder="Password"
                                                    value={log_password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <Buttons className='ml-5' color="green" uppercase type='submit'>
                                                        Login
                                                    </Buttons>

                                                </div>
                                                <p onClick={() => setMode(2)}>Don't have an account? Register</p>
                                                <Links to={'/forget-password'} className={"ml-5 block"}>Forget Password?</Links>
                                            </form>
                                        </>
                                        : <>
                                            <div className='flex mb-5'>
                                                <AiOutlineLeft />
                                                <button onClick={handleBackLogin}>Back To Login</button>
                                            </div>
                                            <form onSubmit={handleOtp}>
                                                <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} className="ml-5  mb-3 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                                <Buttons className='ml-5' color="yellow" uppercase type='submit'>
                                                    Verify
                                                </Buttons>
                                                <ResendOTP className="ml-5" onResendClick={ResendOtp} maxTime={150} renderButton={renderButton} renderTime={renderTime} />
                                            </form>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
    )
}





const RegisterMode = ({ setMode }) => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirm] = useState("")
    const [site, setSite] = useState("")
    const [sites, setSites] = useState([])
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        Title("Register")
        Url().get('/sites').then((res) => {
            setSites(res?.data?.data)
        })
    }, [])



    const handleRegister = (e) => {
        e.preventDefault()
        if (password === confirmPass) {
            const body = {
                name: name,
                phone: phone,
                password: password,
                email: email,
                site: site
            }
            Url().post('/register', body).then((res) => {
                SuccessNotification({ title: "Successfully registered", message: "Welcome to our world!" })
                SuccessNotification({ title: "Verification", message: "Please Verify Your account." })
                setMode(1)
            }).catch(err => {
                ErrorHandler(err)
            })
        } else {
            ErrorNotification({ title: "Password Error", message: "Please check your password." })
        }



    }

    return (

        window.innerWidth < 600 ?
            <div style={{
                width: "90%"

            }}>
                <div className="p-5 text-gray-200 bg-secondary-dark-bg rounded-3xl h-full">
                    <div className="mt-8 text-gray-200 bg-secondary-dark-bg">
                        <div classNaPawas Store NEwme="rounded-lg dark:bg-secondary-dark-bg">
                            <div className="mt-8 dark:text-gray-200 dark:bg-secondary-dark-bg">
                                <div className="rounded-lg bg-secondary-dark-bg">

                                    <H1>Register!</H1>
                                    <form onSubmit={handleRegister}>
                                        <h3 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                                            Name
                                        </h3>
                                        <TextInput
                                            className="ml-5  mb-3 justify-between shadow appearance-none border rounded text-gray-700 leading-tight "
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <h3 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                                            Email
                                        </h3>
                                        <Input
                                            className="ml-5  mb-3 justify-between shadow appearance-none border rounded text-gray-700 leading-tight "
                                            placeholder="Email"
                                            type={"email"}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <h3 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                                            Phone
                                        </h3>
                                        <ReactPhoneInput
                                            className="ml-5 mb-3 justify-between  white  rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            defaultCountry="pl"
                                            searchclassName="search-class"
                                            value={phone}
                                            onChange={(e) => setPhone(`+${e}`)}
                                            enableSearchField
                                            disableSearchIcon
                                        />
                                        <h3 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                                            Password
                                        </h3>
                                        <PasswordInput
                                            className="ml-5  mb-3 justify-between shadow appearance-none border rounded text-gray-700 leading-tight "
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <h3 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                                            confirm Password
                                        </h3>
                                        <PasswordInput
                                            className="ml-5  mb-3 justify-between shadow appearance-none border rounded text-gray-700 leading-tight "
                                            placeholder="Password"
                                            value={confirmPass}
                                            onChange={(e) => setConfirm(e.target.value)}
                                        />
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <Button className='ml-5' color="green" uppercase type='submit'>Register</Button>
                                        </div>
                                        <p onClick={() => setMode(1)}>
                                            Login
                                        </p>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> : <Box sx={(theme) => ({
                textAlign: 'left',

                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
                cursor: 'pointer'
            })}>
                <Image src='https://kinkhel.com/wp-content/uploads/2020/08/Transparent.png'></Image>
                <div className="p-5 text-gray-200 bg-secondary-dark-bg rounded-3xl h-full">
                    <div className="mt-8 text-gray-200 bg-secondary-dark-bg">
                        <div classNaPawas Store NEwme="rounded-lg dark:bg-secondary-dark-bg">
                            <div className="mt-8 dark:text-gray-200 dark:bg-secondary-dark-bg">
                                <div className="rounded-lg bg-secondary-dark-bg">

                                    <H1>Register!</H1>

                                    {
                                        display ? <form onSubmit={handleRegister}>
                                            <h3 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                                                Name
                                            </h3>
                                            <TextInput
                                                className="ml-5  mb-3 justify-between shadow appearance-none border rounded text-gray-700 leading-tight "
                                                placeholder="Name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            <h3 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                                                Email
                                            </h3>
                                            <Input
                                                className="ml-5  mb-3 justify-between shadow appearance-none border rounded text-gray-700 leading-tight "
                                                placeholder="Email"
                                                type={"email"}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <h3 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                                                Phone
                                            </h3>
                                            <ReactPhoneInput
                                                className="ml-5 mb-3 justify-between  white  rounded  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                defaultCountry="pl"
                                                searchclassName="search-class"
                                                value={phone}
                                                onChange={(e) => setPhone(`+${e}`)}
                                                enableSearchField
                                                disableSearchIcon
                                            />
                                            <h3 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                                                Password
                                            </h3>
                                            <PasswordInput
                                                className="ml-5  mb-3 justify-between shadow appearance-none border rounded text-gray-700 leading-tight "
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <h3 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                                                confirm Password
                                            </h3>
                                            <PasswordInput
                                                className="ml-5  mb-3 justify-between shadow appearance-none border rounded text-gray-700 leading-tight "
                                                placeholder="Password"
                                                value={confirmPass}
                                                onChange={(e) => setConfirm(e.target.value)}
                                            />
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>

                                                <Button className='ml-5' color="green" uppercase type='submit'>Register</Button>
                                                <Buttons variant='outline' onClick={() => setMode(1)}>
                                                    Login
                                                </Buttons>

                                            </div>

                                        </form> :
                                            <>

                                                <h3 className=" ml-5 block text-gray-700 text-sm font-bold mb-2 text-gray-200">
                                                    Select Your Region
                                                </h3>
                                                <select onChange={(e) => setSite(e.target.value)} value={site} className="ml-5 p-2 mb-3 justify-between shadow appearance-none border rounded text-gray-700 leading-tight ">
                                                    <option>Please select one.</option>
                                                    {sites.map((e, i) =>
                                                        <option key={i} value={e.id}> {e.site_region}</option>
                                                    )}
                                                </select>
                                                <Button variant='outline' onClick={() => setDisplay(true)} >Next</Button>
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
    );
}