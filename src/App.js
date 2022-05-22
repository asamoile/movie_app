import React from "react";
import PropTypes from 'prop-types';

const foodIlike = [
    {
        'id': 1,
        'name': 'борщ',
        'image': 'https://avatars.mds.yandex.net/get-zen_doc/3963198/pub_5f8d8997e0a7fe2ccae20ade_5f8d8a113f59f84e2c9060f4/scale_1200',
        'rating': 3.9
    },
    {
        'id': 2,
        'name': 'драники',
        'image': 'https://cdn.vkuso.ru/uploads/draniki-s-syrom-vetchinoj-i-ukropom-820.jpg',
        'rating': 3.2
    },
    {
        'id': 3,
        'name': 'стейк',
        'image': 'https://kartinkin.net/uploads/posts/2021-03/1617207926_45-p-steik-tibon-krasivo-58.jpg',
        'rating': 5.0
    },
    {
        'id': 4,
        'name': 'хинкали',
        'image': 'https://www.ermolino-produkty.ru/picts/products/12_P7220242.jpg',
        'rating': 2.9
    }
]
function Food({name, picture, rating}) {
    return (
        <div>
            <h3>Я люблю {name}!</h3>
            <h4>Рейтинг блюда: {rating} / 5 </h4>
            <img src={picture} width={200} alt="картинка"/>
            <hr width={800}/>
        </div>
    )
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

function renderFood(dish) {
    return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
}

function App() {
    return (
        <div>
            {foodIlike.map(renderFood)}
        </div>
    );
}

export default App;
