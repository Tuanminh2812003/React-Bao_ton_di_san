import './App.css';
import { Route, Routes } from 'react-router-dom';
import QTDTCDH from './Layouts/QTDTCDH';
import QTDTTA from './Layouts/QTDTTA';
import HTTL from './Layouts/hoangthanhthanglong';
import HHSTD from "./Layouts/hoanghoasutrinhdo";
import DSTNH from "./Layouts/disanthanhnhaho";
import VHL from "./Layouts/vinhhalong";
import MBTN from "./Layouts/mocbantrieunguyen";
import NNCDH from "./Layouts/nhanhaccungdinhhue";
import KGVHCC from "./Layouts/khonggianvanhoacongchieng";
import VQG from "./Layouts/vuonquocgia";
import TDMS from "./Layouts/thanhdiamyson";
import TNTCHV from "./Layouts/tinnguongthocunghungvuong";
import DCTT from "./Layouts/doncataitu";
import HN from "./Layouts/hanoi";
import PT from "./Layouts/phutho";
import NB from "./Layouts/ninhbinh";
import TH from "./Layouts/thanhoa";
import H from "./Layouts/hue";
import Home from './Layouts/Home';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doibatsuvenhieumau' element={<QTDTTA/>}/>
        <Route path='/ngoctrangthaibinhhuutuong' element={<HTTL/>}/>
        <Route path='/duabobaynui' element={<HHSTD/>}/>
        <Route path='/tuongdongthantai' element={<DSTNH/>}/>
        <Route path='/amdiemtinh' element={<VHL/>}/>
        <Route path='/nhungnguoithuanthu' element={<MBTN/>}/>
        <Route path='/troxuanpha' element={<NNCDH/>}/>
        <Route path='/lecapsaccuanguoidaotuyen' element={<KGVHCC/>}/>
        <Route path='/binhphaplam' element={<VQG/>}/>
        <Route path='/trove' element={<TDMS/>}/>
        <Route path='/santuyet' element={<TNTCHV/>}/>
        <Route path='/muarong' element={<DCTT/>}/>

        <Route path='/hanoi' element={<HN/>}/>
        <Route path='/phutho' element={<PT/>}/>
        <Route path='/ninhbinh' element={<NB/>}/>
        <Route path='/thanhhoa' element={<TH/>}/>
        <Route path='/hue' element={<H/>}/>
      </Routes>
    </>
  );
}

export default App;
