const products = [
    {
        "id": "1",
        "title": "BUTTERFLY",
        "description": "Кроссовки BUTTERFLY Lezoline Vilata",
        "price": 9400,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 940,
        "brand": "Кроссовки",
        "category": "Кроссовки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/239/516e9o5gx6nrwza25bnrn81wghr80pqz.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/d8d/h8sm5zncrbp0njz4hs5i6dk1z3fetm18.png",
            "https://www.vistasport.ru/upload/iblock/6e9/eu54uon3ffj5t3glpvtr8ox56653ls9d.png",
            "https://www.vistasport.ru/upload/iblock/239/516e9o5gx6nrwza25bnrn81wghr80pqz.png"
        ]
    },
    {
        "id": "2",
        "title": "Mizuno",
        "description": "Кроссовки Mizuno RB87",
        "price": 10000,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Кроссовки",
        "category": "Кроссовки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/2b6/odo87kqzdw3ajahjhxtbxcfnf069x8j3.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/3be/0k1jn9r2j3dm6uqvpo1fgq0cl704ynmd.png",
            "https://www.vistasport.ru/upload/iblock/da8/y7xtg2u7eo3887z9wsh6vd7lp9f3mjfe.png",
            "https://www.vistasport.ru/upload/iblock/2b6/odo87kqzdw3ajahjhxtbxcfnf069x8j3.png"
        ]
    },
    {
        "id": "3",
        "title": "Mizuno",
        "description": "Кроссовки Mizuno Wave Drive 9 (2024)",
        "price": 13990,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Кроссовки",
        "category": "Кроссовки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/856/67alorfd56omw6f8qb07dh1xd71x3h5c.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/c33/1kq319afeb3xb4s2r05z7o4a022lemc4.png",
            "https://www.vistasport.ru/upload/iblock/ce4/jc9qp9x9oi9d2qfwfg237dnv442o57lj.png",
            "https://www.vistasport.ru/upload/iblock/856/67alorfd56omw6f8qb07dh1xd71x3h5c.png"
        ]
    },
    {
        "id": "4",
        "title": "Mizuno",
        "description": "Кроссовки Mizuno Wave Medal Neo (2024)",
        "price": 15990,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "Кроссовки",
        "category": "Кроссовки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/127/4skuusc5hzcliv8p1o5kp4gfdnyp42u2.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/8c6/wrvd10f56e8mf9xxj85kafvntivn1f2m.png",
            "https://www.vistasport.ru/upload/iblock/e41/qlrep80ek7vys9v7i8pps004xx7jynm9.png",
            "https://www.vistasport.ru/upload/iblock/127/4skuusc5hzcliv8p1o5kp4gfdnyp42u2.png",
        ]
    },
    {
        "id": "5",
        "title": "Mizuno",
        "description": "Кроссовки Mizuno Drive Neo 3 (2024)",
        "price": 4900,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Кроссовки",
        "category": "Кроссовки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/0ee/0wvur03u0ody48111c8hybmwmbctg3kp.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/63e/c6h4w9nmua5oa3b3zkys689xjz0xp9vt.png",
            "https://www.vistasport.ru/upload/iblock/ef1/i6e4wd1g5toaofky05w6zapkzs7o5xvk.png",
            "https://www.vistasport.ru/upload/iblock/0ee/0wvur03u0ody48111c8hybmwmbctg3kp.png"
        ]
    },
    {
        "id": "6",
        "title": "Double Fish 3*** V40+",
        "description": "Мячи для настольного тенниса Double Fish 3*** V40+ WTT ITTF бел. 6 шт.",
        "price": 820,
        "discountPercentage": 11.02,
        "rating": 4.57,
        "stock": 83,
        "brand": "Мячи",
        "category": "Мячи",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/d19/mncg8sqckfh9icnfl55r742cr5304tph.jpg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/c70/hjy1hcd26ktjwyheb2u5rt6x7md4pvgw.png",
            "https://www.vistasport.ru/upload/iblock/1ad/11seo6lw4lpzwp1qs25dmq21h9rh3obg.jpg",
            "https://www.vistasport.ru/upload/iblock/d19/mncg8sqckfh9icnfl55r742cr5304tph.jpg"
        ]
    },
    {
        "id": "7",
        "title": "DHS 3*** D40+",
        "description": "Мячи для настольного тенниса DHS 3*** D40+ (DUAL) бел. 10 шт.",
        "price": 1000,
        "discountPercentage": 4.15,
        "rating": 4.25,
        "stock": 50,
        "brand": "Мячи",
        "category": "Мячи",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/e8a/vbgp8bshzeynftlsqgajwbrve3gu0lse.jpg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/b9a/35c85ip1mg2d0x0j3sukyg83sc16r99a.jpg",
            "https://www.vistasport.ru/upload/iblock/bc2/pki4un32he525fadjdkogzqrrjw0m4hv.jpg",
            "https://www.vistasport.ru/upload/iblock/e8a/vbgp8bshzeynftlsqgajwbrve3gu0lse.jpg"
        ]
    },
    {
        "id": "8",
        "title": "DHS 3*** DJ40+",
        "description": "Мячи для настольного тенниса DHS 3*** DJ40+ WTT ITTF бел. 6 шт.",
        "price": 1490,
        "discountPercentage": 10.23,
        "rating": 4.43,
        "stock": 68,
        "brand": "Мячи",
        "category": "Мячи",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/cfa/ylystwcu6ukpfbi2ji2tvfnp8ia1qp38.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/8/1.jpg",
            "https://i.dummyjson.com/data/products/8/2.jpg",
            "https://i.dummyjson.com/data/products/8/3.jpg",
            "https://i.dummyjson.com/data/products/8/4.jpg",
            "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
        ]
    },
    {
        "id": "9",
        "title": "DHS 1* D40+",
        "description": "Мячи для настольного тенниса DHS 1* D40+ (DUAL) бел. 10 шт.",
        "price": 1090,
        "discountPercentage": 11.83,
        "rating": 4.54,
        "stock": 96,
        "brand": "Мячи",
        "category": "Мячи",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/264/1wh8bfkx5c003klytvxvonvabvud2ql8.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/9/1.jpg",
            "https://i.dummyjson.com/data/products/9/2.png",
            "https://i.dummyjson.com/data/products/9/3.png",
            "https://i.dummyjson.com/data/products/9/4.jpg",
            "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
        ]
    },
    {
        "id": "10",
        "title": "DHS Double Circle",
        "description": "Мячи для настольного тенниса DHS Double Circle 40+ (пластик) 120 штук",
        "price": 4000,
        "discountPercentage": 6.18,
        "rating": 4.43,
        "stock": 89,
        "brand": "Мячи",
        "category": "Мячи",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/06c/xhysg70l97vl5457irzww04nnliegdwx.png",
        "images": [
            "https://i.dummyjson.com/data/products/10/1.jpg",
            "https://i.dummyjson.com/data/products/10/2.jpg",
            "https://i.dummyjson.com/data/products/10/3.jpg",
            "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
        ]
    },
    {
        "id": "11",
        "title": "BUTTERFLY",
        "description": "Костюм спортивный BUTTERFLY KARIYA",
        "price": 13420,
        "discountPercentage": 8.4,
        "rating": 4.26,
        "stock": 65,
        "brand": "Костюмы",
        "category": "Костюмы",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/ceb/xz1sp6qzbjl6ioetpswr40054uxp66hs.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/e5a/w52pnljm3vt4265po8erxltdu9vkgwzx.png",
            "https://www.vistasport.ru/upload/iblock/899/4kr3qv1vppg93u6vwk0s164fvcuc7q7r.png",
            "https://www.vistasport.ru/upload/iblock/ceb/xz1sp6qzbjl6ioetpswr40054uxp66hs.png"
        ]
    },
    {
        "id": "12",
        "title": "BUTTERFLY",
        "description": "Костюм спортивный BUTTERFLY HIGO",
        "price": 9075,
        "discountPercentage": 15.66,
        "rating": 4,
        "stock": 52,
        "brand": "Костюмы",
        "category": "Костюмы",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/82e/8f26zc9sdje505bwu43764cp7szj1ax0.jpg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/503/xk4ygu474eaoz0qay9yk03gwjgm78k4n.jpg",
            "https://www.vistasport.ru/upload/iblock/90a/xw8fabn8233m5247xdyqj2fgl0gedsxb.jpg",
            "https://www.vistasport.ru/upload/iblock/82e/8f26zc9sdje505bwu43764cp7szj1ax0.jpg"
        ]
    },
    {
        "id": "13",
        "title": "DONIC",
        "description": "Костюм спортивный DONIC Craft",
        "price": 10625,
        "discountPercentage": 8.14,
        "rating": 4.59,
        "stock": 61,
        "brand": "Костюмы",
        "category": "Костюмы",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/d45/afa4xt7gmcgy5oxdl1ci7qy1i0ibbmu8.jpg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/2ca/q8gi6u38pwbe9hf6wk8xstz1m20t43tr.jpg",
            "https://www.vistasport.ru/upload/iblock/03a/ttfxecse188l51w9gt6y2oqq0oo3lwts.jpg",
            "https://www.vistasport.ru/upload/iblock/d45/afa4xt7gmcgy5oxdl1ci7qy1i0ibbmu8.jpg"
        ]
    },
    {
        "id": "14",
        "title": "BUTTERFLY",
        "description": "Костюм спортивный BUTTERFLY IZUMO",
        "price": 14960,
        "discountPercentage": 15.6,
        "rating": 4.21,
        "stock": 114,
        "brand": "Костюмы",
        "category": "Костюмы",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/9fc/c3pgyxqe88q9oqbf4dm3xrjymuypzs9f.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/85b/pu866qqcmua3x47d66t99gr86w2q6m9x.png",
            "https://www.vistasport.ru/upload/iblock/867/vzg9wwtcjfaxe8dh5sz33zwei8x072fh.png",
            "https://www.vistasport.ru/upload/iblock/9fc/c3pgyxqe88q9oqbf4dm3xrjymuypzs9f.png"
        ]
    },
    {
        "id": "15",
        "title": "BUTTERFLY",
        "description": "Теннисная рубашка BUTTERFLY KARIYA",
        "price": 4950,
        "discountPercentage": 10.99,
        "rating": 4.7,
        "stock": 105,
        "brand": "Футболки",
        "category": "Футболки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/1a9/1h202qku0qcdr6s8qw30fjyjyazy2c6f.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/ecf/lrjw31qtj5t7ofsas5x4rb89qnp7z3lt.png",
            "https://www.vistasport.ru/upload/iblock/5aa/mp63ih3sdoqqc4rx3n5pcl5w5xpt3jai.png",
            "https://www.vistasport.ru/upload/iblock/1a9/1h202qku0qcdr6s8qw30fjyjyazy2c6f.png"
        ]
    },
    {
        "id": "16",
        "title": "BUTTERFLY",
        "description": "Теннисная рубашка BUTTERFLY NAGANO",
        "price": 4950,
        "discountPercentage": 13.31,
        "rating": 4.83,
        "stock": 110,
        "brand": "Футболки",
        "category": "Футболки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/f59/k4bk8kgbrhvrmv6c4q7u8yn0r796wbm5.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/182/ttd46pk39way27500itdss6w99wwzspv.png",
            "https://www.vistasport.ru/upload/iblock/00b/mb3itbfk4lsngis4v4qb8hek92v4m3iz.png",
            "https://www.vistasport.ru/upload/iblock/f59/k4bk8kgbrhvrmv6c4q7u8yn0r796wbm5.png"
        ]
    },
    {
        "id": "17",
        "title": "BUTTERFLY",
        "description": "Теннисная рубашка BUTTERFLY HIGO",
        "price": 3465,
        "discountPercentage": 4.09,
        "rating": 4.52,
        "stock": 78,
        "brand": "Футболки",
        "category": "Футболки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/45b/jy5w0qxk8vavhsa6hok8zcabz64a9cs5.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/499/csobziqne5tl2b0d8at528bm602untrz.png",
            "https://www.vistasport.ru/upload/iblock/1e9/gp3erb0z5ilnz058yekl6yoczoacuys7.png",
            "https://www.vistasport.ru/upload/iblock/45b/jy5w0qxk8vavhsa6hok8zcabz64a9cs5.png"
        ]
    },
    {
        "id": "18",
        "title": "BUTTERFLY",
        "description": "Футболка BUTTERFLY TOC",
        "price": 2860,
        "discountPercentage": 13.1,
        "rating": 4.56,
        "stock": 88,
        "brand": "Футболки",
        "category": "Футболки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/319/z36j0podctzrrm01tsblszimam9hcbbl.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/457/0xe6p573vcxg25g40hfof9ph4oei4xod.png",
            "https://www.vistasport.ru/upload/iblock/390/b44edz30gioh5n7xdrlnvu41g3q34dry.png",
            "https://www.vistasport.ru/upload/iblock/319/z36j0podctzrrm01tsblszimam9hcbbl.png"
        ]
    },
    {
        "id": "19",
        "title": "Skin Beauty Serum.",
        "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
        "price": 46,
        "discountPercentage": 10.68,
        "rating": 4.42,
        "stock": 54,
        "brand": "ROREC White Rice",
        "category": "",
        "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/19/1.jpg",
            "https://i.dummyjson.com/data/products/19/2.jpg",
            "https://i.dummyjson.com/data/products/19/3.png",
            "https://i.dummyjson.com/data/products/19/thumbnail.jpg"
        ]
    },
    {
        "id": "20",
        "title": "JOOLA",
        "description": "Ракетка JOOLA Combo TEZZO PALADIN RHYZEN ICE",
        "price": 13950,
        "discountPercentage": 16.99,
        "rating": 4.06,
        "stock": 140,
        "brand": "Ракетки",
        "category": "Ракетки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/254/8084hflgrhsdk7b3c4b54rzupyp06wn8.jpg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/470/8rh8uhl3r2h0tziqltgepgz46bmalw0h.jpg",
            "https://www.vistasport.ru/upload/iblock/5ee/a19xwg848jhitu2zin9l4eswhscis4mj.jpg",
            "https://www.vistasport.ru/upload/iblock/254/8084hflgrhsdk7b3c4b54rzupyp06wn8.jpg"
        ]
    },
    {
        "id": "21",
        "title": "Butterfly",
        "description": "Ракетка для настольного тенниса Butterfly Timo Boll, Black",
        "price": 4255,
        "discountPercentage": 4.81,
        "rating": 4.44,
        "stock": 133,
        "brand": "Ракетки",
        "category": "Ракетки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/416/5psmsoqpwoelukvv2bbcld760y7ympcq.jpg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/99d/kqjcvz6xamx8ul2orrx0tacbg73iu8my.jpg",
            "https://www.vistasport.ru/upload/iblock/6e0/xkjpytlnbqoapep9z98vlhi9o0r518hh.jpg",
            "https://www.vistasport.ru/upload/iblock/416/5psmsoqpwoelukvv2bbcld760y7ympcq.jpg"
        ]
    },
    {
        "id": "22",
        "title": "Butterfly",
        "description": "Ракетка для настольного тенниса Butterfly Zhang Jike ZJX6",
        "price": 4120,
        "discountPercentage": 15.58,
        "rating": 4.57,
        "stock": 146,
        "brand": "Ракетки",
        "category": "Ракетки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/403/5co3teu342m8mwq4h5virxdj63t2n43i.jpg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/eeb/icy5596t3frc5f5naa6olr7eft4u7sq3.jpg",
            "https://www.vistasport.ru/upload/iblock/87d/j4e77hjvr9448y0r7f526rp41r2hd4xm.jpg",
            "https://www.vistasport.ru/upload/iblock/403/5co3teu342m8mwq4h5virxdj63t2n43i.jpg"
        ]
    },
    {
        "id": "23",
        "title": "DONIC",
        "description": "Набор для настольного тенниса DONIC/Schildkrot Urban Style Set Level 400",
        "price": 1313,
        "discountPercentage": 8.04,
        "rating": 4.85,
        "stock": 26,
        "brand": "Ракетки",
        "category": "Ракетки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/4fc/affx08x9llew1u8e4i3b5fub6jejhwi4.jpg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/91c/wj8tdapw86mrfilw3coz0f4xcze8yiie.jpg",
            "https://www.vistasport.ru/upload/iblock/a10/ii4g514fog23f6hvxy0ceywy4te4d58e.jpg",
            "https://www.vistasport.ru/upload/iblock/4fc/affx08x9llew1u8e4i3b5fub6jejhwi4.jpg"
        ]
    },
    {
        "id": "24",
        "title": "DONIC",
        "description": "Ракетка для настольного тенниса DONIC/Schildkrot Sensation 700",
        "price": 1875,
        "discountPercentage": 16.8,
        "rating": 4.94,
        "stock": 113,
        "brand": "Ракетки",
        "category": "Ракетки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/509/rmqvof1qsfv4jxtboc6pljuyb6kyoxvr.jpg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/dd5/twq314h1i2uo79v0rbujyd2gesehkgzy.jpg",
            "https://www.vistasport.ru/upload/iblock/ace/0ixstng3xrz429o0j62ntoar2orzrv5v.jpg",
            "https://www.vistasport.ru/upload/iblock/509/rmqvof1qsfv4jxtboc6pljuyb6kyoxvr.jpg"
        ]
    },
    {
        "id": "25",
        "title": "DONIC",
        "description": "Футболка DONIC Dragon(2023)",
        "price": 2500,
        "discountPercentage": 13.58,
        "rating": 4.87,
        "stock": 47,
        "brand": "Футболки",
        "category": "Футболки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/f5a/4h7oc5hro1rt7rnwugzwk12relzahl5m.jpg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/f5a/4h7oc5hro1rt7rnwugzwk12relzahl5m.jpg",
            "https://www.vistasport.ru/upload/iblock/a64/iwy11l1ezymg5iitnhvj2myttek050qs.jpg",
            "https://www.vistasport.ru/upload/iblock/f5a/4h7oc5hro1rt7rnwugzwk12relzahl5m.jpg"
        ]
    },
    {
        "id": "26",
        "title": "DONIC",
        "description": "Костюм спортивный DONIC Paddox",
        "price": 10625,
        "discountPercentage": 17.86,
        "rating": 4.08,
        "stock": 131,
        "brand": "Костюмы",
        "category": "Костюмы",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/f78/j5p6z7ujb9unka6i37gqxyw8wvyarc3v.jpg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/258/2cgzw2fkp2z28dhfmjp3jl2nqd9oflr4.jpg",
            "https://www.vistasport.ru/upload/iblock/b83/cses813zatps440rg391426ev8wn3it7.jpg",
            "https://www.vistasport.ru/upload/iblock/f78/j5p6z7ujb9unka6i37gqxyw8wvyarc3v.jpg"
        ]
    },
    {
        "id": "27",
        "title": "BUTTERFLY",
        "description": "Чехол двойной BUTTERFLY Kitami",
        "price": 4223,
        "discountPercentage": 15.58,
        "rating": 4.41,
        "stock": 17,
        "brand": "Чехол",
        "category": "Чехлы",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/a62/ilxk664zqnqhollwxmt2zsuwl1aa8pt1.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/637/0b44wezlpw1z794i69uoft77qj7k0sfh.png",
            "https://www.vistasport.ru/upload/iblock/647/yflwk1gbwtkrbus7hnmqdqt61th7adr6.png",
            "https://www.vistasport.ru/upload/iblock/a62/ilxk664zqnqhollwxmt2zsuwl1aa8pt1.png"
        ]
    },
    {
        "id": "28",
        "title": "Vista",
        "description": "Кейс для ракетки Vista Hard Case",
        "price": 3125,
        "discountPercentage": 16.49,
        "rating": 4.82,
        "stock": 54,
        "brand": "Чехлы",
        "category": "Чехлы",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/983/k1h0eqrgkmx6gxrrmowkpc00oufd797c.jpg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/b0b/eqcpz03zned0l2c0pis4d8hq9z7r8aot.jpg",
            "https://www.vistasport.ru/upload/iblock/cc4/338nql0lzh7if6hl9t1n3esdc01zojsp.jpg",
            "https://www.vistasport.ru/upload/iblock/983/k1h0eqrgkmx6gxrrmowkpc00oufd797c.jpg"
        ]
    },
    {
        "id": "29",
        "title": "Butterfly",
        "description": "C-P-16 Чехол по форме ракетки для н/т Butterfly CELL CASE I",
        "price": 1325,
        "discountPercentage": 15.34,
        "rating": 4.44,
        "stock": 7,
        "brand": "Чехлы",
        "category": "Чехлы",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/d9a/q2070w2rvlppzyn7qqk4mlrn4arg1cqu.jpg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/7ea/5phtk41scs3ct0dbrj2mvpkgnr6bqri1.jpg",
            "https://www.vistasport.ru/upload/iblock/b55/4q793i43jxn51yqh1w80f3v4xkjt86dl.jpg",
            "https://www.vistasport.ru/upload/iblock/d9a/q2070w2rvlppzyn7qqk4mlrn4arg1cqu.jpg"
        ]
    },
    {
        "id": "30",
        "title": "DONIC",
        "description": "Чехол DONIC/Schildkrot по форме ракетки Trendline",
        "price": 30,
        "discountPercentage": 2.92,
        "rating": 4.92,
        "stock": 54,
        "brand": "Чехлы",
        "category": "Чехлы",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/71c/mh79ri65so6dtxzdl63m0toekdwlt68c.jpg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/667/4swh2xol9bp6j0b1mbuihrb5fepe8v11.jpg",
            "https://www.vistasport.ru/upload/iblock/343/5w0ti8vnxffm2op6wlnjpi1tigxvzf2p.jpg",
            "https://www.vistasport.ru/upload/iblock/5ec/agkaz4lx81gpzfc6zinb2o9hcwwrcni0.jpg"
        ]
    },
    {
        "id": "31",
        "title": "DONIC",
        "description": "Чехол DONIC/Schildkrot по форме ракетки Waldner",
        "price": 750,
        "discountPercentage": 2.92,
        "rating": 4.92,
        "stock": 54,
        "brand": "Чехлы",
        "category": "Чехлы",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/a0f/1p2q9fptss2qi77v2b40cg39bchjdvs9.jpg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/5ac/4wnb4sr2brlpsnf73kx6yzwa6g6j46xq.jpg",
            "https://www.vistasport.ru/upload/iblock/7cf/no0yes4ji00ku22f7l2niqwm6u9fu0kg.jpg",
            "https://www.vistasport.ru/upload/iblock/a0f/1p2q9fptss2qi77v2b40cg39bchjdvs9.jpg"
        ]
    },
    {
        "id": "32",
        "title": "BUTTERFLY",
        "description": "Сумка BUTTERFLY Kitami средняя, 50 cm",
        "price": 6930,
        "discountPercentage": 2.92,
        "rating": 4.69,
        "stock": 54,
        "brand": "Сумки",
        "category": "Сумки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/71a/tn3ldjs5u3s8sqhbpfqx2d3hwdpb7uyo.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/b83/nbilmm9jxatd6fnr73dkssciuw23jsk4.png",
            "https://www.vistasport.ru/upload/iblock/e6a/f56q5pwpsm34bm234xtki67m96nf5g3a.png",
            "https://www.vistasport.ru/upload/iblock/71a/tn3ldjs5u3s8sqhbpfqx2d3hwdpb7uyo.png"
        ]
    },
    {
        "id": "33",
        "title": "BUTTERFLY",
        "description": "Сумка BUTTERFLY Kitami спортивная, 60 cm",
        "price": 9460,
        "discountPercentage": 2.92,
        "rating": 4.56,
        "stock": 54,
        "brand": "Сумки",
        "category": "Сумки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/fee/bhezvxkqfurkak45cy1fp1u4ip0plfvx.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/4a0/jppmwn9xukxrmcynmopotlmvw0sgv7wh.png",
            "https://www.vistasport.ru/upload/iblock/f5a/q4nalzrsjl5xljpagvreagkcyz2so4k0.png",
            "https://www.vistasport.ru/upload/iblock/fee/bhezvxkqfurkak45cy1fp1u4ip0plfvx.png"
        ]
    },
    {
        "id": "34",
        "title": "Flexy",
        "description": "Сумка для мячей Flexy Goose Multiball",
        "price": 7000,
        "discountPercentage": 2.92,
        "rating": 4.26,
        "stock": 54,
        "brand": "Сумки",
        "category": "Сумки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/91d/76lrb7lliq69v31t98t8ovz80ey69h2a.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/d5e/wuk5e95o33iwek2yiqpuxfvi3xy2uqu9.jpg",
            "https://www.vistasport.ru/upload/iblock/67c/qn3x02olpqgtt1xp2k182201c5cor80j.jpg",
            "https://www.vistasport.ru/upload/iblock/91d/76lrb7lliq69v31t98t8ovz80ey69h2a.png"
        ]
    },
    {
        "id": "35",
        "title": "Butterfly",
        "description": "Складывающаяся сумка Butterfly Kanoy",
        "price": 9900,
        "discountPercentage": 2.92,
        "rating": 4.84,
        "stock": 54,
        "brand": "Сумки",
        "category": "Сумки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/706/a5fbgnewueq6z1x5du5piu33psgt306o.png",
        "images": [
            "https://www.vistasport.ru/upload/iblock/e24/53e3jqw73tsdtc4auqvv92fhay20km84.png",
            "https://www.vistasport.ru/upload/iblock/eef/llxh3x2h63bf86uirgbpq6ztacgghtgh.png",
            "https://www.vistasport.ru/upload/iblock/706/a5fbgnewueq6z1x5du5piu33psgt306o.png"
        ]
    },
    {
        "id": "36",
        "title": "BUTTERFLY",
        "description": "Сумка BUTTERFLY Kanoy спортивная, 70 cm",
        "price": 13750,
        "discountPercentage": 2.92,
        "rating": 4.56,
        "stock": 54,
        "brand": "Сумки",
        "category": "Сумки",
        "thumbnail": "https://www.vistasport.ru/upload/iblock/4ed/630u0e91x489t1wiamnzi8vzwdfijch3.jpeg",
        "images": [
            "https://www.vistasport.ru/upload/iblock/c0a/hjucbglsgtx6e4o6k1y27z07fga8zbn7.jpg",
            "https://www.vistasport.ru/upload/iblock/7c0/jze6mrbcrnbo48appf246yvyddr1qw5t.jpg",
            "https://www.vistasport.ru/upload/iblock/4ed/630u0e91x489t1wiamnzi8vzwdfijch3.jpeg"
        ]
    }
];

export default products;
