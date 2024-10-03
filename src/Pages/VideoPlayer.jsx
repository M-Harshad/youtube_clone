import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiKey, ApiKey1 } from '../Data'; // Import your API key

const VideoPlayer = () => {
    const { id } = useParams(); // Get the video ID from the URL
    const [videoDetails, setVideoDetails] = useState(null);
    const [relatedVideos, setRelatedVideos] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchVideoDetails = async () => {
            setLoading(true); // Start loading
            try {
                const videoUrl = `https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet,statistics&key=${ApiKey}`;
                const response = await fetch(videoUrl);
                const data = await response.json();
                setVideoDetails(data.items);

                // Fetch related videos
                const relatedUrl = `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&type=video&part=snippet&key=${ApiKey}`;
                const relatedResponse = await fetch(relatedUrl);
                const relatedData = await relatedResponse.json();
                setRelatedVideos(relatedData.items);

                // Fetch comments
                const commentsUrl = `https://www.googleapis.com/youtube/v3/commentThreads?videoId=${id}&part=snippet&key=${ApiKey}`;
                const commentsResponse = await fetch(commentsUrl);
                const commentsData = await commentsResponse.json();
                setComments(commentsData.items || []); // Ensure it's an empty array if undefined
            } catch (error) {
                console.error('Error fetching video data:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchVideoDetails();
    }, [id]);

    if (loading) {
        return <p>Loading video details...</p>; 
    }

    if (!videoDetails) {
        return <p>Video not found.</p>; 
    }

    return (
        <div className="video-player">
            <h1>{videoDetails.snippet.title}</h1>
            <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <p>{videoDetails.snippet.title}</p>
            <p>{`${videoDetails.statistics.viewCount} views`}</p>
            <p>{`Likes: ${videoDetails.statistics.likeCount || 0}`}</p>
            
            <h2>Comments</h2>
            <div>
                {comments.length > 0 ? (
                    comments.map(comment => (
                        <div key={comment.id}>
                            <p><strong>{comment.snippet.topLevelComment.snippet.authorDisplayName}</strong></p>
                            <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                        </div>
                    ))
                ) : (
                    <p>No comments available.</p>
                )}
            </div>

            <h2>Suggested Videos</h2>
            <div className="related-videos">
                {relatedVideos.length > 0 ? (
                    relatedVideos.map(video => (
                        <div key={video.id.videoId}>
                            <h3>{video.snippet.title}</h3>
                            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                            <p>{video.snippet.channelTitle}</p>
                            <a href={`/video/${video.id.videoId}`}>Watch</a>
                        </div>
                    ))
                ) : (
                    <p>No related videos available.</p>
                )}
            </div>
        </div>
    );
};

export default VideoPlayer;
