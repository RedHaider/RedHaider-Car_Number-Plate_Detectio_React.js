import '../style.css';
import Webcam from '../tools/Webcam';

const CarNumberPlate = () => {




    return ( 
        <div className='container mt-5'>
            <div className='row justify-content-center align-items-center min-vh-100'>
                <div className="col-md-4 text-center">
                    <h1>Number Plate</h1>
                    <Webcam />
                    <button type="button" className="btn btn-dark mt-3">Capture</button>
                    </div>
                <div className='col-md-8 text-center'>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Timestamp</th>
                        <th scope="col">Number Plate</th>
                        <th scope="col">Car</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>2024-07-26 10:00:00</td>
                        <td>
                            <img src="path/to/car1.jpg" alt="Car 1" width="100" height="75" />
                        </td>
                        <td>
                            <img src="path/to/car1.jpg" alt="Car 1" width="100" height="75" />
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>2024-07-26 10:15:00</td>
                        <td>
                            <img src="path/to/car1.jpg" alt="Car 1" width="100" height="75" />
                        </td>
                        <td>
                            <img src="path/to/car2.jpg" alt="Car 2" width="100" height="75" />
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>2024-07-26 10:30:00</td>
                        <td>
                            <img src="path/to/car1.jpg" alt="Car 1" width="100" height="75" />
                        </td>
                        <td>
                            <img src="path/to/car3.jpg" alt="Car 3" width="100" height="75" />
                        </td>
                        </tr>
                    </tbody>
                    </table>


                </div>
            </div>
        </div>

     );
}
 
export default CarNumberPlate;