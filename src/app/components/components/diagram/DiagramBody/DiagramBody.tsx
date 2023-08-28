import React from "react";
import styles from "./diagramBody.module.css";
import { axisData } from "@/app/data/diagramData";
import { mockApi } from "@/app/data/apiData";
import DiagramColumn from "../DiagramColumn/DiagramColumn";

const DiagramBody = ({ duration }: { duration: String }): JSX.Element => {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.yaxis}>
                    {axisData.y.map((num) => (
                        <div key={num} className={styles["yaxis-num"]}>{num}</div>
                    ))}
                </div>
                <div className={styles.columns}>
                    {duration === "month"
                        ? Object.entries(mockApi.periods[0].graph.month).map(
                            ([key, earning]) => <DiagramColumn earning={earning} key={key}/>
                        )
                        : duration === "year"
                        ? Object.entries(mockApi.periods[0].graph.year).map(
                            ([key, earning]) => <DiagramColumn earning={earning} key={key}/>
                        )
                        : Object.entries(mockApi.periods[0].graph.half_year).map(
                            ([key, earning]) => <DiagramColumn earning={earning} key={key}/>
                        )}
                </div>
            </div>
            
            <div
                className={
                    duration !== "year" ? styles.xHalfaxis : styles.xFullaxis
                }
            >
                {duration === "month"
                    ? axisData.xMonth.map((num) => (
                          <div key={num} className={styles["yaxis-num"]}>{num}</div>
                      ))
                    : duration === "year"
                    ? axisData.xYear.map((num) => (
                          <div key={num} className={styles["yaxis-num"]}>{num}</div>
                      ))
                    : axisData.xHalfYear.map((num) => (
                          <div key={num} className={styles["yaxis-num"]}>{num}</div>
                      ))}
            </div>
        </div>
    );
};

export default DiagramBody;
