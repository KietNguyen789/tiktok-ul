// public route
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';
import Search from '~/pages/Search';
import { Component } from 'react';
import { HeaderOnly } from '~/layouts';
import config from '~/config';
import Signin from '~/pages/Signin';

const publicRoutes = [
    { path: config.routes.home, Component: Home },
    { path: config.routes.following, Component: Following },
    { path: config.routes.profile, Component: Profile },
    { path: config.routes.upload, Component: Upload, layout: HeaderOnly },
    { path: config.routes.search, Component: Search, layout: null },
    { path: config.routes.live, Component: Live },
    { path: config.routes.signin, Component: Signin, layout: null },
];

const privateRoutes = [];
export { privateRoutes, publicRoutes };
