import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom'; // Add this

const Home = ({ username, setUsername, room, setRoom, socket }) => {
    const navigate = useNavigate(); // Add this

    const joinRoom = () => {
        if (room !== '' && username !== '') {
            socket.emit('join_room', { username, room });
        }
        navigate('/chat', { replace: true }); 

    };
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>{`<>ChatRooms</>`}</h1>
                <input className={styles.input} placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />

                <select className={styles.input} onChange={(e) => setRoom(e.target.value)}>
                    <option>-- Select phone --</option>
                    <option value='2543213773'>(254) 321-3773</option>
                    <option value='1111111111'>1111111111</option>
                    <option value='2222222222'>2222222222</option>
                    <option value='3333333333'>3333333333</option>
                </select>

                <button
                    className='btn btn-secondary'
                    style={{ width: '100%' }}
                    onClick={joinRoom} // Add this
                >
                    Join Room
                </button>

            </div>
        </div>
    );
};

export default Home;