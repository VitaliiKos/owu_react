import React from 'react';
import '../classwork.css'

const Rocket = (props) => {
    let {item:{ mission_name, launch_year, links:{mission_patch_small}}, styleClass} = props
    return (
            <div className={styleClass}>
                <div className={'Mission'}>
                    <div><strong> {mission_name}</strong></div>
                    <div><strong>{launch_year}</strong></div>
                </div>
                <div className={'Photo'}>
                </div><img src={mission_patch_small} alt={mission_name}/>
            </div>
    );
};

export default Rocket;