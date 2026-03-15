import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", backgroundColor: "black" }}>
      
      {/* ৩ডি ব্যাকগ্রাউন্ড (আপনার আগের করা ৩ডি কোড এখানে বসবে) */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} autoRotate />
        {/* এখানে আপনার Earth বা Moon এর Component বসিয়ে দিন */}
      </Canvas>

      {/* ভিডিও লেয়ার (আপনার ইউটিউব লাইভটি এখানে দেখাবে) */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        width: "60%",
        height: "70%",
        zIndex: 10,
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 0 20px rgba(0,255,255,0.5)"
      }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/8dDtGGVa2W0?autoplay=1&mute=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* সাইডবার চ্যাট বা ইনফো */}
      <div style={{
        position: "absolute",
        top: "10%",
        right: "5%",
        width: "25%",
        color: "white",
        zIndex: 10
      }}>
        <h1>Advoot TV Live</h1>
        <p>Exploring the 3D Universe in Real-time.</p>
        {/* ইউটিউব লাইভ চ্যাট এম্বেড করার কোড এখানে দিতে পারেন */}
      </div>

    </div>
  );
}

export default App;