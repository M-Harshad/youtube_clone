import PropTypes from "prop-types";
import { useGlobalState } from "../GlobalState";
import { ApiKey, ApiKey1 } from "../Data";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
    const [data, setData] = useState([]);
    const { expand, setExpand } = useGlobalState();

    const fetchData = async () => {
        const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=20&key=${ApiKey1}`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result.items); // Safely set data
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
      <main className={`grid ${expand ? "grid-cols-4 grid-rows-5" : "grid-cols-5 grid-rows-4"} gap-4 p-4 w-full box-border bg-background`}>
      {data.map(video => (
          <NavLink key={video.id} to={`/video/${video.id}`} className={`${expand ? "w-[270px] h-[280px]" : "w-[240px] h-[280px]"} bg-background rounded-xl flex flex-col mb-4 overflow-hidden`}>
              <div className="bg-green-600 w-full h-[180px] rounded-xl relative mb-4">
                  <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} className="w-full h-[180px] object-cover rounded-xl" />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                      {video.contentDetails.duration.replace('PT', '').toLowerCase()} {/* Format duration */}
                  </div>
              </div>
              <div className="grid grid-cols-[50px_1fr] p-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-400">
                      <img src={video.snippet.thumbnails.default.url} alt={video.snippet.channelTitle} className="w-full h-full rounded-full" />
                  </div>
                  <div>
                      <p className="ml-2 overflow-hidden text-ellipsis whitespace-nowrap text-text">
                          {video.snippet.title}
                      </p>
                      <p className="ml-2 text-text">{video.snippet.channelTitle}</p>
                      <p className="ml-2 text-text">{`${video.statistics.viewCount} views`}</p>
                      <p className="ml-2 text-text">{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
                  </div>
              </div>
          </NavLink>
      ))}
  </main>
    );
    
  
};

NavigationBar.propTypes = {
    expand: PropTypes.bool.isRequired,
};

export default NavigationBar;
