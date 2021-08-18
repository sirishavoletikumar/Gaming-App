import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import About from './About'
import Blog from './Blog'
import App from './App'
import Body from './Body'
import Blogredux from './Blogredux'

function Layout(){
    return(
        <div>
         <Header/>
          <Switch>
              <Route exact path="/" component={App}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/blog/:name" component={Blog}></Route>
              <Route path="/body/:id" component={Body}></Route>
              <Route path="/blogredux/:name" component={Blogredux}></Route>
          </Switch>
        </div>
    )
}
export default Layout