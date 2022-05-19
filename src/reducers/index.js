const initialState = {
    gifData: [ {
        "type": "gif",
        "id": "xT0xeuOy2Fcl9vDGiA",
        "url": "https://giphy.com/gifs/dogs-puppy-confused-xT0xeuOy2Fcl9vDGiA",
        "slug": "dogs-puppy-confused-xT0xeuOy2Fcl9vDGiA",
        "bitly_gif_url": "http://gph.is/2BFd19i",
        "bitly_url": "http://gph.is/2BFd19i",
        "embed_url": "https://giphy.com/embed/xT0xeuOy2Fcl9vDGiA",
        "username": "",
        "source": "https://www.youtube.com/watch?v=3gV3cNaEIlM",
        "title": "Puppy Reaction GIF by MOODMAN",
        "rating": "g",
        "content_url": "",
        "source_tld": "www.youtube.com",
        "source_post_url": "https://www.youtube.com/watch?v=3gV3cNaEIlM",
        "is_sticker": 0,
        "import_datetime": "2017-12-07 04:35:21",
        "trending_datetime": "2021-05-19 04:45:11",
        "images": {
            "original": {
                "height": "480",
                "width": "480",
                "size": "5565285",
                "url": "https://media2.giphy.com/media/xT0xeuOy2Fcl9vDGiA/giphy.gif?cid=385a87d4nhnoc690rafmml1jt42gsizcrc8rp9cfot4jyfva&rid=giphy.gif&ct=g",
                "mp4_size": "334640",
                "mp4": "https://media2.giphy.com/media/xT0xeuOy2Fcl9vDGiA/giphy.mp4?cid=385a87d4nhnoc690rafmml1jt42gsizcrc8rp9cfot4jyfva&rid=giphy.mp4&ct=g",
                "webp_size": "904746",
                "webp": "https://media2.giphy.com/media/xT0xeuOy2Fcl9vDGiA/giphy.webp?cid=385a87d4nhnoc690rafmml1jt42gsizcrc8rp9cfot4jyfva&rid=giphy.webp&ct=g",
                "frames": "69",
                "hash": "e42fd33b01ca5a5542f8d14a5895647a"
            }
          }
        }
    ],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default reducer
