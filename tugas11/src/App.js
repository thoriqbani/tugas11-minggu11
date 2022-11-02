import logo from './logo.svg';
import './App.css';



function App() {

  return (

    <div className="cover">
      <div className="Parentbox">
        <div className="Foto">
          <img src="foto2.webp" />
        </div>
        <div className="Deskripsi">
          <h1 className="Cate">Samsung</h1>
          <h3 className="Title">HP terbaik Sedunia</h3>
          <p className="Info">
            Dari sisi performa, hp Samsung terbaru ini ditenagai prosesor Snapdragon 695 yang disokong RAM 6 GB lengkap bersama fitur RAM Plus (hingga 6 GB). Untuk ruang penyimpanan internal sebesar 128 GB yang bisa diperluas hingga 1 TB dengan microSD.
            Galaxy A23 5G turut dibekali empat kamera belakang yang terdiri dari lensa utama 50 MP, lensa ultrawide 5 MP, sensor depth 2 MP dan sensor macro 2 MP serta kamera selfie 5 MP.
            Hp Samsung ini mengusung layar Infinity-V Display berukuran besar 6,6 inci dengan resolusi tinggi Full HD+ serta refresh rate 120Hz. Dari sisi daya, Galaxy A23 5G telah dibekali dengan baterai besar 5.000 mAh dengan dukungan 25W Fast Charging.
          </p>
          <p>Color</p>
          <div className="warnaR">
            <button className="button2"></button>
            <button className="button3"></button>
            <button className="button4"></button>
          </div>
          <p>Type</p>
          <div className="type">
            <button className="bakso">Samsung A Series</button>
            <button className="bakso2">Samsung B Series</button>
            <button className="bakso3" link to="App2.">Samsung C Series</button>
          </div>
          <div className="deskripsi">
            <button href="#" className="button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App
