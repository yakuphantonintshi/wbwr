interface VideoInDivProps {
  videoUrl: string;
}

const VideoInDiv: React.FC<VideoInDivProps> = ({ videoUrl }) => {
  return (
    <video key={videoUrl} autoPlay muted loop className="w-full h-auto">
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoInDiv;
