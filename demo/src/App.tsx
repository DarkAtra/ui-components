import React from "react";
import {UiAlert, UiButton, UiFlex, UiGrid, UiGridItem, UiSpinner} from "./react/components";
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
                <h4>
                    Alert variants
                </h4>
                <UiFlex direction={"top-to-bottom"} alignItems={"stretch"} gap={".5rem"} wrap={true}>
                    <UiAlert themeColor={ThemeColor.PRIMARY}>
                        <div slot={"prefix"}>🌷</div>
                        <div>
                            <a href={""}>Lorem ipsum dolor sit amet</a>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam voluptua.
                        </div>
                    </UiAlert>
                    <UiAlert themeColor={ThemeColor.SECONDARY}>
                        <div>
                            <a href={""}>Lorem ipsum dolor sit amet</a>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam voluptua.
                        </div>
                        <div slot={"suffix"}>🌷</div>
                    </UiAlert>
                    {(Object.keys(ThemeColor) as ThemeColor[])
                        .filter(themeColor => themeColor !== ThemeColor.PRIMARY && themeColor !== ThemeColor.SECONDARY)
                        .map((themeColor: ThemeColor) => (
                            <UiAlert key={themeColor} themeColor={themeColor}>
                                <div>
                                    <a href={""}>Lorem ipsum dolor sit amet</a>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                    labore et dolore magna aliquyam erat, sed diam voluptua.
                                </div>
                            </UiAlert>
                        ))}
                </UiFlex>
            </div>

            <div>
                <h4>
                    Button variants
                </h4>
                <UiFlex gap={".5rem"} wrap={true}>
                    {(Object.keys(ThemeColor) as ThemeColor[]).map((themeColor: ThemeColor) => (
                        <UiButton key={themeColor} themeColor={themeColor}>
                            {themeColor.charAt(0) + themeColor.substring(1).toLowerCase()}
                        </UiButton>
                    ))}
                </UiFlex>
            </div>

            <div>
                <h4>
                    Button variants with outline
                </h4>
                <UiFlex gap={".5rem"} wrap={true}>
                    {(Object.keys(ThemeColor) as ThemeColor[]).map((themeColor: ThemeColor) => (
                        <UiButton key={themeColor} themeColor={themeColor} outline={true}>
                            {themeColor.charAt(0) + themeColor.substring(1).toLowerCase()}
                        </UiButton>
                    ))}
                </UiFlex>
            </div>

            <div>
                <UiButton themeColor={{xs: ThemeColor.INFO, lg: ThemeColor.PRIMARY}}>
                    <div slot={"prefix"}>🌷</div>
                    Button with Flowers
                    <div slot={"suffix"}>🌷</div>
                </UiButton>
            </div>

            <div>
                <h4>
                    Spinner variants
                </h4>
                <UiFlex gap={".5rem"} wrap={true}>
                    {(Object.keys(ThemeColor) as ThemeColor[]).map((themeColor: ThemeColor) => (
                        <UiSpinner key={themeColor} themeColor={themeColor} style={{fontSize: "2rem"}}/>
                    ))}
                </UiFlex>
            </div>
        </UiFlex>
    );
}

export default App;
