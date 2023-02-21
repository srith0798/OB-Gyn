import styled from 'styled-components'

const colors = {
  primary: '#566173',
  secondary: '#f79043',
  dark: '#293040',
  text: '#fce8d2',
  none: '#eef0f3',
  a: '#e9e9ea',
  b:'#161616'
}

const Header = styled.header`
  display:flex;
  padding:16px;
  h1{    
    font-size:1.2rem ;
    font-family: "Zeyada", cursive;
    color:#f79043;
  }
  nav{
    margin-left:auto;

  }
  `

function App() {
  return (
    <div className="App">
      <Header>
        <h1>OB GYNE CLINIC</h1>
        <nav>
          <ul>
            <li>connect</li>
          </ul>
        </nav>
      </Header>

    </div>
  );
}

export default App;
