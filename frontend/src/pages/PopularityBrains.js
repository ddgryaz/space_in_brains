import React, {useEffect, useState} from 'react';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack} from 'victory';
import {observer} from "mobx-react-lite";
import {mostPopularBrains} from "../http/mostPopularAPI";

const PopularityBrains = observer(() => {
    // const items = [
    //     {name: 'JavaScript', popularity: "1"},
    //     {name: 'Freelance', popularity: "2"},
    //     {name: 'Docker', popularity: "2"},
    //     {name: 'Docke3r', popularity: "2"},
    //     {name: 'Docke2r', popularity: "4"},
    // ];
    const [brains, setBrains] = useState([])

    useEffect(() => {
        mostPopularBrains().then(data => setBrains(data))
    }, [])
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: '5%'}}>
            <div style={{width: '70vw', height: '70vh', backgroundColor: 'white'}}>
                <VictoryChart
                    domainPadding={20}
                    theme={VictoryTheme.grayscale}
                >
                    <VictoryAxis

                    />
                    <VictoryAxis
                        dependentAxis
                    />
                    <VictoryStack
                        colorScale={"warm"}
                    >
                        <VictoryBar
                            data={brains}
                            x={"name"}
                            y={"popularity"}
                        />
                    </VictoryStack>
                </VictoryChart>
            </div>
        </div>
    );
})

export default PopularityBrains;