import gbr from './assets/gb1.jpg';

function App() {
  return (
    <div>
      <div class="hero min-h-screen bg-gradient-to-r from-fuchsia-600 to-pink-600">
        <div class="hero-content text-center">
          <div class="max-w-md backdrop-blur-sm bg-white/30 rounded-lg">
            <div className="flex justify-center">
              <img
                src={gbr}
                alt="gambar"
                className='w-52 mask mask-heart animate-pulse flex justify-center my-5'
              />
            </div>
            <h1 class="text-xl font-bold font-mono text-white">Happy birthday Sheena!</h1>
            <p class="m-5 text-white font-serif">Happy birthday Sheena! Wishing you have a long and healthy life full of joy and happiness.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
