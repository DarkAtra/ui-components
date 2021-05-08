import React from "react";
import {UiButton, UiFlex, UiGrid, UiGridItem} from "./react/components";
import {ThemeColor} from "ui-components";

function App() {

    const pageStyles = {
        width: "800px",
        margin: "40px auto"
    };
    const gridStyles = {
        backgroundColor: "#be9fe1",
        border: "1px solid #be9fe1"
    };
    const gridItemStyles = {
        backgroundColor: "#e1ccec",
        padding: "10px"
    };
    const gridItemContentStyles = {
        backgroundColor: "#be9fe1",
        padding: "10px"
    };

    return (
        <UiFlex direction={"top-to-bottom"} alignItems={"stretch"} gap={"2rem"} style={pageStyles}>

            <div>
                <h4>
                    A two column grid with a 1px gap between items and a min height of 200px. The content of the grid items is centered vertically and/or
                    horizontally.
                </h4>
                <UiGrid columns={2} gap={"1px"} style={{...gridStyles, minHeight: "200px"}}>
                    <UiGridItem style={gridItemStyles}>
                        <div style={gridItemContentStyles}>Normal alignment</div>
                    </UiGridItem>
                    <UiGridItem hAlignContent={"center"} style={gridItemStyles}>
                        <div style={gridItemContentStyles}>Centered horizontally</div>
                    </UiGridItem>
                    <UiGridItem vAlignContent={"center"} style={gridItemStyles}>
                        <div style={gridItemContentStyles}>Centered vertically</div>
                    </UiGridItem>
                    <UiGridItem hAlignContent={"center"} vAlignContent={"center"} style={gridItemStyles}>
                        <div style={gridItemContentStyles}>Centered both</div>
                    </UiGridItem>
                </UiGrid>
            </div>

            <div>
                <UiButton themeColor={{xs: ThemeColor.INFO, lg: ThemeColor.PRIMARY}}>
                    <div slot={"prefix"}>🌷</div>
                    Button with Flowers
                    <div slot={"suffix"}>🌷</div>
                </UiButton>
            </div>
        </UiFlex>
    );
}

export default App;
