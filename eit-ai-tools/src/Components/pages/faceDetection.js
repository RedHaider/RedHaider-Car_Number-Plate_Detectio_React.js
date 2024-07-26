import '../style.css';
import Webcam from '../tools/Webcam';

const FaceDetection = () => {
    return ( 
        <div className='container mt-5'>
            <div className='row justify-content-center align-items-center min-vh-100'>
                <div className="col-md-4 text-center">
                    <h1>Attendence</h1>
                    <Webcam />
                    <button type="button" className="btn btn-dark mt-3">Capture</button>
                </div>
                <div className='col-md-8 text-center'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Shakhawat</td>
                            <td>2024-07-26 10:15:00</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>John Doe</td>
                            <td>2024-07-26 11:00:00</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Jane Smith</td>
                            <td>2024-07-26 11:30:00</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Michael Johnson</td>
                            <td>2024-07-26 12:00:00</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Emily Davis</td>
                            <td>2024-07-26 12:45:00</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>

     );
}
 
export default FaceDetection;