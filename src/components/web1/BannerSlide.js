import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Data =
{
  "scr1": "https://lh3.googleusercontent.com/XaU8tsmfxuET7PyAkAoQjaqOaf3_3MabSW7Ubikk0nEQ_zkufF4G-tNntz97t-rxDWted_HJzQ_b1zTu7uq6KnTcovLhHCg=w1920-rw",
  "scr2": "https://lh3.googleusercontent.com/RTBqos_JvpwSfbpLKPxdG4masUvz1LWBWBLR1kb4JWJGB8RtyRoMux8IFCnV4XHSEtAfSslBNh0RYMKd0zrCHT7qLSxjYoU=w1920-rw"
}

function BannerSlide () {
  return (
          <Carousel showThumbs={false} autoPlay={false}>
                  <div>
                      <img src="https://lh3.googleusercontent.com/Hcr2gO1gnBxs75UhdUHAv4LE1KiGIjgozFjcs3qsUMcVG9LWRHl7f8Lr37zJFogc3Z1paqtm4PtOOnwR738TxaPTK9jcqtCA=w1920-rw"/>
                      <p className="spaner-in">Xem ngay</p>
                  </div>
                  <div>
                      <img src={Data.scr1}/>
                      <p className="spaner-in">Xem ngay</p>
                  </div>
                  <div>
                      <img src={Data.scr2}/>
                      <p className="spaner-in">Xem ngay</p>
                  </div>
                  <div>
                      <img src="https://www.bhphotovideo.com/bimages/5815_Canon_hero.jpg"/>
                      <p className="spaner-in">Xem ngay</p>
                  </div>
                  <div>
                      <img src="https://lh3.googleusercontent.com/YvqnpA-5I_Tbn9-tl3yn-e0gm87uVjonrQ-QgM3SJKi2KMHticRftkDA6YAmhes6Qz9cM8c54Gwalm9zKIFqPsN4w1MpYcM5kA=w1920-rw"/>
                      <p className="spaner-in">Xem ngay</p>
                  </div>
                  <div>
                      <img src="https://lh3.googleusercontent.com/8olsObAxvk_Gf0AwJZ8WeQFAps3IcDigmN4eS3sZqi8nJPooSZokNsACzdDJ6PKOQgHoT7s42S28HVIpTSzpGp4v51FS51cb=w1920-rw"/>
                      <p className="spaner-in">Xem ngay</p>
                  </div>
          </Carousel>

  )
}

export default BannerSlide
