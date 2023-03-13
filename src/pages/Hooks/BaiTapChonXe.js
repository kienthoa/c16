import React, {useState} from 'react'

export default function BaiTapChonXe() {

    let [stateImg, setImg] = useState({
        imgSrc: './img/car/products/black-car.jpg'
    })

    const changeColor = (color) => {

        setImg({
            imgSrc: `./img/car/products/${color}-car.jpg`
        })

    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-6">
                    <img className="w-100" src={stateImg.imgSrc} />
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-4">
                            Red car
                            <div className="rounded-circle w-50" onClick={() => {
                                changeColor('red')
                            }} style={{ background: 'red', color: 'white' }}>
                                <img className="w-100  rounded-circle" src="./img/car/icons/icon-red.jpg" />
                            </div>
                        </div>
                        <div className="col-4">
                            Silver car
                            <div className="rounded-circle w-50" onClick={() => {
                                changeColor('silver')
                            }} style={{ background: 'grey' }}>
                                <img className="w-100  rounded-circle" src="./img/car/icons/icon-silver.jpg" />
                            </div>
                        </div>
                        <div className="col-4">
                            Black car
                            <div className="rounded-circle w-50" onClick={() => {
                                changeColor('black')
                            }} style={{ background: 'black', color: 'white' }}>
                                <img className="w-100  rounded-circle" src="./img/car/icons/icon-black.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
