import React from "react";
import AnnouncementEl from "./announcements/AnnouncementsEl"
import { Grid, Typography } from "@material-ui/core";

export default class Announcements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            data: null
        };
    };
    async componentDidMount() {
        const json = await (await fetch('/announcements.json')).json();
            
        this.setState({
            loaded: true,
            data: json
        });
    };
    render() {
        if (!this.state.loaded) {
            return (
                <section>
                    <div className="center">
                        <img src="/static/img/loading.svg" alt="Loading"/>
                    </div>
                </section>
            );   
        }
        else {
            return (
                <section>
                    <Typography style={{paddingTop: 50, paddingBottom: 30, textAlign: 'center'}} variant="h5"><b>Announcements</b></Typography>
                    <Grid container>
                        <Grid item lg={true} md={true} sm={false} xs={false}/>

                        <Grid item lg={9} md={10} sm={12} xs={12}>
                            <Grid container spacing={5}>
                                {Object.keys(this.state.data).map((announcmentID) => (
                                    <Grid item lg={4} md={6} sm={12} xs={12}>
                                        <AnnouncementEl data={this.state.data[announcmentID]} index={announcmentID}/>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        <Grid item lg={true} md={true} sm={false} xs={false}/>
                    </Grid>
                </section>
            );   
        };
    };
};