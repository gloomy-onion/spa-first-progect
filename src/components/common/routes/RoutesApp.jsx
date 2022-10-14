import {Route} from 'react-router-dom';
import React from 'react';

export const RoutesApp = (props) => {
    const {exact, path, element} = props;
    return (
            <Route
                exact={exact}
                path={path}
                element={element}
            />
    );
};
