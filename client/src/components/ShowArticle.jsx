import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import NavbarFeatures from './NavbarFeatures'
import Home from './Home.jsx'

class ShowArticle extends Component {
  render() {
    return (
      <div>
        <NavbarFeatures />


        <div class="row mb-5">
          <div class="col-md-12">
            <div class="card card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/forest2.jpg)'}}>
              <div class="text-white text-center rgba-stylish-strong py-5 px-4">
                <div class="py-5">

                    <h6 class="orange-text font-bold"><i class="fa fa-camera-retro"></i> Photography</h6>
                    <h2 class="card-title pt-3 mb-5 font-bold">Jumbotron with image overlay</h2>
                    <p class="px-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
                        fugiat, laboriosam, voluptatem, optio vero odio nam sit officia
                        accusamus minus error nisi architecto nulla ipsum dignissimos.
                        Odit sed qui, dolorum!</p>
                    <a class="btn peach-gradient"><i class="fa fa-clone left"></i> View project</a>

                </div>
              </div>
            </div>
          </div>
        </div>




        <div class="white-text d-block d-md-flex">

          <div class="p-3 red lighten-1 w-100">

            <h2 class="pb-3">Disagree</h2>
            <p>Comment content</p>
            <p>Comment content</p>
            <p>Comment content</p>
            <p>Comment content</p>


          </div>

          <div class="p-3 blue lighten-1 w-100">

            <h2 class="pb-3">Article title</h2>
            <p>Section Content</p>


          </div>

          <div class="p-3 purple lighten-1 w-100">

            <h2 class="pb-3">Agree</h2>
            <p>Comment content</p>
            <p>Comment content</p>
            <p>Comment content</p>

          </div>

        </div>
      </div>
    );
  }
}

export default ShowArticle;
