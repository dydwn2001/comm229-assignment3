
import profilePic from '../src/assets/me.jpg'

export default function About()
{
    return(
        <div className="card">
            <img className="card-image" alt="profile picture" src={profilePic}></img>
            <h2 className="card-title">Yongju Lee</h2>
            <p className="card-text">coding master</p>

        </div>
    );

}
