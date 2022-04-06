import type { NextPage } from 'next';
import Image from 'next/image';
import LazyRender from 'components/LazyRender';
import { useElementOnScreen } from 'helpers/useElementOnScreen';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const Home: NextPage = () => {
  const [videoRef, isVideoVisible] = useElementOnScreen({ threshold: 0.8 });
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <div className="">
      <LazyRender height="100vh">
        <div className="relative h-screen">
          <Image src="/bg.jpg" layout="fill" alt="Background 1" />
        </div>
      </LazyRender>
      <LazyRender height="100vh" threshold={0.3}>
        <div className="relative h-screen">
          <Image src="/bg2.jpg" layout="fill" alt="Background 1" />
        </div>
      </LazyRender>
      <LazyRender height="100vh" threshold={0.4}>
        <div className="relative h-screen">
          <Image src="/bg3.jpg" layout="fill" alt="Background 1" />
        </div>
      </LazyRender>
      <LazyRender height="100vh" threshold={0.5}>
        <div className="relative h-screen">
          <Image src="/bg4.jpg" layout="fill" alt="Background 1" />
        </div>
      </LazyRender>
      <LazyRender height="100vh" threshold={0.9}>
        <div className="relative h-screen">
          <Image src="/bg5.jpg" layout="fill" alt="Background 1" />
        </div>
      </LazyRender>
      {!isSSR && (
        <div ref={videoRef}>
          <ReactPlayer
            url="https://vimeo.com/693273538"
            playing={isVideoVisible}
            muted={true}
            height="100vh"
            width="100vw"
          />
        </div>
      )}
    </div>
  );
};

export default Home;
