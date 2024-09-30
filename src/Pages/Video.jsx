import { useParams } from 'react-router-dom';

function Video() {
    const { id } = useParams();
    
    return (
        <div className='w-full h-full bg-background'>
            <iframe
                width="450px"
                height="500"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                className='rounder-xl p-3'
            ></iframe>
        </div>
    );
}

export default Video;
