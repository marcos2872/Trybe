import Image from './Image'
import cats from './cat.jpg'

function App() {
  return (
    <>{
      <Image source = {cats} alternativeText= 'Cute cat staring' />
    }</>
  );
}

export default App;
