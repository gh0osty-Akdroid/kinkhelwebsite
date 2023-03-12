import { Button, Grid } from '@mantine/core';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import ReactPhoneInput from "react-phone-input-2";
import { ErrorHandler, SuccessNotification } from '../components/ErrorNotification';
import { Title } from '../components/Header';
import { TokenUrl } from '../Url';

function Point() {


    const [data, setData] = useState("")
    const [list, setList] = useState([])
    const [display, setDisplay] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [refresh, setRefresh] = useState(false)


    useEffect(() => {
        Title("Points")
        TokenUrl().get('/points').then(res => {
            setData(res?.data?.data)
            setRefresh(false)
        }).catch((err) => {
            ErrorHandler(err)
        })

    }, [refresh])

    const handleDisplay = () => {
        display ? setDisplay(false) : setDisplay(true)
    }


    const Wait = () => {
        setTimeout(() => setDisabled(false), 60000)
    }

    return (
        <div id="mainbodygame">
            <div>
                <Grid grow className="p-5">
                    <Grid.Col span={6} >
                        <h2>
                            <strong> Total Remaining Points: </strong> {data.points}
                        </h2>
                        <Table striped bordered hover>
                            <thead >
                                <tr>

                                    <th scope="col" className="py-3 px-6">
                                        Date
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Points
                                    </th>

                                </tr>
                            </thead>
                            {
                                data?.PointsDetails?.length > 0 ?
                                    <tbody>
                                        {data?.PointsDetails.map((e, i) =>
                                            <tr key={i}>
                                                <td>
                                                    
                                                    {new Date(e.createdAt).toLocaleString()}
                                                </td>
                                                <td>
                                                    {e.points}
                                                </td>


                                            </tr>
                                        )}

                                    </tbody>
                                    : <p className='p-5'>No data has been found</p>
                            }



                        </Table>

                    </Grid.Col>
                    {display ?
                        <Grid.Col span={6}>
                            <PointTransfer setRefresh={setRefresh} Wait={Wait} setDisabled={setDisabled} setDisplay={setDisplay} />
                        </Grid.Col>
                        :
                        <Grid.Col span={6}>
                            <Button color={"gray"} onClick={handleDisplay} disabled={disabled}>Send Points</Button>
                        </Grid.Col>}

                </Grid>



            </div>
        </div>
    )
}

export default Point
    ;




const PointTransfer = ({ setRefresh, Wait, setDisabled, setDisplay }) => {

    const [point, setPoint] = useState("")
    const [phone, setPhone] = useState("")
    const [remarks, setRemarks] = useState("")


    const handleSendPoint = (e) => {
        e.preventDefault()
        TokenUrl().post('/transfer-points', { "point": point, "phone": phone, "remarks": remarks }).then(res => {
            setRefresh(true)
            setDisplay(false)
            setDisabled(true)
            Wait()
            SuccessNotification({ title: "Successffully Sent!", message: "Your point has been suessfully sent." })
        }).catch(err => {
            setDisplay(false)
            setDisabled(true)
            Wait()
            ErrorHandler(err)
        })
    }

    return (
        <>
            <form onSubmit={handleSendPoint}>
                <div className='flex text-base mb-2'>
                    Enter the phone you want to send:
                </div>
                <div className='flex text-base mb-4'>
                    <ReactPhoneInput
                        defaultCountry="pl"
                        searchClass="search-class"
                        value={phone}
                        onChange={(e) => setPhone(`+${e}`)}
                        enableSearchField
                        disableSearchIcon
                    />
                </div>
                <div className='flex text-base mb-2'>
                    Enter the point:
                </div>
                <div className='flex text-base mb-4'>
                    <input className='p-2' placeholder='Please enter your point.' type={"text"} value={point} onChange={(e => setPoint(e.target.value))} />
                </div>
                <div className='flex text-base mb-2'>
                    Enter the remarks :
                </div>
                <div className='flex text-base mb-4'>
                    <input className='p-2' placeholder='Please enter your remarks.' type={"text"} value={remarks} onChange={(e => setRemarks(e.target.value))} />
                </div>
                <p><Button type='submit' variant='outline'>Send</Button></p>
            </form>
        </>
    )
}