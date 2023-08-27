"use client";
import React, {useState} from "react";
import { FC } from "react";
import styles from "./diagram.module.css";
import DiagramBody from "./DiagramBody/DiagramBody";
import DiagramDuration from "./DiagramDuration/DiagramDuration";

const Diagram: FC = () => {
    const [duration, setDuration] = useState("month");

    const handleSelect = (e : React.ChangeEvent<HTMLSelectElement>) => setDuration(e.target.value);

    return (
        
    <div className={styles.diagram}>
        <DiagramDuration handleSelect={handleSelect} />
        <DiagramBody duration={duration}/>
    </div>
        
    );
};

export default Diagram;
