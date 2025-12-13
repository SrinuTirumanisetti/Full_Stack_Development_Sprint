import { useEffect, useState } from 'react';

function ResizeAwareComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    console.log("Listener added");
    window.addEventListener('resize', handleResize);

    return () => {
      console.log("cleanup listener removed");
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log("rendered");

  return (
    <div>
      <h1>Resize Aware Component</h1>
      <p>Window Width: {windowWidth}</p>
    </div>
  );
}

export default ResizeAwareComponent;
