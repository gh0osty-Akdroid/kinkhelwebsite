import { Button, Grid, Tabs } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import QrReader from 'react-qr-scanner'
import { ErrorHandler } from '../../components/ErrorNotification'
import { Title } from '../../components/Header'
import { TokenUrl } from '../../Url'


const PointRedeemed = () => {
    const [point, setPoint] = useState("")
    const [refresh, setRefresh] = useState(false)
    const [code, setCode] = useState("")
    const [mode, setMode] = useState(1)


    useEffect(() => {
        Title("Point Redeem")
        TokenUrl().get('/points').then(res => {
            setPoint(res?.data?.data)
            setRefresh(false)
        }).catch((err) => {
            ErrorHandler(err)
        })
    }, [refresh])


    const handlePointRedeem = (e) => {
        e.preventDefault()
        TokenUrl().post('/redeem-voucher', { "code": code }).then(res => {
            setRefresh(true)
            setCode(null)
        }).catch((err) => {
            ErrorHandler(err)
        })
    }

    const handleError = (err) => {
        setMode(1)
    }

    const handleScan = (data) => {
        setCode(data)
        if (code) {
            handlePointRedeem()
        }

    }
    const previewStyle = {
        height: 240,
        width: 320,
    }

    return (
        <>
            <div className='pointhistory-body'>
                <Grid>
                    <Grid.Col span={12} >
                        <h2 className=" text-base mb-4">
                            <strong> Total Points: </strong> {point.points}
                        </h2>
                    </Grid.Col>
                </Grid>
                <div className='flex p-2'>
                    <Button className='mr-2' variant='subtle' onClick={() => setMode(1)}>Code Mode</Button>
                    <Button className='ml-2' variant='subtle' onClick={() => setMode(2)}>Scanner Mode</Button>

                </div>
                {
                    mode === 1 ?
                        <Grid>
                            <Grid.Col span={12} >
                                <form onSubmit={handlePointRedeem}>
                                    <h2 className=" text-base mb-4">
                                        <strong>  Enter the Code:</strong>
                                    </h2>
                                    <div className='flex text-base mb-4'>
                                        <input className='dark:bg-gray-300 justify-between shadow appearance-none border rounded w-11/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Please enter your redeem code..' type={"text"} value={code} onChange={(e => setCode(e.target.value))} />
                                    </div>

                                    <Button variant='outline' type='submit'>Submit</Button>
                                </form>
                            </Grid.Col>
                        </Grid>
                        :
                        <Grid>
                            <Grid.Col sm={6}>
                                <QrReader
                                    delay={100}
                                    style={previewStyle}
                                    onError={handleError}
                                    onScan={handleScan}
                                />
                            </Grid.Col>
                            <Grid.Col sm={6}>
                                <Button variant='outline'>Redeem</Button>
                            </Grid.Col>
                        </Grid>
                }
            </div >
        </>



    )
}

export default PointRedeemed