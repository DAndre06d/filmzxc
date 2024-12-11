import { Route, Routes } from "react-router-dom";

import {
    Movies,
    MovieInformation,
    ActorsPage,
    Profile,
    MainLayout,
    Page404,
} from "./pages";
import useStyles from "./components/styles";
function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Movies />} />
                    <Route path="movies/:id" element={<MovieInformation />} />
                    <Route path="actors/:id" element={<ActorsPage />} />
                    <Route path="profile/:id" element={<Profile />} />
                </Route>
                <Route path="*" element={<Page404 />}></Route>
            </Routes>
        </div>
    );
}

export default App;
