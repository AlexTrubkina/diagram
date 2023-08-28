import React from "react";
import styles from "./diagramDuration.module.css";
import { durationData } from "@/app/data/diagramData";

const DiagramDuration = ({
    handleSelect,
}: {
    handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}): JSX.Element => {
    return (
        <select
            className={styles.duration}
            onChange={handleSelect}
            name="duration"
        >
            {Object.entries(durationData).map(([key, value]) => (
                <option key={key} value={key}>
                    {value}
                </option>
            ))}
        </select>
    );
};

export default DiagramDuration;
