function Food({name, picture}) {
    // console.log(name)
    return (
        <div>
            <h3>Я люблю {name}! <br/> </h3>
            <img src={picture} width={200} alt="картинка"/>
        </div>
    )
}

const foodIlike = [
    {
        'name': 'борщ',
        'image': 'https://avatars.mds.yandex.net/get-zen_doc/3963198/pub_5f8d8997e0a7fe2ccae20ade_5f8d8a113f59f84e2c9060f4/scale_1200'
    },
    {
        'name': 'драники',
        'image': 'https://cdn.vkuso.ru/uploads/draniki-s-syrom-vetchinoj-i-ukropom-820.jpg'
    },
    {
        'name': 'стейк',
        'image': 'https://kartinkin.net/uploads/posts/2021-03/1617207926_45-p-steik-tibon-krasivo-58.jpg'
    },
    {
        'name': 'хинкали',
        'image': 'https://www.ermolino-produkty.ru/picts/products/12_P7220242.jpg'
    }
]

function renderFood(dish) {
    return <Food name={dish.name} picture={dish.image} />
}

function App() {
    return (
        <div>
            <h1>Hello React</h1>
            {/*{foodIlike.map(dish => <Food name={dish.name} picture={dish.image} />)}*/}
            {foodIlike.map(renderFood)}
        </div>
    );
}

export default App;
