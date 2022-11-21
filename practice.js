    const getProduct = [
        {
            id: 0,
            name : 'LED',
            price: 5
        },
        {
            id: 1,
            name : 'PEN',
            price: 2
        },
        {
            id: 2,
            name : 'SOAP',
            price: 15
        },
    ]

    function newPrice(arr){
        
        if(arr.price<10){
            arr.price = arr.price+ ((arr.price*10)/100)
        }
        return [
            {
                id: arr.id,
                name: arr.name,
                price: arr.price
            }
        ]
    }

    const arr = getProduct.map(newPrice);
    // arr.map((data)=>{
    //     console.log(data)
    // })

    const University = [
        {
            id: 0,
            name: 'Comsats',
            city: 'Lahore',
            fee: '100000',
            admission: 'open'
        },
        {
            id: 1,
            name: 'PUCIT',
            city: 'Lahore',
            fee: '40000',
            admission: 'close'
        },
        {
            id: 2,
            name: 'NUST',
            city: 'Islamabad',
            fee: '97000',
            admission: 'close'
        },
        
    ]

    // new array =[
    //     {
    //         city: 'Lahore', subUniversity: [
    //             {
    //             id: '0',
    //             name: 'Comsats',
    //             fee: '100000',
    //             admission: 'open'
    //         },
    //         {
    //             id: 1,
    //             name: 'PUCIT',
    //             fee: '40000',
    //             admission: 'close'
    //         }
    //     ]

    //     }
    // ]

    
    function convertArray(arr){
        return [
            {
            city: arr.city, 
            
            UniversityDetails: 
                {
                    id: arr.id,
                    name: arr.name,
                    fee: arr.fee,
                    admission: arr.admission
                }
            
            }
        ]
    }
    const newArray = University.map(convertArray);
    // newArray.map((data)=>{
    //     console.log(data)
    // })

    const match= [
        {
            key: 0,
            title: 'Read React Book',
            score: [
                {
                    key: 0,
                    title: 'Cricket Match',
                    update: [],
                    live: [
                        {
                            key: 0,
                            title: 'Live Match',
                            update: 'Pak vs Ind'
                        },
                        {
                            key: 1,
                            title: 'Finished',
                            update: 'Pak vs ENG'
                        },
                        {
                            key: 2,
                            title: 'Live Match',
                            update: 'Pak vs SA'
                        },
                    ]
                },
            ]
        },
    ]

    function getTitle(arr){
        const newArray = [];
        arr.forEach(data => {
            data.score.live.forEach(item=>
                {   console.log(3)
                    if(item.title=="Finished"){
                    newArray.push(item);
                    console.log(item)
                }}
            
            );
        }) 
        console.log(newArray)
    }
    
    getTitle(match)
