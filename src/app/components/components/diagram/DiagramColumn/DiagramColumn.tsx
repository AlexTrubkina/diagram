import React, {useRef} from "react";
import styles from "./diagramColumn.module.css";

const DiagramColumn = ({ earning }: { earning: number }): JSX.Element => {

    const earningRef = useRef<HTMLDivElement>(null);

    const handleMouseOver = () => {
        if (earningRef.current) {
            earningRef.current.style.display = "block" 
        }
    } 

    const handleMouseOut = () => {
        if (earningRef.current) {
            earningRef.current.style.display = "none" 
        }
    } 


    return (
        <div className={styles["column-container"]} >
            <div ref={earningRef} className={styles.earning} style={{"display": "none"}}>{earning}</div>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className={styles.column}
                style={{ height: earning / 37 }}
            ></div>
        </div>
    );
};

export default DiagramColumn;
