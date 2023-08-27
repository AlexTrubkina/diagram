import React from "react";
import styles from "./diagramDuration.module.css";

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
            <option value="month">За последний месяц</option>
            <option value="year">За последний год</option>
            <option value="halfYear">За последние 6 месяцев</option>
        </select>
    );
};

export default DiagramDuration;
