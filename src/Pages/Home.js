import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { getData } from '../Redux/Action/User';
import { useSelector } from 'react-redux';

function Home() {


    const dispatch = useDispatch();

    const { isLoading, data } = useSelector((store) => ({isLoading: store?.Saga?.loading,data:store?.Saga?.data}));

    console.log("K",isLoading);


    useEffect(() => {
        dispatch(getData())
    }, []);

    console.log("Data", data);


    return (
        <div>
            {isLoading ? "Loading" :
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((i) => (
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td>{i.completed}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>}
        </div>
    );
}

export default Home;