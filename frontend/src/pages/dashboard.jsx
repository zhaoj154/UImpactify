import React from 'react';
import { useEffect } from 'react';
import Layout from "../ui/base/layout"
import SEO from "../ui/base/seo"
import {Button} from "@material-ui/core";
import Auth from "../services/authorization/sign-in";
import {navigate} from "../../.cache/gatsby-browser-entry";

const Dashboard = () => {
    const [user, setUser] = React.useState(null);

    useEffect(   () => {
        const fetchData = async () => {
            try {
                const response = await Auth.getAuthUser((user) => setUser(user));
                if (response.status === 200) setUser(response.data);
            } catch (err){
                console.log(err);
                setUser(null);
            }
        };
        fetchData();
    }, []);

    const handleSignOut = async () => {
        try {
            const response = await Auth.logout();
            if (response.status === 200) navigate('/');
        } catch (err) {
            console.log(err);
        }

    }


    // const handleClick = async () => {
    //     const user = await Auth.getAuthUser();
    //     setResult(user);
    // }


    return (
        <Layout>
            <SEO title="dashboard"/>
            <Button onClick={handleSignOut}>Sign Out</Button>
            {
                (user != null) ? (<h1>Authorized! Welcome {user.name}{console.log(user)}</h1>)
                    :
                    <h1>401 Unauthorized</h1>
            }
        </Layout>
    )



};

export default Dashboard