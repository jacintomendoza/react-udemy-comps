import { GoBell, GoCloud, GoDatabase } from 'react-icons/go'
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button secondary rounded className="mb-5">
          <GoBell />
          Secondary
        </Button>
      </div>
      <div>
        <Button danger>
          <GoCloud />
          Danger
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Warning
        </Button>
      </div>
      <div>
        <Button secondary>4 btn</Button>
      </div>
      <div>
        <Button primary rounded>Something! </Button>
      </div>
    </div>
  );
}

export default App;