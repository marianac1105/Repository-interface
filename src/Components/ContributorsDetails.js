
import React from 'react'
import {Image, Col} from "react-bootstrap"
import Style from "./ContributorsDetails.module.css"



export default function ContributorsDetails({contributor}) {
    return (<Col xs={6} md={2} className="text-center my-3">
        
                <Image roundedCircle className={Style.image} src={contributor.avatar_url} alt={contributor.login}/>
            
                <div >
                    <span >{contributor.login}</span>
                </div>
                </Col>
            
    )
}

