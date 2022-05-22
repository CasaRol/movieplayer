import React from 'react'
import { useNavigate } from 'react-router-dom'

interface myProps {
    videoId: string,
    videoTitle: string,
    videoImg: string,
    videoDescription: string
}
const VideoCard: React.FC<myProps> = (props) => {

    const navigate = useNavigate();

    const goToVideo: any = () => {
        navigate('/watch?vidId=' + props.videoId)
    }

    return (
        <div className="border border-dark m-2 p-2 rounded" style={{ width: "20rem" }} onClick={() => { goToVideo(props.videoId) }} >
            <div className="">
                <img className="img-fluid border border-dark rounded" src={"./" + props.videoImg} alt="VideoImage" />
            </div>
            <h4><strong>{props.videoTitle}</strong></h4>
            <p className="opacity-75">{props.videoDescription}</p>
        </div>
    )

}

export default VideoCard