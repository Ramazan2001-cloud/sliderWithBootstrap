import 'bootstrap/dist/css/bootstrap.css';
import Slider from './sliders';
import {useEffect} from 'react';

// Интегрировал Bootstrap с помощью этой статьи 
// https://dev.to/anuraggharat/adding-bootstrap-to-nextjs-39b2


// 

const App = () => {
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[]);
    return (
        <h1>
            <Slider/>
        </h1>
    )
}
export default App;
