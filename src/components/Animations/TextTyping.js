import React from 'react';
import './TextTyping.css';

function TextTyping() {
  return (
    <section className="text-typing-body">
      <div className="wrapper">
        <div className="static-text">I&apos;m a</div>
        <ul className="dynamic-text">
          <li>
            <span>Designer</span>
          </li>
          <li>
            <span>Developer</span>
          </li>
          <li>
            <span>Freelancer</span>
          </li>
          <li>
            <span>Youtuber</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default TextTyping;
