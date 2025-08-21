function VideoBlock({ className = "", info }) {
  return (
    <>
      <div className={`${className} flex flex-col gap-4 justify-center items-center relative before:absolute before:inset-1 before:bg-gradient-to-b before:from-[#9560eb] before:to-[#3F1C7D] before:opacity-50 before:blur-[80px] before:rounded-full before:scale-75 before:-z-10`}>
        <div className="h-[382px] w-[200px] bg-[url('/img/phonemockup.png')] bg-contain bg-no-repeat relative overflow-hidden max-h-[400px]">
          {info?.videos?.map((video, index) => (
            <video
              key={index}
              src={video}
              autoPlay
              className="absolute top-1/2 -translate-y-1/2 left-[47%] -translate-x-1/2 w-[170px] h-[365px] rounded-3xl"
              loop
              muted
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default VideoBlock;
