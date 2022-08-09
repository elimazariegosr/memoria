import { useState } from 'react'
import Card from './Card'

function Cards(){
    const [items, setItems] = useState([
        { id: 1, img: '/img/barca.png', stat: "" },
        { id: 1, img: '/img/barca.png', stat: "" },
        { id: 2, img: '/img/levante.png', stat: "" },
        { id: 2, img: '/img/levante.png', stat: "" },
        { id: 3, img: '/img/madrid.png', stat: "" },
        { id: 3, img: '/img/madrid.png', stat: "" },
        { id: 4, img: '/img/municipal.png', stat: "" },
        { id: 4, img: '/img/municipal.png', stat: "" },
        { id: 5, img: '/img/guastatoya.png', stat: "" },
        { id: 5, img: '/img/guastatoya.png', stat: "" },
        { id: 6, img: '/img/tigres.png', stat: "" },
        { id: 6, img: '/img/tigres.png', stat: "" },
        { id: 7, img: '/img/toros.png', stat: "" },
        { id: 7, img: '/img/toros.png', stat: "" },
        { id: 8, img: '/img/xinabajul.png', stat: "" },
        { id: 8, img: '/img/xinabajul.png', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "1"
            items[prev].stat = "1"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "0"
            items[prev].stat = "0"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "visible"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}

export default Cards