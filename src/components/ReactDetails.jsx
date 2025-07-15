import React from "react";

const ReactDetails = () => (
  <section
    id="react-details"
    style={{
      color: "#e0e0e0",
      backgroundColor: "#0d0d0d",
      padding: "2rem",
      borderRadius: "12px",
      lineHeight: "1.7",
      fontFamily: "inherit",
    }}
  >
    <h1
      style={{
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        color: "#00e6f6",
        textShadow: "0 0 6px #00e6f6aa",
      }}
    >
      React.js Complete Guide
    </h1>

    <article>
      <h2>1. Introduction to React</h2>
      <p>React is a JavaScript library for building user interfaces. Developed by Facebook, it allows developers to create large web applications that can update and render efficiently in response to data changes.</p>
      <pre>{`import React from 'react';

function App() {
  return <h1>Hello, React!</h1>;
}`}</pre>

      <h2>2. React Components</h2>
      <pre>{`// Functional Component
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}`}</pre>
      <pre>{`// Class Component
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`}</pre>

      <h2>3. State Management with useState</h2>
      <pre>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</pre>

      <h2>4. Event Handling</h2>
      <pre>{`function ClickMe() {
  const handleClick = () => alert("Clicked!");
  return <button onClick={handleClick}>Click Me</button>;
}`}</pre>

      <h2>5. Conditional Rendering</h2>
      <pre>{`function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
}`}</pre>

      <h2>6. Lists and Keys</h2>
      <pre>{`const items = ['Apple', 'Banana', 'Cherry'];
function ItemList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`}</pre>

      <h2>7. Forms in React</h2>
      <pre>{`function MyForm() {
  const [name, setName] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    alert(name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}`}</pre>

      <h2>8. useEffect Hook</h2>
      <pre>{`useEffect(() => {
  document.title = "React App";
}, []);`}</pre>

      <h2>9. Lifecycle Methods</h2>
      <pre>{`class Timer extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => console.log('Tick'), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <h1>Timer Running...</h1>;
  }
}`}</pre>

      <h2>10. Lifting State Up</h2>
      <pre>{`function Parent() {
  const [data, setData] = useState('');
  return <Child data={data} onChange={setData} />;
}`}</pre>

      <h2>11. useRef Hook</h2>
      <pre>{`const inputRef = useRef();
<input ref={inputRef} />
<button onClick={() => inputRef.current.focus()}>Focus</button>`}</pre>

      <h2>12. useContext Hook</h2>
      <pre>{`const ThemeContext = React.createContext('light');
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}`}</pre>

      <h2>13. React Router</h2>
      <pre>{`import { BrowserRouter, Routes, Route } from 'react-router-dom';
<BrowserRouter>
  <Routes>
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>`}</pre>

      <h2>14. Styling in React</h2>
      <pre>{`const styles = { color: 'red' };
<h1 style={styles}>Styled Heading</h1>`}</pre>

      <h2>15. Fragments and Portals</h2>
      <pre>{`<> <h1>Title</h1> <p>Paragraph</p> </>`}</pre>

      <h2>16. Advanced Hooks</h2>
      <pre>{`const reducer = (state, action) => state + action;
const [state, dispatch] = useReducer(reducer, 0);`}</pre>

      <h2>17. Performance Optimization</h2>
      <pre>{`const MemoComponent = React.memo(({ value }) => <div>{value}</div>);`}</pre>

      <h2>18. Error Boundaries</h2>
      <pre>{`class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    // handle error
  }
  render() {
    return this.props.children;
  }
}`}</pre>

      <h2>19. State Management Libraries</h2>
      <pre>{`import { createStore } from 'redux';`}</pre>

      <h2>20. Data Fetching Libraries</h2>
      <pre>{`import useSWR from 'swr';
const { data } = useSWR('/api/data', fetcher);`}</pre>

      <h2>21. Testing in React</h2>
      <pre>{`test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});`}</pre>

      <h2>22. React DevTools</h2>
      <p>Use the browser extension to debug components and hooks.</p>

      <h2>23. React Server Components</h2>
      <pre>{`export default async function Page() {
  const data = await getData();
  return <div>{data}</div>;
}`}</pre>

      <h2>24. Next.js</h2>
      <pre>{`import Link from 'next/link';
<Link href="/about">About</Link>`}</pre>

      <h2>25. React Native</h2>
      <pre>{`import { Text, View } from 'react-native';
<View><Text>Hello</Text></View>`}</pre>

      <h2>26. SSR & SSG</h2>
      <pre>{`export async function getServerSideProps() {
  return { props: { data } };
}`}</pre>

      <h2>27. Accessibility (a11y)</h2>
      <pre>{`<button aria-label="Close menu">X</button>`}</pre>

      <h2>28. Internationalization (i18n)</h2>
      <pre>{`import { useTranslation } from 'react-i18next';
const { t } = useTranslation();
t('welcome');`}</pre>

      <h2>29. WebSockets & Real-time</h2>
      <pre>{`import { io } from 'socket.io-client';
const socket = io('http://localhost:3000');`}</pre>

      <h2>30. Authentication & Authorization</h2>
      <pre>{`const token = localStorage.getItem('jwt');
fetch('/protected', {
  headers: {
    Authorization: 'Bearer ' + token
  }
});`}</pre>
    </article>
  </section>
);

export default ReactDetails;
