import './style.css'

export const AdvancedPseudo = () => {
  return (
    <body>
      <div className="container">
        <a className='a' href="http://google.com" target="_blank">
          Click me to open google
        </a>
        <br />
        <a className='a' href="http://twitter.com" target="_self">
          Click me to open twitter
        </a>
        <br />

        <form action="" className="form-control">
          <input className='input'
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <input className='input'
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <input className='input' type="submit" value="Submit" />
        </form>
        <ul>
          <li className="item li" id="item-1">
            Item 1
          </li>
          <li className="item li" id="item-2">
            Item 2
          </li>
          <li className="item li" id="item-3">
            Item 3
          </li>
          <li className="item li" id="item-4">
            Item 4
          </li>
          <li className="item li" id="item-5">
            Item 5
          </li>
          <li className="item li" id="item-6">
            Item 6
          </li>
        </ul>
      </div>
    </body>
  );
};
