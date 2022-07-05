import React, { useState } from 'react'
import DatingCard from 'react-tinder-card'
import "./DatingCards.css"


const DatingCards = () => {
    const [people, setPeople] = useState([
        {
            name: "Pyush Jha",
            imgUrl: "https://i.postimg.cc/zDb9fZWM/pyushJha.jpg"
        },
        {
            name: "Subhadip Nandi",
            imgUrl: "https://files.catbox.moe/4jdu36.jpg"
        },
        {
            name: "Rinki Kumari",
            imgUrl: "https://files.catbox.moe/ir0mkc.jpg"
        },
        {
            name: "Sheila Oberoi",
            imgUrl: "https://files.catbox.moe/sgjb1r.jpg"
        },
        {
            name: "Ahana Tripathi",
            imgUrl: "https://files.catbox.moe/t9gux4.jpg"
        },
        {
            name: "Bheem Rao",
            imgUrl: "https://files.catbox.moe/g9rfmj.jpg"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("receiving",nameToDelete);
    };
    const outOfFrame = (name) => {
        console.log(name,"left the screen");
    };
    return(
        <div className="datingCards">
            <div className='datingCards_container'>
                {people.map((person)=>(
                    <DatingCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up','down']}
                        onSwipe={(dir)=> swiped(dir,person.name)}
                        onCardLeftScreen={()=>outOfFrame(person.name)}>
                        <div style={{backgroundImage: `url("${person.imgUrl}")`}}
                                className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </DatingCard>
                ))};
            </div>
        </div>
    );
};

export default DatingCards;