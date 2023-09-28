import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer"
import { UserButton } from "@clerk/nextjs/app-beta";
import reis from "./reis.png"
import search from "./search.png"
import cart from "./cart.png"
import menu from "./menu.png"
import React from 'react'


export default function page() {
  return (
    <div>
      <header className="header">
        <Link href="/" className="logo"><Image src={reis} alt="yildirim bilisim hizmetleri" width={200} height={200} /></Link>

        <ul className="navmenu">
          <li><Link href="#">Anasayfa</Link></li>
          <li><Link href="#">Ikinci el masaustu</Link></li>
          <li><Link href="#">Diger urunler</Link></li>
          <li><Link href="#">Teknik destek</Link></li>
          <li><Link href="#">Iletisim</Link></li>
        </ul>

        <div className="navicon">
          <Link href="./search"><Image className="a" src={search} alt="search" /></Link>
          <Link href="#"><Image className="a" src={cart} alt="cart" /></Link>
          <div className="a"><UserButton afterSignOutUrl="/" /></div>
          <div className="leftSidebar" id="sidebar">
            <ul>
              <li><a href="#">Anasayfa</a></li>
              <li><a href="#">Babasayfa</a></li>
            </ul>
          </div>
        </div>
      </header>
      <div className="mainhome">

        <div className="maintext">
          <h1 className="indirim">En uygun fiyatla</h1><br />
          <h1> ikinci el masaustu </h1>
          <h1>bilgisayarlar</h1><br />
          <p>Ayni gun icinde kargoda</p><br />
          <button><Link href="#">Haftanin en ucuzu <i className='bx bx-right-arrow-circle'></i></Link></button><br />
        </div>

        <div className="tables" >
          <div className="x1">pc1</div>
          <div className="x1">pc2</div>
          <div className="x1">pc3</div>
          <div className="x1">pc4</div>
          <div className="x1">pc5</div>
          <div className="x1">pc6</div>
        </div>
      </div>

      <Footer />

    </div>
  )
}
