import React, {useState} from "react";
import CSSReset from "./components/CSSReset";
import {Layout, Header, Sidebar, Main, Footer} from "./components/layout";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import {Route, Switch, Link} from "react-router-dom";
import Chartkick from "./components/Chartkick/Chartkick";
import Draftjs from "./components/Draftjs/Draftjs";
import Paypal from "./components/Paypal";
import Stripe from "./components/Stripe";

const navigation = [
    {
        menuTitle: "React Libraries",
        menuItems: [
            {title: "React Router", dest: "/react-router"},
            {title: "Formik", dest: "/formik"},
            {title: "React Hook Form", dest: "/react-form"},
            {title: "Redux", dest: "/redux"},
            {title: "Chakra UI", dest: "/chakra"},
            {title: "Tailwind UI", dest: "/tailwind"},
            {title: "Framer Motion", dest: "/framer"},
            {title: "ChartKick", dest: "/chartkick"},
            {title: "Recharts", dest: "/recharts"},
            {title: "React i18next", dest: "/react-i18next"},
            {title: "Draft.js", dest: "/draftjs"},
            {title: "Paypal", dest: "/paypal"},
            {title: "Stripe", dest: "/stripe"},
        ],
    },
    {
        menuTitle: "Others",
        menuItems: [{title: "Other", dest: "/other"}],
    },
];

const Library1 = () => <h1>Library 1</h1>;
const Library2 = () => <h1>Library 2</h1>;

function App() {
    const [header, setHeader] = useState("");

    const onMenuSelect = (title) => {
        setHeader(title);
    };

    return (
        <>
            <CSSReset/>
            <Layout>
                <Header>{header}</Header>
                <Sidebar>
                    <Link to="/" onClick={() => setHeader("")}>
                        <Logo/>
                    </Link>
                    {navigation.map((navItem, index) => (
                        <Menu
                            key={index}
                            title={navItem.menuTitle}
                            items={navItem.menuItems}
                            onSelect={onMenuSelect}
                        />
                    ))}
                </Sidebar>
                <Main>
                    <Switch>
                        <Route path="/" exact
                               render={() => <h1>Hi, this is a simple page that show use cases of React libraries
                                   implementation.</h1>}/>
                        <Route path="/chartkick" component={Chartkick}/>
                        <Route path="/draftjs" component={Draftjs}/>
                        <Route path="/paypal" component={Paypal}/>
                        <Route path="/stripe" component={Stripe}/>
                        <Route render={() => <h1>Page not found</h1>}/>
                    </Switch>
                </Main>
                <Footer>Nombre Apellido | www.tupagina.com</Footer>
            </Layout>
        </>
    );
}

export default App;
