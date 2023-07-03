import React from "react";
import DailyWebImgs from "./DailyWebLog/DailyWebImgs";
import GoghOnImgs from "./GoghOn/GoghOnImgs";
import PortfolioAnimation from "./Portfolio/PortfolioAnimation";



export const Gallery = ({project}) =>{

    return (
        <div>
            {project.title !== 'Daily Web Log' ? (
                <div>
                {project.title === 'Gogh On' ? (
                    <GoghOnImgs />

                ) : (
                    <center>
                    <PortfolioAnimation />
                    </center>
                )
                }
                </div>
            ) : (
                
                <DailyWebImgs />
            ) 
            }

        </div>
    )
}