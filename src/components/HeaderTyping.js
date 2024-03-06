import React from 'react';
import Typed from 'typed.js';

function HeaderTyping() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['to end poverty^1000', 'to reduce inequalities^1000', 'to tackle climate change^1000'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

export default HeaderTyping