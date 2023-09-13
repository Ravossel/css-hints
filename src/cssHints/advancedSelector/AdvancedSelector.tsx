import './style.css'

export const AdvancedSelector = () => {
  return (
    <body>
      <h2 className='h2'>That's a simple h2</h2>
      <h2 className='h2'>Another h2 tag</h2>

      <div className="container div">
        <div className="content div">
          <ul>
            <li className="item li">
              <p className='p'>Paragraph inside li tag of content</p>
            </li>
          </ul>
          <p className='p'>Inner Content paragraph</p>
        </div>
        <p className='p'>Outside Content paragraph</p>
      </div>
      <p className='p'>Outside Container paragraph</p>
    </body>
  );
};
