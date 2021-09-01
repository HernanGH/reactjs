import {useEffect,useState} from 'react';
// import CircularProgress from '@material-ui/core/CircularProgress';
import { Spin } from 'antd';

function Load({ loading }){

    return (
      <>
        {loading !== false ? <Spin/> : <h2>No cargado</h2>}
      </>
    );

} 
function Loader({loading}) {

    const [load, setLoad] = useState(false);

    useEffect(() => {
        setTimeout(()=>{
            setLoad(true);
        },3000)
    }, [])


    return (
        <div>
            <Load loading={load}/>
        </div>
    )
}

export default Loader;