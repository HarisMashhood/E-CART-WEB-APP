import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home"> 
           <div className="home__container">
               <img className="home__image" src="https://media.istockphoto.com/photos/abstract-blue-background-empty-blue-gradient-room-studio-background-picture-id1315778698?b=1&k=20&m=1315778698&s=170667a&w=0&h=72n09-pFKW8e9C9TPGvD0Hu7UOlNhG74pYHuLzuroSE="
               alt=""/>
               <h1 className='home__category'>Mobile Phones</h1>
               <div className="home__row">
                   <Product id="18560909"title='Apple iPhone 11 (64GB) - Black' price={29.99} image='https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg'rating={5}/>
                   <Product id="89789678" title="realme narzo 50i (Carbon Black, 4GB RAM+64GB Storage) - with No Cost EMI/Additional Exchange Offers" price={45.66} image='https://m.media-amazon.com/images/I/71djAn3nxoL._SL1500_.jpg' rating={4}/>
                   <Product id="00034657" title="OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)" price={98.78} image='https://m.media-amazon.com/images/I/71LRBr1aLNS._SL1500_.jpg' rating={5} />
                   <Product id="12435356" title="OnePlus 9 5G (Winter Mist, 12GB RAM, 256GB Storage)" price={34.76} image='https://images-eu.ssl-images-amazon.com/images/I/417uExCG6KL._SX300_SY300_QL70_FMwebp_.jpg' rating={4} />
               </div>
               <div className='home__row'>
                   <Product id="7389563" title='Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers' price={43.87} image='https://images-eu.ssl-images-amazon.com/images/I/41ezRvTwcaL._SX300_SY300_QL70_FMwebp_.jpg' rating={4} />
                   <Product id="17283678" title='iQOO Z5 5G (Cyber Grid, 12GB RAM, 256GB Storage) | Snapdragon 778G 5G Processor | 5000mAh Battery | 44W FlashCharge' price={43.87} image='https://images-eu.ssl-images-amazon.com/images/I/41pKYw+gMfL._AC_SX184_.jpg' rating={5} />
                   <Product id="12343276" title='Tecno Spark 8T (Turquoise Cyan,4GB RAM, 64GB Storage)| 50MP AI Camera | 6.6" FHD+Display | 5000mAh' price={33.89} image='https://images-eu.ssl-images-amazon.com/images/I/41BaLQSvq2L._SX300_SY300_QL70_FMwebp_.jpg' rating={3} />
                   <Product id="9768678" title='I KALL K260 Smarthone (5.5 Inch, 2GB, 16GB, 4G Volte, Dual Sim) (Blue) Model Number:Blue' price={49.96} image='https://m.media-amazon.com/images/I/613UfpyJn3L._SL1294_.jpg' rating={2} />
               </div>
               <div className='home__row'>
                   <Product id='12670009' title='2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 512GB) - Silver (3rd Generation)' price={99.99} image='https://m.media-amazon.com/images/I/71YxgZu73mL._AC_UL480_FMwebp_QL65_.jpg' rating={5}/> 
                   <Product id='00089687' title='Lenovo Tab M10 FHD Plus (2nd Gen) (10.3 inch/26.6 cm, 4 GB, 128 GB, Wi-Fi+ LTE) with Active Pen' price={87.67} image='https://m.media-amazon.com/images/I/71w6BjcLa6L._AC_UL480_FMwebp_QL65_.jpg' rating={4}/> 
               </div>
               <div className='home__row'>
               <Product id="12895609" title="iQOO Z5 5G (Mystic Space, 8GB RAM, 128GB Storage) | Snapdragon 778G 5G Processor | 5000mAh Battery | 44W FlashCharge" price={34.76} image='https://m.media-amazon.com/images/I/71wevQRS5qL._SL1196_.jpg' rating={4} /> 
               </div>
               <h1 className='home__category'>Acesssories</h1>
               <div className="home__row">
               <Product id="4903850" title="Samsung 24 inch (60.1 cm) LED Flat Computer Monitor - Full HD, Super Slim AH-IPS Panel - LF24T352FHWXXL, Dark Blue Gray" price={199.99} image='https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg' rating={3}/>
               <Product id="23445930" title="Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (Blue)" price={98.99} image='https://m.media-amazon.com/images/I/61VMT8H7RvL._SL1000_.jpg' rating={4}/>
               <Product id="3254354345" title="Trajectory Neck Pillow with Sleeping Eye mask and Earphone Case Travel headrest Accessories in Grey with 10 Years Warranty for Plane Flight Bus and Office for Men and Women" price={589.99} image='https://m.media-amazon.com/images/I/81PmMIK6D9L._AC_UL480_FMwebp_QL65_.jpg' rating={5}/>
               </div>
               <div className='home__row'>
                   <Product id="6589375" title="BMC Wireless Bluetooth Sunglasses for Men Headphones with Polarized Lenses and Stereo Sound Feature Compatible with All Smartphones, iOS and Windows Device (Black)" price={34} image="https://m.media-amazon.com/images/I/41ksIS10swL._AC_UL480_FMwebp_QL65_.jpg" rating={3} />
                   <Product id="7354427" title="Hornbull Taylor Navy/Mud Mens Leather Wallet | Leather Wallet for Mens | Valentine Gift Hamper" price={67} image="https://m.media-amazon.com/images/I/71nPtae7bpL._AC_UL480_FMwebp_QL65_.jpg" rating={2} />
                   <Product id="9374653" title="5 O' CLOCK SPORTS Men's Combo of FCB Leather Gym Bag, Gloves and Spider Shake Fitness Kit Accessories (Blue)" price={98} image="https://m.media-amazon.com/images/I/71xuaeg0lIL._AC_UL480_FMwebp_QL65_.jpg" rating={4} />
               </div>
               <div className='home__row'>
                   <Product id="626474" title="Proniks Sunglass,Watches with Accessories storage Box for Men and Women with 6pcs watch and 4pcs sunglass storage compartment" price={36} image="https://m.media-amazon.com/images/I/71ZuMml70DL._AC_UL480_FMwebp_QL65_.jpg" rating={3} />
                   <Product id="0387847" title="Mahi Classic Combo of Eagle and Lion Face Lapel Pin/Brooch for Men CO1104989M" price={55} image="https://m.media-amazon.com/images/I/714mSvjLOJL._AC_UL480_FMwebp_QL65_.jpg" rating={2} />
                   <Product id="2637485" title="House of Quirk Hanging Travel Toiletry Bag, Waterproof Dopp Kit for Shaving Makeup Accessories, Men Cosmetic Organizer with Large Capacity" price={33} image="https://m.media-amazon.com/images/I/61Y8JkfZS8L._AC_UL480_FMwebp_QL65_.jpg" rating={5} />
               </div>
               <div className="home__row">
               <Product id="654324567" title="Acer Predator Helios 300 PH315-54-760S Gaming Laptop | Intel i7-11800H | NVIDIA GeForce RTX 3060 Laptop GPU | 15.6 Full HD 144Hz 3ms IPS Display" price={159.86} image='https://m.media-amazon.com/images/I/71Nly9vPapL._AC_SL1500_.jpg' rating={4}/>
               
               <Product id="14523423" title="AmazonBasics 564 L Side-by-Side Door Refrigerator (Silver Steel Finish)" price={29.65} image='https://m.media-amazon.com/images/I/71DuofqGR8L._SL1500_.jpg' rating={2} />
               </div>
               <h1 className='home__category'>Clothing</h1>
               <div className='home__row'>
                   <Product id='6364742' title="Allen Solly Men's Jacket" price={43} image='https://m.media-amazon.com/images/I/61mGSAIep+L._AC_UL480_FMwebp_QL65_.jpg' rating={4}/>
                   <Product id='88888763' title="YOONIKK Men's Solid Bomber Jacket" price={32} image='https://m.media-amazon.com/images/I/41qcSPCgosL._AC_UL480_FMwebp_QL65_.jpg' rating={3}/>
                   <Product id='66374741' title="Leather Retail® Mens Solid Designer Faux Leather Jacket Black" price={66} image='https://m.media-amazon.com/images/I/51mP0GQRo+L._AC_UL480_FMwebp_QL65_.jpg' rating={3}/>
               </div>
               <div className='home__row'>
                   <Product id='6383940' title="https://m.media-amazon.com/images/I/61QwMfrVbaL._AC_UL480_FMwebp_QL65_.jpg" price={24} image='https://m.media-amazon.com/images/I/61QwMfrVbaL._AC_UL480_FMwebp_QL65_.jpg' rating={3}/>
                   <Product id='089088' title="Amazon Brand - Inkast Denim Co. Men's Slim Fit Casual Shirt" price={98} image='https://m.media-amazon.com/images/I/81EldXaltNL._AC_UL480_FMwebp_QL65_.jpg' rating={4}/>
                   <Product id='8978671' title="IndoPrimo Men's Slim Fit Casual Shirt" price={35} image='https://m.media-amazon.com/images/I/61RqedeafJL._AC_UL480_FMwebp_QL65_.jpg' rating={2}/>
               </div>
               <div className='home__row'>
                   <Product id='8487373' title="Diverse Men Jeans" price={23} image='https://m.media-amazon.com/images/I/81r+aNWSP-L._AC_UL480_FMwebp_QL65_.jpg' rating={4}/>
                   <Product id='0298364' title="Amazon Brand - House & Shields mens Jeans" price={52} image='https://m.media-amazon.com/images/I/81l34bcqs4L._AC_UL480_FMwebp_QL65_.jpg' rating={3}/>
                   <Product id='4787434' title="Amazon Brand - Symbol Men's Relaxed Fit Casual Trousers" price={21} image='https://m.media-amazon.com/images/I/71x7GlmKk5L._AC_UL480_FMwebp_QL65_.jpg' rating={2}/>
               </div>
           </div>
        </div>
    )
}

export default Home
