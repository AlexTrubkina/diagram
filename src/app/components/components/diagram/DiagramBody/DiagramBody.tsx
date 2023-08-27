import React from "react";
import styles from "./diagramBody.module.css";
import { axisData } from "@/app/data/diagramData";

const DiagramBody = ({ duration }: { duration: String }): JSX.Element => {
    return (
        <div className={styles.body}>
            <div className={styles.yaxis}>
                {axisData.y.map((num) => (
                    <div className={styles["yaxis-num"]}>{num}</div>
                ))}
            </div>
            <div className={duration !== "year" ? styles.xHalfaxis : styles.xFullaxis}>
                {duration === "month"
                    ? axisData.xMonth.map((num) => (
                          <div className={styles["yaxis-num"]}>{num}</div>
                      ))
                    : duration === "year"
                    ? axisData.xYear.map((num) => (
                          <div className={styles["yaxis-num"]}>{num}</div>
                      ))
                    : axisData.xHalfYear.map((num) => (
                          <div className={styles["yaxis-num"]}>{num}</div>
                      ))
                }
            </div>
        </div>
    );
};

export default DiagramBody;
