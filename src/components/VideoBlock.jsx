import { useState, useEffect, useRef } from "react";

function VideoBlock({ className = "", info }) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = info?.videos || [];
  const videoRefs = useRef([]);

  useEffect(() => {
    if (videos.length <= 1) return;

    const handleVideoEnd = () =>
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);

    const currentVideo = videoRefs.current[currentVideoIndex];
    if (currentVideo) {
      currentVideo.addEventListener("ended", handleVideoEnd);
      currentVideo.play();
      return () => currentVideo.removeEventListener("ended", handleVideoEnd);
    }
  }, [currentVideoIndex, videos.length]);

  if (!videos.length) return null;

  return (
    <div
      className={`${className} flex flex-col gap-4 justify-center items-center relative before:absolute before:inset-20 before:bg-gradient-to-b before:from-[#9560eb] before:to-[#3F1C7D] before:opacity-50 before:blur-[80px] before:rounded-full before:scale-75 before:-z-10`}
    >
      <div className="h-[382px] w-[200px] bg-[url('/img/phonemockup.webp')] bg-contain bg-no-repeat relative overflow-hidden max-h-[400px]">
        {videos.map((video, index) => (
          <video
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            src={video}
            autoPlay={index === currentVideoIndex}
            className={`absolute top-1/2 -translate-y-1/2 left-[47%] -translate-x-1/2 w-[170px] h-[365px] rounded-3xl transition-opacity duration-500 ${
              index === currentVideoIndex ? "opacity-100" : "opacity-0"
            }`}
            loop={videos.length === 1}
            muted
            playsInline
            preload="metadata"
          />
        ))}
      </div>
    </div>
  );
}

export default VideoBlock;
